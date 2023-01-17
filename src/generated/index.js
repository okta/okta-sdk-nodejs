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


'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
  if (k2 === undefined) {
    k2 = k;
  }
  Object.defineProperty(o, k2, { enumerable: true, get: function () {
    return m[k];
  } });
}) : (function (o, m, k, k2) {
  if (k2 === undefined) {
    k2 = k;
  }
  o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function (m, exports) {
  for (var p in m) {
    if (p !== 'default' && !Object.prototype.hasOwnProperty.call(exports, p)) {
      __createBinding(exports, m, p);
    }
  }
};
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserTypeApi = exports.UserFactorApi = exports.UserApi = exports.TrustedOriginApi = exports.ThreatInsightApi = exports.TemplateApi = exports.SystemLogApi = exports.SubscriptionApi = exports.SessionApi = exports.SchemaApi = exports.RoleTargetApi = exports.RoleAssignmentApi = exports.RoleApi = exports.RiskProviderApi = exports.RiskEventApi = exports.ResourceSetApi = exports.RateLimitSettingsApi = exports.PushProviderApi = exports.ProfileMappingApi = exports.PrincipalRateLimitApi = exports.PolicyApi = exports.OrgSettingApi = exports.NetworkZoneApi = exports.LogStreamApi = exports.LinkedObjectApi = exports.InlineHookApi = exports.IdentitySourceApi = exports.IdentityProviderApi = exports.HookKeyApi = exports.GroupApi = exports.FeatureApi = exports.EventHookApi = exports.EmailDomainApi = exports.DeviceAssuranceApi = exports.DeviceApi = exports.CustomizationApi = exports.CustomDomainApi = exports.CAPTCHAApi = exports.BehaviorApi = exports.AuthorizationServerApi = exports.AuthenticatorApi = exports.AttackProtectionApi = exports.ApplicationApi = exports.ApiTokenApi = exports.AgentPoolsApi = exports.okta = exports.createConfiguration = void 0;
__exportStar(require('./http/http'), exports);
__exportStar(require('./auth/auth'), exports);
__exportStar(require('./models/all'), exports);
var configuration_1 = require('./configuration');
Object.defineProperty(exports, 'createConfiguration', { enumerable: true, get: function () {
  return configuration_1.createConfiguration;
} });
__exportStar(require('./apis/exception'), exports);
__exportStar(require('./servers'), exports);
exports.okta = require('./');
var ObjectParamAPI_1 = require('./types/ObjectParamAPI');
Object.defineProperty(exports, 'AgentPoolsApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectAgentPoolsApi;
} });
Object.defineProperty(exports, 'ApiTokenApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectApiTokenApi;
} });
Object.defineProperty(exports, 'ApplicationApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectApplicationApi;
} });
Object.defineProperty(exports, 'AttackProtectionApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectAttackProtectionApi;
} });
Object.defineProperty(exports, 'AuthenticatorApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectAuthenticatorApi;
} });
Object.defineProperty(exports, 'AuthorizationServerApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectAuthorizationServerApi;
} });
Object.defineProperty(exports, 'BehaviorApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectBehaviorApi;
} });
Object.defineProperty(exports, 'CAPTCHAApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectCAPTCHAApi;
} });
Object.defineProperty(exports, 'CustomDomainApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectCustomDomainApi;
} });
Object.defineProperty(exports, 'CustomizationApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectCustomizationApi;
} });
Object.defineProperty(exports, 'DeviceApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectDeviceApi;
} });
Object.defineProperty(exports, 'DeviceAssuranceApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectDeviceAssuranceApi;
} });
Object.defineProperty(exports, 'EmailDomainApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectEmailDomainApi;
} });
Object.defineProperty(exports, 'EventHookApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectEventHookApi;
} });
Object.defineProperty(exports, 'FeatureApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectFeatureApi;
} });
Object.defineProperty(exports, 'GroupApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectGroupApi;
} });
Object.defineProperty(exports, 'HookKeyApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectHookKeyApi;
} });
Object.defineProperty(exports, 'IdentityProviderApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectIdentityProviderApi;
} });
Object.defineProperty(exports, 'IdentitySourceApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectIdentitySourceApi;
} });
Object.defineProperty(exports, 'InlineHookApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectInlineHookApi;
} });
Object.defineProperty(exports, 'LinkedObjectApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectLinkedObjectApi;
} });
Object.defineProperty(exports, 'LogStreamApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectLogStreamApi;
} });
Object.defineProperty(exports, 'NetworkZoneApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectNetworkZoneApi;
} });
Object.defineProperty(exports, 'OrgSettingApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectOrgSettingApi;
} });
Object.defineProperty(exports, 'PolicyApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectPolicyApi;
} });
Object.defineProperty(exports, 'PrincipalRateLimitApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectPrincipalRateLimitApi;
} });
Object.defineProperty(exports, 'ProfileMappingApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectProfileMappingApi;
} });
Object.defineProperty(exports, 'PushProviderApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectPushProviderApi;
} });
Object.defineProperty(exports, 'RateLimitSettingsApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectRateLimitSettingsApi;
} });
Object.defineProperty(exports, 'ResourceSetApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectResourceSetApi;
} });
Object.defineProperty(exports, 'RiskEventApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectRiskEventApi;
} });
Object.defineProperty(exports, 'RiskProviderApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectRiskProviderApi;
} });
Object.defineProperty(exports, 'RoleApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectRoleApi;
} });
Object.defineProperty(exports, 'RoleAssignmentApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectRoleAssignmentApi;
} });
Object.defineProperty(exports, 'RoleTargetApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectRoleTargetApi;
} });
Object.defineProperty(exports, 'SchemaApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectSchemaApi;
} });
Object.defineProperty(exports, 'SessionApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectSessionApi;
} });
Object.defineProperty(exports, 'SubscriptionApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectSubscriptionApi;
} });
Object.defineProperty(exports, 'SystemLogApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectSystemLogApi;
} });
Object.defineProperty(exports, 'TemplateApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectTemplateApi;
} });
Object.defineProperty(exports, 'ThreatInsightApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectThreatInsightApi;
} });
Object.defineProperty(exports, 'TrustedOriginApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectTrustedOriginApi;
} });
Object.defineProperty(exports, 'UserApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectUserApi;
} });
Object.defineProperty(exports, 'UserFactorApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectUserFactorApi;
} });
Object.defineProperty(exports, 'UserTypeApi', { enumerable: true, get: function () {
  return ObjectParamAPI_1.ObjectUserTypeApi;
} });
