const { DefaultRequestExecutor, Client } = require('../../src');
const { ConfigLoader } = require('../../src/config-loader');

describe('okta.Client', () => {
  describe('constructor', () => {
    beforeEach(() => {
      jest.spyOn(ConfigLoader.prototype, 'applyDefaults').mockReturnValue(null);
    });
    it('aggregates multiple errors into a single exception', () => {
      const fn = function () {
        return new Client();
      };
      const expectedErrors = [
        'Okta Org URL not provided',
        'Okta API token not provided',
        'Unknown Authorization Mode'
      ];
      expect(fn).toThrowError(`Found ${expectedErrors.length} errors:\n`);
      expectedErrors.forEach(err => {
        expect(fn).toThrowError(`${err}\n`);
      });
      expect(fn).toThrowError('See https://github.com/okta/okta-sdk-nodejs for usage.');
    });
    it('throws if no orgUrl', () => {
      const fn = function () {
        return new Client();
      };
      expect(fn).toThrowError('Okta Org URL not provided');
    });
    it('throws if no token', () => {
      const fn = function () {
        return new Client({
          orgUrl: 'https://fakey.local'
        });
      };
      expect(fn).toThrowError('Okta API token not provided');
    });
    it('throws if unknown authorizationMode', () => {
      const fn = function () {
        return new Client({
          orgUrl: 'https://fakey.local',
          token: 'abc',
          authorizationMode: 'unknown'
        });
      };
      expect(fn).toThrowError('Unknown Authorization Mode');
    });
    describe('authorizationMode: PrivateKey', () => {
      it('throws if no clientId', () => {
        const fn = function () {
          return new Client({
            orgUrl: 'https://fakey.local',
            token: 'abc',
            authorizationMode: 'PrivateKey'
          });
        };
        expect(fn).toThrowError('Okta Client ID not provided');
      });
      it('throws if no scopes', () => {
        const fn = function () {
          return new Client({
            orgUrl: 'https://fakey.local',
            token: 'abc',
            authorizationMode: 'PrivateKey',
            clientId: 'abc'
          });
        };
        expect(fn).toThrowError('Scopes not provided');
      });
      it('throws if no privateKey', () => {
        const fn = function () {
          return new Client({
            orgUrl: 'https://fakey.local',
            token: 'abc',
            authorizationMode: 'PrivateKey',
            clientId: 'abc',
            scopes: 'a b c'
          });
        };
        expect(fn).toThrowError('Private Key not provided');
      });
      it('Constructs an OAuth client and passes it to http', () => {
        const client = new Client({
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
        const client = new Client({
          orgUrl: 'https://fakey.local',
          token: 'fake-token',
          authorizationMode: 'SSWS',
        });
        expect(client.http.defaultHeaders.Authorization).toBe('SSWS fake-token');
      });
    });
  });

  it('should use the DefaultRequestExecutor by default', () => {
    const client = new Client({
      orgUrl: 'https://fakey.local',
      token: 'fake-token',
      authorizationMode: 'SSWS',
    });
    expect(client.requestExecutor).toBeInstanceOf(DefaultRequestExecutor);
  });
  it('should let me pass an alternate request executor', () => {
    const client = new Client({
      orgUrl: 'https://fakey.local',
      token: 'fake-token',
      authorizationMode: 'SSWS',
      requestExecutor: new DefaultRequestExecutor()
    });
    expect(client.requestExecutor).toBeInstanceOf(DefaultRequestExecutor);
  });
});
