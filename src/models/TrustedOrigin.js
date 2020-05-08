/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');


/**
 * @class TrustedOrigin
 * @extends Resource
 * @property { hash } _links
 * @property { dateTime } created
 * @property { string } createdBy
 * @property { string } id
 * @property { dateTime } lastUpdated
 * @property { string } lastUpdatedBy
 * @property { string } name
 * @property { string } origin
 * @property { array } scopes
 * @property { string } status
 */
class TrustedOrigin extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

  /**
   * @returns {Promise<TrustedOrigin>}
   */
  update() {
    return this.client.updateOrigin(this.id, this);
  }
  delete() {
    return this.client.deleteOrigin(this.id);
  }
}

module.exports = TrustedOrigin;
