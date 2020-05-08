/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');


/**
 * @class UserType
 * @extends Resource
 * @property { hash } _links
 * @property { dateTime } created
 * @property { string } createdBy
 * @property { boolean } default
 * @property { string } description
 * @property { string } displayName
 * @property { string } id
 * @property { dateTime } lastUpdated
 * @property { string } lastUpdatedBy
 * @property { string } name
 */
class UserType extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

  /**
   * @returns {Promise<UserType>}
   */
  update() {
    return this.client.updateUserType(this.id, this);
  }
  delete() {
    return this.client.deleteUserType(this.id);
  }
}

module.exports = UserType;
