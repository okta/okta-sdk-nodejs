/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PolicyAccountLinkFilter = require('./PolicyAccountLinkFilter');

/**
 * @class PolicyAccountLink
 * @extends Resource
 * @property { string } action
 * @property { PolicyAccountLinkFilter } filter
 */
class PolicyAccountLink extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.filter) {
      this.filter = new PolicyAccountLinkFilter(this.filter);
    }
  }

}

module.exports = PolicyAccountLink;
