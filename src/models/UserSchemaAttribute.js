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
const UserSchemaAttributeEnum = require('./UserSchemaAttributeEnum');
const UserSchemaAttributePermission = require('./UserSchemaAttributePermission');
const UserSchemaAttributeMaster = require('./UserSchemaAttributeMaster');
const UserSchemaAttributeItems = require('./UserSchemaAttributeItems');

/**
 * @class UserSchemaAttribute
 * @extends Resource
 * @property { string } title
 * @property { UserSchemaAttributeType } type
 * @property { boolean } required
 * @property { string } mutability
 * @property { UserSchemaAttributeScope } scope
 * @property { array } enum
 * @property { array } oneOf
 * @property { integer } minLength
 * @property { integer } maxLength
 * @property { string } description
 * @property { array } permissions
 * @property { UserSchemaAttributeMaster } master
 * @property { UserSchemaAttributeUnion } union
 * @property { UserSchemaAttributeItems } items
 * @property { string } pattern
 * @property { string } unique
 * @property { string } externalName
 * @property { string } externalNamespace
 */
class UserSchemaAttribute extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.oneOf) {
      this.oneOf = resourceJson.oneOf.map(resourceItem => new UserSchemaAttributeEnum(resourceItem));
    }
    if (resourceJson && resourceJson.permissions) {
      this.permissions = resourceJson.permissions.map(resourceItem => new UserSchemaAttributePermission(resourceItem));
    }
    if (resourceJson && resourceJson.master) {
      this.master = new UserSchemaAttributeMaster(resourceJson.master);
    }
    if (resourceJson && resourceJson.items) {
      this.items = new UserSchemaAttributeItems(resourceJson.items);
    }
  }

}

module.exports = UserSchemaAttribute;
