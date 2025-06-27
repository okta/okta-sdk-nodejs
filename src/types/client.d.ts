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

import { OAuth } from './oauth';
import { Http } from './http';
import { RequestExecutor } from './request-executor';
import { V2Configuration } from './configuration';
import {
  AuthenticatorApi,
  SchemaApi,
  UserTypeApi,
  InlineHookApi,
  ProfileMappingApi,
  LinkedObjectApi,
  SystemLogApi,
  FeatureApi,
  GroupApi,
  EventHookApi,
  NetworkZoneApi,
  ThreatInsightApi,
  ApplicationApi,
  AuthorizationServerApi,
  TrustedOriginApi,
  UserFactorApi,
  UserApi,
  IdentityProviderApi,
  SessionApi,
  TemplateApi,
  PolicyApi,
  SubscriptionApi,
  AgentPoolsApi,
  ApiTokenApi,
  BehaviorApi,
  PrincipalRateLimitApi,
  PushProviderApi,
  DeviceAssuranceApi,
  CustomDomainApi,
  DeviceApi,
  ApplicationUsersApi,
  UserLifecycleApi,
  RoleBTargetAdminApi,
  ApplicationSSOCredentialKeyApi,
  ApplicationFeaturesApi,
  ApplicationLogosApi,
  ApplicationConnectionsApi,
  ApplicationGroupsApi,
  ApplicationGrantsApi,
  ApplicationTokensApi,
  AuthorizationServerScopesApi,
  AuthorizationServerClaimsApi,
  AuthorizationServerKeysApi,
  AuthorizationServerPoliciesApi,
  AuthorizationServerRulesApi,
  BrandsApi,
  ThemesApi,
  RoleAssignmentAUserApi,
  RoleAssignmentBGroupApi,
  GroupRuleApi,
  IdentityProviderUsersApi,
  IdentityProviderKeysApi,
  IdentityProviderSigningKeysApi,
  OrgSettingGeneralApi,
  OrgSettingContactApi,
  OrgSettingCustomizationApi,
  OrgSettingCommunicationApi,
  OrgSettingSupportApi,
} from './generated';


// Generate consolidated api classes types
// TODO: method renames, eg. createGroup -> addGroup for GroupApi
type NonConstructor<T> = Pick<T, keyof T>;
export declare interface ConsolidatedApplicationApi extends NonConstructor<ApplicationApi>,
  NonConstructor<ApplicationGroupsApi>,
  NonConstructor<ApplicationUsersApi>,
  NonConstructor<ApplicationConnectionsApi>,
  NonConstructor<ApplicationGrantsApi>,
  NonConstructor<ApplicationTokensApi>,
  NonConstructor<ApplicationSSOCredentialKeyApi>,
  NonConstructor<ApplicationFeaturesApi>,
  NonConstructor<ApplicationLogosApi> {
}

export declare interface ConsolidatedAuthorizationServerApi extends NonConstructor<AuthorizationServerApi>,
  NonConstructor<AuthorizationServerScopesApi>,
  NonConstructor<AuthorizationServerClaimsApi>,
  NonConstructor<AuthorizationServerKeysApi>,
  NonConstructor<AuthorizationServerPoliciesApi>,
  NonConstructor<AuthorizationServerRulesApi> {
}

export declare interface CustomizationApi extends NonConstructor<BrandsApi>,
  NonConstructor<ThemesApi> {
}

export declare interface RoleAssignmentApi extends NonConstructor<RoleAssignmentBGroupApi>,
  NonConstructor<RoleAssignmentAUserApi> {
}

export declare interface ConsolidatedGroupApi extends NonConstructor<GroupApi>,
  NonConstructor<GroupRuleApi> {
}

export declare interface ConsolidatedIdentityProviderApi extends NonConstructor<IdentityProviderApi>,
  NonConstructor<IdentityProviderUsersApi>,
  NonConstructor<IdentityProviderKeysApi>,
  NonConstructor<IdentityProviderSigningKeysApi> {
}

export declare interface ConsolidatedUserApi extends NonConstructor<UserApi>,
  NonConstructor<UserLifecycleApi> {
}

export declare interface RoleTargetApi extends NonConstructor<RoleBTargetAdminApi> {
}

export declare interface OrgSettingApi extends NonConstructor<OrgSettingGeneralApi>,
  NonConstructor<OrgSettingContactApi>,
  NonConstructor<OrgSettingCustomizationApi>,
  NonConstructor<OrgSettingCommunicationApi>,
  NonConstructor<OrgSettingSupportApi> {
}


export declare class ApiClient {
  constructor(config?: V2Configuration);

  requestExecutor: RequestExecutor;
  authorizationMode: string;
  baseUrl: string;
  apiToken: string;
  clientId: string;
  scopes: string[];
  privateKey: string;
  keyId: string;
  oauth: OAuth;
  http: Http;

  // consolidated apis
  applicationApi: ConsolidatedApplicationApi;
  authorizationServerApi: ConsolidatedAuthorizationServerApi;
  customizationApi: CustomizationApi;
  roleAssignmentApi: RoleAssignmentApi;
  roleTargetApi: RoleTargetApi;
  groupApi: ConsolidatedGroupApi;
  identityProviderApi: ConsolidatedIdentityProviderApi;
  userApi: ConsolidatedUserApi;
  orgSettingApi: OrgSettingApi;

  userTypeApi: UserTypeApi;
  authenticatorApi: AuthenticatorApi;
  schemaApi: SchemaApi;
  inlineHookApi: InlineHookApi;
  profileMappingApi: ProfileMappingApi;
  linkedObjectApi: LinkedObjectApi;
  systemLogApi: SystemLogApi;
  featureApi: FeatureApi;
  eventHookApi: EventHookApi;
  networkZoneApi: NetworkZoneApi;
  threatInsightApi: ThreatInsightApi;
  trustedOriginApi: TrustedOriginApi;
  userFactorApi: UserFactorApi;
  sessionApi: SessionApi;
  templateApi: TemplateApi;
  policyApi: PolicyApi;
  agentPoolsApi: AgentPoolsApi;
  apiTokenApi: ApiTokenApi;
  behaviorApi: BehaviorApi;
  principalRateLimitApi: PrincipalRateLimitApi;
  subscriptionApi: SubscriptionApi;
  pushProviderApi: PushProviderApi;
  deviceAssuranceApi: DeviceAssuranceApi;
  customDomainApi: CustomDomainApi;
  deviceApi: DeviceApi;

  // applicationUsersApi: ApplicationUsersApi;
  // applicationSSOCredentialKeyApi: ApplicationSSOCredentialKeyApi;
  // applicationFeaturesApi: ApplicationFeaturesApi;
  // applicationLogosApi: ApplicationLogosApi;
  // applicationConnectionsApi: ApplicationConnectionsApi;
  // applicationGroupsApi: ApplicationGroupsApi;
  // applicationGrantsApi: ApplicationGrantsApi;
  // applicationTokensApi: ApplicationTokensApi;
  // authorizationServerScopesApi: AuthorizationServerScopesApi;
  // authorizationServerClaimsApi: AuthorizationServerClaimsApi;
  // authorizationServerKeysApi: AuthorizationServerKeysApi;
  // authorizationServerPoliciesApi: AuthorizationServerPoliciesApi;
  // authorizationServerRulesApi: AuthorizationServerRulesApi;
  // brandsApi: BrandsApi;
  // themesApi: ThemesApi;
  // groupRuleApi: GroupRuleApi;
  // identityProviderUsersApi: IdentityProviderUsersApi,
  // identityProviderKeysApi: IdentityProviderKeysApi,
  // identityProviderSigningKeysApi: IdentityProviderSigningKeysApi,
  // userLifecycleApi: UserLifecycleApi;
  // roleAssignmentAUserApi: RoleAssignmentAUserApi;
  // roleBTargetAdminApi: RoleBTargetAdminApi;
  // orgSettingGeneralApi: OrgSettingGeneralApi;
  // orgSettingContactApi: OrgSettingContactApi;
  // orgSettingCustomizationApi: OrgSettingCustomizationApi;
  // orgSettingCommunicationApi: OrgSettingCommunicationApi;
  // orgSettingSupportApi: OrgSettingSupportApi;
}
