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
 * Type-level tests for the fixDiscriminatedUnions build fix (PR #472).
 *
 * Background: OpenAPI Generator incorrectly emits `'type'?:` (optional) on protocol classes
 * even when the OpenAPI spec marks `type` as required with a single-value enum.
 * The fixDiscriminatedUnions script removes the `?` so TypeScript can use `type` as a
 * discriminant and properly narrow the `IdentityProviderProtocol` union type.
 *
 * These compile-time checks (via tsd) verify that narrowing works for every member of
 * the `IdentityProviderProtocol` discriminated union.
 */

import { expectType } from 'tsd';
import { IdentityProviderProtocol } from '../../src/types/generated/models/IdentityProviderProtocol';
import { ProtocolIdVerification } from '../../src/types/generated/models/ProtocolIdVerification';
import { ProtocolMtls } from '../../src/types/generated/models/ProtocolMtls';
import { ProtocolOAuth } from '../../src/types/generated/models/ProtocolOAuth';
import { ProtocolOidc } from '../../src/types/generated/models/ProtocolOidc';
import { ProtocolSaml } from '../../src/types/generated/models/ProtocolSaml';

// Declare an unresolved IdentityProviderProtocol (the full union type).
declare const protocol: IdentityProviderProtocol;

// After narrowing by protocol.type === 'OIDC', TypeScript must resolve the type to ProtocolOidc.
// This only works when 'type' is a required (non-optional) property on ProtocolOidc.
// If it were still optional ('type'?:), this block would be unreachable and tsd would error.
if (protocol.type === 'OIDC') {
  expectType<ProtocolOidc>(protocol);
}

// After narrowing by 'SAML2', TypeScript must resolve to ProtocolSaml.
if (protocol.type === 'SAML2') {
  expectType<ProtocolSaml>(protocol);
}

// After narrowing by 'OAUTH2', TypeScript must resolve to ProtocolOAuth.
if (protocol.type === 'OAUTH2') {
  expectType<ProtocolOAuth>(protocol);
}

// After narrowing by 'MTLS', TypeScript must resolve to ProtocolMtls.
if (protocol.type === 'MTLS') {
  expectType<ProtocolMtls>(protocol);
}

// After narrowing by 'ID_PROOFING', TypeScript must resolve to ProtocolIdVerification.
if (protocol.type === 'ID_PROOFING') {
  expectType<ProtocolIdVerification>(protocol);
}

// Verify the literal enum types exported by each Protocol class.
declare const oidcProtocol: ProtocolOidc;
expectType<'OIDC'>(oidcProtocol.type);

declare const samlProtocol: ProtocolSaml;
expectType<'SAML2'>(samlProtocol.type);

declare const oauthProtocol: ProtocolOAuth;
expectType<'OAUTH2'>(oauthProtocol.type);

declare const mtlsProtocol: ProtocolMtls;
expectType<'MTLS'>(mtlsProtocol.type);

declare const idvProtocol: ProtocolIdVerification;
expectType<'ID_PROOFING'>(idvProtocol.type);
