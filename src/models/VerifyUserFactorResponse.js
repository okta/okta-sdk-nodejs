/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');


/**
 * @class VerifyUserFactorResponse
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { string } expiresAt
 * @property { string } factorResult
 * @property { string } factorResultMessage
 */
class VerifyUserFactorResponse extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

}

module.exports = VerifyUserFactorResponse;
