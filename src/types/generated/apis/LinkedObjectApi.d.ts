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
import { LinkedObject } from '../models/LinkedObject';
/**
 * no description
 */
export declare class LinkedObjectApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates a Linked Object definition
     * Create a linked object definition
     * @param linkedObject
     */
  createLinkedObjectDefinition(linkedObject: LinkedObject, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes the Linked Object definition specified by either the `primary` or `associated` name. The entire definition is removed, regardless of which name that you specify.
     * Delete a linked object definition
     * @param linkedObjectName Primary or Associated name
     */
  deleteLinkedObjectDefinition(linkedObjectName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a Linked Object definition
     * Retrieve a linked object definition
     * @param linkedObjectName Primary or Associated name
     */
  getLinkedObjectDefinition(linkedObjectName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all Linked Object definitions
     * List all linked object definitions
     */
  listLinkedObjectDefinitions(_options?: Configuration): Promise<RequestContext>;
}
export declare class LinkedObjectApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createLinkedObjectDefinition
     * @throws ApiException if the response code was not in [200, 299]
     */
  createLinkedObjectDefinition(response: ResponseContext): Promise<LinkedObject>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteLinkedObjectDefinition
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteLinkedObjectDefinition(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLinkedObjectDefinition
     * @throws ApiException if the response code was not in [200, 299]
     */
  getLinkedObjectDefinition(response: ResponseContext): Promise<LinkedObject>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLinkedObjectDefinitions
     * @throws ApiException if the response code was not in [200, 299]
     */
  listLinkedObjectDefinitions(response: ResponseContext): Promise<Array<LinkedObject>>;
}
