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
      this.stage = new FeatureStage(this.stage);
    }
  }


  /**
   * @param {string} lifecycle
   * @param {object} queryParameters
   * @returns {Promise<Feature>}
   */
  updateLifecycle(lifecycle, queryParameters) {
    return this.client.updateFeatureLifecycle(this.id, lifecycle, queryParameters);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link Feature} instances.
   */
  getDependents() {
    return this.client.listFeatureDependents(this.id);
  }

  /**
   * @returns {Promise<Collection>} A collection that will yield {@link Feature} instances.
   */
  getDependencies() {
    return this.client.listFeatureDependencies(this.id);
  }
}

module.exports = Feature;
