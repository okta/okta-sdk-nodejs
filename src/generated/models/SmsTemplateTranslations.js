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


'use strict';
/**
 * Okta Admin Management
 * Allows customers to easily access the Okta Management APIs
 *
 * OpenAPI spec version: 5.1.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.SmsTemplateTranslations = void 0;
/**
* - Template translations are optionally provided when you want to localize the SMS messages. Translations are provided as an object that contains `key:value` pairs: the language and the translated Template text. The key portion is a two-letter country code that conforms to [ISO 639-1](https://www.loc.gov/standards/iso639-2/php/code_list.php). The value is the translated SMS Template. - Just like with regular SMS Templates, the length of the SMS message can\'t exceed 160 characters.
*/
class SmsTemplateTranslations {
  constructor() {
  }
  static getAttributeTypeMap() {
    return SmsTemplateTranslations.attributeTypeMap;
  }
}
exports.SmsTemplateTranslations = SmsTemplateTranslations;
SmsTemplateTranslations.discriminator = undefined;
SmsTemplateTranslations.attributeTypeMap = [];
SmsTemplateTranslations.isExtensible = true;
