/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PolicyAccountLinkFilterGroups = require('./PolicyAccountLinkFilterGroups');

/**
 * @class PolicyAccountLinkFilter
 * @extends Resource
 * @property { PolicyAccountLinkFilterGroups } groups
 */
class PolicyAccountLinkFilter extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.groups) {
      this.groups = new PolicyAccountLinkFilterGroups(this.groups);
    }
  }

}

module.exports = PolicyAccountLinkFilter;
