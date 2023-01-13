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


import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpFile } from '../http/http';
import { Brand } from '../models/Brand';
import { BrandDomains } from '../models/BrandDomains';
import { BrandRequest } from '../models/BrandRequest';
import { CreateBrandRequest } from '../models/CreateBrandRequest';
import { EmailCustomization } from '../models/EmailCustomization';
import { EmailDefaultContent } from '../models/EmailDefaultContent';
import { EmailPreview } from '../models/EmailPreview';
import { EmailSettings } from '../models/EmailSettings';
import { EmailTemplate } from '../models/EmailTemplate';
import { ErrorPage } from '../models/ErrorPage';
import { HostedPage } from '../models/HostedPage';
import { ImageUploadResponse } from '../models/ImageUploadResponse';
import { PageRoot } from '../models/PageRoot';
import { SignInPage } from '../models/SignInPage';
import { Theme } from '../models/Theme';
import { ThemeResponse } from '../models/ThemeResponse';
/**
 * no description
 */
export declare class CustomizationApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates new brand in your org
     * Create a Brand
     * @param CreateBrandRequest
     */
  createBrand(CreateBrandRequest?: CreateBrandRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a new email customization
     * Create an Email Customization
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param instance
     */
  createEmailCustomization(brandId: string, templateName: string, instance?: EmailCustomization, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes all customizations for an email template
     * Delete all Email Customizations
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     */
  deleteAllCustomizations(brandId: string, templateName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a brand by its unique identifier
     * Delete a brand
     * @param brandId The ID of the brand.
     */
  deleteBrand(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a Theme background image
     * Delete the Background Image
     * @param brandId The ID of the brand.
     * @param themeId The ID of the theme.
     */
  deleteBrandThemeBackgroundImage(brandId: string, themeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a Theme favicon. The theme will use the default Okta favicon.
     * Delete the Favicon
     * @param brandId The ID of the brand.
     * @param themeId The ID of the theme.
     */
  deleteBrandThemeFavicon(brandId: string, themeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a Theme logo. The theme will use the default Okta logo.
     * Delete the Logo
     * @param brandId The ID of the brand.
     * @param themeId The ID of the theme.
     */
  deleteBrandThemeLogo(brandId: string, themeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes the customized error page. As a result, the default error page appears in your live environment.
     * Delete the Customized Error Page
     * @param brandId The ID of the brand.
     */
  deleteCustomizedErrorPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes the customized sign-in page. As a result, the default sign-in page appears in your live environment.
     * Delete the Customized Sign-in Page
     * @param brandId The ID of the brand.
     */
  deleteCustomizedSignInPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an email customization by its unique identifier
     * Delete an Email Customization
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param customizationId The ID of the email customization.
     */
  deleteEmailCustomization(brandId: string, templateName: string, customizationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes the preview error page. The preview error page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
     * Delete the Preview Error Page
     * @param brandId The ID of the brand.
     */
  deletePreviewErrorPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes the preview sign-in page. The preview sign-in page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
     * Delete the Preview Sign-in Page
     * @param brandId The ID of the brand.
     */
  deletePreviewSignInPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a brand by `brandId`
     * Retrieve a Brand
     * @param brandId The ID of the brand.
     */
  getBrand(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a theme for a brand
     * Retrieve a Theme
     * @param brandId The ID of the brand.
     * @param themeId The ID of the theme.
     */
  getBrandTheme(brandId: string, themeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a preview of an email customization. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
     * Retrieve a Preview of an Email Customization
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param customizationId The ID of the email customization.
     */
  getCustomizationPreview(brandId: string, templateName: string, customizationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the customized error page. The customized error page appears in your live environment.
     * Retrieve the Customized Error Page
     * @param brandId The ID of the brand.
     */
  getCustomizedErrorPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the customized sign-in page. The customized sign-in page appears in your live environment.
     * Retrieve the Customized Sign-in Page
     * @param brandId The ID of the brand.
     */
  getCustomizedSignInPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the default error page. The default error page appears when no customized error page exists.
     * Retrieve the Default Error Page
     * @param brandId The ID of the brand.
     */
  getDefaultErrorPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the default sign-in page. The default sign-in page appears when no customized sign-in page exists.
     * Retrieve the Default Sign-in Page
     * @param brandId The ID of the brand.
     */
  getDefaultSignInPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an email customization by its unique identifier
     * Retrieve an Email Customization
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param customizationId The ID of the email customization.
     */
  getEmailCustomization(brandId: string, templateName: string, customizationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an email template's default content
     * Retrieve an Email Template Default Content
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
     */
  getEmailDefaultContent(brandId: string, templateName: string, language?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a preview of an email template's default content. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
     * Retrieve a Preview of the Email Template Default Content
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
     */
  getEmailDefaultPreview(brandId: string, templateName: string, language?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an email template's settings
     * Retrieve the Email Template Settings
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     */
  getEmailSettings(brandId: string, templateName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the details of an email template by name
     * Retrieve an Email Template
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param expand Specifies additional metadata to be included in the response.
     */
  getEmailTemplate(brandId: string, templateName: string, expand?: Array<'settings' | 'customizationCount'>, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the error page sub-resources. The `expand` query parameter specifies which sub-resources to include in the response.
     * Retrieve the Error Page Sub-Resources
     * @param brandId The ID of the brand.
     * @param expand Specifies additional metadata to be included in the response.
     */
  getErrorPage(brandId: string, expand?: Array<'default' | 'customized' | 'customizedUrl' | 'preview' | 'previewUrl'>, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the preview error page. The preview error page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
     * Retrieve the Preview Error Page Preview
     * @param brandId The ID of the brand.
     */
  getPreviewErrorPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the preview sign-in page. The preview sign-in page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
     * Retrieve the Preview Sign-in Page Preview
     * @param brandId The ID of the brand.
     */
  getPreviewSignInPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the sign-in page sub-resources. The `expand` query parameter specifies which sub-resources to include in the response.
     * Retrieve the Sign-in Page Sub-Resources
     * @param brandId The ID of the brand.
     * @param expand Specifies additional metadata to be included in the response.
     */
  getSignInPage(brandId: string, expand?: Array<'default' | 'customized' | 'customizedUrl' | 'preview' | 'previewUrl'>, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the sign-out page settings
     * Retrieve the Sign-out Page Settings
     * @param brandId The ID of the brand.
     */
  getSignOutPageSettings(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all sign-in widget versions supported by the current org
     * List all Sign-in Widget Versions
     * @param brandId The ID of the brand.
     */
  listAllSignInWidgetVersions(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all domains associated with a brand by `brandId`
     * List all Domains associated with a Brand
     * @param brandId The ID of the brand.
     */
  listBrandDomains(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all the themes in your brand
     * List all Themes
     * @param brandId The ID of the brand.
     */
  listBrandThemes(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all the brands in your org
     * List all Brands
     */
  listBrands(_options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all customizations of an email template
     * List all Email Customizations
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
     * @param limit A limit on the number of objects to return.
     */
  listEmailCustomizations(brandId: string, templateName: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all email templates
     * List all Email Templates
     * @param brandId The ID of the brand.
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
     * @param limit A limit on the number of objects to return.
     * @param expand Specifies additional metadata to be included in the response.
     */
  listEmailTemplates(brandId: string, after?: string, limit?: number, expand?: Array<'settings' | 'customizationCount'>, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a brand by `brandId`
     * Replace a Brand
     * @param brandId The ID of the brand.
     * @param brand
     */
  replaceBrand(brandId: string, brand: BrandRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a theme for a brand
     * Replace a Theme
     * @param brandId The ID of the brand.
     * @param themeId The ID of the theme.
     * @param theme
     */
  replaceBrandTheme(brandId: string, themeId: string, theme: Theme, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the customized error page. The customized error page appears in your live environment.
     * Replace the Customized Error Page
     * @param brandId The ID of the brand.
     * @param ErrorPage
     */
  replaceCustomizedErrorPage(brandId: string, ErrorPage: ErrorPage, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the customized sign-in page. The customized sign-in page appears in your live environment.
     * Replace the Customized Sign-in Page
     * @param brandId The ID of the brand.
     * @param SignInPage
     */
  replaceCustomizedSignInPage(brandId: string, SignInPage: SignInPage, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces an existing email customization using the property values provided
     * Replace an Email Customization
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param customizationId The ID of the email customization.
     * @param instance Request
     */
  replaceEmailCustomization(brandId: string, templateName: string, customizationId: string, instance?: EmailCustomization, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces an email template's settings
     * Replace the Email Template Settings
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param EmailSettings
     */
  replaceEmailSettings(brandId: string, templateName: string, EmailSettings?: EmailSettings, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the preview error page. The preview error page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
     * Replace the Preview Error Page
     * @param brandId The ID of the brand.
     * @param ErrorPage
     */
  replacePreviewErrorPage(brandId: string, ErrorPage: ErrorPage, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the preview sign-in page. The preview sign-in page contains unpublished changes and isn't shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
     * Replace the Preview Sign-in Page
     * @param brandId The ID of the brand.
     * @param SignInPage
     */
  replacePreviewSignInPage(brandId: string, SignInPage: SignInPage, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the sign-out page settings
     * Replace the Sign-out Page Settings
     * @param brandId The ID of the brand.
     * @param HostedPage
     */
  replaceSignOutPageSettings(brandId: string, HostedPage: HostedPage, _options?: Configuration): Promise<RequestContext>;
  /**
     * Sends a test email to the current user’s primary and secondary email addresses. The email content is selected based on the following priority: 1. The email customization for the language specified in the `language` query parameter. 2. The email template's default customization. 3. The email template’s default content, translated to the current user's language.
     * Send a Test Email
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
     */
  sendTestEmail(brandId: string, templateName: string, language?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Uploads and replaces the background image for the theme. The file must be in PNG, JPG, or GIF format and less than 2 MB in size.
     * Upload the Background Image
     * @param brandId The ID of the brand.
     * @param themeId The ID of the theme.
     * @param file
     */
  uploadBrandThemeBackgroundImage(brandId: string, themeId: string, file: HttpFile, _options?: Configuration): Promise<RequestContext>;
  /**
     * Uploads and replaces the favicon for the theme
     * Upload the Favicon
     * @param brandId The ID of the brand.
     * @param themeId The ID of the theme.
     * @param file
     */
  uploadBrandThemeFavicon(brandId: string, themeId: string, file: HttpFile, _options?: Configuration): Promise<RequestContext>;
  /**
     * Uploads and replaces the logo for the theme. The file must be in PNG, JPG, or GIF format and less than 100kB in size. For best results use landscape orientation, a transparent background, and a minimum size of 300px by 50px to prevent upscaling.
     * Upload the Logo
     * @param brandId The ID of the brand.
     * @param themeId The ID of the theme.
     * @param file
     */
  uploadBrandThemeLogo(brandId: string, themeId: string, file: HttpFile, _options?: Configuration): Promise<RequestContext>;
}
export declare class CustomizationApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBrand
     * @throws ApiException if the response code was not in [200, 299]
     */
  createBrand(response: ResponseContext): Promise<Brand>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createEmailCustomization
     * @throws ApiException if the response code was not in [200, 299]
     */
  createEmailCustomization(response: ResponseContext): Promise<EmailCustomization>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAllCustomizations
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteAllCustomizations(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteBrand
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteBrand(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteBrandThemeBackgroundImage
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteBrandThemeBackgroundImage(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteBrandThemeFavicon
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteBrandThemeFavicon(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteBrandThemeLogo
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteBrandThemeLogo(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCustomizedErrorPage
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteCustomizedErrorPage(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCustomizedSignInPage
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteCustomizedSignInPage(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteEmailCustomization
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteEmailCustomization(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePreviewErrorPage
     * @throws ApiException if the response code was not in [200, 299]
     */
  deletePreviewErrorPage(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePreviewSignInPage
     * @throws ApiException if the response code was not in [200, 299]
     */
  deletePreviewSignInPage(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBrand
     * @throws ApiException if the response code was not in [200, 299]
     */
  getBrand(response: ResponseContext): Promise<Brand>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBrandTheme
     * @throws ApiException if the response code was not in [200, 299]
     */
  getBrandTheme(response: ResponseContext): Promise<ThemeResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCustomizationPreview
     * @throws ApiException if the response code was not in [200, 299]
     */
  getCustomizationPreview(response: ResponseContext): Promise<EmailPreview>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCustomizedErrorPage
     * @throws ApiException if the response code was not in [200, 299]
     */
  getCustomizedErrorPage(response: ResponseContext): Promise<ErrorPage>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCustomizedSignInPage
     * @throws ApiException if the response code was not in [200, 299]
     */
  getCustomizedSignInPage(response: ResponseContext): Promise<SignInPage>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDefaultErrorPage
     * @throws ApiException if the response code was not in [200, 299]
     */
  getDefaultErrorPage(response: ResponseContext): Promise<ErrorPage>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDefaultSignInPage
     * @throws ApiException if the response code was not in [200, 299]
     */
  getDefaultSignInPage(response: ResponseContext): Promise<SignInPage>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEmailCustomization
     * @throws ApiException if the response code was not in [200, 299]
     */
  getEmailCustomization(response: ResponseContext): Promise<EmailCustomization>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEmailDefaultContent
     * @throws ApiException if the response code was not in [200, 299]
     */
  getEmailDefaultContent(response: ResponseContext): Promise<EmailDefaultContent>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEmailDefaultPreview
     * @throws ApiException if the response code was not in [200, 299]
     */
  getEmailDefaultPreview(response: ResponseContext): Promise<EmailPreview>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEmailSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  getEmailSettings(response: ResponseContext): Promise<EmailSettings>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEmailTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
  getEmailTemplate(response: ResponseContext): Promise<EmailTemplate>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getErrorPage
     * @throws ApiException if the response code was not in [200, 299]
     */
  getErrorPage(response: ResponseContext): Promise<PageRoot>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPreviewErrorPage
     * @throws ApiException if the response code was not in [200, 299]
     */
  getPreviewErrorPage(response: ResponseContext): Promise<ErrorPage>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPreviewSignInPage
     * @throws ApiException if the response code was not in [200, 299]
     */
  getPreviewSignInPage(response: ResponseContext): Promise<SignInPage>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSignInPage
     * @throws ApiException if the response code was not in [200, 299]
     */
  getSignInPage(response: ResponseContext): Promise<PageRoot>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSignOutPageSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  getSignOutPageSettings(response: ResponseContext): Promise<HostedPage>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAllSignInWidgetVersions
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAllSignInWidgetVersions(response: ResponseContext): Promise<Array<string>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listBrandDomains
     * @throws ApiException if the response code was not in [200, 299]
     */
  listBrandDomains(response: ResponseContext): Promise<BrandDomains>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listBrandThemes
     * @throws ApiException if the response code was not in [200, 299]
     */
  listBrandThemes(response: ResponseContext): Promise<Array<ThemeResponse>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listBrands
     * @throws ApiException if the response code was not in [200, 299]
     */
  listBrands(response: ResponseContext): Promise<Array<Brand>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listEmailCustomizations
     * @throws ApiException if the response code was not in [200, 299]
     */
  listEmailCustomizations(response: ResponseContext): Promise<Array<EmailCustomization>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listEmailTemplates
     * @throws ApiException if the response code was not in [200, 299]
     */
  listEmailTemplates(response: ResponseContext): Promise<Array<EmailTemplate>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceBrand
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceBrand(response: ResponseContext): Promise<Brand>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceBrandTheme
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceBrandTheme(response: ResponseContext): Promise<ThemeResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceCustomizedErrorPage
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceCustomizedErrorPage(response: ResponseContext): Promise<ErrorPage>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceCustomizedSignInPage
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceCustomizedSignInPage(response: ResponseContext): Promise<SignInPage>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceEmailCustomization
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceEmailCustomization(response: ResponseContext): Promise<EmailCustomization>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceEmailSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceEmailSettings(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replacePreviewErrorPage
     * @throws ApiException if the response code was not in [200, 299]
     */
  replacePreviewErrorPage(response: ResponseContext): Promise<ErrorPage>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replacePreviewSignInPage
     * @throws ApiException if the response code was not in [200, 299]
     */
  replacePreviewSignInPage(response: ResponseContext): Promise<SignInPage>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceSignOutPageSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceSignOutPageSettings(response: ResponseContext): Promise<HostedPage>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sendTestEmail
     * @throws ApiException if the response code was not in [200, 299]
     */
  sendTestEmail(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadBrandThemeBackgroundImage
     * @throws ApiException if the response code was not in [200, 299]
     */
  uploadBrandThemeBackgroundImage(response: ResponseContext): Promise<ImageUploadResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadBrandThemeFavicon
     * @throws ApiException if the response code was not in [200, 299]
     */
  uploadBrandThemeFavicon(response: ResponseContext): Promise<ImageUploadResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadBrandThemeLogo
     * @throws ApiException if the response code was not in [200, 299]
     */
  uploadBrandThemeLogo(response: ResponseContext): Promise<ImageUploadResponse>;
}
