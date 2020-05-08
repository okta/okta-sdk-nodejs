/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const LogGeographicalContext = require('./LogGeographicalContext');
const LogUserAgent = require('./LogUserAgent');

/**
 * @class LogClient
 * @extends Resource
 * @property { string } device
 * @property { LogGeographicalContext } geographicalContext
 * @property { string } id
 * @property { string } ipAddress
 * @property { LogUserAgent } userAgent
 * @property { string } zone
 */
class LogClient extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.geographicalContext) {
      this.geographicalContext = new LogGeographicalContext(this.geographicalContext);
    }
    if (resourceJson && resourceJson.userAgent) {
      this.userAgent = new LogUserAgent(this.userAgent);
    }
  }

}

module.exports = LogClient;
