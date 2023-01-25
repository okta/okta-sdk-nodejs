/*!
 * Copyright (c) 2017-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


const nJwt = require('njwt');
const Rasha = require('rasha');
const Eckles = require('eckles');
const DEFAULT_RSA_ALG = 'RS256';
const DEFAULT_EC_ALG = 'ES256';

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
    let keyParsingLib;
    let defaultAlgo;
    const options = {};
    if (jwk.kty === 'EC') {
      keyParsingLib = Eckles;
      defaultAlgo = DEFAULT_EC_ALG;
      options.format = 'pkcs8';
    } else if (jwk.kty === 'RSA') {
      keyParsingLib = Rasha;
      defaultAlgo = DEFAULT_RSA_ALG;
    } else {
      return Promise.reject(new Error(`Key type ${jwk.kty} is not supported.`));
    }
    return keyParsingLib.export({ jwk, ...options }).then(function (pem) {
      // PEM in PKCS1 (traditional) format for RSA keys and PKCS8 for EC keys
      jwk.alg = jwk.alg || defaultAlgo;
      return { pem, jwk };
    });
  } else {
    return Rasha.import({ pem }).then(function (jwk) {
      jwk.alg = jwk.alg || DEFAULT_RSA_ALG;
      return { pem, jwk };
    }).catch(function (rsaError) {
      return Eckles.import({ pem }).then(function (jwk) {
        jwk.alg = jwk.alg || DEFAULT_EC_ALG;
        return { pem, jwk };
      }).catch(function (ecError) {
        throw new Error(`Unable to convert private key from PEM to JWK: ${rsaError.message}, ${ecError.message}`);
      });
    });
  }
}

function makeJwt(client, endpoint) {
  const now = Math.floor(new Date().getTime() / 1000); // seconds since epoch
  const plus5Minutes = new Date((now + (5 * 60)) * 1000); // Date object

  const claims = {
    aud: `${client.baseUrl}${endpoint}`,
  };
  return getPemAndJwk(client.privateKey)
    .then(res => {
      const { pem, jwk } = res;
      const alg = jwk.alg;
      let jwt = nJwt.create(claims, pem, alg)
        .setIssuedAt(now)
        .setExpiration(plus5Minutes)
        .setIssuer(client.clientId)
        .setSubject(client.clientId);
      const kid = jwk.kid || client.keyId;
      if (kid) {
        jwt = jwt.setHeader('kid', kid);
      }
      // JWT object is returned. It needs to be compacted with jwt.compact() before it can be used
      return jwt;
    });
}

module.exports = {
  makeJwt: makeJwt,
  getPemAndJwk: getPemAndJwk
};
