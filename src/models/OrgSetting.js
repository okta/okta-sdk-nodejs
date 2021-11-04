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
 * @class OrgSetting
 * @extends Resource
 * @property { object } _links
 * @property { string } address1
 * @property { string } address2
 * @property { string } city
 * @property { string } companyName
 * @property { string } country
 * @property { dateTime } created
 * @property { string } endUserSupportHelpURL
 * @property { dateTime } expiresAt
 * @property { string } id
 * @property { dateTime } lastUpdated
 * @property { string } phoneNumber
 * @property { string } postalCode
 * @property { string } state
 * @property { string } status
 * @property { string } subdomain
 * @property { string } supportPhoneNumber
 * @property { string } website
 */
class OrgSetting extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

  /**
   * @returns {Promise<OrgSetting>}
   */
  update() {
    return this.httpClient.updateOrgSetting(this);
  }

  /**
   * @returns {Promise<OrgSetting>}
   */
  partialUpdate() {
    return this.httpClient.partialUpdateOrgSetting(this);
  }

  /**
   * @returns {Collection} A collection that will yield {@link OrgContactTypeObj} instances.
   */
  getContactTypes() {
    return this.httpClient.getOrgContactTypes();
  }

  /**
   * @param {string} contactType
   * @returns {Promise<OrgContactUser>}
   */
  getOrgContactUser(contactType) {
    return this.httpClient.getOrgContactUser(contactType);
  }

  /**
   * @returns {Promise<OrgOktaSupportSettingsObj>}
   */
  getSupportSettings() {
    return this.httpClient.getOrgOktaSupportSettings();
  }

  /**
   * @returns {Promise<OrgOktaCommunicationSetting>}
   */
  communicationSettings() {
    return this.httpClient.getOktaCommunicationSettings();
  }

  /**
   * @returns {Promise<OrgPreferences>}
   */
  orgPreferences() {
    return this.httpClient.getOrgPreferences();
  }

  /**
   * @returns {Promise<OrgPreferences>}
   */
  showFooter() {
    return this.httpClient.showOktaUIFooter();
  }

  /**
   * @returns {Promise<OrgPreferences>}
   */
  hideFooter() {
    return this.httpClient.hideOktaUIFooter();
  }

  /**
   * @param {file} fs.ReadStream
   */
  updateOrgLogo(file) {
    return this.httpClient.updateOrgLogo(file);
  }
}

module.exports = OrgSetting;
