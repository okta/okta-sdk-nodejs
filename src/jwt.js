const nJwt = require('njwt');
const Rasha = require('rasha');
const DEFAULT_ALG = 'RS256';

function getPemAndJwk(privateKey) {
  let jwk;
  let pem;

  // Accept JWK as an object
  if (typeof privateKey === 'object') {
    jwk = privateKey;
  } else {
    // privateKey is a string, it may be in JWK or PEM format
    try {
      jwk = JSON.parse(privateKey);
    } catch (e) {
      // If JSON parsing fails, assume it is a PEM key
      pem = privateKey;
    }
  }

  if (jwk) {
    return Rasha.export({ jwk }).then(function (pem) {
      // PEM in PKCS1 (traditional) format
      return { pem, jwk };
    });
  } else {
    return Rasha.import({ pem }).then(function (jwk) {
      jwk.alg = jwk.alg || DEFAULT_ALG;
      return { pem, jwk };
    });
  }
}

function makeJwt(client) {
  const now = Math.floor(new Date().getTime() / 1000); // seconds since epoch
  const plus5Minutes = new Date((now + (5 * 60)) * 1000); // Date object

  const claims = {
    aud: `${client.baseUrl}/oauth2/v1/token`,
  };
  return getPemAndJwk(client.privateKey)
    .then(res => {
      const { pem, jwk } = res;
      const alg = jwk.alg || DEFAULT_ALG;
      let jwt = nJwt.create(claims, pem, alg)
        .setIssuedAt(now)
        .setExpiration(plus5Minutes)
        .setIssuer(client.clientId)
        .setSubject(client.clientId);

      // JWT object is returned. It needs to be compacted with jwt.compact() before it can be used
      return jwt;
    });
}

module.exports = {
  makeJwt: makeJwt,
  getPemAndJwk: getPemAndJwk
};
