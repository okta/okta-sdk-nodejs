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
const SessionIdentityProvider = require('./SessionIdentityProvider');

/**
 * @class Session
 * @extends Resource
 * @property { hash } _links
 * @property { array } amr
 * @property { dateTime } createdAt
 * @property { dateTime } expiresAt
 * @property { string } id
 * @property { SessionIdentityProvider } idp
 * @property { dateTime } lastFactorVerification
 * @property { dateTime } lastPasswordVerification
 * @property { string } login
 * @property { SessionStatus } status
 * @property { string } userId
 */
class Session extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.idp) {
      this.idp = new SessionIdentityProvider(this.idp);
    }
  }

  delete() {
    return this.client.endSession(this.id);
  }
  refresh() {
    return this.client.refreshSession(this.id);
  }
}

module.exports = Session;
