/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');


/**
 * @class ApplicationGroupAssignment
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { string } id
 * @property { dateTime } lastUpdated
 * @property { integer } priority
 * @property { hash } profile
 */
class ApplicationGroupAssignment extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

  /**
   * @param {string} appId
   */
  delete(appId) {
    return this.client.deleteApplicationGroupAssignment(appId, this.id);
  }
}

module.exports = ApplicationGroupAssignment;
