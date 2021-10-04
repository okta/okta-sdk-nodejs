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
const AppUserCredentials = require('./AppUserCredentials');

/**
 * @class AppUser
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { dateTime } created
 * @property { AppUserCredentials } credentials
 * @property { string } externalId
 * @property { string } id
 * @property { dateTime } lastSync
 * @property { dateTime } lastUpdated
 * @property { dateTime } passwordChanged
 * @property { hash } profile
 * @property { string } scope
 * @property { string } status
 * @property { dateTime } statusChanged
 * @property { string } syncState
 */
class AppUser extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson['_embedded']) {
      this['_embedded'] = resourceJson['_embedded'];
    }
    if (resourceJson && resourceJson['_links']) {
      this['_links'] = resourceJson['_links'];
    }
    if (resourceJson && resourceJson['created']) {
      this['created'] = resourceJson['created'];
    }
    if (resourceJson && resourceJson['credentials']) {
      this['credentials'] = new AppUserCredentials(resourceJson[credentials]);
    }
    if (resourceJson && resourceJson['externalId']) {
      this['externalId'] = resourceJson['externalId'];
    }
    if (resourceJson && resourceJson['id']) {
      this['id'] = resourceJson['id'];
    }
    if (resourceJson && resourceJson['lastSync']) {
      this['lastSync'] = resourceJson['lastSync'];
    }
    if (resourceJson && resourceJson['lastUpdated']) {
      this['lastUpdated'] = resourceJson['lastUpdated'];
    }
    if (resourceJson && resourceJson['passwordChanged']) {
      this['passwordChanged'] = resourceJson['passwordChanged'];
    }
    if (resourceJson && resourceJson['profile']) {
      this['profile'] = resourceJson['profile'];
    }
    if (resourceJson && resourceJson['scope']) {
      this['scope'] = resourceJson['scope'];
    }
    if (resourceJson && resourceJson['status']) {
      this['status'] = resourceJson['status'];
    }
    if (resourceJson && resourceJson['statusChanged']) {
      this['statusChanged'] = resourceJson['statusChanged'];
    }
    if (resourceJson && resourceJson['syncState']) {
      this['syncState'] = resourceJson['syncState'];
    }
  }

  /**
   * @param {string} appId
   * @returns {Promise<AppUser>}
   */
  update(appId) {
    return this.httpClient.updateApplicationUser(appId, this.id, this);
  }
  /**
   * @param {string} appId
   * @param {object} queryParameters
   */
  delete(appId, queryParameters) {
    return this.httpClient.deleteApplicationUser(appId, this.id, queryParameters);
  }
}

module.exports = AppUser;
