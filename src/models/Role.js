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
 * @class Role
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { RoleAssignmentType } assignmentType
 * @property { dateTime } created
 * @property { string } description
 * @property { string } id
 * @property { string } label
 * @property { dateTime } lastUpdated
 * @property { RoleStatus } status
 * @property { RoleType } type
 */
class Role extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }


  /**
   * @param {string} groupId
   * @param {string} targetGroupId
   */
  addAdminGroupTarget(groupId, targetGroupId) {
    return this.httpClient.addGroupTargetToGroupAdministratorRoleForGroup(groupId, this.id, targetGroupId);
  }

  /**
   * @param {string} groupId
   * @param {string} appName
   * @param {string} applicationId
   */
  addAppInstanceTargetToAdminRole(groupId, appName, applicationId) {
    return this.httpClient.addApplicationInstanceTargetToAppAdminRoleGivenToGroup(groupId, this.id, appName, applicationId);
  }

  /**
   * @param {string} groupId
   * @param {string} appName
   */
  addAppTargetToAdminRole(groupId, appName) {
    return this.httpClient.addApplicationTargetToAdminRoleGivenToGroup(groupId, this.id, appName);
  }

  /**
   * @param {string} userId
   */
  addAllAppsAsTargetToRole(userId) {
    return this.httpClient.addAllAppsAsTargetToRole(userId, this.id);
  }

  /**
   * @param {string} userId
   * @param {string} appName
   * @param {string} applicationId
   */
  addAppTargetToAppAdminRoleForUser(userId, appName, applicationId) {
    return this.httpClient.addApplicationTargetToAppAdminRoleForUser(userId, this.id, appName, applicationId);
  }

  /**
   * @param {string} userId
   * @param {string} appName
   */
  addAppTargetToAdminRoleForUser(userId, appName) {
    return this.httpClient.addApplicationTargetToAdminRoleForUser(userId, this.id, appName);
  }
}

module.exports = Role;
