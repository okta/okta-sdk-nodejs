/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');


/**
 * @class PasswordCredentialHash
 * @extends Resource
 * @property { PasswordCredentialHashAlgorithm } algorithm
 * @property { string } salt
 * @property { string } saltOrder
 * @property { string } value
 * @property { integer } workerFactor
 */
class PasswordCredentialHash extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

}

module.exports = PasswordCredentialHash;
