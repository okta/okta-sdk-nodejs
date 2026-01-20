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
import { CreateRealmRequest } from '../models/CreateRealmRequest';
import { Realm } from '../models/Realm';
import { UpdateRealmRequest } from '../models/UpdateRealmRequest';
/**
 * no description
 */
export declare class RealmApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates a new realm
     * Create a realm
     * @param body
     */
  createRealm(body: CreateRealmRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a realm permanently. This operation can only be performed after disassociating other entities like users and identity providers from a realm.
     * Delete a realm
     * @param realmId ID of the realm
     */
  deleteRealm(realmId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a realm
     * Retrieve a realm
     * @param realmId ID of the realm
     */
  getRealm(realmId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all realms.  > **Note:** The `search` parameter results are sourced from an eventually consistent datasource and may not reflect the latest information.
     * List all realms
     * @param limit Specifies the number of results returned. Defaults to 10 if &#x60;search&#x60; is provided.
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param search Searches for realms with a supported filtering expression for most properties.  Searches for realms can be filtered by the contains (&#x60;co&#x60;) operator. You can only use &#x60;co&#x60; with the &#x60;profile.name&#x60; property. See [Operators](https://developer.okta.com/docs/api/#operators).
     * @param sortBy Specifies the field to sort by and can be any single property (for search queries only)
     * @param sortOrder Specifies sort order: &#x60;asc&#x60; or &#x60;desc&#x60; (for search queries only). This parameter is ignored if &#x60;sortBy&#x60; isn\&#39;t present.
     */
  listRealms(limit?: number, after?: string, search?: string, sortBy?: string, sortOrder?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the realm profile
     * Replace the realm profile
     * @param realmId ID of the realm
     * @param body
     */
  replaceRealm(realmId: string, body: UpdateRealmRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class RealmApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRealm
     * @throws ApiException if the response code was not in [200, 299]
     */
  createRealm(response: ResponseContext): Promise<Realm>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRealm
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteRealm(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRealm
     * @throws ApiException if the response code was not in [200, 299]
     */
  getRealm(response: ResponseContext): Promise<Realm>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRealms
     * @throws ApiException if the response code was not in [200, 299]
     */
  listRealms(response: ResponseContext): Promise<Array<Realm>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceRealm
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceRealm(response: ResponseContext): Promise<Realm>;
}
