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
 * @class ThemeResponse
 * @extends Resource
 * @property { hash } _links
 * @property { string } backgroundImage
 * @property { EmailTemplateTouchPointVariant } emailTemplateTouchPointVariant
 * @property { EndUserDashboardTouchPointVariant } endUserDashboardTouchPointVariant
 * @property { ErrorPageTouchPointVariant } errorPageTouchPointVariant
 * @property { string } favicon
 * @property { string } id
 * @property { string } logo
 * @property { string } primaryColorContrastHex
 * @property { string } primaryColorHex
 * @property { string } secondaryColorContrastHex
 * @property { string } secondaryColorHex
 * @property { SignInPageTouchPointVariant } signInPageTouchPointVariant
 */
class ThemeResponse extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

}

module.exports = ThemeResponse;
