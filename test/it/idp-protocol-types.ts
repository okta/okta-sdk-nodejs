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

/**
 * Integration tests for the fixDiscriminatedUnions build fix (PR #472).
 *
 * These tests hit the live Okta org to verify that:
 *  1. The `protocol.type` field is present and non-null on IdPs returned from the API.
 *  2. Runtime narrowing via `protocol.type` resolves to the correct protocol-specific properties,
 *     matching the compile-time behaviour enforced by the type test.
 *
 * Run with:
 *   OKTA_CLIENT_ORGURL=https://node-sdk-oie.oktapreview.com/ \
 *   OKTA_CLIENT_TOKEN=<token> \
 *   OKTA_CLIENT_AUTHORIZATIONMODE=SSWS \
 *   TEST_TYPE=it \
 *   npx mocha test/it/idp-protocol-types.ts
 */

import { expect } from 'chai';
import {
  Client,
  DefaultRequestExecutor,
  IdentityProvider,
} from '@okta/okta-sdk-nodejs';
import { ProtocolOidc } from '../../src/types/generated/models/ProtocolOidc';
import { ProtocolOAuth } from '../../src/types/generated/models/ProtocolOAuth';
import getMockGenericOidcIdp = require('./mocks/generic-oidc-idp');
import getMockFacebookIdp = require('./mocks/facebook-idp.js');

const orgUrl = process.env.OKTA_CLIENT_ORGURL;

const client = new Client({
  orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('IdP Protocol - discriminated union type narrowing (PR #472)', () => {
  // --- OIDC IdP ---
  describe('OIDC protocol (ProtocolOidc)', () => {
    let idp: IdentityProvider;

    before(async () => {
      idp = await client.identityProviderApi.createIdentityProvider({
        identityProvider: getMockGenericOidcIdp()
      });
    });

    after(async () => {
      if (idp?.id) {
        await client.identityProviderApi.deleteIdentityProvider({ idpId: idp.id });
      }
    });

    it('should return an IdP with protocol.type === "OIDC"', () => {
      expect(idp.protocol).to.exist;
      expect(idp.protocol!.type).to.equal('OIDC');
    });

    it('should narrow protocol to ProtocolOidc and expose OIDC-specific fields', () => {
      const protocol = idp.protocol!;
      // Runtime narrowing - mirrors compile-time discriminated union narrowing.
      if (protocol.type === 'OIDC') {
        // TypeScript narrows `protocol` to ProtocolOidc here (verified in type test).
        const oidcProtocol = protocol as ProtocolOidc;
        expect(oidcProtocol.type).to.equal('OIDC');
        // issuer and scopes are OIDC-specific fields
        expect(oidcProtocol).to.have.property('issuer');
        expect(oidcProtocol).to.have.property('scopes');
      } else {
        throw new Error(`Expected protocol.type to be "OIDC", got "${protocol.type}"`);
      }
    });

    it('protocol.type should be a string (not undefined)', async () => {
      const fetched = await client.identityProviderApi.getIdentityProvider({ idpId: idp.id });
      expect(typeof fetched.protocol!.type).to.equal('string');
    });
  });

  // --- OAUTH2 IdP (Facebook) ---
  describe('OAUTH2 protocol (ProtocolOAuth)', () => {
    let idp: IdentityProvider;

    before(async () => {
      idp = await client.identityProviderApi.createIdentityProvider({
        identityProvider: getMockFacebookIdp()
      });
    });

    after(async () => {
      if (idp?.id) {
        await client.identityProviderApi.deleteIdentityProvider({ idpId: idp.id });
      }
    });

    it('should return an IdP with protocol.type === "OAUTH2"', () => {
      expect(idp.protocol).to.exist;
      expect(idp.protocol!.type).to.equal('OAUTH2');
    });

    it('should narrow protocol to ProtocolOAuth and expose OAuth-specific fields', () => {
      const protocol = idp.protocol!;
      if (protocol.type === 'OAUTH2') {
        const oauthProtocol = protocol as ProtocolOAuth;
        expect(oauthProtocol.type).to.equal('OAUTH2');
        expect(oauthProtocol).to.have.property('endpoints');
        expect(oauthProtocol).to.have.property('scopes');
      } else {
        throw new Error(`Expected protocol.type to be "OAUTH2", got "${protocol.type}"`);
      }
    });

    it('protocol.type should be a string (not undefined)', async () => {
      const fetched = await client.identityProviderApi.getIdentityProvider({ idpId: idp.id });
      expect(typeof fetched.protocol!.type).to.equal('string');
    });
  });

  // --- List: verify all IdPs in the org have a defined protocol.type ---
  describe('listIdentityProviders - all returned IdPs have defined protocol.type', () => {
    it('every IdP in the listing should expose a non-nullish protocol.type', async () => {
      const collection = await client.identityProviderApi.listIdentityProviders({ limit: 50 });
      const undefinedTypeIdps: string[] = [];

      await collection.each((idp: IdentityProvider) => {
        if (idp.protocol && idp.protocol.type == null) {
          undefinedTypeIdps.push(idp.id!);
        }
      });

      expect(
        undefinedTypeIdps,
        `IdPs with undefined protocol.type: ${undefinedTypeIdps.join(', ')}`
      ).to.have.lengthOf(0);
    });
  });
});
