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

var ApplicationSettingsApplication = require('./ApplicationSettingsApplication');


/**
 * @class WsFederationApplicationSettingsApplication
 * @extends ApplicationSettingsApplication
 * @property { string } attributeStatements
 * @property { string } audienceRestriction
 * @property { string } authnContextClassRef
 * @property { string } groupFilter
 * @property { string } groupName
 * @property { string } groupValueFormat
 * @property { string } nameIDFormat
 * @property { string } realm
 * @property { string } siteURL
 * @property { string } usernameAttribute
 * @property { boolean } wReplyOverride
 * @property { string } wReplyURL
 */
class WsFederationApplicationSettingsApplication extends ApplicationSettingsApplication {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson['attributeStatements']) {
      this['attributeStatements'] = resourceJson['attributeStatements'];
    }
    if (resourceJson && resourceJson['audienceRestriction']) {
      this['audienceRestriction'] = resourceJson['audienceRestriction'];
    }
    if (resourceJson && resourceJson['authnContextClassRef']) {
      this['authnContextClassRef'] = resourceJson['authnContextClassRef'];
    }
    if (resourceJson && resourceJson['groupFilter']) {
      this['groupFilter'] = resourceJson['groupFilter'];
    }
    if (resourceJson && resourceJson['groupName']) {
      this['groupName'] = resourceJson['groupName'];
    }
    if (resourceJson && resourceJson['groupValueFormat']) {
      this['groupValueFormat'] = resourceJson['groupValueFormat'];
    }
    if (resourceJson && resourceJson['nameIDFormat']) {
      this['nameIDFormat'] = resourceJson['nameIDFormat'];
    }
    if (resourceJson && resourceJson['realm']) {
      this['realm'] = resourceJson['realm'];
    }
    if (resourceJson && resourceJson['siteURL']) {
      this['siteURL'] = resourceJson['siteURL'];
    }
    if (resourceJson && resourceJson['usernameAttribute']) {
      this['usernameAttribute'] = resourceJson['usernameAttribute'];
    }
    if (resourceJson && resourceJson['wReplyOverride']) {
      this['wReplyOverride'] = resourceJson['wReplyOverride'];
    }
    if (resourceJson && resourceJson['wReplyURL']) {
      this['wReplyURL'] = resourceJson['wReplyURL'];
    }
  }

}

module.exports = WsFederationApplicationSettingsApplication;
