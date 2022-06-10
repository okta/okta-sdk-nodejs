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
exports.UserTypeApi = exports.UserFactorApi = exports.UserApi = exports.TrustedOriginApi = exports.ThreatInsightApi = exports.TemplateApi = exports.SystemLogApi = exports.SubscriptionApi = exports.SessionApi = exports.SchemaApi = exports.ProfileMappingApi = exports.PrincipalRateLimitApi = exports.PolicyApi = exports.OrgSettingApi = exports.NetworkZoneApi = exports.LinkedObjectApi = exports.InlineHookApi = exports.IdentityProviderApi = exports.GroupApi = exports.FeatureApi = exports.EventHookApi = exports.DomainApi = exports.CustomizationApi = exports.CAPTCHAApi = exports.BehaviorApi = exports.AuthorizationServerApi = exports.AuthenticatorApi = exports.ApplicationApi = exports.ApiTokenApi = exports.AgentPoolsApi = exports.createConfiguration = void 0;
__exportStar(require('./http/http'), exports);
__exportStar(require('./auth/auth'), exports);
__exportStar(require('./models/all'), exports);
var configuration_1 = require('./configuration');
Object.defineProperty(exports, 'createConfiguration', { enumerable: true, get: function () {
  return configuration_1.createConfiguration;
} });
__exportStar(require('./apis/exception'), exports);
__exportStar(require('./servers'), exports);
var PromiseAPI_1 = require('./types/PromiseAPI');
Object.defineProperty(exports, 'AgentPoolsApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseAgentPoolsApi;
} });
Object.defineProperty(exports, 'ApiTokenApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseApiTokenApi;
} });
Object.defineProperty(exports, 'ApplicationApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseApplicationApi;
} });
Object.defineProperty(exports, 'AuthenticatorApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseAuthenticatorApi;
} });
Object.defineProperty(exports, 'AuthorizationServerApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseAuthorizationServerApi;
} });
Object.defineProperty(exports, 'BehaviorApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseBehaviorApi;
} });
Object.defineProperty(exports, 'CAPTCHAApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseCAPTCHAApi;
} });
Object.defineProperty(exports, 'CustomizationApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseCustomizationApi;
} });
Object.defineProperty(exports, 'DomainApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseDomainApi;
} });
Object.defineProperty(exports, 'EventHookApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseEventHookApi;
} });
Object.defineProperty(exports, 'FeatureApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseFeatureApi;
} });
Object.defineProperty(exports, 'GroupApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseGroupApi;
} });
Object.defineProperty(exports, 'IdentityProviderApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseIdentityProviderApi;
} });
Object.defineProperty(exports, 'InlineHookApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseInlineHookApi;
} });
Object.defineProperty(exports, 'LinkedObjectApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseLinkedObjectApi;
} });
Object.defineProperty(exports, 'NetworkZoneApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseNetworkZoneApi;
} });
Object.defineProperty(exports, 'OrgSettingApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseOrgSettingApi;
} });
Object.defineProperty(exports, 'PolicyApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromisePolicyApi;
} });
Object.defineProperty(exports, 'PrincipalRateLimitApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromisePrincipalRateLimitApi;
} });
Object.defineProperty(exports, 'ProfileMappingApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseProfileMappingApi;
} });
Object.defineProperty(exports, 'SchemaApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseSchemaApi;
} });
Object.defineProperty(exports, 'SessionApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseSessionApi;
} });
Object.defineProperty(exports, 'SubscriptionApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseSubscriptionApi;
} });
Object.defineProperty(exports, 'SystemLogApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseSystemLogApi;
} });
Object.defineProperty(exports, 'TemplateApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseTemplateApi;
} });
Object.defineProperty(exports, 'ThreatInsightApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseThreatInsightApi;
} });
Object.defineProperty(exports, 'TrustedOriginApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseTrustedOriginApi;
} });
Object.defineProperty(exports, 'UserApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseUserApi;
} });
Object.defineProperty(exports, 'UserFactorApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseUserFactorApi;
} });
Object.defineProperty(exports, 'UserTypeApi', { enumerable: true, get: function () {
  return PromiseAPI_1.PromiseUserTypeApi;
} });
