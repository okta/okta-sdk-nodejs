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


/**
 * @class UserType
 * @extends Resource
 * @property { hash } _links
 * @property { dateTime } created
 * @property { string } createdBy
 * @property { boolean } default
 * @property { string } description
 * @property { string } displayName
 * @property { string } id
 * @property { dateTime } lastUpdated
 * @property { string } lastUpdatedBy
 * @property { string } name
 */
class UserType extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson._links) {
      this._links = resourceJson._links;
    }
    if (resourceJson && resourceJson.created) {
      this.created = resourceJson.created;
    }
    if (resourceJson && resourceJson.createdBy) {
      this.createdBy = resourceJson.createdBy;
    }
    if (resourceJson && resourceJson.default) {
      this.default = resourceJson.default;
    }
    if (resourceJson && resourceJson.description) {
      this.description = resourceJson.description;
    }
    if (resourceJson && resourceJson.displayName) {
      this.displayName = resourceJson.displayName;
    }
    if (resourceJson && resourceJson.id) {
      this.id = resourceJson.id;
    }
    if (resourceJson && resourceJson.lastUpdated) {
      this.lastUpdated = resourceJson.lastUpdated;
    }
    if (resourceJson && resourceJson.lastUpdatedBy) {
      this.lastUpdatedBy = resourceJson.lastUpdatedBy;
    }
    if (resourceJson && resourceJson.name) {
      this.name = resourceJson.name;
    }
  }

  /**
   * @returns {Promise<UserType>}
   */
  update() {
    return this.httpClient.updateUserType(this.id, this);
  }
  delete() {
    return this.httpClient.deleteUserType(this.id);
  }

  /**
   * @param {string} typeId
   * @returns {Promise<UserType>}
   */
  replaceUserType(typeId) {
    return this.httpClient.replaceUserType(typeId, this);
  }
}

module.exports = UserType;
