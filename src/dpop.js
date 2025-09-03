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

const jose = require('node-jose');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto').webcrypto;
const {getPemAndJwk} = require('./jwt');

// Generate a new DPoP Proof JWT
async function generateDpopJwt(request , client, accessToken = null, nonce = null) {
    const { jwk } = await getPemAndJwk(client.privateKey);
    const privateKey = await jose.JWK.asKey(jwk);
    const publicJwk = privateKey.toJSON(false);

    const payload = {
        htm: request ? request.method : 'POST',
        htu: request ? request.url : `${client.baseUrl}/oauth2/v1/token`,
        iat: Math.floor(Date.now() / 1000),
        jti: uuidv4(),
    };

    if (nonce) {
        payload.nonce = nonce;
    }

    if (accessToken) {
        const encoder = new TextEncoder();
        const hashBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(accessToken));
        payload.ath = jose.util.base64url.encode(hashBuffer);
    }

    const jwt = await jose.JWS.createSign({
        format: 'compact',
        fields: {
            typ: 'dpop+jwt',
            alg: 'RS256',
            jwk: publicJwk,
        }
    }, privateKey)
    .update(JSON.stringify(payload))
    .final();

    return jwt;
}

module.exports = {
    generateDpopJwt
};