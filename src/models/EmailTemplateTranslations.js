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
const EmailTemplateTranslation = require('./EmailTemplateTranslation');

/**
 * @class EmailTemplateTranslations
 * @extends Resource
 * @property { EmailTemplateTranslation } cs
 * @property { EmailTemplateTranslation } da
 * @property { EmailTemplateTranslation } de
 * @property { EmailTemplateTranslation } el
 * @property { EmailTemplateTranslation } en
 * @property { EmailTemplateTranslation } es
 * @property { EmailTemplateTranslation } fi
 * @property { EmailTemplateTranslation } fr
 * @property { EmailTemplateTranslation } hu
 * @property { EmailTemplateTranslation } id
 * @property { EmailTemplateTranslation } it
 * @property { EmailTemplateTranslation } ja
 * @property { EmailTemplateTranslation } ko
 * @property { EmailTemplateTranslation } ms
 * @property { EmailTemplateTranslation } nb
 * @property { EmailTemplateTranslation } nl_NL
 * @property { EmailTemplateTranslation } pl
 * @property { EmailTemplateTranslation } pt_BR
 * @property { EmailTemplateTranslation } ro
 * @property { EmailTemplateTranslation } ru
 * @property { EmailTemplateTranslation } sv
 * @property { EmailTemplateTranslation } th
 * @property { EmailTemplateTranslation } tr
 * @property { EmailTemplateTranslation } uk
 * @property { EmailTemplateTranslation } vi
 * @property { EmailTemplateTranslation } zh_CN
 * @property { EmailTemplateTranslation } zh_TW
 */
class EmailTemplateTranslations extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.cs) {
      this.cs = new EmailTemplateTranslation(resourceJson.cs);
    }
    if (resourceJson && resourceJson.da) {
      this.da = new EmailTemplateTranslation(resourceJson.da);
    }
    if (resourceJson && resourceJson.de) {
      this.de = new EmailTemplateTranslation(resourceJson.de);
    }
    if (resourceJson && resourceJson.el) {
      this.el = new EmailTemplateTranslation(resourceJson.el);
    }
    if (resourceJson && resourceJson.en) {
      this.en = new EmailTemplateTranslation(resourceJson.en);
    }
    if (resourceJson && resourceJson.es) {
      this.es = new EmailTemplateTranslation(resourceJson.es);
    }
    if (resourceJson && resourceJson.fi) {
      this.fi = new EmailTemplateTranslation(resourceJson.fi);
    }
    if (resourceJson && resourceJson.fr) {
      this.fr = new EmailTemplateTranslation(resourceJson.fr);
    }
    if (resourceJson && resourceJson.hu) {
      this.hu = new EmailTemplateTranslation(resourceJson.hu);
    }
    if (resourceJson && resourceJson.id) {
      this.id = new EmailTemplateTranslation(resourceJson.id);
    }
    if (resourceJson && resourceJson.it) {
      this.it = new EmailTemplateTranslation(resourceJson.it);
    }
    if (resourceJson && resourceJson.ja) {
      this.ja = new EmailTemplateTranslation(resourceJson.ja);
    }
    if (resourceJson && resourceJson.ko) {
      this.ko = new EmailTemplateTranslation(resourceJson.ko);
    }
    if (resourceJson && resourceJson.ms) {
      this.ms = new EmailTemplateTranslation(resourceJson.ms);
    }
    if (resourceJson && resourceJson.nb) {
      this.nb = new EmailTemplateTranslation(resourceJson.nb);
    }
    if (resourceJson && resourceJson.nl_NL) {
      this.nl_NL = new EmailTemplateTranslation(resourceJson.nl_NL);
    }
    if (resourceJson && resourceJson.pl) {
      this.pl = new EmailTemplateTranslation(resourceJson.pl);
    }
    if (resourceJson && resourceJson.pt_BR) {
      this.pt_BR = new EmailTemplateTranslation(resourceJson.pt_BR);
    }
    if (resourceJson && resourceJson.ro) {
      this.ro = new EmailTemplateTranslation(resourceJson.ro);
    }
    if (resourceJson && resourceJson.ru) {
      this.ru = new EmailTemplateTranslation(resourceJson.ru);
    }
    if (resourceJson && resourceJson.sv) {
      this.sv = new EmailTemplateTranslation(resourceJson.sv);
    }
    if (resourceJson && resourceJson.th) {
      this.th = new EmailTemplateTranslation(resourceJson.th);
    }
    if (resourceJson && resourceJson.tr) {
      this.tr = new EmailTemplateTranslation(resourceJson.tr);
    }
    if (resourceJson && resourceJson.uk) {
      this.uk = new EmailTemplateTranslation(resourceJson.uk);
    }
    if (resourceJson && resourceJson.vi) {
      this.vi = new EmailTemplateTranslation(resourceJson.vi);
    }
    if (resourceJson && resourceJson.zh_CN) {
      this.zh_CN = new EmailTemplateTranslation(resourceJson.zh_CN);
    }
    if (resourceJson && resourceJson.zh_TW) {
      this.zh_TW = new EmailTemplateTranslation(resourceJson.zh_TW);
    }
  }

}

module.exports = EmailTemplateTranslations;
