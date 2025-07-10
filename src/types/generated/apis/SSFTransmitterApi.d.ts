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
import { GetSsfStreams200Response } from '../models/GetSsfStreams200Response';
import { StreamConfiguration } from '../models/StreamConfiguration';
import { StreamConfigurationCreateRequest } from '../models/StreamConfigurationCreateRequest';
import { StreamStatus } from '../models/StreamStatus';
import { StreamVerificationRequest } from '../models/StreamVerificationRequest';
import { WellKnownSSFMetadata } from '../models/WellKnownSSFMetadata';
/**
 * no description
 */
export declare class SSFTransmitterApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates an SSF Stream for an event receiver to start receiving security events in the form of Security Event Tokens (SETs) from Okta.  An SSF Stream is associated with the Client ID of the OAuth 2.0 access token used to create the stream. The Client ID is provided by Okta for an [OAuth 2.0 app integration](https://help.okta.com/okta_help.htm?id=ext_Apps_App_Integration_Wizard-oidc). One SSF Stream is allowed for each Client ID, hence, one SSF Stream is allowed for each app integration in Okta.  A maximum of 10 SSF Stream configurations can be created for one org.
     * Create an SSF stream
     * @param instance
     */
  createSsfStream(instance: StreamConfigurationCreateRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes the specified SSF Stream.  If the `stream_id` is not provided in the query string, the associated stream with the Client ID (through the request OAuth 2.0 access token) is deleted. Otherwise, the SSF Stream with the `stream_id` is deleted, if found.
     * Delete an SSF stream
     * @param streamId The ID of the specified SSF Stream configuration
     */
  deleteSsfStream(streamId?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the status of an SSF Stream. The status indicates whether the transmitter is able to transmit events over the stream.
     * Retrieve the SSF Stream status
     * @param streamId The ID of the specified SSF Stream configuration
     */
  getSsfStreamStatus(streamId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves either a list of all known SSF Stream configurations or the individual configuration if specified by ID.  As Stream configurations are tied to a Client ID, only the Stream associated with the Client ID of the request OAuth 2.0 access token can be viewed.
     * Retrieve the SSF stream configuration(s)
     * @param streamId The ID of the specified SSF Stream configuration
     */
  getSsfStreams(streamId?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves SSF Transmitter configuration metadata. This includes all supported endpoints and key information about certain properties of the Okta org as the transmitter, such as `delivery_methods_supported`, `issuer`, and `jwks_uri`.
     * Retrieve the SSF transmitter metadata
     */
  getWellknownSsfMetadata(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces all properties for an existing SSF Stream configuration.  If the `stream_id` isn\'t provided in the request body, the associated stream with the Client ID (through the request OAuth 2.0 access token) is replaced.
     * Replace an SSF stream
     * @param instance
     */
  replaceSsfStream(instance: StreamConfiguration, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates properties for an existing SSF Stream configuration.  If the `stream_id` isn\'t provided in the request body, the associated stream with the Client ID (through the request OAuth 2.0 access token) is updated.
     * Update an SSF stream
     * @param instance
     */
  updateSsfStream(instance: StreamConfiguration, _options?: Configuration): Promise<RequestContext>;
  /**
     * Verifies an SSF Stream by publishing a Verification Event requested by a Security Events Provider.  > **Note:** A successful response doesn\'t indicate that the Verification Event     was transmitted successfully, only that Okta has transmitted the event or will     at some point in the future. The SSF Receiver is responsible for validating and acknowledging     successful transmission of the request by responding with HTTP Response Status Code 202.
     * Verify an SSF stream
     * @param instance
     */
  verifySsfStream(instance: StreamVerificationRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class SSFTransmitterApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSsfStream
     * @throws ApiException if the response code was not in [200, 299]
     */
  createSsfStream(response: ResponseContext): Promise<StreamConfiguration>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSsfStream
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteSsfStream(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSsfStreamStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  getSsfStreamStatus(response: ResponseContext): Promise<StreamStatus>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSsfStreams
     * @throws ApiException if the response code was not in [200, 299]
     */
  getSsfStreams(response: ResponseContext): Promise<GetSsfStreams200Response>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWellknownSsfMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
  getWellknownSsfMetadata(response: ResponseContext): Promise<WellKnownSSFMetadata>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceSsfStream
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceSsfStream(response: ResponseContext): Promise<StreamConfiguration>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateSsfStream
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateSsfStream(response: ResponseContext): Promise<StreamConfiguration>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to verifySsfStream
     * @throws ApiException if the response code was not in [200, 299]
     */
  verifySsfStream(response: ResponseContext): Promise<void>;
}
