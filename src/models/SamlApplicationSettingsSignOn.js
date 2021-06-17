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
const AcsEndpoint = require('./AcsEndpoint');
const SamlAttributeStatement = require('./SamlAttributeStatement');
const SingleLogout = require('./SingleLogout');
const SpCertificate = require('./SpCertificate');

/**
 * @class SamlApplicationSettingsSignOn
 * @extends Resource
 * @property { array } acsEndpoints
 * @property { boolean } allowMultipleAcsEndpoints
 * @property { boolean } assertionSigned
 * @property { array } attributeStatements
 * @property { string } audience
 * @property { string } audienceOverride
 * @property { string } authnContextClassRef
 * @property { string } defaultRelayState
 * @property { string } destination
 * @property { string } destinationOverride
 * @property { string } digestAlgorithm
 * @property { boolean } honorForceAuthn
 * @property { string } idpIssuer
 * @property { string } recipient
 * @property { string } recipientOverride
 * @property { boolean } requestCompressed
 * @property { boolean } responseSigned
 * @property { string } signatureAlgorithm
 * @property { SingleLogout } slo
 * @property { SpCertificate } spCertificate
 * @property { string } spIssuer
 * @property { string } ssoAcsUrl
 * @property { string } ssoAcsUrlOverride
 * @property { string } subjectNameIdFormat
 * @property { string } subjectNameIdTemplate
 */
class SamlApplicationSettingsSignOn extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.acsEndpoints) {
      this.acsEndpoints = resourceJson.acsEndpoints.map(resourceItem => new AcsEndpoint(resourceItem));
    }
    if (resourceJson && resourceJson.attributeStatements) {
      this.attributeStatements = resourceJson.attributeStatements.map(resourceItem => new SamlAttributeStatement(resourceItem));
    }
    if (resourceJson && resourceJson.slo) {
      this.slo = new SingleLogout(resourceJson.slo);
    }
    if (resourceJson && resourceJson.spCertificate) {
      this.spCertificate = new SpCertificate(resourceJson.spCertificate);
    }
  }

}

module.exports = SamlApplicationSettingsSignOn;
