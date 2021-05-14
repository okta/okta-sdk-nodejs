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
const GroupProfile = require('./GroupProfile');

/**
 * @class Group
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { dateTime } created
 * @property { string } id
 * @property { dateTime } lastMembershipUpdated
 * @property { dateTime } lastUpdated
 * @property { array } objectClass
 * @property { GroupProfile } profile
 * @property { GroupType } type
 */
class Group extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.profile) {
      this.profile = new GroupProfile(resourceJson.profile);
    }
  }

  /**
   * @returns {Promise<Group>}
   */
  update() {
    return this.httpClient.updateGroup(this.id, this);
  }
  delete() {
    return this.httpClient.deleteGroup(this.id);
  }

  /**
   * @param {string} userId
   */
  removeUser(userId) {
    return this.httpClient.removeUserFromGroup(this.id, userId);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<Collection>} A collection that will yield {@link User} instances.
   */
  listUsers(queryParameters) {
    return this.httpClient.listGroupUsers(this.id, queryParameters);
  }

  /**
   * @param {object} queryParameters
   * @returns {Promise<Collection>} A collection that will yield {@link Application} instances.
   */
  listApplications(queryParameters) {
    return this.httpClient.listAssignedApplicationsForGroup(this.id, queryParameters);
  }

  /**
   * @param {AssignRoleRequest} assignRoleRequest
   * @param {object} queryParameters
   * @returns {Promise<Role>}
   */
  assignRole(assignRoleRequest, queryParameters) {
    return this.httpClient.assignRoleToGroup(this.id, assignRoleRequest, queryParameters);
  }
}

module.exports = Group;
