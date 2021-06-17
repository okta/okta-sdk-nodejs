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
const OAuth2ClaimConditions = require('./OAuth2ClaimConditions');

/**
 * @class OAuth2Claim
 * @extends Resource
 * @property { hash } _links
 * @property { boolean } alwaysIncludeInToken
 * @property { string } claimType
 * @property { OAuth2ClaimConditions } conditions
 * @property { string } group_filter_type
 * @property { string } id
 * @property { string } name
 * @property { string } status
 * @property { boolean } system
 * @property { string } value
 * @property { string } valueType
 */
class OAuth2Claim extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.conditions) {
      this.conditions = new OAuth2ClaimConditions(resourceJson.conditions);
    }
  }

}

module.exports = OAuth2Claim;
