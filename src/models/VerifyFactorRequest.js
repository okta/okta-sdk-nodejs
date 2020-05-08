/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');


/**
 * @class VerifyFactorRequest
 * @extends Resource
 * @property { string } activationToken
 * @property { string } answer
 * @property { string } attestation
 * @property { string } clientData
 * @property { string } nextPassCode
 * @property { string } passCode
 * @property { string } registrationData
 * @property { string } stateToken
 */
class VerifyFactorRequest extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

}

module.exports = VerifyFactorRequest;
