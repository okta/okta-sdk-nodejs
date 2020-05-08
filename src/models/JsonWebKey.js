/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');


/**
 * @class JsonWebKey
 * @extends Resource
 * @property { hash } _links
 * @property { string } alg
 * @property { dateTime } created
 * @property { string } e
 * @property { string } expiresAt
 * @property { array } key_ops
 * @property { string } kid
 * @property { string } kty
 * @property { dateTime } lastUpdated
 * @property { string } n
 * @property { string } status
 * @property { string } use
 * @property { array } x5c
 * @property { string } x5t
 * @property { string } x5t#S256
 * @property { string } x5u
 */
class JsonWebKey extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

}

module.exports = JsonWebKey;
