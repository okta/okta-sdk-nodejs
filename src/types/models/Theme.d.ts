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

import { Resource } from '../resource';
import { Client } from '../client';
import { OptionalKnownProperties } from '../optional-known-properties-type';
import { ReadStream } from 'fs';
import { ImageUploadResponse } from './ImageUploadResponse';
import { Response } from 'node-fetch';
import { ThemeResponse } from './ThemeResponse';
import { EmailTemplateTouchPointVariant } from './EmailTemplateTouchPointVariant';
import { EndUserDashboardTouchPointVariant } from './EndUserDashboardTouchPointVariant';
import { ErrorPageTouchPointVariant } from './ErrorPageTouchPointVariant';
import { SignInPageTouchPointVariant } from './SignInPageTouchPointVariant';

declare class Theme extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  readonly _links: {[name: string]: unknown};
  readonly backgroundImage: string;
  emailTemplateTouchPointVariant: EmailTemplateTouchPointVariant;
  endUserDashboardTouchPointVariant: EndUserDashboardTouchPointVariant;
  errorPageTouchPointVariant: ErrorPageTouchPointVariant;
  primaryColorContrastHex: string;
  primaryColorHex: string;
  secondaryColorContrastHex: string;
  secondaryColorHex: string;
  signInPageTouchPointVariant: SignInPageTouchPointVariant;

  update(brandId: string, themeId: string): Promise<ThemeResponse>;
  uploadBrandThemeLogo(brandId: string, themeId: string, file: ReadStream): Promise<ImageUploadResponse>;
  deleteBrandThemeLogo(brandId: string, themeId: string): Promise<Response>;
  updateBrandThemeFavicon(brandId: string, themeId: string, file: ReadStream): Promise<ImageUploadResponse>;
  deleteBrandThemeFavicon(brandId: string, themeId: string): Promise<Response>;
  updateBrandThemeBackgroundImage(brandId: string, themeId: string, file: ReadStream): Promise<ImageUploadResponse>;
  deleteBrandThemeBackgroundImage(brandId: string, themeId: string): Promise<Response>;
}

type ThemeOptions = OptionalKnownProperties<Theme>;

export {
  Theme,
  ThemeOptions
};
