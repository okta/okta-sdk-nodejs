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
const InlineHookChannelConfigAuthScheme = require('./InlineHookChannelConfigAuthScheme');
const InlineHookChannelConfigHeaders = require('./InlineHookChannelConfigHeaders');

/**
 * @class InlineHookChannelConfig
 * @extends Resource
 * @property { InlineHookChannelConfigAuthScheme } authScheme
 * @property { array } headers
 * @property { string } method
 * @property { string } uri
 */
class InlineHookChannelConfig extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.authScheme) {
      this.authScheme = new InlineHookChannelConfigAuthScheme(resourceJson.authScheme);
    }
    if (resourceJson && resourceJson.headers) {
      this.headers = resourceJson.headers.map(resourceItem => new InlineHookChannelConfigHeaders(resourceItem));
    }
  }

}

module.exports = InlineHookChannelConfig;
