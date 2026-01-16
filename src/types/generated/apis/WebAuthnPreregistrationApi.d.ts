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
import { EnrollmentActivationRequest } from '../models/EnrollmentActivationRequest';
import { EnrollmentActivationResponse } from '../models/EnrollmentActivationResponse';
import { EnrollmentInitializationRequest } from '../models/EnrollmentInitializationRequest';
import { EnrollmentInitializationResponse } from '../models/EnrollmentInitializationResponse';
import { FulfillmentRequest } from '../models/FulfillmentRequest';
import { PinRequest } from '../models/PinRequest';
import { WebAuthnPreregistrationFactor } from '../models/WebAuthnPreregistrationFactor';
/**
 * no description
 */
export declare class WebAuthnPreregistrationApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a preregistered WebAuthn factor. As part of this operation, Okta first decrypts and verifies the factor PIN and enrollment data sent by the fulfillment provider.
     * Activate a preregistered WebAuthn factor
     * @param body Enrollment activation request
     */
  activatePreregistrationEnrollment(body?: EnrollmentActivationRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns the fulfillment error status to a WebAuthn preregistration factor for a user. The `/mark-error` path indicates that the specific `FULFILLMENT_ERRORED` AuthFactor status is set on the enrollment.
     * Assign the fulfillment error status to a WebAuthn preregistration factor
     * @param userId ID of an existing Okta user
     * @param authenticatorEnrollmentId ID for a WebAuthn preregistration factor in Okta
     */
  assignFulfillmentErrorWebAuthnPreregistrationFactor(userId: string, authenticatorEnrollmentId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a specific WebAuthn preregistration factor for a user
     * Delete a WebAuthn preregistration factor
     * @param userId ID of an existing Okta user
     * @param authenticatorEnrollmentId ID for a WebAuthn preregistration factor in Okta
     */
  deleteWebAuthnPreregistrationFactor(userId: string, authenticatorEnrollmentId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Enrolls a preregistered WebAuthn factor. This WebAuthn factor has a longer challenge timeout period to accommodate the fulfillment request process. As part of this operation, Okta generates elliptic curve (EC) key-pairs used to encrypt the factor PIN and enrollment data sent by the fulfillment provider.
     * Enroll a preregistered WebAuthn factor
     * @param body Enrollment initialization request
     */
  enrollPreregistrationEnrollment(body?: EnrollmentInitializationRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Generates a fulfillment request by sending a WebAuthn preregistration event to start the flow. The WebAuthn preregistration integration for Okta Workflows uses a preregistration event to populate the fulfillment request.
     * Generate a fulfillment request
     * @param body Fulfillment request
     */
  generateFulfillmentRequest(body?: FulfillmentRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all WebAuthn preregistration factors for the specified user
     * List all WebAuthn preregistration factors
     * @param userId ID of an existing Okta user
     */
  listWebAuthnPreregistrationFactors(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Sends the decoded PIN for the specified WebAuthn preregistration enrollment. PINs are sent to the user\'s email. To resend the PIN, call this operation again.
     * Send a PIN to user
     * @param body Send PIN request
     */
  sendPin(body?: PinRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class WebAuthnPreregistrationApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activatePreregistrationEnrollment
     * @throws ApiException if the response code was not in [200, 299]
     */
  activatePreregistrationEnrollment(response: ResponseContext): Promise<EnrollmentActivationResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignFulfillmentErrorWebAuthnPreregistrationFactor
     * @throws ApiException if the response code was not in [200, 299]
     */
  assignFulfillmentErrorWebAuthnPreregistrationFactor(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteWebAuthnPreregistrationFactor
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteWebAuthnPreregistrationFactor(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to enrollPreregistrationEnrollment
     * @throws ApiException if the response code was not in [200, 299]
     */
  enrollPreregistrationEnrollment(response: ResponseContext): Promise<EnrollmentInitializationResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateFulfillmentRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
  generateFulfillmentRequest(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listWebAuthnPreregistrationFactors
     * @throws ApiException if the response code was not in [200, 299]
     */
  listWebAuthnPreregistrationFactors(response: ResponseContext): Promise<Array<WebAuthnPreregistrationFactor>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sendPin
     * @throws ApiException if the response code was not in [200, 299]
     */
  sendPin(response: ResponseContext): Promise<void>;
}
