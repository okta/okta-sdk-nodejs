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
        authorizationMode: '',
        orgUrl: '',
        token: '',
        clientId: '',
        scopes: '',
        privateKey: ''
      }
    });
  });
  describe('applyDefaults()', () => {
    let fakeFs, loader, previousUrl, previousToken;

    beforeEach(() => {
      previousUrl = process.env.OKTA_CLIENT_ORGURL;
      previousToken = process.env.OKTA_CLIENT_TOKEN;
      delete process.env.OKTA_CLIENT_ORGURL;
      delete process.env.OKTA_CLIENT_TOKEN;
      loader = new ConfigLoader();
      fakeFs = new FakeFS().bind();
      fakeFs.patch();
    });

    afterEach(() => {
      process.env.OKTA_CLIENT_ORGURL = previousUrl;
      process.env.OKTA_CLIENT_TOKEN = previousToken;
      fakeFs.unpatch();
    });

    it('automatically sets "authorizationMode" to "SSWS"', () => {
      loader.applyDefaults();
      assert.deepEqual(loader.config, {
        client: {
          orgUrl: '',
          token: '',
          authorizationMode: 'SSWS',
          clientId: '',
          scopes: '',
          privateKey: ''
        }
      });
    });

    it('should override defaults with ~/.okta/okta.yaml file', () => {
      fakeFs.file(path.join(os.homedir(), '.okta', 'okta.yaml'), yaml.safeDump({
        okta: {
          client: {
            orgUrl: 'foo',
            authorizationMode: 'PrivateKey'
          }
        }
      }));
      loader.applyDefaults();
      assert.deepEqual(loader.config, {
        client: {
          orgUrl: 'foo',
          token: '',
          authorizationMode: 'PrivateKey',
          clientId: '',
          scopes: '',
          privateKey: ''
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
          authorizationMode: 'SSWS',
          token: '',
          clientId: '',
          scopes: '',
          privateKey: ''
        }
      });
    });

    it('should override property files with environment variables', () => {
      process.env.OKTA_CLIENT_ORGURL = 'barbaz';
      loader.applyDefaults();
      assert.deepEqual(loader.config, {
        client: {
          orgUrl: 'barbaz',
          authorizationMode: 'SSWS',
          token: '',
          clientId: '',
          scopes: '',
          privateKey: ''
        }
      });
    });
  });

  describe('.apply()', () => {
    it('should-deep merge objects, overriding new values and preserving old ones', () => {
      const a = {
        client: {
          orgUrl: 'foo',
          token: 'a',
          authorizationMode: 'SSWS',
          clientId: '',
          scopes: '',
          privateKey: ''
        }
      };
      const b = {
        client: {
          orgUrl: 'bar',
          authorizationMode: 'PrivateKey'
        }
      };
      const expect = {
        client: {
          orgUrl: 'bar',
          token: 'a',
          authorizationMode: 'PrivateKey',
          clientId: '',
          scopes: '',
          privateKey: ''
        }
      };
      var loader = new ConfigLoader();
      loader.apply(a);
      assert.deepEqual(loader.config, a);
      loader.apply(b);
      assert.deepEqual(loader.config, expect);
      loader.apply({});
      assert.deepEqual(loader.config, expect);
    });
    it('Converts arrays to string, using space as separator', () => {
      const a = {
        client: {
          scopes: ['a', 'b', 'c'],
        }
      };
      var loader = new ConfigLoader();
      loader.apply(a);
      assert.strictEqual(loader.config.client.scopes, 'a b c');
    });
    it('Converts objects to string, using space as separator', () => {
      const privateKey = {
        foo: 'bar'
      };
      const a = {
        client: {
          privateKey
        }
      };
      var loader = new ConfigLoader();
      loader.apply(a);
      assert.strictEqual(loader.config.client.privateKey, JSON.stringify(privateKey));
    });
  });
});
