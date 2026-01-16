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
import { ExecuteInlineHook200Response } from '../models/ExecuteInlineHook200Response';
import { ExecuteInlineHookRequest } from '../models/ExecuteInlineHookRequest';
import { InlineHook } from '../models/InlineHook';
import { InlineHookCreate } from '../models/InlineHookCreate';
import { InlineHookCreateResponse } from '../models/InlineHookCreateResponse';
import { InlineHookReplace } from '../models/InlineHookReplace';
/**
 * no description
 */
export declare class InlineHookApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates the inline hook by `inlineHookId`
     * Activate an inline hook
     * @param inlineHookId &#x60;id&#x60; of the inline hook
     */
  activateInlineHook(inlineHookId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates an inline hook  This endpoint creates an inline hook for your org in an `ACTIVE` status. You need to pass an inline hooks object in the JSON payload of your request.  That object represents the set of required information about the inline hook that you\'re registering, including:  * The URI of your external service endpoint * The type of inline hook you\'re registering * The type of authentication you\'re registering  There are two authentication options that you can configure for your inline hook: HTTP headers and OAuth 2.0 tokens.  HTTP headers let you specify a secret API key that you want Okta to pass to your external service endpoint (so that your external service can check for its presence as a security measure).  >**Note:** The API key that you set here is unrelated to the Okta API token you must supply when making calls to Okta APIs.  You can also optionally specify extra headers that you want Okta to pass to your external service with each call.  To configure HTTP header authentication, see parameters for the `config` object.  OAuth 2.0 tokens provide enhanced security between Okta and your external service. You can configure these tokens for the following types&mdash;client secret and private key.  >**Note:** Your external service\'s endpoint needs to be a valid HTTPS endpoint. The URI you specify should always begin with `https://`.  The total number of inline hooks that you can create in an Okta org is limited to 50, which is a combined total for any combination of inline hook types.
     * Create an inline hook
     * @param inlineHook
     */
  createInlineHook(inlineHook: InlineHookCreate, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates the inline hook by `inlineHookId`
     * Deactivate an inline hook
     * @param inlineHookId &#x60;id&#x60; of the inline hook
     */
  deactivateInlineHook(inlineHookId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an inline hook by `inlineHookId`. After it\'s deleted, the inline hook is unrecoverable. As a safety precaution, only inline hooks with a status of `INACTIVE` are eligible for deletion.
     * Delete an inline hook
     * @param inlineHookId &#x60;id&#x60; of the inline hook
     */
  deleteInlineHook(inlineHookId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Executes the inline hook that matches the provided `inlineHookId` by using the request body as the input. This inline hook sends the provided  data through the `channel` object and returns a response if it matches the correct data contract. Otherwise it returns an error. You need to  construct a JSON payload that matches the payloads that Okta would send to your external service for this inline hook type.  A timeout of three seconds is enforced on all outbound requests, with one retry in the event of a timeout or an error response from the remote system.  If a successful response isn\'t received after the request, a 400 error is returned with more information about what failed.  >**Note:** This execution endpoint isn\'t tied to any other functionality in Okta, and you should only use it for testing purposes.
     * Execute an inline hook
     * @param inlineHookId &#x60;id&#x60; of the inline hook
     * @param payloadData
     */
  executeInlineHook(inlineHookId: string, payloadData: ExecuteInlineHookRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an inline hook by `inlineHookId`
     * Retrieve an inline hook
     * @param inlineHookId &#x60;id&#x60; of the inline hook
     */
  getInlineHook(inlineHookId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all inline hooks or all inline hooks of a specific type.  When listing a specific inline hook, you need to specify its type. The following types are currently supported:   | Type Value                         | Name                                                           |   |------------------------------------|----------------------------------------------------------------|   | `com.okta.import.transform`        | [User import inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createUserImportInlineHook)       |   | `com.okta.oauth2.tokens.transform` | [Token inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createTokenInlineHook)               |   | `com.okta.saml.tokens.transform`   | [SAML assertion inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createSAMLAssertionInlineHook)       |   | `com.okta.telephony.provider`      | [Telephony inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createTelephonyInlineHook) |   | `com.okta.user.credential.password.import` | [Password import inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/createPasswordImportInlineHook)|   | `com.okta.user.pre-registration`   | [Registration inline hook](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/InlineHook/#tag/InlineHook/operation/create-registration-hook) |
     * List all inline hooks
     * @param type One of the supported inline hook types
     */
  listInlineHooks(type?: 'com.okta.import.transform' | 'com.okta.oauth2.tokens.transform' | 'com.okta.saml.tokens.transform' | 'com.okta.user.credential.password.import' | 'com.okta.user.pre-registration' | 'com.okta.telephony.provider', _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces an inline hook by `inlineHookId`. The submitted inline hook properties replace the existing properties after passing validation.  >**Note:** Some properties are immutable and can\'t be updated.
     * Replace an inline hook
     * @param inlineHookId &#x60;id&#x60; of the inline hook
     * @param inlineHook
     */
  replaceInlineHook(inlineHookId: string, inlineHook: InlineHookReplace, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates an inline hook by `inlineHookId`
     * Update an inline hook
     * @param inlineHookId &#x60;id&#x60; of the inline hook
     * @param inlineHook
     */
  updateInlineHook(inlineHookId: string, inlineHook: InlineHookReplace, _options?: Configuration): Promise<RequestContext>;
}
export declare class InlineHookApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateInlineHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateInlineHook(response: ResponseContext): Promise<InlineHook>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createInlineHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  createInlineHook(response: ResponseContext): Promise<InlineHookCreateResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateInlineHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateInlineHook(response: ResponseContext): Promise<InlineHook>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteInlineHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteInlineHook(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to executeInlineHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  executeInlineHook(response: ResponseContext): Promise<ExecuteInlineHook200Response>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getInlineHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  getInlineHook(response: ResponseContext): Promise<InlineHook>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listInlineHooks
     * @throws ApiException if the response code was not in [200, 299]
     */
  listInlineHooks(response: ResponseContext): Promise<Array<InlineHook>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceInlineHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceInlineHook(response: ResponseContext): Promise<InlineHook>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateInlineHook
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateInlineHook(response: ResponseContext): Promise<InlineHook>;
}
