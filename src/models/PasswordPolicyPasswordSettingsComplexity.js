/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PasswordDictionary = require('./PasswordDictionary');

/**
 * @class PasswordPolicyPasswordSettingsComplexity
 * @extends Resource
 * @property { PasswordDictionary } dictionary
 * @property { array } excludeAttributes
 * @property { boolean } excludeUsername
 * @property { integer } minLength
 * @property { integer } minLowerCase
 * @property { integer } minNumber
 * @property { integer } minSymbol
 * @property { integer } minUpperCase
 */
class PasswordPolicyPasswordSettingsComplexity extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.dictionary) {
      this.dictionary = new PasswordDictionary(this.dictionary);
    }
  }

}

module.exports = PasswordPolicyPasswordSettingsComplexity;
