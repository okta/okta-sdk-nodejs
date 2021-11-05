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
 * @class Theme
 * @extends Resource
 * @property { hash } _links
 * @property { string } backgroundImage
 * @property { EmailTemplateTouchPointVariant } emailTemplateTouchPointVariant
 * @property { EndUserDashboardTouchPointVariant } endUserDashboardTouchPointVariant
 * @property { ErrorPageTouchPointVariant } errorPageTouchPointVariant
 * @property { string } primaryColorContrastHex
 * @property { string } primaryColorHex
 * @property { string } secondaryColorContrastHex
 * @property { string } secondaryColorHex
 * @property { SignInPageTouchPointVariant } signInPageTouchPointVariant
 */
class Theme extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

  /**
   * @param {string} brandId
   * @param {string} themeId
   * @returns {Promise<ThemeResponse>}
   */
  update(brandId, themeId) {
    return this.httpClient.updateBrandTheme(brandId, themeId, this);
  }

  /**
   * @param {string} brandId
   * @param {string} themeId
   * @param {file} fs.ReadStream
   * @returns {Promise<ImageUploadResponse>}
   */
  uploadBrandThemeLogo(brandId, themeId, file) {
    return this.httpClient.uploadBrandThemeLogo(brandId, themeId, file);
  }

  /**
   * @param {string} brandId
   * @param {string} themeId
   */
  deleteBrandThemeLogo(brandId, themeId) {
    return this.httpClient.deleteBrandThemeLogo(brandId, themeId);
  }

  /**
   * @param {string} brandId
   * @param {string} themeId
   * @param {file} fs.ReadStream
   * @returns {Promise<ImageUploadResponse>}
   */
  updateBrandThemeFavicon(brandId, themeId, file) {
    return this.httpClient.uploadBrandThemeFavicon(brandId, themeId, file);
  }

  /**
   * @param {string} brandId
   * @param {string} themeId
   */
  deleteBrandThemeFavicon(brandId, themeId) {
    return this.httpClient.deleteBrandThemeFavicon(brandId, themeId);
  }

  /**
   * @param {string} brandId
   * @param {string} themeId
   * @param {file} fs.ReadStream
   * @returns {Promise<ImageUploadResponse>}
   */
  updateBrandThemeBackgroundImage(brandId, themeId, file) {
    return this.httpClient.uploadBrandThemeBackgroundImage(brandId, themeId, file);
  }

  /**
   * @param {string} brandId
   * @param {string} themeId
   */
  deleteBrandThemeBackgroundImage(brandId, themeId) {
    return this.httpClient.deleteBrandThemeBackgroundImage(brandId, themeId);
  }
}

module.exports = Theme;
