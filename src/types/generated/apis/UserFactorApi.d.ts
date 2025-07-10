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
import { ResendUserFactor } from '../models/ResendUserFactor';
import { UploadYubikeyOtpTokenSeedRequest } from '../models/UploadYubikeyOtpTokenSeedRequest';
import { UserFactor } from '../models/UserFactor';
import { UserFactorActivateRequest } from '../models/UserFactorActivateRequest';
import { UserFactorActivateResponse } from '../models/UserFactorActivateResponse';
import { UserFactorPushTransaction } from '../models/UserFactorPushTransaction';
import { UserFactorSecurityQuestionProfile } from '../models/UserFactorSecurityQuestionProfile';
import { UserFactorSupported } from '../models/UserFactorSupported';
import { UserFactorVerifyRequest } from '../models/UserFactorVerifyRequest';
import { UserFactorVerifyResponse } from '../models/UserFactorVerifyResponse';
import { UserFactorYubikeyOtpToken } from '../models/UserFactorYubikeyOtpToken';
/**
 * no description
 */
export declare class UserFactorApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a factor. Some factors (`call`, `email`, `push`, `sms`, `token:software:totp`, `u2f`, and `webauthn`) require activation to complete the enrollment process.  Okta enforces a rate limit of five activation attempts within five minutes. After a user exceeds the rate limit, Okta returns an error message.  > **Notes:**  > * If the user exceeds their SMS, call, or email factor activation rate limit, then an [OTP resend request](./#tag/UserFactor/operation/resendEnrollFactor) isn\'t allowed for the same factor. > * You can\'t use the Factors API to activate Okta Fastpass (`signed_nonce`) for a user. See [Configure Okta Fastpass](https://help.okta.com/okta_help.htm?type=oie&id=ext-fp-configure).
     * Activate a factor
     * @param userId ID of an existing Okta user
     * @param factorId ID of an existing user factor
     * @param body
     */
  activateFactor(userId: string, factorId: string, body?: UserFactorActivateRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Enrolls a supported factor for the specified user  > **Notes:**  >   * All responses return the enrolled factor with a status of either `PENDING_ACTIVATION` or `ACTIVE`. >   * You can\'t use the Factors API to enroll Okta Fastpass (`signed_nonce`) for a user. See [Configure Okta Fastpass](https://help.okta.com/okta_help.htm?type=oie&id=ext-fp-configure).  #### Additional SMS/Call factor information  * **Rate limits**: Okta may return a `429 Too Many Requests` status code if you attempt to resend an SMS or a voice call challenge (OTP) within the same time window. The current [rate limit](https://developer.okta.com/docs/reference/rate-limits/) is one SMS/CALL challenge per phone number every 30 seconds.  * **Existing phone numbers**: Okta may return a `400 Bad Request` status code if a user attempts to enroll with a different phone number when the user has an existing mobile phone or has an existing phone with voice call capability. A user can enroll only one mobile phone for `sms` and enroll only one voice call capable phone for `call` factor.  #### Additional WebAuthn factor information  * For detailed information on the WebAuthn standard, including an up-to-date list of supported browsers, see [webauthn.me](https://a0.to/webauthnme-okta-docs).  * When you enroll a WebAuthn factor, the `activation` object in `_embedded` contains properties used to help the client to create a new WebAuthn credential for use with Okta. See the [WebAuthn spec for PublicKeyCredentialCreationOptions](https://www.w3.org/TR/webauthn/#dictionary-makecredentialoptions).  #### Additional Custom TOTP factor information  * The enrollment process involves passing both the `factorProfileId` and `sharedSecret` properties for a token.  * A factor profile represents a particular configuration of the Custom TOTP factor. It includes certain properties that match the hardware token that end users possess, such as the HMAC algorithm, passcode length, and time interval. There can be multiple Custom TOTP factor profiles per org, but users can only enroll in one Custom TOTP factor. Admins can [create Custom TOTP factor profiles](https://help.okta.com/okta_help.htm?id=ext-mfa-totp) in the Admin Console. Then, copy the `factorProfileId` from the Admin Console into the API request.  * <x-lifecycle class=\"oie\"></x-lifecycle> For Custom TOTP enrollment, Okta automaticaly enrolls a user with a `token:software:totp` factor and the `push` factor if the user isn\'t currently enrolled with these factors.
     * Enroll a factor
     * @param userId ID of an existing Okta user
     * @param body Factor
     * @param updatePhone If &#x60;true&#x60;, indicates that you are replacing the currently registered phone number for the specified user. This parameter is ignored if the existing phone number is used by an activated factor.
     * @param templateId ID of an existing custom SMS template. See the [SMS Templates API](../Template). This parameter is only used by &#x60;sms&#x60; factors. If the provided ID doesn\&#39;t exist, the default template is used instead.
     * @param tokenLifetimeSeconds Defines how long the token remains valid
     * @param activate If &#x60;true&#x60;, the factor is immediately activated as part of the enrollment. An activation process isn\&#39;t required. Currently auto-activation is supported by &#x60;sms&#x60;, &#x60;call&#x60;, &#x60;email&#x60; and &#x60;token:hotp&#x60; (Custom TOTP) factors.
     * @param acceptLanguage An ISO 639-1 two-letter language code that defines a localized message to send. This parameter is only used by &#x60;sms&#x60; factors. If a localized message doesn\&#39;t exist or the &#x60;templateId&#x60; is incorrect, the default template is used instead.
     */
  enrollFactor(userId: string, body: UserFactor, updatePhone?: boolean, templateId?: string, tokenLifetimeSeconds?: number, activate?: boolean, acceptLanguage?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an existing factor for the specified user
     * Retrieve a factor
     * @param userId ID of an existing Okta user
     * @param factorId ID of an existing user factor
     */
  getFactor(userId: string, factorId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the status of a `push` factor verification transaction   > **Note:**  > The response body for a number matching push challenge to an Okta Verify `push` factor enrollment is different from the response body of a standard push challenge.   > The number matching push challenge [response body](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/getFactorTransactionStatus!c=200&path=1/_embedded&t=response) contains the correct answer for the challenge.  > Use [Verify a factor](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/verifyFactor) to configure which challenge is sent.
     * Retrieve a factor transaction status
     * @param userId ID of an existing Okta user
     * @param factorId ID of an existing user factor
     * @param transactionId ID of an existing factor verification transaction
     */
  getFactorTransactionStatus(userId: string, factorId: string, transactionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the specified YubiKey OTP token by `id`
     * Retrieve a YubiKey OTP token
     * @param tokenId ID of a YubiKey token
     */
  getYubikeyOtpTokenById(tokenId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all enrolled factors for the specified user that are included in the highest priority [authenticator enrollment policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/) that applies to the user.  Only enrolled factors that are `REQUIRED` or `OPTIONAL` in the highest priority authenticator enrollment policy can be returned.  > **Note:** When admins use this endpoint for other users, the authenticator enrollment policy that\'s evaluated can vary depending on how client-specific conditions are configured in the rules of an authenticator enrollment policy. The client-specific conditions of the admin\'s client are used during policy evaluation instead of the client-specific conditions of the user. This can affect which authenticator enrollment policy is evaluated and which factors are returned. > > For example, an admin in Europe lists all enrolled factors for a user in North America. The network zone of the admin\'s client (in Europe) is used during policy evaluation instead of the network zone of the user (in North America).
     * List all enrolled factors
     * @param userId ID of an existing Okta user
     */
  listFactors(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all the supported factors that can be enrolled for the specified user that are included in the highest priority [authenticator enrollment policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/) that applies to the user.  Only factors that are `REQUIRED` or `OPTIONAL` in the highest priority authenticator enrollment policy can be returned.  > **Note:** When admins use this endpoint for other users, the authenticator enrollment policy that\'s evaluated can vary depending on how client-specific conditions are configured in the rules of an authenticator enrollment policy. The client-specific conditions of the admin\'s client are used during policy evaluation instead of the client-specific conditions of the user. This can affect which authenticator enrollment policy is evaluated and which factors are returned. > > For example, an admin in Europe lists all supported factors for a user in North America. The network zone of the admin\'s client (in Europe) is used during policy evaluation instead of the network zone of the user (in North America).
     * List all supported factors
     * @param userId ID of an existing Okta user
     */
  listSupportedFactors(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all available security questions for the specified user
     * List all supported security questions
     * @param userId ID of an existing Okta user
     */
  listSupportedSecurityQuestions(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all YubiKey OTP tokens
     * List all YubiKey OTP tokens
     * @param after Specifies the pagination cursor for the next page of tokens
     * @param expand Embeds the [user](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/) resource if the YubiKey token is assigned to a user and &#x60;expand&#x60; is set to &#x60;user&#x60;
     * @param filter The expression used to filter tokens
     * @param forDownload Returns tokens in a CSV to download instead of in the response. When you use this query parameter, the &#x60;limit&#x60; default changes to 1000.
     * @param limit Specifies the number of results per page
     * @param sortBy The value of how the tokens are sorted
     * @param sortOrder Specifies the sort order, either &#x60;ASC&#x60; or &#x60;DESC&#x60;
     */
  listYubikeyOtpTokens(after?: string, expand?: string, filter?: 'profile.email' | 'profile.serial' | 'activated' | 'user.id' | 'created' | 'status' | 'lastVerified', forDownload?: boolean, limit?: number, sortBy?: 'profile.email' | 'profile.serial' | 'activated' | 'user.id' | 'created' | 'status' | 'lastVerified', sortOrder?: 'ASC' | 'DESC', _options?: Configuration): Promise<RequestContext>;
  /**
     * Resends an `sms`, `call`, or `email` factor challenge as part of an enrollment flow.  For `call` and `sms` factors, Okta enforces a rate limit of one OTP challenge per device every 30 seconds. You can configure your `sms` and `call` factors to use a third-party telephony provider. See the [Telephony inline hook reference](https://developer.okta.com/docs/reference/telephony-hook/). Okta alternates between SMS providers with every resend request to ensure delivery of SMS and Call OTPs across different carriers.  > **Note:** Resend operations aren\'t allowed after a factor exceeds the activation rate limit. See [Activate a factor](./#tag/UserFactor/operation/activateFactor).
     * Resend a factor enrollment
     * @param userId ID of an existing Okta user
     * @param factorId ID of an existing user factor
     * @param resendUserFactor
     * @param templateId ID of an existing custom SMS template. See the [SMS Templates API](../Template). This parameter is only used by &#x60;sms&#x60; factors.
     */
  resendEnrollFactor(userId: string, factorId: string, resendUserFactor: ResendUserFactor, templateId?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unenrolls an existing factor for the specified user. You can\'t unenroll a factor from a deactivated user. Unenrolling a factor allows the user to enroll a new factor.  > **Note:** If you unenroll the `push` or the `signed_nonce` factors, Okta also unenrolls any other `totp`, `signed_nonce`, or Okta Verify `push` factors associated with the user.
     * Unenroll a factor
     * @param userId ID of an existing Okta user
     * @param factorId ID of an existing user factor
     * @param removeRecoveryEnrollment If &#x60;true&#x60;, removes the phone number as both a recovery method and a factor. This parameter is only used for the &#x60;sms&#x60; and &#x60;call&#x60; factors.
     */
  unenrollFactor(userId: string, factorId: string, removeRecoveryEnrollment?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Uploads a seed for a user to enroll a YubiKey OTP
     * Upload a YubiKey OTP seed
     * @param uploadYubikeyOtpTokenSeedRequest
     * @param after Specifies the pagination cursor for the next page of tokens
     * @param expand Embeds the [user](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/) resource if the YubiKey token is assigned to a user and &#x60;expand&#x60; is set to &#x60;user&#x60;
     * @param filter The expression used to filter tokens
     * @param forDownload Returns tokens in a CSV to download instead of in the response. When you use this query parameter, the &#x60;limit&#x60; default changes to 1000.
     * @param limit Specifies the number of results per page
     * @param sortBy The value of how the tokens are sorted
     * @param sortOrder Specifies the sort order, either &#x60;ASC&#x60; or &#x60;DESC&#x60;
     */
  uploadYubikeyOtpTokenSeed(uploadYubikeyOtpTokenSeedRequest: UploadYubikeyOtpTokenSeedRequest, after?: string, expand?: string, filter?: 'profile.email' | 'profile.serial' | 'activated' | 'user.id' | 'created' | 'status' | 'lastVerified', forDownload?: boolean, limit?: number, sortBy?: 'profile.email' | 'profile.serial' | 'activated' | 'user.id' | 'created' | 'status' | 'lastVerified', sortOrder?: 'ASC' | 'DESC', _options?: Configuration): Promise<RequestContext>;
  /**
     * Verifies an OTP for a factor. Some factors (`call`, `email`, `push`, `sms`, `u2f`, and `webauthn`) must first issue a challenge before you can verify the factor. Do this by making a request without a body. After a challenge is issued, make another request to verify the factor.  > **Notes:** > - You can send standard push challenges or number matching push challenges to Okta Verify `push` factor enrollments. Use a [request body](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/verifyFactor!path=2/useNumberMatchingChallenge&t=request) for number matching push challenges.  > - To verify a `push` factor, use the **poll** link returned when you issue the challenge. See [Retrieve a factor transaction status](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/getFactorTransactionStatus).
     * Verify a factor
     * @param userId ID of an existing Okta user
     * @param factorId ID of an existing user factor
     * @param templateId ID of an existing custom SMS template. See the [SMS Templates API](../Template). This parameter is only used by &#x60;sms&#x60; factors.
     * @param tokenLifetimeSeconds Defines how long the token remains valid
     * @param xForwardedFor Public IP address for the user agent
     * @param userAgent Type of user agent detected when the request is made. Required to verify &#x60;push&#x60; factors.
     * @param acceptLanguage An ISO 639-1 two-letter language code that defines a localized message to send. This parameter is only used by &#x60;sms&#x60; factors. If a localized message doesn\&#39;t exist or the &#x60;templateId&#x60; is incorrect, the default template is used instead.
     * @param body Verifies an OTP for a factor. Some factors (&#x60;call&#x60;, &#x60;email&#x60;, &#x60;push&#x60;, &#x60;sms&#x60;, &#x60;u2f&#x60;, and &#x60;webauthn&#x60;) must first issue a challenge before you can verify the factor. Do this by making a request without a body. After a challenge is issued, make another request to verify the factor.  &gt; **Note:** &gt; Unlike standard push challenges that don\&#39;t require a request body, a number matching [&#x60;push&#x60;](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/verifyFactor!path&#x3D;2/useNumberMatchingChallenge&amp;t&#x3D;request) challenge requires a request body. &#x60;useNumberMatchingChallenge&#x60; must be set to &#x60;true&#x60;. &gt; When a number matching challenge is issued for an Okta Verify &#x60;push&#x60; factor enrollment, a &#x60;correctAnswer&#x60; challenge object is returned in the [&#x60;_embedded&#x60;](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserFactor/#tag/UserFactor/operation/verifyFactor!c&#x3D;200&amp;path&#x3D;_embedded&amp;t&#x3D;response) object.
     */
  verifyFactor(userId: string, factorId: string, templateId?: string, tokenLifetimeSeconds?: number, xForwardedFor?: string, userAgent?: string, acceptLanguage?: string, body?: UserFactorVerifyRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class UserFactorApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateFactor
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateFactor(response: ResponseContext): Promise<UserFactorActivateResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to enrollFactor
     * @throws ApiException if the response code was not in [200, 299]
     */
  enrollFactor(response: ResponseContext): Promise<UserFactor>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFactor
     * @throws ApiException if the response code was not in [200, 299]
     */
  getFactor(response: ResponseContext): Promise<UserFactor>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFactorTransactionStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  getFactorTransactionStatus(response: ResponseContext): Promise<UserFactorPushTransaction>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getYubikeyOtpTokenById
     * @throws ApiException if the response code was not in [200, 299]
     */
  getYubikeyOtpTokenById(response: ResponseContext): Promise<UserFactorYubikeyOtpToken>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFactors
     * @throws ApiException if the response code was not in [200, 299]
     */
  listFactors(response: ResponseContext): Promise<Array<UserFactor>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSupportedFactors
     * @throws ApiException if the response code was not in [200, 299]
     */
  listSupportedFactors(response: ResponseContext): Promise<Array<UserFactorSupported>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSupportedSecurityQuestions
     * @throws ApiException if the response code was not in [200, 299]
     */
  listSupportedSecurityQuestions(response: ResponseContext): Promise<Array<UserFactorSecurityQuestionProfile>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listYubikeyOtpTokens
     * @throws ApiException if the response code was not in [200, 299]
     */
  listYubikeyOtpTokens(response: ResponseContext): Promise<Array<UserFactorYubikeyOtpToken>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to resendEnrollFactor
     * @throws ApiException if the response code was not in [200, 299]
     */
  resendEnrollFactor(response: ResponseContext): Promise<ResendUserFactor>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unenrollFactor
     * @throws ApiException if the response code was not in [200, 299]
     */
  unenrollFactor(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadYubikeyOtpTokenSeed
     * @throws ApiException if the response code was not in [200, 299]
     */
  uploadYubikeyOtpTokenSeed(response: ResponseContext): Promise<UserFactorYubikeyOtpToken>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to verifyFactor
     * @throws ApiException if the response code was not in [200, 299]
     */
  verifyFactor(response: ResponseContext): Promise<UserFactorVerifyResponse>;
}
