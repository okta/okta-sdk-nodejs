/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');


/**
 * @class IdentityProviderCredentialsTrust
 * @extends Resource
 * @property { string } audience
 * @property { string } issuer
 * @property { string } kid
 * @property { string } revocation
 * @property { integer } revocationCacheLifetime
 */
class IdentityProviderCredentialsTrust extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

}

module.exports = IdentityProviderCredentialsTrust;
