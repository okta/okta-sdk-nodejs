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
const { generateDpopJwt, getHtu } = require('../../src/dpop');
const { JWK } = require('../constants');

const baseUrl = 'https://dev-123456.okta.com';

describe('DPoP htu claim', () => {
  describe('getHtu', () => {
    it('strips query and fragment', () => {
      expect(getHtu(`${baseUrl}/api/v1/users?limit=10&search=a`)).to.equal(`${baseUrl}/api/v1/users`);
      expect(getHtu(`${baseUrl}/api/v1/users#frag`)).to.equal(`${baseUrl}/api/v1/users`);
    });

    it('leaves URLs without percent-encoding unchanged', () => {
      expect(getHtu(`${baseUrl}/api/v1/users/00u1abcd/appLinks`)).to.equal(`${baseUrl}/api/v1/users/00u1abcd/appLinks`);
    });

    it('decodes characters that are valid unencoded in a path segment', () => {
      expect(getHtu(`${baseUrl}/api/v1/users/test%40example.com`)).to.equal(`${baseUrl}/api/v1/users/test@example.com`);
      expect(getHtu(`${baseUrl}/api/v1/users/a%2Bb%40example.com`)).to.equal(`${baseUrl}/api/v1/users/a+b@example.com`);
      expect(getHtu(`${baseUrl}/api/v1/x/%3A%21%24%26%27%28%29%2A%2C%3B%3D`)).to.equal(`${baseUrl}/api/v1/x/:!$&'()*,;=`);
      expect(getHtu(`${baseUrl}/api/v1/x/%41%7e`)).to.equal(`${baseUrl}/api/v1/x/A~`);
    });

    it('keeps encodings that would change the meaning of the path', () => {
      expect(getHtu(`${baseUrl}/api/v1/users/a%2Fb`)).to.equal(`${baseUrl}/api/v1/users/a%2Fb`);
      expect(getHtu(`${baseUrl}/api/v1/users/a%3Fb%23c`)).to.equal(`${baseUrl}/api/v1/users/a%3Fb%23c`);
      expect(getHtu(`${baseUrl}/api/v1/users/100%25`)).to.equal(`${baseUrl}/api/v1/users/100%25`);
      expect(getHtu(`${baseUrl}/api/v1/users/100%2540`)).to.equal(`${baseUrl}/api/v1/users/100%2540`);
    });

    it('keeps encodings of spaces and non-ASCII bytes', () => {
      expect(getHtu(`${baseUrl}/api/v1/users/a%20b`)).to.equal(`${baseUrl}/api/v1/users/a%20b`);
      expect(getHtu(`${baseUrl}/api/v1/users/%C3%BC%40x.com`)).to.equal(`${baseUrl}/api/v1/users/%C3%BC@x.com`);
    });
  });

  it('uses the decoded path in the htu claim of the DPoP proof', async () => {
    const request = { method: 'GET', url: `${baseUrl}/api/v1/users/test%40example.com/appLinks?limit=5` };
    const jwt = await generateDpopJwt(request, { baseUrl, privateKey: { ...JWK } }, 'access-token');
    const payload = JSON.parse(Buffer.from(jwt.split('.')[1], 'base64url').toString());
    expect(payload.htu).to.equal(`${baseUrl}/api/v1/users/test@example.com/appLinks`);
  });
});
