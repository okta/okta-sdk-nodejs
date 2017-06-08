/*!
 * Copyright (c) 2017, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


/**
 *  THIS FILE IS AUTO GENERATED - SEE CONTRIBUTOR DOCUMENTATION
 */

var Resource = require('../resource');

/**
 * @class UserGroup
 */
class UserGroup extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
  }

  update() {
    return this.client.updateGroup(this.id, this);
  }
  delete() {
    return this.client.deleteGroup(this.id);
  }
  getUserGroupStats() {
    return this.client.getUserGroupStats(this.id);
  }
  removeUserFromGroup(userId) {
    return this.client.removeUserFromGroup(this.id, userId);
  }
  listUsers(queryParameters) {
    return this.client.listGroupUsers(this.id, queryParameters);
  }
}

module.exports = UserGroup;
