/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PlatformConditionEvaluatorPlatformOperatingSystem = require('./PlatformConditionEvaluatorPlatformOperatingSystem');

/**
 * @class PlatformConditionEvaluatorPlatform
 * @extends Resource
 * @property { PlatformConditionEvaluatorPlatformOperatingSystem } os
 * @property { string } type
 */
class PlatformConditionEvaluatorPlatform extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.os) {
      this.os = new PlatformConditionEvaluatorPlatformOperatingSystem(this.os);
    }
  }

}

module.exports = PlatformConditionEvaluatorPlatform;
