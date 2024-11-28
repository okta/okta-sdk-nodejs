const assert = require('chai').assert;
const sinon = require('sinon');
const FakeFS = require('fake-fs');
const os = require('os');
const path = require('path');
const yaml = require('js-yaml');
const { ConfigLoader } = require('../../src/config-loader');

describe('ConfigLoader', () => {
  before(() => {
    delete process.env.OKTA_CLIENT_AUTHORIZATIONMODE;
    delete process.env.OKTA_CLIENT_CLIENTID;
    delete process.env.OKTA_CLIENT_PRIVATEKEY;
    delete process.env.OKTA_CLIENT_TOKEN;
  });

  it('should have an empty structure by default', () => {
    const loader = new ConfigLoader();
    assert.deepEqual(loader.config, {
      client: {
        authorizationMode: '',
        orgUrl: '',
        token: '',
        clientId: '',
        clientSecret: '',
        scopes: '',
        privateKey: '',
        keyId: '',
      }
    });
  });
  describe('applyDefaults()', () => {
    let fakeFs, loader;

    beforeEach(() => {
      loader = new ConfigLoader();
      loader.applyEnvVars = sinon.spy();
      fakeFs = new FakeFS().bind();
      fakeFs.patch();
    });

    afterEach(() => {
      fakeFs.unpatch();
    });

    it('automatically sets "authorizationMode" to "SSWS"', () => {
      fakeFs.file(path.join(os.homedir(), '.okta', 'okta.yaml'), yaml.dump({}));
      fakeFs.file(path.join(process.cwd(), 'okta.yaml'), yaml.dump({}));
      loader.applyDefaults();
      assert.deepEqual(loader.config, {
        client: {
          authorizationMode: 'SSWS',
          orgUrl: '',
          token: '',
          clientId: '',
          clientSecret: '',
          scopes: '',
          privateKey: '',
          keyId: '',
        }
      });
      sinon.assert.calledOnce(loader.applyEnvVars);
    });

    it('should override defaults with ~/.okta/okta.yaml file', () => {
      fakeFs.file(path.join(os.homedir(), '.okta', 'okta.yaml'), yaml.dump({
        okta: {
          client: {
            orgUrl: 'foo',
            authorizationMode: 'PrivateKey'
          }
        }
      }));
      fakeFs.file(path.join(process.cwd(), 'okta.yaml'), yaml.dump({}));
      loader.applyDefaults();
      assert.deepEqual(loader.config, {
        client: {
          orgUrl: 'foo',
          token: '',
          authorizationMode: 'PrivateKey',
          clientId: '',
          clientSecret: '',
          scopes: '',
          privateKey: '',
          keyId: '',
        }
      });
      sinon.assert.calledOnce(loader.applyEnvVars);
    });

    it('should override ~/.okta/okta.yaml with okta.yaml in the process context', () => {
      fakeFs.file(path.join(os.homedir(), '.okta', 'okta.yaml'), yaml.dump({}));
      fakeFs.file(path.join(process.cwd(), 'okta.yaml'), yaml.dump({
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
          clientSecret: '',
          scopes: '',
          privateKey: '',
          keyId: '',
        }
      });
      sinon.assert.calledOnce(loader.applyEnvVars);
    });
  });

  describe('applyEnvVars()', () => {
    const env  = Object.assign({}, process.env);
    let loader;

    beforeEach(() => {
      process.env = {};
      loader = new ConfigLoader();
    });

    afterEach(() => {
      process.env = env;
    });

    it('should override property files with environment variables', () => {
      process.env.OKTA_CLIENT_ORGURL = 'barbaz';
      loader.applyEnvVars();
      assert.deepEqual(loader.config, {
        client: {
          orgUrl: 'barbaz',
          token: '',
          authorizationMode: '',
          clientId: '',
          clientSecret: '',
          scopes: '',
          privateKey: '',
          keyId: '',
        }
      });
      assert.equal(loader.config.client.orgUrl, 'barbaz');
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
          clientSecret: '',
          scopes: '',
          privateKey: '',
          keyId: '',
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
          clientSecret: '',
          scopes: '',
          privateKey: '',
          keyId: '',
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
          privateKey,
        }
      };
      var loader = new ConfigLoader();
      loader.apply(a);
      assert.strictEqual(loader.config.client.privateKey, JSON.stringify(privateKey));
    });
  });
});
