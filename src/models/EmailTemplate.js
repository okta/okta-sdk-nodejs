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


/**
 * @class EmailTemplate
 * @extends Resource
 * @property { hash } _links
 * @property { string } name
 */
class EmailTemplate extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }


  /**
   * @param {string} brandId
   * @param {string} templateName
   * @returns {Promise<EmailTemplate>}
   */
  getEmailTemplate(brandId, templateName) {
    return this.httpClient.getEmailTemplate(brandId, templateName);
  }

  /**
   * @param {string} brandId
   * @param {string} templateName
   */
  deleteEmailTemplateCustomizations(brandId, templateName) {
    return this.httpClient.deleteEmailTemplateCustomizations(brandId, templateName);
  }

  /**
   * @param {string} brandId
   * @param {string} templateName
   * @returns {Collection} A collection that will yield {@link EmailTemplateCustomization} instances.
   */
  listEmailTemplateCustomizations(brandId, templateName) {
    return this.httpClient.listEmailTemplateCustomizations(brandId, templateName);
  }

  /**
   * @param {string} brandId
   * @param {string} templateName
   * @param {EmailTemplateCustomizationRequest} emailTemplateCustomizationRequest
   * @returns {Promise<EmailTemplateCustomization>}
   */
  createEmailTemplateCustomization(brandId, templateName, emailTemplateCustomizationRequest) {
    return this.httpClient.createEmailTemplateCustomization(brandId, templateName, emailTemplateCustomizationRequest);
  }

  /**
   * @param {string} brandId
   * @param {string} templateName
   * @param {string} customizationId
   */
  deleteEmailTemplateCustomization(brandId, templateName, customizationId) {
    return this.httpClient.deleteEmailTemplateCustomization(brandId, templateName, customizationId);
  }

  /**
   * @param {string} brandId
   * @param {string} templateName
   * @param {string} customizationId
   * @returns {Promise<EmailTemplateCustomization>}
   */
  getEmailTemplateCustomization(brandId, templateName, customizationId) {
    return this.httpClient.getEmailTemplateCustomization(brandId, templateName, customizationId);
  }

  /**
   * @param {string} brandId
   * @param {string} templateName
   * @param {string} customizationId
   * @param {EmailTemplateCustomizationRequest} emailTemplateCustomizationRequest
   * @returns {Promise<EmailTemplateCustomization>}
   */
  updateEmailTemplateCustomization(brandId, templateName, customizationId, emailTemplateCustomizationRequest) {
    return this.httpClient.updateEmailTemplateCustomization(brandId, templateName, customizationId, emailTemplateCustomizationRequest);
  }

  /**
   * @param {string} brandId
   * @param {string} templateName
   * @param {string} customizationId
   * @returns {Promise<EmailTemplateContent>}
   */
  getEmailTemplateCustomizationPreview(brandId, templateName, customizationId) {
    return this.httpClient.getEmailTemplateCustomizationPreview(brandId, templateName, customizationId);
  }

  /**
   * @param {string} brandId
   * @param {string} templateName
   * @returns {Promise<EmailTemplateContent>}
   */
  getEmailTemplateDefaultContent(brandId, templateName) {
    return this.httpClient.getEmailTemplateDefaultContent(brandId, templateName);
  }

  /**
   * @param {string} brandId
   * @param {string} templateName
   * @returns {Promise<EmailTemplateContent>}
   */
  getEmailTemplateDefaultContentPreview(brandId, templateName) {
    return this.httpClient.getEmailTemplateDefaultContentPreview(brandId, templateName);
  }

  /**
   * @param {string} brandId
   * @param {string} templateName
   * @param {EmailTemplateTestRequest} emailTemplateTestRequest
   */
  sendTestEmail(brandId, templateName, emailTemplateTestRequest) {
    return this.httpClient.sendTestEmail(brandId, templateName, emailTemplateTestRequest);
  }
}

module.exports = EmailTemplate;
