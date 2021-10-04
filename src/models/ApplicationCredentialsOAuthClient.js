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
 * @class ApplicationCredentialsOAuthClient
 * @extends Resource
 * @property { boolean } autoKeyRotation
 * @property { string } client_id
 * @property { string } client_secret
 * @property { OAuthEndpointAuthenticationMethod } token_endpoint_auth_method
 */
class ApplicationCredentialsOAuthClient extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.autoKeyRotation) {
      this.autoKeyRotation = resourceJson.autoKeyRotation;
    }
    if (resourceJson && resourceJson.client_id) {
      this.client_id = resourceJson.client_id;
    }
    if (resourceJson && resourceJson.client_secret) {
      this.client_secret = resourceJson.client_secret;
    }
    if (resourceJson && resourceJson.token_endpoint_auth_method) {
      this.token_endpoint_auth_method = resourceJson.token_endpoint_auth_method;
    }
  }

}

module.exports = ApplicationCredentialsOAuthClient;
