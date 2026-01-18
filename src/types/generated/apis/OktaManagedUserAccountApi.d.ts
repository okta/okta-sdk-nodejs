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
import { OktaManagedUserAccount } from '../models/OktaManagedUserAccount';
import { OktaManagedUserAccountForUpdate } from '../models/OktaManagedUserAccountForUpdate';
import { OktaManagedUserAccountRequest } from '../models/OktaManagedUserAccountRequest';
/**
 * no description
 */
export declare class OktaManagedUserAccountApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates a new Okta managed user account for managing an Okta Universal Directory user as a privileged account.  You must specify an existing Okta user in your org with the `oktaUserId` request parameter. You can\'t modify the user\'s email or username because they\'re retrieved from the Okta user profile.
     * Create an Okta managed user account
     * @param body
     */
  createOktaManagedUserAccount(body: OktaManagedUserAccountRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an Okta managed user account specified by ID.  This operation removes the privileged account management for the Okta user, but doesn\'t delete the user from Okta Universal Directory.
     * Delete an Okta managed user account
     * @param id ID of an existing Okta managed user account
     */
  deleteOktaManagedUserAccount(id: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an Okta managed user account specified by ID
     * Retrieve an Okta managed user account
     * @param id ID of an existing Okta managed user account
     */
  getOktaManagedUserAccount(id: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all Okta managed user accounts in your org.  Use the `match` parameter to search for accounts where the account name (`name`), username (`username`),  or email (`email`) contains the specified value.
     * List all Okta managed user accounts
     * @param limit A limit on the number of objects to return
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param match Searches for Okta managed user accounts where the account name (&#x60;name&#x60;) or username (&#x60;username&#x60;) contains the given value
     */
  listOktaManagedUserAccounts(limit?: number, after?: string, match?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates an existing Okta managed user account specified by ID.  You can only update the `name`, `description`, `ownerUserIds`, and `ownerGroupIds` properties. You can\'t modify the `oktaUserId`, `username`, and `email` properties after the account is created.
     * Update an Okta managed user account
     * @param id ID of an existing Okta managed user account
     * @param body
     */
  updateOktaManagedUserAccount(id: string, body?: OktaManagedUserAccountForUpdate, _options?: Configuration): Promise<RequestContext>;
}
export declare class OktaManagedUserAccountApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOktaManagedUserAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
  createOktaManagedUserAccount(response: ResponseContext): Promise<OktaManagedUserAccount>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteOktaManagedUserAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteOktaManagedUserAccount(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOktaManagedUserAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
  getOktaManagedUserAccount(response: ResponseContext): Promise<OktaManagedUserAccount>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOktaManagedUserAccounts
     * @throws ApiException if the response code was not in [200, 299]
     */
  listOktaManagedUserAccounts(response: ResponseContext): Promise<Array<OktaManagedUserAccount>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateOktaManagedUserAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateOktaManagedUserAccount(response: ResponseContext): Promise<OktaManagedUserAccount>;
}
