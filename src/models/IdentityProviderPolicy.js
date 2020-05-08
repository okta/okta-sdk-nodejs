/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Policy = require('./Policy');
const PolicyAccountLink = require('./PolicyAccountLink');
const Provisioning = require('./Provisioning');
const PolicySubject = require('./PolicySubject');

/**
 * @class IdentityProviderPolicy
 * @extends Policy
 * @property { PolicyAccountLink } accountLink
 * @property { integer } maxClockSkew
 * @property { Provisioning } provisioning
 * @property { PolicySubject } subject
 */
class IdentityProviderPolicy extends Policy {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.accountLink) {
      this.accountLink = new PolicyAccountLink(this.accountLink);
    }
    if (resourceJson && resourceJson.provisioning) {
      this.provisioning = new Provisioning(this.provisioning);
    }
    if (resourceJson && resourceJson.subject) {
      this.subject = new PolicySubject(this.subject);
    }
  }

}

module.exports = IdentityProviderPolicy;
