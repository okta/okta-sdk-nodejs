/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const SmsTemplateTranslations = require('./SmsTemplateTranslations');

/**
 * @class SmsTemplate
 * @extends Resource
 * @property { dateTime } created
 * @property { string } id
 * @property { dateTime } lastUpdated
 * @property { string } name
 * @property { string } template
 * @property { SmsTemplateTranslations } translations
 * @property { SmsTemplateType } type
 */
class SmsTemplate extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.translations) {
      this.translations = new SmsTemplateTranslations(this.translations);
    }
  }

  /**
   * @returns {Promise<SmsTemplate>}
   */
  update() {
    return this.client.updateSmsTemplate(this.id, this);
  }
  delete() {
    return this.client.deleteSmsTemplate(this.id);
  }

  /**
   * @returns {Promise<SmsTemplate>}
   */
  partialUpdate() {
    return this.client.partialUpdateSmsTemplate(this.id, this);
  }
}

module.exports = SmsTemplate;
