

const JWT_STRING = 'fake.jwt.string';
const mockJwt = {
  compact: jest.fn().mockReturnValue(JWT_STRING)
};
const JWT = {
  makeJwt: jest.fn().mockImplementation(() => {
    return Promise.resolve(mockJwt);
  })
};
jest.setMock('../../src/jwt', JWT);

const OAuth = require('../../src/oauth');

describe('OAuth', () => {
  let client;
  let oauth;
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
    JWT.makeJwt.mockClear();
    mockJwt.compact.mockClear();
  });
  describe('constructor', () => {
    it('initializes jwt to null', () => {
      expect(oauth.jwt).toBe(null);
    });
  });
  describe('getJwt', () => {
    it('calls "makeJwt"', () => {
      return oauth.getJwt()
        .then(() => {
          expect(JWT.makeJwt).toHaveBeenCalledWith(client);
        });
    });
    it('compacts the JWT', () => {
      return oauth.getJwt()
      .then(jwt => {
        expect(mockJwt.compact).toHaveBeenCalled();
        expect(typeof jwt).toBe('string');
      });
    });
    it('stores the compacted JWT in memory', () => {
      return oauth.getJwt()
        .then(jwt => {
          expect(jwt).toBe(JWT_STRING);
          expect(oauth.jwt).toBe(JWT_STRING);
        });
    });
    it('returns JWT from memory if it exists', () => {
      const jwtStr = 'a.different.jwt';
      oauth.jwt = jwtStr;
      return oauth.getJwt()
      .then(jwt => {
        expect(jwt).toBe(jwtStr);
        expect(oauth.jwt).toBe(jwtStr);
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
      return oauth.getAccessToken()
        .then(() => {
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
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          });
        });
    });
  });
});
