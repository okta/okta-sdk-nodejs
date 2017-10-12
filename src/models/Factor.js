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


/**
 *  THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION
 */

/** @ignore */
var Resource = require('../resource');

/**
 * @class Factor
 * @extends Resource
 */
class Factor extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
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
