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
import { CustomizablePage } from '../models/CustomizablePage';
import { EmailCustomization } from '../models/EmailCustomization';
import { EmailDefaultContent } from '../models/EmailDefaultContent';
import { EmailPreview } from '../models/EmailPreview';
import { EmailSettings } from '../models/EmailSettings';
import { EmailTemplate } from '../models/EmailTemplate';
import { HostedPage } from '../models/HostedPage';
import { ImageUploadResponse } from '../models/ImageUploadResponse';
import { SignInPage } from '../models/SignInPage';
import { Theme } from '../models/Theme';
import { ThemeResponse } from '../models/ThemeResponse';
/**
 * no description
 */
export declare class CustomizationApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates a new email customization.
     * Create an Email Customization
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param instance
     */
  createEmailCustomization(brandId: string, templateName: string, instance?: EmailCustomization, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes all customizations for an email template.
     * Delete all Email Customizations
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     */
  deleteAllCustomizations(brandId: string, templateName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a Theme background image.
     * Delete the Background Image
     * @param brandId
     * @param themeId
     */
  deleteBrandThemeBackgroundImage(brandId: string, themeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a Theme favicon. The theme will use the default Okta favicon.
     * Delete the Favicon
     * @param brandId
     * @param themeId
     */
  deleteBrandThemeFavicon(brandId: string, themeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a Theme logo. The theme will use the default Okta logo.
     * Delete the Logo
     * @param brandId
     * @param themeId
     */
  deleteBrandThemeLogo(brandId: string, themeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an email customization by its unique identifier.
     * Delete an Email Customization
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param customizationId The ID of the email customization.
     */
  deleteEmailCustomization(brandId: string, templateName: string, customizationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Fetches a brand by `brandId`
     * Retrieve a Brand
     * @param brandId
     */
  getBrand(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Fetches a theme for a brand
     * Retrieve a Theme
     * @param brandId
     * @param themeId
     */
  getBrandTheme(brandId: string, themeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Generates a preview of an email customization. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
     * Preview an Email Customization
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param customizationId The ID of the email customization.
     */
  getCustomizationPreview(brandId: string, templateName: string, customizationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Gets an email customization by its unique identifier.
     * Retrieve an Email Customization
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param customizationId The ID of the email customization.
     */
  getEmailCustomization(brandId: string, templateName: string, customizationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Gets an email template's default content.
     * Retrieve an Email Template Default Content
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
     */
  getEmailDefaultContent(brandId: string, templateName: string, language?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Generates a preview of an email template's default content. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
     * Preview the Email Template Default Content
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
     */
  getEmailDefaultPreview(brandId: string, templateName: string, language?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Gets an email template's settings.
     * Retrieve the Email Template Settings
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     */
  getEmailSettings(brandId: string, templateName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Gets the details of an email template by name.
     * Retrieve an Email Template
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param expand Specifies additional metadata to be included in the response.
     */
  getEmailTemplate(brandId: string, templateName: string, expand?: Array<'settings' | 'customizationCount'>, _options?: Configuration): Promise<RequestContext>;
  /**
     * List all sign-in widget versions.
     * List all Sign-in Widget Versions
     * @param brandId The ID of the brand.
     */
  listAllSignInWidgetVersions(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * List all the themes in your brand
     * List all Themes
     * @param brandId
     */
  listBrandThemes(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * List all the brands in your org.
     * List all Brands
     */
  listBrands(_options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all customizations of an email template.
     * List all Email Customizations
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination) for more information.
     * @param limit A limit on the number of objects to return.
     */
  listEmailCustomizations(brandId: string, templateName: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all email templates.
     * List all Email Templates
     * @param brandId The ID of the brand.
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination) for more information.
     * @param limit A limit on the number of objects to return.
     * @param expand Specifies additional metadata to be included in the response.
     */
  listEmailTemplates(brandId: string, after?: string, limit?: number, expand?: Array<'settings' | 'customizationCount'>, _options?: Configuration): Promise<RequestContext>;
  /**
     * Previews the error page.
     * Preview the Error Page
     * @param brandId The ID of the brand.
     * @param CustomizablePage
     */
  previewErrorPage(brandId: string, CustomizablePage: CustomizablePage, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the error page.
     * Replace the Error Page
     * @param brandId The ID of the brand.
     * @param CustomizablePage
     */
  replaceErrorPage(brandId: string, CustomizablePage: CustomizablePage, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the sign-in page.
     * Replace the Sign-in Page
     * @param brandId The ID of the brand.
     * @param SignInPage
     */
  replaceSignInPage(brandId: string, SignInPage: SignInPage, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replace the sign-in page preview.
     * Replace the Sign-in Page Preview
     * @param brandId The ID of the brand.
     * @param SignInPage
     */
  replaceSignInPagePreview(brandId: string, SignInPage: SignInPage, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the sign-out page settings.
     * Replace the Sign-out Page Settings
     * @param brandId The ID of the brand.
     * @param HostedPage
     */
  replaceSignOutPageSettings(brandId: string, HostedPage: HostedPage, _options?: Configuration): Promise<RequestContext>;
  /**
     * Resets the error page.
     * Reset the Error Page
     * @param brandId The ID of the brand.
     */
  resetErrorPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Reset the sign-in page.
     * Reset the Sign-in Page
     * @param brandId The ID of the brand.
     */
  resetSignInPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the error page.
     * Retrieve the Error Page
     * @param brandId The ID of the brand.
     */
  retrieveErrorPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the sign-in page.
     * Retrieve the Sign-in Page
     * @param brandId The ID of the brand.
     */
  retrieveSignInPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the sign-out page settings.
     * Retrieve the Sign-out Page Settings
     * @param brandId The ID of the brand.
     */
  retrieveSignOutPageSettings(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Sends a test email to the current user’s primary and secondary email addresses. The email content is selected based on the following priority: 1. The email customization for the language specified in the `language` query parameter. 2. The email template's default customization. 3. The email template’s default content, translated to the current user's language.
     * Send a Test Email
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
     */
  sendTestEmail(brandId: string, templateName: string, language?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a brand by `brandId`
     * Replace a Brand
     * @param brandId
     * @param brand
     */
  updateBrand(brandId: string, brand: Brand, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a theme for a brand
     * Replace a Theme
     * @param brandId
     * @param themeId
     * @param theme
     */
  updateBrandTheme(brandId: string, themeId: string, theme: Theme, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates an existing email customization using the property values provided.
     * Replace an Email Customization
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param customizationId The ID of the email customization.
     * @param instance Request
     */
  updateEmailCustomization(brandId: string, templateName: string, customizationId: string, instance?: EmailCustomization, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates an email template's settings.
     * Replace the Email Template Settings
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param EmailSettings
     */
  updateEmailSettings(brandId: string, templateName: string, EmailSettings?: EmailSettings, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates the background image for your Theme
     * Upload the Background Image
     * @param brandId
     * @param themeId
     * @param file
     */
  uploadBrandThemeBackgroundImage(brandId: string, themeId: string, file: HttpFile, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates the favicon for your theme
     * Upload the Favicon
     * @param brandId
     * @param themeId
     * @param file
     */
  uploadBrandThemeFavicon(brandId: string, themeId: string, file: HttpFile, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates the logo for your Theme
     * Upload the Logo
     * @param brandId
     * @param themeId
     * @param file
     */
  uploadBrandThemeLogo(brandId: string, themeId: string, file: HttpFile, _options?: Configuration): Promise<RequestContext>;
}
export declare class CustomizationApiResponseProcessor {
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
     * @params response Response returned by the server for a request to deleteEmailCustomization
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteEmailCustomization(response: ResponseContext): Promise<void>;
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
     * @params response Response returned by the server for a request to listAllSignInWidgetVersions
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAllSignInWidgetVersions(response: ResponseContext): Promise<Array<string>>;
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
     * @params response Response returned by the server for a request to previewErrorPage
     * @throws ApiException if the response code was not in [200, 299]
     */
  previewErrorPage(response: ResponseContext): Promise<string>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceErrorPage
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceErrorPage(response: ResponseContext): Promise<CustomizablePage>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceSignInPage
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceSignInPage(response: ResponseContext): Promise<SignInPage>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceSignInPagePreview
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceSignInPagePreview(response: ResponseContext): Promise<void>;
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
     * @params response Response returned by the server for a request to resetErrorPage
     * @throws ApiException if the response code was not in [200, 299]
     */
  resetErrorPage(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to resetSignInPage
     * @throws ApiException if the response code was not in [200, 299]
     */
  resetSignInPage(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveErrorPage
     * @throws ApiException if the response code was not in [200, 299]
     */
  retrieveErrorPage(response: ResponseContext): Promise<CustomizablePage>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveSignInPage
     * @throws ApiException if the response code was not in [200, 299]
     */
  retrieveSignInPage(response: ResponseContext): Promise<SignInPage>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveSignOutPageSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  retrieveSignOutPageSettings(response: ResponseContext): Promise<HostedPage>;
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
     * @params response Response returned by the server for a request to updateBrand
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateBrand(response: ResponseContext): Promise<Brand>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateBrandTheme
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateBrandTheme(response: ResponseContext): Promise<ThemeResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateEmailCustomization
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateEmailCustomization(response: ResponseContext): Promise<EmailCustomization>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateEmailSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateEmailSettings(response: ResponseContext): Promise<void>;
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
