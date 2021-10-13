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


/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const UserSchemaAttributeItems = require('./UserSchemaAttributeItems');
const UserSchemaAttributeMaster = require('./UserSchemaAttributeMaster');
const UserSchemaAttributeEnum = require('./UserSchemaAttributeEnum');
const UserSchemaAttributePermission = require('./UserSchemaAttributePermission');

/**
 * @class GroupSchemaAttribute
 * @extends Resource
 * @property { string } description
 * @property { array } enum
 * @property { string } externalName
 * @property { string } externalNamespace
 * @property { UserSchemaAttributeItems } items
 * @property { UserSchemaAttributeMaster } master
 * @property { integer } maxLength
 * @property { integer } minLength
 * @property { string } mutability
 * @property { array } oneOf
 * @property { array } permissions
 * @property { boolean } required
 * @property { UserSchemaAttributeScope } scope
 * @property { string } title
 * @property { UserSchemaAttributeType } type
 * @property { UserSchemaAttributeUnion } union
 * @property { string } unique
 */
class GroupSchemaAttribute extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.items) {
      this.items = new UserSchemaAttributeItems(resourceJson.items);
    }
    if (resourceJson && resourceJson.master) {
      this.master = new UserSchemaAttributeMaster(resourceJson.master);
    }
    if (resourceJson && resourceJson.oneOf) {
      this.oneOf = resourceJson.oneOf.map(resourceItem => new UserSchemaAttributeEnum(resourceItem));
    }
    if (resourceJson && resourceJson.permissions) {
      this.permissions = resourceJson.permissions.map(resourceItem => new UserSchemaAttributePermission(resourceItem));
    }
  }

}

module.exports = GroupSchemaAttribute;
