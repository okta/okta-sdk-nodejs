/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const ProvisioningDeprovisionedCondition = require('./ProvisioningDeprovisionedCondition');
const ProvisioningSuspendedCondition = require('./ProvisioningSuspendedCondition');

/**
 * @class ProvisioningConditions
 * @extends Resource
 * @property { ProvisioningDeprovisionedCondition } deprovisioned
 * @property { ProvisioningSuspendedCondition } suspended
 */
class ProvisioningConditions extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.deprovisioned) {
      this.deprovisioned = new ProvisioningDeprovisionedCondition(this.deprovisioned);
    }
    if (resourceJson && resourceJson.suspended) {
      this.suspended = new ProvisioningSuspendedCondition(this.suspended);
    }
  }

}

module.exports = ProvisioningConditions;
