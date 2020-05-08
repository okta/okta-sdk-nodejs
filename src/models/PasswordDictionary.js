/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PasswordDictionaryCommon = require('./PasswordDictionaryCommon');

/**
 * @class PasswordDictionary
 * @extends Resource
 * @property { PasswordDictionaryCommon } common
 */
class PasswordDictionary extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.common) {
      this.common = new PasswordDictionaryCommon(this.common);
    }
  }

}

module.exports = PasswordDictionary;
