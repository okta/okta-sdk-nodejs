const expect = require('chai').expect;

const _ = require('lodash');
const MemoryStore = require('../../src/memory-store');
const middleware = require('../../src/default-cache-middleware');

async function next(ctx, body = '{}') {
  let used = false;
  ctx.res = ctx.res || {
    async text() {
      if (used) {
        throw new Error('Has already been used');
      }
      used = true;
      return body;
    },
    clone() {
      return {
        async text() {
          return body;
        }
      };
    }
  };
}

// TODO: use request.url per fetch spec: https://developer.mozilla.org/en-US/docs/Web/API/Request
// https://oktainc.atlassian.net/browse/OKTA-280090

describe('Default cache middleware', () => {
  it('caches GET items with a \'self\' link', async () => {
    const cacheStore = new MemoryStore();
    const ctx = {
      req: {
        method: 'get',
        uri: 'http://example.com/item'
      },
      cacheStore
    };
    const body = JSON.stringify(_.set({}, '_links.self.href', 'http://example.com/item'));
    await middleware(ctx, () => next(ctx, body));
    expect(await cacheStore.get(ctx.req.uri)).to.equal(body);
    // make sure the middleware doesn't flush the stream
    expect(await ctx.res.text()).to.equal(body);
  });

  it('retrieves values from cache', async () => {
    const cacheStore = new MemoryStore();
    const ctx = {
      req: {
        method: 'get',
        uri: 'http://example.com/item'
      },
      cacheStore
    };
    const body = JSON.stringify(_.set({}, '_links.self.href', 'http://example.com/item'));
    await cacheStore.set(ctx.req.uri, body);
    await middleware(ctx, () => next(ctx));
    expect(await ctx.res.text()).to.equal(body);
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
});
