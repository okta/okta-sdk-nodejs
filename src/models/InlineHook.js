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
const InlineHookChannel = require('./InlineHookChannel');

/**
 * @class InlineHook
 * @extends Resource
 * @property { hash } _links
 * @property { InlineHookChannel } channel
 * @property { dateTime } created
 * @property { string } id
 * @property { dateTime } lastUpdated
 * @property { string } name
 * @property { InlineHookStatus } status
 * @property { InlineHookType } type
 * @property { string } version
 */
class InlineHook extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.channel) {
      this.channel = new InlineHookChannel(resourceJson.channel);
    }
  }

  /**
   * @returns {Promise<InlineHook>}
   */
  update() {
    return this.httpClient.updateInlineHook(this.id, this);
  }
  delete() {
    return this.httpClient.deleteInlineHook(this.id);
  }

  /**
   * @returns {Promise<InlineHook>}
   */
  activate() {
    return this.httpClient.activateInlineHook(this.id);
  }

  /**
   * @returns {Promise<InlineHook>}
   */
  deactivate() {
    return this.httpClient.deactivateInlineHook(this.id);
  }

  /**
   * @param {InlineHookPayload} inlineHookPayload
   * @returns {Promise<InlineHookResponse>}
   */
  execute(inlineHookPayload) {
    return this.httpClient.executeInlineHook(this.id, inlineHookPayload);
  }
}

module.exports = InlineHook;
