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
exports.GroupSchemaAttribute = void 0;
class GroupSchemaAttribute {
  constructor() {
  }
  static getAttributeTypeMap() {
    return GroupSchemaAttribute.attributeTypeMap;
  }
}
exports.GroupSchemaAttribute = GroupSchemaAttribute;
GroupSchemaAttribute.discriminator = undefined;
GroupSchemaAttribute.attributeTypeMap = [
  {
    'name': 'description',
    'baseName': 'description',
    'type': 'string',
    'format': ''
  },
  {
    'name': '_enum',
    'baseName': 'enum',
    'type': 'Array<GroupSchemaAttributeEnumInner>',
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
  },
  {
    'name': 'format',
    'baseName': 'format',
    'type': 'UserSchemaAttributeFormat',
    'format': ''
  },
  {
    'name': 'items',
    'baseName': 'items',
    'type': 'UserSchemaAttributeItems',
    'format': ''
  },
  {
    'name': 'master',
    'baseName': 'master',
    'type': 'UserSchemaAttributeMaster',
    'format': ''
  },
  {
    'name': 'maxLength',
    'baseName': 'maxLength',
    'type': 'number',
    'format': ''
  },
  {
    'name': 'minLength',
    'baseName': 'minLength',
    'type': 'number',
    'format': ''
  },
  {
    'name': 'mutability',
    'baseName': 'mutability',
    'type': 'UserSchemaAttributeMutabilityString',
    'format': ''
  },
  {
    'name': 'oneOf',
    'baseName': 'oneOf',
    'type': 'Array<UserSchemaAttributeEnum>',
    'format': ''
  },
  {
    'name': 'permissions',
    'baseName': 'permissions',
    'type': 'Array<UserSchemaAttributePermission>',
    'format': ''
  },
  {
    'name': 'required',
    'baseName': 'required',
    'type': 'boolean',
    'format': ''
  },
  {
    'name': 'scope',
    'baseName': 'scope',
    'type': 'UserSchemaAttributeScope',
    'format': ''
  },
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
    'name': 'unique',
    'baseName': 'unique',
    'type': 'boolean',
    'format': ''
  }
];
