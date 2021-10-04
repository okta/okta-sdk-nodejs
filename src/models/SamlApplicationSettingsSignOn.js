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
const SignOnInlineHook = require('./SignOnInlineHook');
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
 * @property { array } inlineHooks
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
    if (resourceJson && resourceJson['acsEndpoints']) {
      this['acsEndpoints'] = resourceJson['acsEndpoints'].map(resourceItem => new AcsEndpoint(resourceItem));
    }
    if (resourceJson && resourceJson['allowMultipleAcsEndpoints']) {
      this['allowMultipleAcsEndpoints'] = resourceJson['allowMultipleAcsEndpoints'];
    }
    if (resourceJson && resourceJson['assertionSigned']) {
      this['assertionSigned'] = resourceJson['assertionSigned'];
    }
    if (resourceJson && resourceJson['attributeStatements']) {
      this['attributeStatements'] = resourceJson['attributeStatements'].map(resourceItem => new SamlAttributeStatement(resourceItem));
    }
    if (resourceJson && resourceJson['audience']) {
      this['audience'] = resourceJson['audience'];
    }
    if (resourceJson && resourceJson['audienceOverride']) {
      this['audienceOverride'] = resourceJson['audienceOverride'];
    }
    if (resourceJson && resourceJson['authnContextClassRef']) {
      this['authnContextClassRef'] = resourceJson['authnContextClassRef'];
    }
    if (resourceJson && resourceJson['defaultRelayState']) {
      this['defaultRelayState'] = resourceJson['defaultRelayState'];
    }
    if (resourceJson && resourceJson['destination']) {
      this['destination'] = resourceJson['destination'];
    }
    if (resourceJson && resourceJson['destinationOverride']) {
      this['destinationOverride'] = resourceJson['destinationOverride'];
    }
    if (resourceJson && resourceJson['digestAlgorithm']) {
      this['digestAlgorithm'] = resourceJson['digestAlgorithm'];
    }
    if (resourceJson && resourceJson['honorForceAuthn']) {
      this['honorForceAuthn'] = resourceJson['honorForceAuthn'];
    }
    if (resourceJson && resourceJson['idpIssuer']) {
      this['idpIssuer'] = resourceJson['idpIssuer'];
    }
    if (resourceJson && resourceJson['inlineHooks']) {
      this['inlineHooks'] = resourceJson['inlineHooks'].map(resourceItem => new SignOnInlineHook(resourceItem));
    }
    if (resourceJson && resourceJson['recipient']) {
      this['recipient'] = resourceJson['recipient'];
    }
    if (resourceJson && resourceJson['recipientOverride']) {
      this['recipientOverride'] = resourceJson['recipientOverride'];
    }
    if (resourceJson && resourceJson['requestCompressed']) {
      this['requestCompressed'] = resourceJson['requestCompressed'];
    }
    if (resourceJson && resourceJson['responseSigned']) {
      this['responseSigned'] = resourceJson['responseSigned'];
    }
    if (resourceJson && resourceJson['signatureAlgorithm']) {
      this['signatureAlgorithm'] = resourceJson['signatureAlgorithm'];
    }
    if (resourceJson && resourceJson['slo']) {
      this['slo'] = new SingleLogout(resourceJson[slo]);
    }
    if (resourceJson && resourceJson['spCertificate']) {
      this['spCertificate'] = new SpCertificate(resourceJson[spCertificate]);
    }
    if (resourceJson && resourceJson['spIssuer']) {
      this['spIssuer'] = resourceJson['spIssuer'];
    }
    if (resourceJson && resourceJson['ssoAcsUrl']) {
      this['ssoAcsUrl'] = resourceJson['ssoAcsUrl'];
    }
    if (resourceJson && resourceJson['ssoAcsUrlOverride']) {
      this['ssoAcsUrlOverride'] = resourceJson['ssoAcsUrlOverride'];
    }
    if (resourceJson && resourceJson['subjectNameIdFormat']) {
      this['subjectNameIdFormat'] = resourceJson['subjectNameIdFormat'];
    }
    if (resourceJson && resourceJson['subjectNameIdTemplate']) {
      this['subjectNameIdTemplate'] = resourceJson['subjectNameIdTemplate'];
    }
  }

}

module.exports = SamlApplicationSettingsSignOn;
