const { PassThrough } = require('stream');
const { Request, Response } = require('node-fetch');
const expect = require('chai').expect;

const _ = require('lodash');
const MemoryStore = require('../../src/memory-store');
const middleware = require('../../src/default-cache-middleware');

const DEFAULT_TEST_TIMEOUT = 2000;
const KB_512 = 1024 * 512;

async function next(ctx, body = '{}', headers = {}) {
  const headersMap = new Map(Object.entries(headers));
  headers.forEach = headersMap.forEach.bind(headersMap);
  let used = false;
  ctx.res = ctx.res || {
    async text() {
      if (used) {
        throw new Error('Has already been used');
      }
      used = true;
      return body;
    },
    headers,
    clone() {
      return {
        headers,
        async text() {
          return body;
        }
      };
    }
  };
}

function createStream(dataSize) {
  const stream = new PassThrough();
  stream.write('{ "prop": "');
  for (let numBytes = 0; numBytes < dataSize; ++numBytes) {
    stream.write('x');
  }
  stream.write('"}');
  stream.end();
  return stream;
}

describe('Default cache middleware', function () {
  this.timeout(DEFAULT_TEST_TIMEOUT + 10);
  let globalResponse = global.Response;

  before(() => {
    global.Response = Response;
  });

  after(() => {
    global.Response = globalResponse;
  });

  it('caches GET items with a \'self\' link', async () => {
    const cacheStore = new MemoryStore();
    const ctx = {
      req: {
        method: 'get',
        url: 'http://example.com/item'
      },
      cacheStore
    };
    const body = JSON.stringify(_.set({}, '_links.self.href', 'http://example.com/item'));
    const headers = { test: 'value' };
    const headersStr = JSON.stringify(headers);
    await middleware(ctx, () => next(ctx, body, headers));
    expect(await cacheStore.get(ctx.req.url)).to.equal(`${body}\0${headersStr}`);
    // make sure the middleware doesn't flush the stream
    expect(await ctx.res.text()).to.equal(body);
  });

  it('retrieves values from cache', async () => {
    const cacheStore = new MemoryStore();
    const ctx = {
      req: {
        method: 'get',
        url: 'http://example.com/item'
      },
      cacheStore
    };
    const headers = { test: 'value' };
    const headersStr = JSON.stringify(headers);
    const bodyObj = _.set({}, '_links.self.href', 'http://example.com/item');
    const bodyStr = JSON.stringify(bodyObj);
    await cacheStore.set(ctx.req.url, `${bodyStr}\0${headersStr}`);
    await middleware(ctx, () => next(ctx));
    expect(await ctx.res.json()).to.eql(bodyObj);
    expect(await ctx.res.text()).to.equal(bodyStr);
    expect(ctx.res.headers.forEach).to.not.equal(undefined);
    const cachedHeaders = {};
    ctx.res.headers.forEach((value, name) => {
      cachedHeaders[name] = value;
    });
    expect(cachedHeaders).to.eql(headers);
  });

  it('doesn\'t cache GET items without a \'self\' link', async () => {
    const cacheStore = new MemoryStore();
    const ctx = {
      req: {
        method: 'get',
        uri: 'http://example.com/item'
      },
      cacheStore
    };
    await middleware(ctx, () => next(ctx));
    expect(await cacheStore.get(ctx.req.uri)).to.be.undefined;
  });

  it('doesn\'t cache collections', async () => {
    const cacheStore = new MemoryStore();
    const ctx = {
      req: {
        method: 'get',
        uri: 'http://example.com/collection'
      },
      isCollection: true,
      cacheStore
    };
    await middleware(ctx, () => next(ctx));
    expect(await cacheStore.get(ctx.req.uri)).to.be.undefined;
  });

  it('removes cache for related resources on non-GET requests', async () => {
    const cacheStore = new MemoryStore();
    const ctx = {
      req: {
        method: 'post',
        uri: 'http://example.com/item'
      },
      resources: [
        'http://example.com/item'
      ],
      cacheStore
    };
    await middleware(ctx, () => next(ctx));
    expect(await cacheStore.get(ctx.req.uri)).to.be.undefined;
  });

  it('fails to clone large response using default stream buffer size (highWaterMark)', async () => {
    try {
      await new Promise((_, reject) => {
        const timeout = setTimeout(function () {
          reject('Default cache middleware failed to cache large response');
        }, DEFAULT_TEST_TIMEOUT);

        const cacheStore = new MemoryStore();
        const req = new Request('https://foo.bar', {});

        const res = new Response(createStream(KB_512));
        const ctx = {
          req,
          res,
          cacheStore,
          resources: [],
        };

        middleware(ctx, () => Promise.resolve({})).then(() => {
          clearTimeout(timeout);
          reject('Timeout exception was not thrown while cloning large response');
        });
      });
    } catch (e) {
      expect(e).to.equal('Default cache middleware failed to cache large response');
    }
  });

  it('is able to clone large response when custom stream buffer size (highWaterMark) is provided', async () => {
    try {
      await new Promise((resolve, reject) => {
        const timeout = setTimeout(function () {
          reject('Default cache middleware failed to cache large response');
        }, DEFAULT_TEST_TIMEOUT);

        const cacheStore = new MemoryStore();
        const req = new Request('https://foo.bar', {});

        const res = new Response(createStream(KB_512));
        const ctx = {
          req,
          res,
          cacheStore,
          resources: [],
          defaultCacheMiddlewareResponseBufferSize: KB_512
        };

        middleware(ctx, () => Promise.resolve({})).then(() => {
          clearTimeout(timeout);

          ctx.res.json().then(response => {
            expect(response.prop).not.to.be.undefined;
            resolve();
          });
        });
      });
    } catch (e) {
      expect(true, 'Default cache middleware failed to cache large response').to.false;
    }
  });
});
