/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const ProvisioningConditions = require('./ProvisioningConditions');
const ProvisioningGroups = require('./ProvisioningGroups');

/**
 * @class Provisioning
 * @extends Resource
 * @property { string } action
 * @property { ProvisioningConditions } conditions
 * @property { ProvisioningGroups } groups
 * @property { boolean } profileMaster
 */
class Provisioning extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.conditions) {
      this.conditions = new ProvisioningConditions(this.conditions);
    }
    if (resourceJson && resourceJson.groups) {
      this.groups = new ProvisioningGroups(this.groups);
    }
  }

}

module.exports = Provisioning;
