const assert = require('chai').assert;
const FakeFS = require('fake-fs');
const os = require('os');
const path = require('path');
const yaml = require('js-yaml');
const ConfigLoader = require('../../src/config-loader');

describe('ConfigLoader', () => {
  it('should have an empty structure by default', () => {
    const loader = new ConfigLoader();
    assert.deepEqual(loader.config, {
      client: {
        orgUrl: '',
        token: ''
      }
    });
  });
  describe('applyDefaults()', () => {
    let fakeFs, loader, previousUrl, previousToken;

    before(() => {
      previousUrl = process.env.OKTA_CLIENT_ORGURL;
      previousToken = process.env.OKTA_CLIENT_TOKEN;
      delete process.env.OKTA_CLIENT_ORGURL;
      delete process.env.OKTA_CLIENT_TOKEN;
      loader = new ConfigLoader();
      fakeFs = new FakeFS().bind();
      fakeFs.patch();
    });

    after(() => {
      process.env.OKTA_CLIENT_ORGURL = previousUrl;
      process.env.OKTA_CLIENT_TOKEN = previousToken;
      fakeFs.unpatch();
    });

    it('should override defaults with ~/.okta/okta.yaml file', () => {
      fakeFs.file(path.join(os.homedir(), '.okta', 'okta.yaml'), yaml.safeDump({
        okta: {
          client: {
            orgUrl: 'foo'
          }
        }
      }));
      loader.applyDefaults();
      assert.deepEqual(loader.config, {
        client: {
          orgUrl: 'foo',
          token: ''
        }
      });
    });

    it('should override ~/.okta/okta.yaml with okta.yaml in the process context', () => {
      fakeFs.file(path.join(process.cwd(), 'okta.yaml'), yaml.safeDump({
        okta: {
          client: {
            orgUrl: 'bar'
          }
        }
      }));
      loader.applyDefaults();
      assert.deepEqual(loader.config, {
        client: {
          orgUrl: 'bar',
          token: ''
        }
      });
    });

    it('should override property files with environment variables', () => {
      process.env.OKTA_CLIENT_ORGURL = 'barbaz';
      loader.applyDefaults();
      assert.deepEqual(loader.config, {
        client: {
          orgUrl: 'barbaz',
          token: ''
        }
      });
    });
  });

  describe('.apply()', () => {
    const a = {
      client: {
        orgUrl: 'foo',
        token: 'a'
      }
    };
    const b = {
      client: {
        orgUrl: 'bar'
      }
    };
    const expect = {
      client: {
        orgUrl: 'bar',
        token: 'a'
      }
    };
    it('should-deep merge objects, overriding new values and preserving old ones', () => {
      var loader = new ConfigLoader();
      loader.apply(a);
      assert.deepEqual(loader.config, a);
      loader.apply(b);
      assert.deepEqual(loader.config, expect);
      loader.apply({});
      assert.deepEqual(loader.config, expect);
    });
  });
});
