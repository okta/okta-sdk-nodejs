const nJwt = require('njwt');
const Rasha = require('rasha');
const JWT = require('../../src/jwt');
const { advanceTo } = require('jest-date-mock');
const { PEM, INVALID_PEM, JWK, INVALID_JWK } = require('../constants');

describe('JWT', () => {
  describe('getPemAndJwk', () => {
    function validateResult(res) {
      expect(res.pem).toBe(PEM);
      expect(res.jwk).toEqual(JWK);
    }
    it('can produce a JWK from a PEM', () => {
      const privateKey = PEM;
      return JWT.getPemAndJwk(privateKey)
        .then(res => validateResult(res));
    });
    it('can produce a PEM from a JWK string', () => {
      const privateKey = JSON.stringify(JWK);
      return JWT.getPemAndJwk(privateKey)
        .then(res => validateResult(res));
    });
    it('can produce a PEM from a JWK object', () => {
      const privateKey = JWK;
      return JWT.getPemAndJwk(privateKey)
        .then(res => validateResult(res));
    });
    it('Throws if invalid PEM is passed', () => {
      const privateKey = INVALID_PEM;
      return expect(JWT.getPemAndJwk(privateKey)).rejects.toThrow('not an RSA PKCS#8 public or private key (wrong format)');
    });
    it('Throws if invalid JWK is passed', () => {
      const privateKey = JSON.stringify(INVALID_JWK);
      return expect(JWT.getPemAndJwk(privateKey)).rejects.toThrow('options.jwk.kty must be \'RSA\' for RSA keys');
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
    it('creates a valid JWT using PEM', () => {
      client.privateKey = PEM;
      const endpoint = '/oauth2/v1/token';
      return JWT.makeJwt(client, endpoint)
        .then(jwt => {
          return verifyJWT(jwt, endpoint);
        });
    });
    it('creates a valid JWT using JWK', () => {
      client.privateKey = JWK;
      const endpoint = '/oauth2/v1/token';
      return JWT.makeJwt(client, endpoint)
        .then(jwt => {
          return verifyJWT(jwt, endpoint);
        });
    });
  });
});
