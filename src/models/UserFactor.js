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
const VerifyFactorRequest = require('./VerifyFactorRequest');

/**
 * @class UserFactor
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { dateTime } created
 * @property { FactorType } factorType
 * @property { string } id
 * @property { dateTime } lastUpdated
 * @property { FactorProvider } provider
 * @property { FactorStatus } status
 * @property { VerifyFactorRequest } verify
 */
class UserFactor extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.verify) {
      this.verify = new VerifyFactorRequest(resourceJson.verify);
    }
  }

  /**
   * @param {string} userId
   */
  delete(userId) {
    return this.httpClient.deleteFactor(userId, this.id);
  }

  /**
   * @param {string} userId
   * @param {ActivateFactorRequest} activateFactorRequest
   * @returns {Promise<UserFactor>}
   */
  activate(userId, activateFactorRequest) {
    return this.httpClient.activateFactor(userId, this.id, activateFactorRequest);
  }

  /**
   * @param {string} userId
   * @param {VerifyFactorRequest} verifyFactorRequest
   * @param {object} queryParameters
   * @returns {Promise<VerifyUserFactorResponse>}
   */
  verify(userId, verifyFactorRequest, queryParameters) {
    return this.httpClient.verifyFactor(userId, this.id, verifyFactorRequest, queryParameters);
  }
}

module.exports = UserFactor;
