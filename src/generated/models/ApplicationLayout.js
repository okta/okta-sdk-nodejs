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
 * OpenAPI spec version: 5.1.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.ApplicationLayout = void 0;
class ApplicationLayout {
  constructor() {
  }
  static getAttributeTypeMap() {
    return ApplicationLayout.attributeTypeMap;
  }
}
exports.ApplicationLayout = ApplicationLayout;
ApplicationLayout.discriminator = undefined;
ApplicationLayout.attributeTypeMap = [
  {
    'name': 'elements',
    'baseName': 'elements',
    'type': 'Array<{ [key: string]: any; }>',
    'format': ''
  },
  {
    'name': 'label',
    'baseName': 'label',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'options',
    'baseName': 'options',
    'type': '{ [key: string]: any; }',
    'format': ''
  },
  {
    'name': 'rule',
    'baseName': 'rule',
    'type': 'ApplicationLayoutRule',
    'format': ''
  },
  {
    'name': 'scope',
    'baseName': 'scope',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'type',
    'baseName': 'type',
    'type': 'string',
    'format': ''
  }
];
