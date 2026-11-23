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

const { expect } = require('chai');
const jose = require('node-jose');
const { generateDpopJwt } = require('../../src/dpop');
const { PEM, JWK, EC_PEM, EC_JWK } = require('../constants');

const decodeHeader = (jwt) => JSON.parse(Buffer.from(jwt.split('.')[0], 'base64url').toString());

// Signs DPoP proofs with real keys (no stubs) and verifies them with the public key embedded in the header
describe('DPoP key types', () => {
  const request = { method: 'GET', url: 'https://dev-123456.okta.com/api/v1/users' };

  async function generateAndVerify(privateKey) {
    const client = { baseUrl: 'https://dev-123456.okta.com', privateKey };
    const jwt = await generateDpopJwt(request, client, 'access-token');
    const header = decodeHeader(jwt);
    const publicKey = await jose.JWK.asKey(header.jwk);
    await jose.JWS.createVerify(publicKey).verify(jwt);
    return header;
  }

  it('signs with RS256 for an RSA JWK', async () => {
    const header = await generateAndVerify({ ...JWK });
    expect(header.alg).to.equal('RS256');
  });

  it('signs with RS256 for an RSA PEM', async () => {
    const header = await generateAndVerify(PEM);
    expect(header.alg).to.equal('RS256');
  });

  it('signs with ES256 for an EC P-256 JWK', async () => {
    const header = await generateAndVerify({ ...EC_JWK });
    expect(header.alg).to.equal('ES256');
  });

  it('signs with ES256 for an EC P-256 PEM', async () => {
    const header = await generateAndVerify(EC_PEM);
    expect(header.alg).to.equal('ES256');
  });

  it('signs with ES384 for an EC P-384 JWK', async () => {
    const key = await jose.JWK.createKey('EC', 'P-384');
    const header = await generateAndVerify(key.toJSON(true));
    expect(header.alg).to.equal('ES384');
  });

  it('does not include private key material in the header JWK', async () => {
    const rsaHeader = await generateAndVerify({ ...JWK });
    const ecHeader = await generateAndVerify({ ...EC_JWK });
    expect(rsaHeader.jwk).to.not.have.any.keys('d', 'p', 'q', 'dp', 'dq', 'qi');
    expect(ecHeader.jwk).to.not.have.property('d');
  });
});
