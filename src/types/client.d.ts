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
  EventHookApi,
  NetworkZoneApi,
  ThreatInsightApi,
  TrustedOriginApi,
  UserFactorApi,
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

  AttackProtectionApi,
  CAPTCHAApi,
  DeviceAccessApi,
  DeviceIntegrationsApi,
  DevicePostureCheckApi,
  DirectoriesIntegrationApi,
  DisasterRecoveryApi,
  EmailDomainApi,
  EmailServerApi,
  GovernanceBundleApi,
  GroupOwnerApi,
  HookKeyApi,
  IdentitySourceApi,
  LogStreamApi,
  OktaApplicationSettingsApi,
  OktaPersonalSettingsApi,
  OrgCreatorApi,
  PrivilegedResourceApi,
  RateLimitSettingsApi,
  RealmApi,
  RealmAssignmentApi,
  RiskEventApi,
  RiskProviderApi,
  SSFReceiverApi,
  SSFSecurityEventTokenApi,
  SSFTransmitterApi,
  ServiceAccountApi,
  UISchemaApi,
  WebAuthnPreregistrationApi,

  // consolidated apis
  CustomizationApi,
  RoleAssignmentApi,
  RoleTargetApi,
  OrgSettingApi,
  ApplicationApi,
  AuthorizationServerApi,
  GroupApi,
  UserApi,
  IdentityProviderApi,
  ResourceSetApi,
  IntegrationsApi,
  RoleApi,
} from './generated';

export declare class Client {
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
  applicationApi: ApplicationApi;
  authorizationServerApi: AuthorizationServerApi;
  customizationApi: CustomizationApi;
  roleAssignmentApi: RoleAssignmentApi;
  roleTargetApi: RoleTargetApi;
  groupApi: GroupApi;
  identityProviderApi: IdentityProviderApi;
  userApi: UserApi;
  orgSettingApi: OrgSettingApi;
  resourceSetApi: ResourceSetApi;
  integrationsApi: IntegrationsApi;
  roleApi: RoleApi;

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

  attackProtectionApi: AttackProtectionApi;
  captchaApi: CAPTCHAApi;
  deviceAccessApi: DeviceAccessApi;
  deviceIntegrationsApi: DeviceIntegrationsApi;
  devicePostureCheckApi: DevicePostureCheckApi;
  directoriesIntegrationApi: DirectoriesIntegrationApi;
  disasterRecoveryApi: DisasterRecoveryApi;
  emailDomainApi: EmailDomainApi;
  emailServerApi: EmailServerApi;
  governanceBundleApi: GovernanceBundleApi;
  groupOwnerApi: GroupOwnerApi;
  hookKeyApi: HookKeyApi;
  identitySourceApi: IdentitySourceApi;
  logStreamApi: LogStreamApi;
  oktaApplicationSettingsApi: OktaApplicationSettingsApi;
  oktaPersonalSettingsApi: OktaPersonalSettingsApi;
  orgCreatorApi: OrgCreatorApi;
  privilegedResourceApi: PrivilegedResourceApi;
  rateLimitSettingsApi: RateLimitSettingsApi;
  realmApi: RealmApi;
  realmAssignmentApi: RealmAssignmentApi;
  riskEventApi: RiskEventApi;
  riskProviderApi: RiskProviderApi;
  ssfReceiverApi: SSFReceiverApi;
  ssfSecurityEventTokenApi: SSFSecurityEventTokenApi;
  ssfTransmitterApi: SSFTransmitterApi;
  serviceAccountApi: ServiceAccountApi;
  uiSchemaApi: UISchemaApi;
  webAuthnPreregistrationApi: WebAuthnPreregistrationApi;
}
