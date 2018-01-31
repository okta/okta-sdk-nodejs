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
const FactorProfile = require('./FactorProfile');
const VerifyFactorRequest = require('./VerifyFactorRequest');

/**
 * @class Factor
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { string } device
 * @property { string } deviceType
 * @property { FactorType } factorType
 * @property { string } id
 * @property { string } mfaStateTokenId
 * @property { FactorProfile } profile
 * @property { FactorProvider } provider
 * @property { boolean } rechallengeExistingFactor
 * @property { string } sessionId
 * @property { FactorStatus } status
 * @property { string } userId
 * @property { VerifyFactorRequest } verify
 */
class Factor extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.profile) {
      this.profile = new FactorProfile(this.profile);
    }
    if (resourceJson && resourceJson.verify) {
      this.verify = new VerifyFactorRequest(this.verify);
    }
  }

  delete(userId) {
    return this.client.deleteFactor(userId, this.id);
  }
  activate(userId, verifyFactorRequest) {
    return this.client.activateFactor(userId, this.id, verifyFactorRequest);
  }
  verify(userId, verifyFactorRequest, queryParameters) {
    return this.client.verifyFactor(userId, this.id, verifyFactorRequest, queryParameters);
  }
}

module.exports = Factor;
