/*!
 * Copyright (c) 2017-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


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
      this.translations = new SmsTemplateTranslations(resourceJson.translations);
    }
  }

  /**
   * @returns {Promise<SmsTemplate>}
   */
  update() {
    return this.httpClient.updateSmsTemplate(this.id, this);
  }
  delete() {
    return this.httpClient.deleteSmsTemplate(this.id);
  }

  /**
   * @returns {Promise<SmsTemplate>}
   */
  partialUpdate() {
    return this.httpClient.partialUpdateSmsTemplate(this.id, this);
  }
}

module.exports = SmsTemplate;
