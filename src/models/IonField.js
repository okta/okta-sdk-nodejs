/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const IonForm = require('./IonForm');

/**
 * @class IonField
 * @extends Resource
 * @property { IonForm } form
 * @property { string } label
 * @property { boolean } mutable
 * @property { string } name
 * @property { boolean } required
 * @property { boolean } secret
 * @property { string } type
 * @property { hash } value
 * @property { boolean } visible
 */
class IonField extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.form) {
      this.form = new IonForm(this.form);
    }
  }

}

module.exports = IonField;
