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
const EventHookChannel = require('./EventHookChannel');
const EventSubscriptions = require('./EventSubscriptions');

/**
 * @class EventHook
 * @extends Resource
 * @property { hash } _links
 * @property { EventHookChannel } channel
 * @property { dateTime } created
 * @property { string } createdBy
 * @property { EventSubscriptions } events
 * @property { string } id
 * @property { dateTime } lastUpdated
 * @property { string } name
 * @property { string } status
 * @property { string } verificationStatus
 */
class EventHook extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.channel) {
      this.channel = new EventHookChannel(resourceJson.channel);
    }
    if (resourceJson && resourceJson.events) {
      this.events = new EventSubscriptions(resourceJson.events);
    }
  }

  /**
   * @returns {Promise<EventHook>}
   */
  update() {
    return this.httpClient.updateEventHook(this.id, this);
  }
  delete() {
    return this.httpClient.deleteEventHook(this.id);
  }

  /**
   * @returns {Promise<EventHook>}
   */
  activate() {
    return this.httpClient.activateEventHook(this.id);
  }

  /**
   * @returns {Promise<EventHook>}
   */
  deactivate() {
    return this.httpClient.deactivateEventHook(this.id);
  }

  /**
   * @returns {Promise<EventHook>}
   */
  verify() {
    return this.httpClient.verifyEventHook(this.id);
  }
}

module.exports = EventHook;
