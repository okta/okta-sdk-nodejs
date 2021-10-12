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
const FeatureStage = require('./FeatureStage');

/**
 * @class Feature
 * @extends Resource
 * @property { hash } _links
 * @property { string } description
 * @property { string } id
 * @property { string } name
 * @property { FeatureStage } stage
 * @property { EnabledStatus } status
 * @property { FeatureType } type
 */
class Feature extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.stage) {
      this.stage = new FeatureStage(resourceJson.stage);
    }
  }


  /**
   * @param {string} lifecycle
   * @param {object} queryParameters
   * @returns {Promise<Feature>}
   */
  updateLifecycle(lifecycle, queryParameters) {
    return this.httpClient.updateFeatureLifecycle(this.id, lifecycle, queryParameters);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link Feature} instances.
   */
  getDependents() {
    return this.httpClient.listFeatureDependents(this.id);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link Feature} instances.
   */
  getDependencies() {
    return this.httpClient.listFeatureDependencies(this.id);
  }
}

module.exports = Feature;
