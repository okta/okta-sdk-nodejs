/*!
 * Copyright (c) 2017-2021, Okta, Inc. and/or its affiliates. All rights reserved.
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

import Resource from '../resource';
import Collection from '../collection';
import AppUser from './AppUser';
import ApplicationGroupAssignment from './ApplicationGroupAssignment';
import JsonWebKey from './JsonWebKey';
import CsrMetadata from './CsrMetadata';
import Csr from './Csr';
import OAuth2Token from './OAuth2Token';
import OAuth2ScopeConsentGrant from './OAuth2ScopeConsentGrant';
import ApplicationAccessibility from './ApplicationAccessibility';
import ApplicationCredentials from './ApplicationCredentials';
import ApplicationLicensing from './ApplicationLicensing';
import ApplicationSettings from './ApplicationSettings';
import ApplicationSignOnMode from './ApplicationSignOnMode';
import ApplicationVisibility from './ApplicationVisibility';

declare class Application extends Resource {
  constructor(resourceJson: string, client: any);

  _embedded: {
    [name: string]: unknown;
  };
  _links: {
    [name: string]: unknown;
  };
  accessibility: ApplicationAccessibility;
  created: string;
  credentials: ApplicationCredentials;
  features: [];
  id: string;
  label: string;
  lastUpdated: string;
  licensing: ApplicationLicensing;
  name: string;
  profile: {
    [name: string]: unknown;
  };
  settings: ApplicationSettings;
  signOnMode: ApplicationSignOnMode;
  status: string;
  visibility: ApplicationVisibility;

  update(): Promise<Application>;
  delete(): Promise<undefined>;
  activate(): Promise<undefined>;
  deactivate(): Promise<undefined>;
  listApplicationUsers(queryParameters: { 
    q: string,
    query_scope: string,
    after: string,
    limit: string,
    filter: string,
    expand: string,
  }): Promise<Collection>;
  assignUserToApplication(appUser: AppUser): Promise<AppUser>;
  getApplicationUser(userId: string, queryParameters: { 
    expand: string,
  }): Promise<AppUser>;
  createApplicationGroupAssignment(groupId: string, applicationGroupAssignment: ApplicationGroupAssignment): Promise<ApplicationGroupAssignment>;
  getApplicationGroupAssignment(groupId: string, queryParameters: { 
    expand: string,
  }): Promise<ApplicationGroupAssignment>;
  cloneApplicationKey(keyId: string, queryParameters: { 
    targetAid: string,
  }): Promise<JsonWebKey>;
  getApplicationKey(keyId: string): Promise<JsonWebKey>;
  listGroupAssignments(queryParameters: { 
    q: string,
    after: string,
    limit: string,
    expand: string,
  }): Promise<Collection>;
  listKeys(): Promise<Collection>;
  generateKey(queryParameters: { 
    validityYears: string,
  }): Promise<JsonWebKey>;
  generateCsr(csrMetadata: CsrMetadata): Promise<Csr>;
  getCsr(csrId: string): Promise<Csr>;
  revokeCsr(csrId: string): Promise<undefined>;
  listCsrs(): Promise<Collection>;
  publishCerCert(csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryCerCert(csrId: string, certificate: string): Promise<JsonWebKey>;
  publishDerCert(csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryDerCert(csrId: string, certificate: string): Promise<JsonWebKey>;
  publishBinaryPemCert(csrId: string, certificate: string): Promise<JsonWebKey>;
  listOAuth2Tokens(queryParameters: { 
    expand: string,
    after: string,
    limit: string,
  }): Promise<Collection>;
  revokeOAuth2TokenForApplication(tokenId: string): Promise<undefined>;
  getOAuth2Token(tokenId: string, queryParameters: { 
    expand: string,
  }): Promise<OAuth2Token>;
  revokeOAuth2Tokens(): Promise<undefined>;
  listScopeConsentGrants(queryParameters: { 
    expand: string,
  }): Promise<Collection>;
  grantConsentToScope(oAuth2ScopeConsentGrant: OAuth2ScopeConsentGrant): Promise<OAuth2ScopeConsentGrant>;
  revokeScopeConsentGrant(grantId: string): Promise<undefined>;
  getScopeConsentGrant(grantId: string, queryParameters: { 
    expand: string,
  }): Promise<OAuth2ScopeConsentGrant>;
}

export {
  Application
};
