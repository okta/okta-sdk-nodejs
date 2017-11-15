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


/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const AppUserCredentials = require('./AppUserCredentials');

/**
 * @class AppUser
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { string } created
 * @property { AppUserCredentials } credentials
 * @property { string } externalId
 * @property { string } id
 * @property { string } lastSync
 * @property { string } lastUpdated
 * @property { string } passwordChanged
 * @property { hash } profile
 * @property { string } scope
 * @property { string } status
 * @property { string } statusChanged
 * @property { string } syncState
 */
class AppUser extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.credentials) {
      this.credentials = new AppUserCredentials(this.credentials);
    }
  }

}

module.exports = AppUser;
