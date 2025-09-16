const JWT_STRING = 'fake.jwt.string';
const FAKE_ACCESS_TOKEN = { access_token: 'fake token' };
const mockJwt = {
  compact: jest.fn().mockReturnValue(JWT_STRING)
};
const JWT = {
  makeJwt: jest.fn().mockImplementation(() => {
    return Promise.resolve(mockJwt);
  })
};
const DPOP = {
  generateDpopJwt: jest.fn().mockImplementation(() => {
    return '';
  })
};
jest.setMock('../../src/dpop', DPOP);
jest.setMock('../../src/jwt', JWT);
const Http = {
  errorFilter: jest.fn().mockImplementation(() => {
    return Promise.resolve({
      json: jest.fn().mockResolvedValue(FAKE_ACCESS_TOKEN)
    });
  })
};
jest.setMock('../../src/http', Http);
const { OAuth } = require('../../src/oauth');

describe('OAuth', () => {
  let client;
  let oauth;
  const endpoint = '/oauth/v1/token';
  beforeEach(() => {
    client = {
      clientId: 'fake-client-id',
      baseUrl: 'http://localhost',
      scopes: ['a', 'b', 'c'],
      requestExecutor: {
        fetch: jest.fn().mockReturnValue(Promise.resolve())
      }
    };
    oauth = new OAuth(client);
    DPOP.generateDpopJwt.mockClear();
    JWT.makeJwt.mockClear();
    mockJwt.compact.mockClear();
  });
  describe('constructor', () => {
    it('initializes accessToken to null', () => {
      expect(oauth.accessToken).toBe(null);
    });
  });
  describe('getJwt', () => {
    it('calls "makeJwt"', () => {
      return oauth.getJwt(endpoint)
        .then(() => {
          expect(JWT.makeJwt).toHaveBeenCalledWith(client, endpoint);
        });
    });
    it('compacts the JWT', () => {
      return oauth.getJwt(endpoint)
        .then(jwt => {
          expect(mockJwt.compact).toHaveBeenCalled();
          expect(typeof jwt).toBe('string');
        });
    });
  });
  describe('getAccessToken', () => {
    it('calls getJwt()', () => {
      jest.spyOn(oauth, 'getJwt');
      return oauth.getAccessToken()
        .then(() => {
          expect(oauth.getJwt).toHaveBeenCalled();
        });
    });
    it('makes a POST request to the token endpoint', () => {
      expect.assertions(3);
      return oauth.getAccessToken()
        .then(accessToken => {
          expect(client.requestExecutor.fetch).toHaveBeenCalledWith({
            url: 'http://localhost/oauth2/v1/token',
            method: 'POST',
            body: [
              'grant_type=client_credentials',
              'scope=a%20b%20c',
              'client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer',
              'client_assertion=fake.jwt.string'
            ].join('&'),
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded',
              DPoP: '',
            }
          });
          expect(accessToken).toEqual(FAKE_ACCESS_TOKEN);
          expect(oauth.accessToken).toEqual(FAKE_ACCESS_TOKEN);
        });
    });
  });
});
