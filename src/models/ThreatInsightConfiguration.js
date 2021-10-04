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
 * @class ThreatInsightConfiguration
 * @extends Resource
 * @property { hash } _links
 * @property { string } action
 * @property { dateTime } created
 * @property { array } excludeZones
 * @property { dateTime } lastUpdated
 */
class ThreatInsightConfiguration extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson._links) {
      this._links = resourceJson._links;
    }
    if (resourceJson && resourceJson.action) {
      this.action = resourceJson.action;
    }
    if (resourceJson && resourceJson.created) {
      this.created = resourceJson.created;
    }
    if (resourceJson && resourceJson.excludeZones) {
      this.excludeZones = resourceJson.excludeZones;
    }
    if (resourceJson && resourceJson.lastUpdated) {
      this.lastUpdated = resourceJson.lastUpdated;
    }
  }

  /**
   * @returns {Promise<ThreatInsightConfiguration>}
   */
  update() {
    return this.httpClient.updateConfiguration(this);
  }
}

module.exports = ThreatInsightConfiguration;
