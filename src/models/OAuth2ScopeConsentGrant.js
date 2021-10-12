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
const OAuth2Actor = require('./OAuth2Actor');

/**
 * @class OAuth2ScopeConsentGrant
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { string } clientId
 * @property { dateTime } created
 * @property { OAuth2Actor } createdBy
 * @property { string } id
 * @property { string } issuer
 * @property { dateTime } lastUpdated
 * @property { string } scopeId
 * @property { OAuth2ScopeConsentGrantSource } source
 * @property { OAuth2ScopeConsentGrantStatus } status
 * @property { string } userId
 */
class OAuth2ScopeConsentGrant extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.createdBy) {
      this.createdBy = new OAuth2Actor(resourceJson.createdBy);
    }
  }

}

module.exports = OAuth2ScopeConsentGrant;
