/*!
 * Copyright (c) 2017-2018, Okta, Inc. and/or its affiliates. All rights reserved.
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
const ApplicationAccessibility = require('./ApplicationAccessibility');
const ApplicationCredentials = require('./ApplicationCredentials');
const ApplicationLicensing = require('./ApplicationLicensing');
const ApplicationSettings = require('./ApplicationSettings');
const ApplicationVisibility = require('./ApplicationVisibility');

/**
 * @class Application
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { ApplicationAccessibility } accessibility
 * @property { dateTime } created
 * @property { ApplicationCredentials } credentials
 * @property { array } features
 * @property { string } id
 * @property { string } label
 * @property { dateTime } lastUpdated
 * @property { ApplicationLicensing } licensing
 * @property { string } name
 * @property { ApplicationSettings } settings
 * @property { ApplicationSignOnMode } signOnMode
 * @property { string } status
 * @property { ApplicationVisibility } visibility
 */
class Application extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.accessibility) {
      this.accessibility = new ApplicationAccessibility(this.accessibility);
    }
    if (resourceJson && resourceJson.credentials) {
      this.credentials = new ApplicationCredentials(this.credentials);
    }
    if (resourceJson && resourceJson.licensing) {
      this.licensing = new ApplicationLicensing(this.licensing);
    }
    if (resourceJson && resourceJson.settings) {
      this.settings = new ApplicationSettings(this.settings);
    }
    if (resourceJson && resourceJson.visibility) {
      this.visibility = new ApplicationVisibility(this.visibility);
    }
  }

  update() {
    return this.client.updateApplication(this.id, this);
  }
  delete() {
    return this.client.deleteApplication(this.id);
  }
  activate() {
    return this.client.activateApplication(this.id);
  }
  deactivate() {
    return this.client.deactivateApplication(this.id);
  }
  listApplicationUsers(queryParameters) {
    return this.client.listApplicationUsers(this.id, queryParameters);
  }
  assignUserToApplication(appUser) {
    return this.client.assignUserToApplication(this.id, appUser);
  }
  getApplicationUser(userId, queryParameters) {
    return this.client.getApplicationUser(this.id, userId, queryParameters);
  }
  createApplicationGroupAssignment(groupId, applicationGroupAssignment) {
    return this.client.createApplicationGroupAssignment(this.id, groupId, applicationGroupAssignment);
  }
  getApplicationGroupAssignment(groupId, queryParameters) {
    return this.client.getApplicationGroupAssignment(this.id, groupId, queryParameters);
  }
  cloneApplicationKey(keyId, queryParameters) {
    return this.client.cloneApplicationKey(this.id, keyId, queryParameters);
  }
  getApplicationKey(keyId) {
    return this.client.getApplicationKey(this.id, keyId);
  }
  listGroupAssignments(queryParameters) {
    return this.client.listApplicationGroupAssignments(this.id, queryParameters);
  }
  listKeys() {
    return this.client.listApplicationKeys(this.id);
  }
}

module.exports = Application;
