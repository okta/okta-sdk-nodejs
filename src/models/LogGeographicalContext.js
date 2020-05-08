/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const LogGeolocation = require('./LogGeolocation');

/**
 * @class LogGeographicalContext
 * @extends Resource
 * @property { string } city
 * @property { string } country
 * @property { LogGeolocation } geolocation
 * @property { string } postalCode
 * @property { string } state
 */
class LogGeographicalContext extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.geolocation) {
      this.geolocation = new LogGeolocation(this.geolocation);
    }
  }

}

module.exports = LogGeographicalContext;
