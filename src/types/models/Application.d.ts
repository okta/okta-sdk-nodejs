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


/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

import { Resource } from '../resource';
import { Client } from '../client';
import { OptionalKnownProperties } from '../optional-known-properties-type';
import { Response } from 'node-fetch';
import { Collection } from '../collection';
import { AppUser } from './AppUser';
import { AppUserOptions } from './AppUser';
import { ApplicationGroupAssignmentOptions } from './ApplicationGroupAssignment';
import { ApplicationGroupAssignment } from './ApplicationGroupAssignment';
import { JsonWebKey } from './JsonWebKey';
import { CsrMetadataOptions } from './CsrMetadata';
import { Csr } from './Csr';
import { OAuth2Token } from './OAuth2Token';
import { OAuth2ScopeConsentGrant } from './OAuth2ScopeConsentGrant';
import { OAuth2ScopeConsentGrantOptions } from './OAuth2ScopeConsentGrant';
import { ApplicationAccessibility } from './ApplicationAccessibility';
import { ApplicationCredentials } from './ApplicationCredentials';
import { ApplicationLicensing } from './ApplicationLicensing';
import { ApplicationSettings } from './ApplicationSettings';
import { ApplicationSignOnMode } from './ApplicationSignOnMode';
import { ApplicationVisibility } from './ApplicationVisibility';

declare class Application extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  readonly _embedded: {[name: string]: unknown};
  readonly _links: {[name: string]: unknown};
  accessibility: ApplicationAccessibility;
  readonly created: string;
  credentials: ApplicationCredentials;
  features: string[];
  readonly id: string;
  label: string;
  readonly lastUpdated: string;
  licensing: ApplicationLicensing;
  readonly name: string;
  profile: {[name: string]: unknown};
  settings: ApplicationSettings;
  signOnMode: ApplicationSignOnMode;
  readonly status: string;
  visibility: ApplicationVisibility;

  update(): Promise<Application>;
  delete(): Promise<Response>;
  activate(): Promise<Response>;
  deactivate(): Promise<Response>;
  listApplicationUsers(queryParameters?: {
    q?: string,
    query_scope?: string,
    after?: string,
    limit?: number,
    filter?: string,
    expand?: string,
  }): Collection<AppUser>;
  assignUserToApplication(appUser: AppUserOptions): Promise<AppUser>;
  getApplicationUser(userId: string, queryParameters?: {
    expand?: string,
  }): Promise<AppUser>;
  createApplicationGroupAssignment(groupId: string, applicationGroupAssignment?: ApplicationGroupAssignmentOptions): Promise<ApplicationGroupAssignment>;
  getApplicationGroupAssignment(groupId: string, queryParameters?: {
    expand?: string,
  }): Promise<ApplicationGroupAssignment>;
  cloneApplicationKey(keyId: string, queryParameters: {
    targetAid: string,
  }): Promise<JsonWebKey>;
  getApplicationKey(keyId: string): Promise<JsonWebKey>;
  listGroupAssignments(queryParameters?: {
    q?: string,
    after?: string,
    limit?: number,
    expand?: string,
  }): Collection<ApplicationGroupAssignment>;
  listKeys(): Collection<JsonWebKey>;
  generateKey(queryParameters?: {
    validityYears?: number,
  }): Promise<JsonWebKey>;
  generateCsr(csrMetadata: CsrMetadataOptions): Promise<Csr>;
  getCsr(csrId: string): Promise<Csr>;
  revokeCsr(csrId: string): Promise<Response>;
  listCsrs(): Collection<Csr>;
  publishCerCert(csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryCerCert(csrId: string, certificate: string): Promise<JsonWebKey>;
  publishDerCert(csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryDerCert(csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryPemCert(csrId: string, certificate: string): Promise<JsonWebKey>;
  listOAuth2Tokens(queryParameters?: {
    expand?: string,
    after?: string,
    limit?: number,
  }): Collection<OAuth2Token>;
  revokeOAuth2TokenForApplication(tokenId: string): Promise<Response>;
  getOAuth2Token(tokenId: string, queryParameters?: {
    expand?: string,
  }): Promise<OAuth2Token>;
  revokeOAuth2Tokens(): Promise<Response>;
  listScopeConsentGrants(queryParameters?: {
    expand?: string,
  }): Collection<OAuth2ScopeConsentGrant>;
  grantConsentToScope(oAuth2ScopeConsentGrant: OAuth2ScopeConsentGrantOptions): Promise<OAuth2ScopeConsentGrant>;
  revokeScopeConsentGrant(grantId: string): Promise<Response>;
  getScopeConsentGrant(grantId: string, queryParameters?: {
    expand?: string,
  }): Promise<OAuth2ScopeConsentGrant>;
}

type ApplicationOptions = OptionalKnownProperties<Application>;

export {
  Application,
  ApplicationOptions
};
