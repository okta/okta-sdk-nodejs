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
const UserSchemaAttributeMaster = require('./UserSchemaAttributeMaster');
const UserSchemaAttributePermission = require('./UserSchemaAttributePermission');

/**
 * @class UserSchemaAttribute
 * @extends Resource
 * @property { string } description
 * @property { UserSchemaAttributeMaster } master
 * @property { integer } maxLength
 * @property { integer } minLength
 * @property { string } mutability
 * @property { array } permissions
 * @property { boolean } required
 * @property { string } scope
 * @property { string } title
 * @property { string } type
 */
class UserSchemaAttribute extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.master) {
      this.master = new UserSchemaAttributeMaster(resourceJson.master);
    }
    if (resourceJson && resourceJson.permissions) {
      this.permissions = resourceJson.permissions.map(resourceItem => new UserSchemaAttributePermission(resourceItem));
    }
  }

}

module.exports = UserSchemaAttribute;
