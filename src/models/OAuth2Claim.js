/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const OAuth2ClaimConditions = require('./OAuth2ClaimConditions');

/**
 * @class OAuth2Claim
 * @extends Resource
 * @property { hash } _links
 * @property { boolean } alwaysIncludeInToken
 * @property { string } claimType
 * @property { OAuth2ClaimConditions } conditions
 * @property { string } group_filter_type
 * @property { string } id
 * @property { string } name
 * @property { string } status
 * @property { boolean } system
 * @property { string } value
 * @property { string } valueType
 */
class OAuth2Claim extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.conditions) {
      this.conditions = new OAuth2ClaimConditions(this.conditions);
    }
  }

}

module.exports = OAuth2Claim;
