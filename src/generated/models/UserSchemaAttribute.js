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
 * Okta API
 * Allows customers to easily access the Okta API
 *
 * OpenAPI spec version: 2.10.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserSchemaAttribute = void 0;
class UserSchemaAttribute {
  constructor() {
  }
  static getAttributeTypeMap() {
    return UserSchemaAttribute.attributeTypeMap;
  }
}
exports.UserSchemaAttribute = UserSchemaAttribute;
UserSchemaAttribute.discriminator = undefined;
UserSchemaAttribute.attributeTypeMap = [
  {
    'name': 'title',
    'baseName': 'title',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'type',
    'baseName': 'type',
    'type': 'UserSchemaAttributeType',
    'format': ''
  },
  {
    'name': 'required',
    'baseName': 'required',
    'type': 'boolean',
    'format': ''
  },
  {
    'name': 'mutability',
    'baseName': 'mutability',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'scope',
    'baseName': 'scope',
    'type': 'UserSchemaAttributeScope',
    'format': ''
  },
  {
    'name': '_enum',
    'baseName': 'enum',
    'type': 'Array<string>',
    'format': ''
  },
  {
    'name': 'oneOf',
    'baseName': 'oneOf',
    'type': 'Array<UserSchemaAttributeEnum>',
    'format': ''
  },
  {
    'name': 'minLength',
    'baseName': 'minLength',
    'type': 'number',
    'format': ''
  },
  {
    'name': 'maxLength',
    'baseName': 'maxLength',
    'type': 'number',
    'format': ''
  },
  {
    'name': 'description',
    'baseName': 'description',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'permissions',
    'baseName': 'permissions',
    'type': 'Array<UserSchemaAttributePermission>',
    'format': ''
  },
  {
    'name': 'master',
    'baseName': 'master',
    'type': 'UserSchemaAttributeMaster',
    'format': ''
  },
  {
    'name': 'union',
    'baseName': 'union',
    'type': 'UserSchemaAttributeUnion',
    'format': ''
  },
  {
    'name': 'items',
    'baseName': 'items',
    'type': 'UserSchemaAttributeItems',
    'format': ''
  },
  {
    'name': 'pattern',
    'baseName': 'pattern',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'unique',
    'baseName': 'unique',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'externalName',
    'baseName': 'externalName',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'externalNamespace',
    'baseName': 'externalNamespace',
    'type': 'string',
    'format': ''
  }
];
