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
  // OrgSettingApi,
  ApplicationApi,
  AuthorizationServerApi,
  // CustomizationApi,
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
  // RoleAssignmentApi,
  // RoleTargetApi,
  CustomDomainApi,
  DeviceApi,
  ApplicationUsersApi,
  UserLifecycleApi,
  RoleAssignmentAUserApi,
  RoleBTargetAdminApi,
  ApplicationSSOCredentialKeyApi,
  ApplicationFeaturesApi,
  ApplicationLogosApi,
  ApplicationConnectionsApi,
  ApplicationGroupsApi,
  GroupRuleApi,
  ApplicationGrantsApi,
} from './generated';

// Generate consolidated api classes types
//TODO create helper
// TODO: method renames, eg. createGroup -> addGroup for GroupApi
export declare interface ConsolidatedApplicationApi extends Pick<ApplicationApi, keyof ApplicationApi>,
  Pick<ApplicationGroupsApi, keyof ApplicationGroupsApi>,
  Pick<ApplicationUsersApi, keyof ApplicationUsersApi>,
  Pick<ApplicationConnectionsApi, keyof ApplicationConnectionsApi> {
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

  userTypeApi: UserTypeApi;
  authenticatorApi: AuthenticatorApi;
  schemaApi: SchemaApi;
  inlineHookApi: InlineHookApi;
  profileMappingApi: ProfileMappingApi;
  linkedObjectApi: LinkedObjectApi;
  systemLogApi: SystemLogApi;
  featureApi: FeatureApi;
  groupApi: GroupApi;
  eventHookApi: EventHookApi;
  networkZoneApi: NetworkZoneApi;
  threatInsightApi: ThreatInsightApi;
  // orgSettingApi: OrgSettingApi;
  applicationApi: ConsolidatedApplicationApi;
  authorizationServerApi: AuthorizationServerApi;
  // customizationApi: CustomizationApi;
  trustedOriginApi: TrustedOriginApi;
  userFactorApi: UserFactorApi;
  userApi: UserApi;
  identityProviderApi: IdentityProviderApi;
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
  // roleAssignmentApi: RoleAssignmentApi;
  // roleTargetApi: RoleTargetApi;
  customDomainApi: CustomDomainApi;
  deviceApi: DeviceApi;
  applicationUsersApi: ApplicationUsersApi;
  userLifecycleApi: UserLifecycleApi;
  roleAssignmentAUserApi: RoleAssignmentAUserApi;
  roleBTargetAdminApi: RoleBTargetAdminApi;
  applicationSSOCredentialKeyApi: ApplicationSSOCredentialKeyApi;
  applicationFeaturesApi: ApplicationFeaturesApi;
  applicationLogosApi: ApplicationLogosApi;
  applicationConnectionsApi: ApplicationConnectionsApi;
  applicationGroupsApi: ApplicationGroupsApi;
  groupRuleApi: GroupRuleApi;
  applicationGrantsApi: ApplicationGrantsApi;
}
