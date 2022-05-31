const nJwt = require('njwt');
const Rasha = require('rasha');
const JWT = require('../../src/jwt');
const { advanceTo } = require('jest-date-mock');
const { PEM, EC_PEM, INVALID_PEM, JWK, EC_JWK, UNKWNOWN_KEY_TYPE_JWK, INVALID_RSA_JWK } = require('../constants');

describe('JWT', () => {
  describe('getPemAndJwk', () => {
    function validateResult(res, keyType) {
      if (keyType === 'EC') {
        expect(res.pem).toBe(EC_PEM);
        expect(res.jwk).toEqual(EC_JWK);
      } else {
        expect(res.pem).toBe(PEM);
        expect(res.jwk).toEqual(JWK);
      }
    }
    // eslint-disable-next-line jest/expect-expect
    it('can produce a JWK from a PEM', () => {
      const privateKey = PEM;
      return JWT.getPemAndJwk(privateKey)
        .then(res => validateResult(res));
    });
    // eslint-disable-next-line jest/expect-expect
    it('can produce a PEM from a JWK string', () => {
      const privateKey = JSON.stringify(JWK);
      return JWT.getPemAndJwk(privateKey)
        .then(res => validateResult(res));
    });
    // eslint-disable-next-line jest/expect-expect
    it('can produce a PEM from a JWK object', () => {
      const privateKey = JWK;
      return JWT.getPemAndJwk(privateKey)
        .then(res => validateResult(res));
    });
    it('accepts EC JWKs', () => {
      const privateKey = EC_JWK;
      return JWT.getPemAndJwk(privateKey)
        .then(res => validateResult(res, 'EC'));
    });
    it('accepts EC PEM', () => {
      const privateKey = EC_PEM;
      return JWT.getPemAndJwk(privateKey)
        .then(res => validateResult(res, 'EC'));
    });
    it('Throws if invalid PEM is passed', () => {
      const privateKey = INVALID_PEM;
      return expect(JWT.getPemAndJwk(privateKey)).rejects.toThrow('not an RSA PKCS#8 public or private key (wrong format)');
    });
    it('Throws if JWK with unknown key type is passed', () => {
      const privateKey = JSON.stringify(UNKWNOWN_KEY_TYPE_JWK);
      return expect(JWT.getPemAndJwk(privateKey)).rejects.toThrow('Key type OKP is not supported.');
    });
    it('Throws if invalid JWK is passed', () => {
      const privateKey = JSON.stringify(INVALID_RSA_JWK);
      return expect(JWT.getPemAndJwk(privateKey)).rejects.toThrow('The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object. Received undefined');
    });
  });
  describe('makeJwt', () => {
    let client;
    beforeEach(() => {
      advanceTo(0);
      client = {
        clientId: 'fake-client-id',
        baseUrl: 'http://localhost'
      };
    });
    function verifyJWT(jwt, endpoint) {
      expect(jwt.body).toEqual({
        aud: `http://localhost${endpoint}`,
        exp: 300,
        iat: 0,
        iss: 'fake-client-id',
        jti: expect.any(String),
        sub: 'fake-client-id'
      });
      expect(jwt.header).toEqual({
        alg: 'RS256',
        typ: 'JWT'
      });
      expect(jwt.signingKey).toBe(PEM);
      const compactedJwt = jwt.compact();
      return Rasha.export({ jwk: JWK, 'public': true }).then(function (publicKey) {
        const verifiedJwt = nJwt.verify(compactedJwt, publicKey, 'RS256');
        expect(verifiedJwt.body).toEqual({
          aud: `http://localhost${endpoint}`,
          jti: expect.any(String),
          iat: 0,
          exp: 300,
          iss: 'fake-client-id',
          sub: 'fake-client-id'
        });
        expect(verifiedJwt.header).toEqual({
          alg: 'RS256',
          typ: 'JWT'
        });
      });
    }
    // eslint-disable-next-line jest/expect-expect
    it('creates a valid JWT using PEM', () => {
      client.privateKey = PEM;
      const endpoint = '/oauth2/v1/token';
      return JWT.makeJwt(client, endpoint)
        .then(jwt => {
          return verifyJWT(jwt, endpoint);
        });
    });
    // eslint-disable-next-line jest/expect-expect
    it('creates a valid JWT using JWK', () => {
      client.privateKey = JWK;
      const endpoint = '/oauth2/v1/token';
      return JWT.makeJwt(client, endpoint)
        .then(jwt => {
          return verifyJWT(jwt, endpoint);
        });
    });
    it('sets JWK\'s \'kid\' value into JWT header', () => {
      client.privateKey = {
        ...JWK,
        kid: 'keyId'
      };
      const endpoint = '/oauth2/v1/token';
      return JWT.makeJwt(client, endpoint)
        .then(jwt => {
          return Promise.resolve().then(() => {
            expect(jwt.header).toEqual({
              alg: 'RS256',
              kid: 'keyId',
              typ: 'JWT'
            });
          });
        });
    });

    it('does not set \'kid\' JWT header if \'kid\' was not specified in JWK', () => {
      client.privateKey = JWK;
      const endpoint = '/oauth2/v1/token';
      return JWT.makeJwt(client, endpoint)
        .then(jwt => {
          return Promise.resolve().then(() => {
            expect(jwt.header).toEqual({
              alg: 'RS256',
              typ: 'JWT'
            });
          });
        });
    });
  });
});
