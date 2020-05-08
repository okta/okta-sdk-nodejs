/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const LogGeographicalContext = require('./LogGeographicalContext');

/**
 * @class LogIpAddress
 * @extends Resource
 * @property { LogGeographicalContext } geographicalContext
 * @property { string } ip
 * @property { string } source
 * @property { string } version
 */
class LogIpAddress extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.geographicalContext) {
      this.geographicalContext = new LogGeographicalContext(this.geographicalContext);
    }
  }

}

module.exports = LogIpAddress;
