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
import { RequestContext, ResponseContext } from '../http/http';
import { Brand } from '../models/Brand';
import { EmailCustomization } from '../models/EmailCustomization';
import { EmailDefaultContent } from '../models/EmailDefaultContent';
import { EmailPreview } from '../models/EmailPreview';
import { EmailTemplate } from '../models/EmailTemplate';
import { ImageUploadResponse } from '../models/ImageUploadResponse';
import { Theme } from '../models/Theme';
import { ThemeResponse } from '../models/ThemeResponse';
/**
 * no description
 */
export declare class CustomizationApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates a new email customization.
     * Create Email Customization
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param instance
     */
  createEmailCustomization(brandId: string, templateName: string, instance?: EmailCustomization, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes all customizations for an email template.
     * Delete All Email Customizations
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     */
  deleteAllCustomizations(brandId: string, templateName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a Theme background image
     * Deletes a Theme background image
     * @param brandId
     * @param themeId
     */
  deleteBrandThemeBackgroundImage(brandId: string, themeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a Theme favicon. The org then uses the Okta default favicon.
     * Deletes a Theme favicon. The org then uses the Okta default favicon.
     * @param brandId
     * @param themeId
     */
  deleteBrandThemeFavicon(brandId: string, themeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a Theme logo. The org then uses the Okta default logo.
     * Deletes a Theme logo. The org then uses the Okta default logo.
     * @param brandId
     * @param themeId
     */
  deleteBrandThemeLogo(brandId: string, themeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an email customization by its unique identifier.
     * Delete Email Customization
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param customizationId The ID of the email customization.
     */
  deleteEmailCustomization(brandId: string, templateName: string, customizationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Fetches a brand by `brandId`
     * Get Brand
     * @param brandId
     */
  getBrand(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Fetches a theme for a brand
     * Get a theme for a brand
     * @param brandId
     * @param themeId
     */
  getBrandTheme(brandId: string, themeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Generates a preview of an email customization. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
     * Preview Email Customization
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param customizationId The ID of the email customization.
     */
  getCustomizationPreview(brandId: string, templateName: string, customizationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Gets an email customization by its unique identifier.
     * Get Email Customization
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param customizationId The ID of the email customization.
     */
  getEmailCustomization(brandId: string, templateName: string, customizationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Gets an email template's default content.
     * Get Email Template Default Content
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
     */
  getEmailDefaultContent(brandId: string, templateName: string, language?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Generates a preview of an email template's default content. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.
     * Preview Email Template Default Content
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
     */
  getEmailDefaultPreview(brandId: string, templateName: string, language?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Gets the details of an email template by name.
     * Get Email Template
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     */
  getEmailTemplate(brandId: string, templateName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * List all the themes in your brand
     * Get Brand Themes
     * @param brandId
     */
  listBrandThemes(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * List all the brands in your org.
     * List Brands
     */
  listBrands(_options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all customizations of an email template.
     * List Email Customizations
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination) for more information.
     * @param limit A limit on the number of objects to return.
     */
  listEmailCustomizations(brandId: string, templateName: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all email templates.
     * List Email Templates
     * @param brandId The ID of the brand.
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination) for more information.
     * @param limit A limit on the number of objects to return.
     */
  listEmailTemplates(brandId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Sends a test email to the current user’s primary and secondary email addresses. The email content is selected based on the following priority: 1. The email customization for the language specified in the `language` query parameter. 2. The email template's default customization. 3. The email template’s default content, translated to the current user's language.
     * Send Test Email
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param language The language to use for the email. Defaults to the current user&#39;s language if unspecified.
     */
  sendTestEmail(brandId: string, templateName: string, language?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a brand by `brandId`
     * Update Brand
     * @param brandId
     * @param brand
     */
  updateBrand(brandId: string, brand: Brand, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a theme for a brand
     * Update a theme for a brand
     * @param brandId
     * @param themeId
     * @param theme
     */
  updateBrandTheme(brandId: string, themeId: string, theme: Theme, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates an existing email customization using the property values provided.
     * Update Email Customization
     * @param brandId The ID of the brand.
     * @param templateName The name of the email template.
     * @param customizationId The ID of the email customization.
     * @param instance Request
     */
  updateEmailCustomization(brandId: string, templateName: string, customizationId: string, instance?: EmailCustomization, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates the background image for your Theme
     * Updates the background image for your Theme
     * @param brandId
     * @param themeId
     */
  uploadBrandThemeBackgroundImage(brandId: string, themeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates the favicon for your theme
     * Updates the favicon for your theme
     * @param brandId
     * @param themeId
     */
  uploadBrandThemeFavicon(brandId: string, themeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates the logo for your Theme
     * Update a themes logo
     * @param brandId
     * @param themeId
     */
  uploadBrandThemeLogo(brandId: string, themeId: string, _options?: Configuration): Promise<RequestContext>;
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
     * @params response Response returned by the server for a request to getEmailTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
  getEmailTemplate(response: ResponseContext): Promise<EmailTemplate>;
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
