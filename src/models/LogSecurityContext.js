/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');


/**
 * @class LogSecurityContext
 * @extends Resource
 * @property { integer } asNumber
 * @property { string } asOrg
 * @property { string } domain
 * @property { boolean } isProxy
 * @property { string } isp
 */
class LogSecurityContext extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

}

module.exports = LogSecurityContext;
