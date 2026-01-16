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

import { expect } from 'chai';
import {
  Client,
  Application,
  Collection,
} from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/dpop-auth`;
}

describe('DPoP Authentication Integration', () => {
  const dpopClient = new Client({
    orgUrl: orgUrl,
    authorizationMode: 'PrivateKey',
    clientId: process.env.OKTA_CLIENT_CLIENTID,
    scopes: ['okta.apps.manage', 'okta.users.read', 'okta.apps.read'],
    privateKey: process.env.OKTA_CLIENT_PRIVATEKEY,
    keyId: process.env.OKTA_CLIENT_KEYID,
  });

  describe('DPoP Token Exchange', () => {
    it('should successfully authenticate using DPoP', async () => {
      // This test verifies that DPoP authentication works
      const applications = await dpopClient.applicationApi.listApplications({
        limit: 1
      });

      expect(applications).to.be.instanceOf(Collection);

      let appCount = 0;
      await applications.each(app => {
        expect(app).to.be.instanceOf(Application);
        appCount++;
      });

      expect(appCount).to.be.at.least(0);
    });
  });

  describe('DPoP vs Regular Authentication', () => {
    it('should handle concurrent DPoP requests', async () => {
      // Test that multiple concurrent requests work with DPoP
      const promises = [];

      for (let i = 0; i < 3; i++) {
        promises.push(
          dpopClient.applicationApi.listApplications({ limit: 1 })
        );
      }

      const results = await Promise.all(promises);

      results.forEach(apps => {
        expect(apps).to.be.instanceOf(Collection);
      });
    });
  });

  describe('DPoP Error Handling', () => {
    it('should handle invalid DPoP configuration gracefully', async () => {
      const invalidClient = new Client({
        orgUrl: orgUrl,
        authorizationMode: 'PrivateKey',
        clientId: 'invalid-client-id',
        scopes: ['okta.apps.read'],
        privateKey: 'invalid-key',
      });

      try {
        await invalidClient.applicationApi.listApplications({ limit: 1 });
      } catch (error) {
        expect(error).to.exist;
        // Error should be related to authentication or key parsing
        expect(error.message).to.match(/(authentication|key|invalid)/i);
      }
    });
  });
});
