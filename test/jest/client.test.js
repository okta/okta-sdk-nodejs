const okta = require('../../src');
const ConfigLoader = require('../../src/config-loader');

describe('okta.Client', () => {
  describe('constructor', () => {
    beforeEach(() => {
      jest.spyOn(ConfigLoader.prototype, 'applyDefaults').mockReturnValue(null);
    });
    it('throws if no orgUrl', () => {
      const fn = function () {
        return new okta.Client();
      };
      expect(fn).toThrowError('Okta Org URL not provided, see https://github.com/okta/okta-sdk-nodejs for usage.');
    });
    it('throws if no token', () => {
      const fn = function () {
        return new okta.Client({
          orgUrl: 'https://fakey.local'
        });
      };
      expect(fn).toThrowError('Okta API token not provided, see https://github.com/okta/okta-sdk-nodejs for usage.');
    });
    it('throws if unknown authorizationMode', () => {
      const fn = function () {
        return new okta.Client({
          orgUrl: 'https://fakey.local',
          token: 'abc',
          authorizationMode: 'unknown'
        });
      };
      expect(fn).toThrowError('Unknown Authorization Mode, see https://github.com/okta/okta-sdk-nodejs for usage.');
    });
    describe('authorizationMode: PrivateKey', () => {
      it('throws if no clientId', () => {
        const fn = function () {
          return new okta.Client({
            orgUrl: 'https://fakey.local',
            token: 'abc',
            authorizationMode: 'PrivateKey'
          });
        };
        expect(fn).toThrowError('Okta Client ID not provided, see https://github.com/okta/okta-sdk-nodejs for usage.');
      });
      it('throws if no scopes', () => {
        const fn = function () {
          return new okta.Client({
            orgUrl: 'https://fakey.local',
            token: 'abc',
            authorizationMode: 'PrivateKey',
            clientId: 'abc'
          });
        };
        expect(fn).toThrowError('Scopes not provided, see https://github.com/okta/okta-sdk-nodejs for usage.');
      });
      it('throws if no privateKey', () => {
        const fn = function () {
          return new okta.Client({
            orgUrl: 'https://fakey.local',
            token: 'abc',
            authorizationMode: 'PrivateKey',
            clientId: 'abc',
            scopes: 'a b c'
          });
        };
        expect(fn).toThrowError('Private Key not provided, see https://github.com/okta/okta-sdk-nodejs for usage.');
      });
      it('Constructs an OAuth client and passes it to http', () => {
        const client = new okta.Client({
          orgUrl: 'https://fakey.local',
          token: 'abc',
          authorizationMode: 'PrivateKey',
          clientId: 'abc',
          scopes: 'a b c',
          privateKey: 'fake'
        });
        expect(client.oauth).toBeDefined();
        expect(client.oauth.client).toBe(client);
        expect(client.http.oauth).toBe(client.oauth);
      });
    });
    describe('authorizationMode: SSWS', () => {
      it('sets the Authorization header on the http object', () => {
        const client = new okta.Client({
          orgUrl: 'https://fakey.local',
          token: 'fake-token',
          authorizationMode: 'SSWS',
        });
        expect(client.http.defaultHeaders.Authorization).toBe('SSWS fake-token');
      });
    });
  });

  it('should use the DefaultRequestExecutor by default', () => {
    const client = new okta.Client();
    expect(client.requestExecutor).toBeInstanceOf(okta.DefaultRequestExecutor);
  });
  it('should let me pass an alternate request executor', () => {
    const client = new okta.Client({
      requestExecutor: new okta.DefaultRequestExecutor()
    });
    expect(client.requestExecutor).toBeInstanceOf(okta.DefaultRequestExecutor);
  });
});
