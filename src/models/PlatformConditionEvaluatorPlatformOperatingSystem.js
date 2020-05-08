/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PlatformConditionEvaluatorPlatformOperatingSystemVersion = require('./PlatformConditionEvaluatorPlatformOperatingSystemVersion');

/**
 * @class PlatformConditionEvaluatorPlatformOperatingSystem
 * @extends Resource
 * @property { string } expression
 * @property { string } type
 * @property { PlatformConditionEvaluatorPlatformOperatingSystemVersion } version
 */
class PlatformConditionEvaluatorPlatformOperatingSystem extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.version) {
      this.version = new PlatformConditionEvaluatorPlatformOperatingSystemVersion(this.version);
    }
  }

}

module.exports = PlatformConditionEvaluatorPlatformOperatingSystem;
