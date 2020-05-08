/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const LinkedObjectDetails = require('./LinkedObjectDetails');

/**
 * @class LinkedObject
 * @extends Resource
 * @property { hash } _links
 * @property { LinkedObjectDetails } associated
 * @property { LinkedObjectDetails } primary
 */
class LinkedObject extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.associated) {
      this.associated = new LinkedObjectDetails(this.associated);
    }
    if (resourceJson && resourceJson.primary) {
      this.primary = new LinkedObjectDetails(this.primary);
    }
  }

  /**
   * @param {string} linkedObjectName
   */
  delete(linkedObjectName) {
    return this.client.deleteLinkedObjectDefinition(linkedObjectName);
  }
}

module.exports = LinkedObject;
