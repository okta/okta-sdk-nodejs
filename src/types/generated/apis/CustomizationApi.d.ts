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
import { BouncesRemoveListObj } from '../models/BouncesRemoveListObj';
import { BouncesRemoveListResult } from '../models/BouncesRemoveListResult';
import { Brand } from '../models/Brand';
import { BrandDomains } from '../models/BrandDomains';
import { BrandRequest } from '../models/BrandRequest';
import { BrandWithEmbedded } from '../models/BrandWithEmbedded';
import { CreateBrandRequest } from '../models/CreateBrandRequest';
import { EmailCustomization } from '../models/EmailCustomization';
import { EmailDefaultContent } from '../models/EmailDefaultContent';
import { EmailPreview } from '../models/EmailPreview';
import { EmailSettings } from '../models/EmailSettings';
import { EmailSettingsResponse } from '../models/EmailSettingsResponse';
import { EmailTemplateResponse } from '../models/EmailTemplateResponse';
import { ErrorPage } from '../models/ErrorPage';
import { HostedPage } from '../models/HostedPage';
import { ImageUploadResponse } from '../models/ImageUploadResponse';
import { PageRoot } from '../models/PageRoot';
import { SignInPage } from '../models/SignInPage';
import { ThemeResponse } from '../models/ThemeResponse';
import { UpdateThemeRequest } from '../models/UpdateThemeRequest';
/**
 * no description
 */
export declare class CustomizationApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Removes emails from an email service bounce list.  The emails submitted in this operation are removed from the bounce list by an asynchronous job. Any email address that passes validation is accepted for the removal process, even if there are other email addresses in the request that failed validation.  > **Note:** If there are validation errors for all email addresses, a `200 OK` HTTP status is still returned.
     * Remove bounced emails
     * @param bouncesRemoveListObj
     */
  bulkRemoveEmailAddressBounces(bouncesRemoveListObj?: BouncesRemoveListObj, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a new brand in your org
     * Create a brand
     * @param createBrandRequest
     */
  createBrand(createBrandRequest?: CreateBrandRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a new Email Customization  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is enabled, you can create a customization for any BCP47 language in addition to the Okta-supported languages.
     * Create an email customization
     * @param brandId The ID of the brand
     * @param templateName The name of the email template
     * @param instance
     */
  createEmailCustomization(brandId: string, templateName: string, instance?: EmailCustomization, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes all customizations for an email template  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is enabled, all customizations are deleted, including customizations for additional languages. If disabled, only customizations in Okta-supported languages are deleted.
     * Delete all email customizations
     * @param brandId The ID of the brand
     * @param templateName The name of the email template
     */
  deleteAllCustomizations(brandId: string, templateName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a brand by `brandId`
     * Delete a brand
     * @param brandId The ID of the brand
     */
  deleteBrand(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a theme background image
     * Delete the background image
     * @param brandId The ID of the brand
     * @param themeId The ID of the theme
     */
  deleteBrandThemeBackgroundImage(brandId: string, themeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a theme favicon. The theme will use the default Okta favicon.
     * Delete the favicon
     * @param brandId The ID of the brand
     * @param themeId The ID of the theme
     */
  deleteBrandThemeFavicon(brandId: string, themeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a Theme logo. The theme will use the default Okta logo.
     * Delete the logo
     * @param brandId The ID of the brand
     * @param themeId The ID of the theme
     */
  deleteBrandThemeLogo(brandId: string, themeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes the customized error page. As a result, the default error page appears in your live environment.
     * Delete the customized error page
     * @param brandId The ID of the brand
     */
  deleteCustomizedErrorPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes the customized sign-in page. As a result, the default sign-in page appears in your live environment.
     * Delete the customized sign-in page
     * @param brandId The ID of the brand
     */
  deleteCustomizedSignInPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an Email Customization by its unique identifier  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is disabled, deletion of an existing additional language customization by ID doesn\'t register.
     * Delete an email customization
     * @param brandId The ID of the brand
     * @param templateName The name of the email template
     * @param customizationId The ID of the email customization
     */
  deleteEmailCustomization(brandId: string, templateName: string, customizationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes the preview error page. The preview error page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
     * Delete the preview error page
     * @param brandId The ID of the brand
     */
  deletePreviewErrorPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes the preview sign-in page. The preview sign-in page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
     * Delete the preview sign-in page
     * @param brandId The ID of the brand
     */
  deletePreviewSignInPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a brand by `brandId`
     * Retrieve a brand
     * @param brandId The ID of the brand
     * @param expand Specifies additional metadata to be included in the response
     */
  getBrand(brandId: string, expand?: Array<'themes' | 'domains' | 'emailDomain'>, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a theme for a brand
     * Retrieve a theme
     * @param brandId The ID of the brand
     * @param themeId The ID of the theme
     */
  getBrandTheme(brandId: string, themeId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a Preview of an Email Customization. All variable references are populated from the current user\'s context. For example, `${user.profile.firstName}`.  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is disabled, requests for the preview of an additional language customization by ID return a `404 Not Found` error response.
     * Retrieve a preview of an email customization
     * @param brandId The ID of the brand
     * @param templateName The name of the email template
     * @param customizationId The ID of the email customization
     */
  getCustomizationPreview(brandId: string, templateName: string, customizationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the customized error page. The customized error page appears in your live environment.
     * Retrieve the customized error page
     * @param brandId The ID of the brand
     */
  getCustomizedErrorPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the customized sign-in page. The customized sign-in page appears in your live environment.
     * Retrieve the customized sign-in page
     * @param brandId The ID of the brand
     */
  getCustomizedSignInPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the default error page. The default error page appears when no customized error page exists.
     * Retrieve the default error page
     * @param brandId The ID of the brand
     */
  getDefaultErrorPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the default sign-in page. The default sign-in page appears when no customized sign-in page exists.
     * Retrieve the default sign-in page
     * @param brandId The ID of the brand
     */
  getDefaultSignInPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an email customization by its unique identifier  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is disabled, requests to retrieve an additional language customization by ID result in a `404 Not Found` error response.
     * Retrieve an email customization
     * @param brandId The ID of the brand
     * @param templateName The name of the email template
     * @param customizationId The ID of the email customization
     */
  getEmailCustomization(brandId: string, templateName: string, customizationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an email template\'s default content  <x-lifecycle class=\"ea\"></x-lifecycle> Defaults to the current user\'s language given the following: - Custom languages for Okta Email Templates is enabled - An additional language is specified for the `language` parameter
     * Retrieve an email template default content
     * @param brandId The ID of the brand
     * @param templateName The name of the email template
     * @param language The language to use for the email. Defaults to the current user\&#39;s language if unspecified.
     */
  getEmailDefaultContent(brandId: string, templateName: string, language?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a preview of an Email Template\'s default content. All variable references are populated using the current user\'s context. For example, `${user.profile.firstName}`.  <x-lifecycle class=\"ea\"></x-lifecycle> Defaults to the current user\'s language given the following: - Custom languages for Okta Email Templates is enabled - An additional language is specified for the `language` parameter
     * Retrieve a preview of the email template default content
     * @param brandId The ID of the brand
     * @param templateName The name of the email template
     * @param language The language to use for the email. Defaults to the current user\&#39;s language if unspecified.
     */
  getEmailDefaultPreview(brandId: string, templateName: string, language?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an email template\'s settings
     * Retrieve the email template settings
     * @param brandId The ID of the brand
     * @param templateName The name of the email template
     */
  getEmailSettings(brandId: string, templateName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the details of an email template by name
     * Retrieve an email template
     * @param brandId The ID of the brand
     * @param templateName The name of the email template
     * @param expand Specifies additional metadata to be included in the response
     */
  getEmailTemplate(brandId: string, templateName: string, expand?: Array<'settings' | 'customizationCount'>, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the error page sub-resources. The `expand` query parameter specifies which sub-resources to include in the response.
     * Retrieve the error page sub-resources
     * @param brandId The ID of the brand
     * @param expand Specifies additional metadata to be included in the response
     */
  getErrorPage(brandId: string, expand?: Array<'default' | 'customized' | 'customizedUrl' | 'preview' | 'previewUrl'>, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the preview error page. The preview error page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
     * Retrieve the preview error page preview
     * @param brandId The ID of the brand
     */
  getPreviewErrorPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the preview sign-in page. The preview sign-in page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
     * Retrieve the preview sign-in page preview
     * @param brandId The ID of the brand
     */
  getPreviewSignInPage(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the sign-in page sub-resources. The `expand` query parameter specifies which sub-resources to include in the response.
     * Retrieve the sign-in page sub-resources
     * @param brandId The ID of the brand
     * @param expand Specifies additional metadata to be included in the response
     */
  getSignInPage(brandId: string, expand?: Array<'default' | 'customized' | 'customizedUrl' | 'preview' | 'previewUrl'>, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the sign-out page settings
     * Retrieve the sign-out page settings
     * @param brandId The ID of the brand
     */
  getSignOutPageSettings(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all sign-in widget versions supported by the current org
     * List all Sign-In Widget versions
     * @param brandId The ID of the brand
     */
  listAllSignInWidgetVersions(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all domains associated with a brand by `brandId`
     * List all domains associated with a brand
     * @param brandId The ID of the brand
     */
  listBrandDomains(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all the themes in your brand.  > **Important:** Currently each org supports only one theme, therefore this contains a single object only.
     * List all themes
     * @param brandId The ID of the brand
     */
  listBrandThemes(brandId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all the brands in your org
     * List all brands
     * @param expand Specifies additional metadata to be included in the response
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param limit A limit on the number of objects to return
     * @param q Searches the records for matching value
     */
  listBrands(expand?: Array<'themes' | 'domains' | 'emailDomain'>, after?: string, limit?: number, q?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all customizations of an email template  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is enabled, all existing customizations are retrieved, including customizations for additional languages. If disabled, only customizations for Okta-supported languages are returned.
     * List all email customizations
     * @param brandId The ID of the brand
     * @param templateName The name of the email template
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param limit A limit on the number of objects to return
     */
  listEmailCustomizations(brandId: string, templateName: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all supported email templates
     * List all email templates
     * @param brandId The ID of the brand
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param limit A limit on the number of objects to return
     * @param expand Specifies additional metadata to be included in the response
     */
  listEmailTemplates(brandId: string, after?: string, limit?: number, expand?: Array<'settings' | 'customizationCount'>, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a brand by `brandId`  Passing an invalid `brandId` returns a `404 Not Found` status code with the error code `E0000007`.  Not providing `agreeToCustomPrivacyPolicy` with `customPrivacyPolicyUrl` returns a `400 Bad Request` status code with the error code `E0000001`.
     * Replace a brand
     * @param brandId The ID of the brand
     * @param brand
     */
  replaceBrand(brandId: string, brand: BrandRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a theme for a brand
     * Replace a theme
     * @param brandId The ID of the brand
     * @param themeId The ID of the theme
     * @param theme
     */
  replaceBrandTheme(brandId: string, themeId: string, theme: UpdateThemeRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the customized error page. The customized error page appears in your live environment.
     * Replace the customized error page
     * @param brandId The ID of the brand
     * @param errorPage
     */
  replaceCustomizedErrorPage(brandId: string, errorPage: ErrorPage, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the customized sign-in page. The customized sign-in page appears in your live environment.
     * Replace the customized sign-in page
     * @param brandId The ID of the brand
     * @param signInPage
     */
  replaceCustomizedSignInPage(brandId: string, signInPage: SignInPage, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces an email customization using property values  <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is disabled, requests to update a customization for an additional language return a `404 Not Found` error response.
     * Replace an email customization
     * @param brandId The ID of the brand
     * @param templateName The name of the email template
     * @param customizationId The ID of the email customization
     * @param instance Request
     */
  replaceEmailCustomization(brandId: string, templateName: string, customizationId: string, instance?: EmailCustomization, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces an email template\'s settings
     * Replace the email template settings
     * @param brandId The ID of the brand
     * @param templateName The name of the email template
     * @param emailSettings
     */
  replaceEmailSettings(brandId: string, templateName: string, emailSettings?: EmailSettings, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the preview error page. The preview error page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/error/preview`.
     * Replace the preview error page
     * @param brandId The ID of the brand
     * @param errorPage
     */
  replacePreviewErrorPage(brandId: string, errorPage: ErrorPage, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the preview sign-in page. The preview sign-in page contains unpublished changes and isn\'t shown in your live environment. Preview it at `${yourOktaDomain}/login/preview`.
     * Replace the preview sign-in page
     * @param brandId The ID of the brand
     * @param signInPage
     */
  replacePreviewSignInPage(brandId: string, signInPage: SignInPage, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the sign-out page settings
     * Replace the sign-out page settings
     * @param brandId The ID of the brand
     * @param hostedPage
     */
  replaceSignOutPageSettings(brandId: string, hostedPage: HostedPage, _options?: Configuration): Promise<RequestContext>;
  /**
     * Sends a test email to the current user\'s primary and secondary email addresses. The email content is selected based on the following priority: 1. The email customization for the language specified in the `language` query parameter <x-lifecycle class=\"ea\"></x-lifecycle> If Custom languages for Okta Email Templates is enabled and the `language` parameter is an additional language, the test email uses the customization corresponding to the language. 2. The email template\'s default customization 3. The email template\'s default content, translated to the current user\'s language  > **Note:** Super admins can view customized email templates with the **Send a test email** request. However, when custom email templates are sent to super admins as part of actual email notification flows, the customizations aren\'t applied. Instead, the default email template is used. This only applies to super admins.
     * Send a test email
     * @param brandId The ID of the brand
     * @param templateName The name of the email template
     * @param language The language to use for the email. Defaults to the current user\&#39;s language if unspecified.
     */
  sendTestEmail(brandId: string, templateName: string, language?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Uploads and replaces the background image for the theme. The file must be in PNG, JPG, or GIF format and less than 2 MB in size.
     * Upload the background image
     * @param brandId The ID of the brand
     * @param themeId The ID of the theme
     * @param file
     */
  uploadBrandThemeBackgroundImage(brandId: string, themeId: string, file: HttpFile, _options?: Configuration): Promise<RequestContext>;
  /**
     * Uploads and replaces the favicon for the theme
     * Upload the favicon
     * @param brandId The ID of the brand
     * @param themeId The ID of the theme
     * @param file
     */
  uploadBrandThemeFavicon(brandId: string, themeId: string, file: HttpFile, _options?: Configuration): Promise<RequestContext>;
  /**
     * Uploads and replaces the logo for the theme. The file must be in PNG, JPG, or GIF format and less than 100kB in size. For best results use landscape orientation, a transparent background, and a minimum size of 300px by 50px to prevent upscaling.
     * Upload the logo
     * @param brandId The ID of the brand
     * @param themeId The ID of the theme
     * @param file
     */
  uploadBrandThemeLogo(brandId: string, themeId: string, file: HttpFile, _options?: Configuration): Promise<RequestContext>;
}
export declare class CustomizationApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to bulkRemoveEmailAddressBounces
     * @throws ApiException if the response code was not in [200, 299]
     */
  bulkRemoveEmailAddressBounces(response: ResponseContext): Promise<BouncesRemoveListResult>;
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
  getBrand(response: ResponseContext): Promise<BrandWithEmbedded>;
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
  getEmailSettings(response: ResponseContext): Promise<EmailSettingsResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEmailTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
  getEmailTemplate(response: ResponseContext): Promise<EmailTemplateResponse>;
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
  listBrands(response: ResponseContext): Promise<Array<BrandWithEmbedded>>;
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
  listEmailTemplates(response: ResponseContext): Promise<Array<EmailTemplateResponse>>;
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
  replaceEmailSettings(response: ResponseContext): Promise<EmailSettings>;
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
