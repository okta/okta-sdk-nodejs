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
/**
 * Okta Admin Management
 * Allows customers to easily access the Okta Management APIs
 *
 * OpenAPI spec version: 4.0.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.SamlApplicationSettingsSignOn = void 0;
class SamlApplicationSettingsSignOn {
  constructor() {
  }
  static getAttributeTypeMap() {
    return SamlApplicationSettingsSignOn.attributeTypeMap;
  }
}
exports.SamlApplicationSettingsSignOn = SamlApplicationSettingsSignOn;
SamlApplicationSettingsSignOn.discriminator = undefined;
SamlApplicationSettingsSignOn.attributeTypeMap = [
  {
    'name': 'acsEndpoints',
    'baseName': 'acsEndpoints',
    'type': 'Array<AcsEndpoint>',
    'format': ''
  },
  {
    'name': 'allowMultipleAcsEndpoints',
    'baseName': 'allowMultipleAcsEndpoints',
    'type': 'boolean',
    'format': ''
  },
  {
    'name': 'assertionSigned',
    'baseName': 'assertionSigned',
    'type': 'boolean',
    'format': ''
  },
  {
    'name': 'attributeStatements',
    'baseName': 'attributeStatements',
    'type': 'Array<SamlAttributeStatement>',
    'format': ''
  },
  {
    'name': 'audience',
    'baseName': 'audience',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'audienceOverride',
    'baseName': 'audienceOverride',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'authnContextClassRef',
    'baseName': 'authnContextClassRef',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'defaultRelayState',
    'baseName': 'defaultRelayState',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'destination',
    'baseName': 'destination',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'destinationOverride',
    'baseName': 'destinationOverride',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'digestAlgorithm',
    'baseName': 'digestAlgorithm',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'honorForceAuthn',
    'baseName': 'honorForceAuthn',
    'type': 'boolean',
    'format': ''
  },
  {
    'name': 'idpIssuer',
    'baseName': 'idpIssuer',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'inlineHooks',
    'baseName': 'inlineHooks',
    'type': 'Array<SignOnInlineHook>',
    'format': ''
  },
  {
    'name': 'recipient',
    'baseName': 'recipient',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'recipientOverride',
    'baseName': 'recipientOverride',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'requestCompressed',
    'baseName': 'requestCompressed',
    'type': 'boolean',
    'format': ''
  },
  {
    'name': 'responseSigned',
    'baseName': 'responseSigned',
    'type': 'boolean',
    'format': ''
  },
  {
    'name': 'signatureAlgorithm',
    'baseName': 'signatureAlgorithm',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'slo',
    'baseName': 'slo',
    'type': 'SingleLogout',
    'format': ''
  },
  {
    'name': 'spCertificate',
    'baseName': 'spCertificate',
    'type': 'SpCertificate',
    'format': ''
  },
  {
    'name': 'spIssuer',
    'baseName': 'spIssuer',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'ssoAcsUrl',
    'baseName': 'ssoAcsUrl',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'ssoAcsUrlOverride',
    'baseName': 'ssoAcsUrlOverride',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'subjectNameIdFormat',
    'baseName': 'subjectNameIdFormat',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'subjectNameIdTemplate',
    'baseName': 'subjectNameIdTemplate',
    'type': 'string',
    'format': ''
  }
];
