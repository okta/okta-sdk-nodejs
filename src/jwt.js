const njwt = require('njwt');
const Rasha = require('rasha');

function getPemAndJwk(privateKey) {
  // privateKey is a string. It may be a PEM or a JWK
  let jwk;
  let pem;
  try {
    jwk = JSON.parse(privateKey);
  } catch (e) {
    // If JSON parsing fails, assume it is a PEM key
    pem = privateKey;
  }

  if (jwk) {
    return Rasha.export({ jwk }).then(function (pem) {
      // PEM in PKCS1 (traditional) format
      return { pem, jwk };
    });
  } else {
    return Rasha.import({ pem }).then(function (jwk) {
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
      const alg = jwk.alg || 'RS256';
      let jwt = njwt.create(claims, pem, alg)
        .setIssuedAt(now)
        .setExpiration(plus5Minutes)
        .setIssuer(client.clientId)
        .setSubject(client.clientId);

      jwt = jwt.compact();
      return jwt;
    });
}

module.exports = {
  makeJwt: makeJwt,
  getPemAndJwk: getPemAndJwk
};
