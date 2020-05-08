/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');


/**
 * @class ActivateFactorRequest
 * @extends Resource
 * @property { string } attestation
 * @property { string } clientData
 * @property { string } passCode
 * @property { string } registrationData
 * @property { string } stateToken
 */
class ActivateFactorRequest extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

}

module.exports = ActivateFactorRequest;
