const { ServerConfiguration } = require('../../src/generated/servers');

describe('ServerConfiguration', () => {
  describe('getEndpointUrl', () => {
    it('encodes path parameters', () => {
      const server = new ServerConfiguration('https://fakey.local');
      const path = '/api/v1/users/{userId}';
      const vars = {
        userId: 'test#user@okta.com',
      };
      const endpoint = server.getEndpointUrl(path, vars);
      expect(endpoint).toBe('https://fakey.local/api/v1/users/test%23user%40okta.com');
    });
    it('if path parameter value not provided, leave as is', () => {
      const server = new ServerConfiguration('https://fakey.local');
      const path = '/api/v1/users/{userId}';
      const vars = {
      };
      const endpoint = server.getEndpointUrl(path, vars);
      expect(endpoint).toBe('https://fakey.local/api/v1/users/{userId}');
    });
  });

  describe('getUrl', () => {
    it('does not encode parameters in base URL', () => {
      const url = 'https://{domain}';
      const vars = {
        domain: 'my.domain.com:8080',
      };
      const server = new ServerConfiguration(url, vars);
      const baseUrl = server.getUrl();
      expect(baseUrl).toBe('https://my.domain.com:8080');
    });
  });

  describe('getAffectedResources', () => {
    it('encodes path parameters', () => {
      const server = new ServerConfiguration('https://fakey.local');
      const path = '/api/v1/users/{userId}/grants/{grantId}';
      const vars = {
        userId: 'test#user@okta.com',
        grantId: '123?'
      };
      const affectedResources = server.getAffectedResources(path, vars);
      expect(affectedResources).toEqual([
        'https://fakey.local/api/v1/users/test%23user%40okta.com/grants/123%3F',
        'https://fakey.local/api/v1/users/test%23user%40okta.com',
      ]);
    });
  });
});
