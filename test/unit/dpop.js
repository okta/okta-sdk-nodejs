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
const sinon = require('sinon');
const jose = require('node-jose');
const crypto = require('crypto').webcrypto;
const { generateDpopJwt } = require('../../src/dpop');

describe('DPoP', () => {
  let mockClient;
  let mockRequest;
  let mockPrivateKey;
  let mockJwk;
  let getPemAndJwkStub;

  beforeEach(() => {
    // Mock request
    mockRequest = {
      method: 'POST',
      url: 'https://dev-123456.okta.com/api/v1/apps'
    };

    // Mock JWK and private key
    mockJwk = {
      kty: 'RSA',
      kid: 'test-key-id',
      n: 'mock-modulus',
      e: 'AQAB'
    };

    mockPrivateKey = {
      toJSON: sinon.stub().returns(mockJwk)
    };

    // Mock client with a proper PEM-formatted private key (for realistic testing)
    mockClient = {
      baseUrl: 'https://dev-123456.okta.com',
      privateKey: mockJwk
    };

    // Stub getPemAndJwk function BEFORE it can be called
    const jwtModule = require('../../src/jwt');
    getPemAndJwkStub = sinon.stub(jwtModule, 'getPemAndJwk').resolves({ jwk: mockJwk });

    // Stub jose.JWK.asKey
    sinon.stub(jose.JWK, 'asKey').resolves(mockPrivateKey);

    // Stub jose.JWS.createSign
    const mockSign = {
      update: sinon.stub().returnsThis(),
      'final': sinon.stub().resolves('mock.jwt.token')
    };
    sinon.stub(jose.JWS, 'createSign').returns(mockSign);

    // Stub crypto.subtle.digest for access token hash
    sinon.stub(crypto.subtle, 'digest').resolves(new ArrayBuffer(32));

    // Stub jose.util.base64url.encode
    if (!jose.util.base64url.encode.restore) {
      sinon.stub(jose.util.base64url, 'encode').returns('mock-hash');
    }
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('generateDpopJwt', () => {
    it('should generate a valid DPoP JWT for token request', async () => {
      const result = await generateDpopJwt(null, mockClient);

      expect(result).to.equal('mock.jwt.token');
      expect(jose.JWK.asKey.calledWith(mockJwk)).to.be.true;
      expect(jose.JWS.createSign.calledWith({
        format: 'compact',
        fields: {
          typ: 'dpop+jwt',
          alg: 'RS256',
          jwk: mockJwk
        }
      }, mockPrivateKey)).to.be.true;
    });

    it('should generate a valid DPoP JWT for API request', async () => {
      const result = await generateDpopJwt(mockRequest, mockClient);

      expect(result).to.equal('mock.jwt.token');

      // Verify the payload includes correct HTTP method and URL
      const updateCall = jose.JWS.createSign().update.getCall(0);
      const payload = JSON.parse(updateCall.args[0]);

      expect(payload.htm).to.equal('POST');
      expect(payload.htu).to.equal('https://dev-123456.okta.com/api/v1/apps');
      expect(payload.iat).to.be.a('number');
      expect(payload.jti).to.be.a('string');
    });

    it('should include access token hash when access token is provided', async () => {
      const accessToken = 'test-access-token';
      const result = await generateDpopJwt(mockRequest, mockClient, accessToken);

      expect(result).to.equal('mock.jwt.token');
      expect(crypto.subtle.digest.calledWith('SHA-256')).to.be.true;

      const updateCall = jose.JWS.createSign().update.getCall(0);
      const payload = JSON.parse(updateCall.args[0]);
      expect(payload.ath).to.equal('mock-hash');
    });

    it('should include nonce when provided', async () => {
      const nonce = 'test-nonce';
      const result = await generateDpopJwt(mockRequest, mockClient, null, nonce);

      expect(result).to.equal('mock.jwt.token');

      const updateCall = jose.JWS.createSign().update.getCall(0);
      const payload = JSON.parse(updateCall.args[0]);
      expect(payload.nonce).to.equal('test-nonce');
    });

    it('should use default token endpoint when no request is provided', async () => {
      const result = await generateDpopJwt(null, mockClient);

      expect(result).to.equal('mock.jwt.token');

      const updateCall = jose.JWS.createSign().update.getCall(0);
      const payload = JSON.parse(updateCall.args[0]);

      expect(payload.htm).to.equal('POST');
      expect(payload.htu).to.equal('https://dev-123456.okta.com/oauth2/v1/token');
    });

    it('should include all required DPoP claims', async () => {
      const result = await generateDpopJwt(mockRequest, mockClient);

      expect(result).to.equal('mock.jwt.token');

      const updateCall = jose.JWS.createSign().update.getCall(0);
      const payload = JSON.parse(updateCall.args[0]);

      // Required DPoP claims
      expect(payload).to.have.property('htm');
      expect(payload).to.have.property('htu');
      expect(payload).to.have.property('iat');
      expect(payload).to.have.property('jti');

      // Verify types
      expect(payload.htm).to.be.a('string');
      expect(payload.htu).to.be.a('string');
      expect(payload.iat).to.be.a('number');
      expect(payload.jti).to.be.a('string');
    });

    it('should handle errors gracefully', async () => {
      // Restore the stub temporarily to test real error handling
      getPemAndJwkStub.restore();

      // Create a client with an invalid private key
      const invalidClient = {
        baseUrl: 'https://dev-123456.okta.com',
        privateKey: 'invalid-key-format'
      };

      try {
        await generateDpopJwt(mockRequest, invalidClient);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('Unable to convert private key');
        expect(error.message).to.include('PEM to JWK');
      }

      // Re-stub for other tests
      const jwtModule = require('../../src/jwt');
      getPemAndJwkStub = sinon.stub(jwtModule, 'getPemAndJwk').resolves({ jwk: mockJwk });
    });

    it('should handle different HTTP methods', async () => {
      const getRequest = { method: 'GET', url: 'https://dev-123456.okta.com/api/v1/users' };
      const putRequest = { method: 'PUT', url: 'https://dev-123456.okta.com/api/v1/users/123' };
      const deleteRequest = { method: 'DELETE', url: 'https://dev-123456.okta.com/api/v1/users/123' };

      await generateDpopJwt(getRequest, mockClient);
      await generateDpopJwt(putRequest, mockClient);
      await generateDpopJwt(deleteRequest, mockClient);

      const getCalls = jose.JWS.createSign().update.getCalls();

      const getPayload = JSON.parse(getCalls[0].args[0]);
      const putPayload = JSON.parse(getCalls[1].args[0]);
      const deletePayload = JSON.parse(getCalls[2].args[0]);

      expect(getPayload.htm).to.equal('GET');
      expect(putPayload.htm).to.equal('PUT');
      expect(deletePayload.htm).to.equal('DELETE');
    });
  });
});
