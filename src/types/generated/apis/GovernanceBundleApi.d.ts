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
import { BundleEntitlementsResponse } from '../models/BundleEntitlementsResponse';
import { EntitlementValuesResponse } from '../models/EntitlementValuesResponse';
import { GovernanceBundle } from '../models/GovernanceBundle';
import { GovernanceBundleCreateRequest } from '../models/GovernanceBundleCreateRequest';
import { GovernanceBundleUpdateRequest } from '../models/GovernanceBundleUpdateRequest';
import { GovernanceBundlesResponse } from '../models/GovernanceBundlesResponse';
import { OptInStatusResponse } from '../models/OptInStatusResponse';
/**
 * no description
 */
export declare class GovernanceBundleApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Creates a governance bundle of entitlements for the Admin Console
     * Create a governance bundle
     * @param governanceBundleCreateRequest
     */
  createGovernanceBundle(governanceBundleCreateRequest: GovernanceBundleCreateRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an Admin Console governance bundle
     * Delete a governance bundle
     * @param bundleId The &#x60;id&#x60; of a bundle
     */
  deleteGovernanceBundle(bundleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a governance bundle for the Admin Console
     * Retrieve a governance bundle
     * @param bundleId The &#x60;id&#x60; of a bundle
     */
  getGovernanceBundle(bundleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the entitlement management opt-in status for the Admin Console
     * Retrieve the Admin Console opt-in status
     */
  getOptInStatus(_options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all entitlement values that are specific to a governance bundle entitlement
     * List all values for a governance bundle entitlement
     * @param bundleId The &#x60;id&#x60; of a bundle
     * @param entitlementId The &#x60;id&#x60; of a bundle entitlement
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param limit A limit on the number of objects to return
     */
  listBundleEntitlementValues(bundleId: string, entitlementId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all entitlements specific to a governance bundle
     * List all entitlements for a governance bundle
     * @param bundleId The &#x60;id&#x60; of a bundle
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param limit A limit on the number of objects to return
     */
  listBundleEntitlements(bundleId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all governance bundles for the Admin Console in your org
     * List all governance bundles
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param limit A limit on the number of objects to return
     */
  listGovernanceBundles(after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Opts in the Admin Console to entitlement management
     * Opt in the Admin Console to entitlement management
     */
  optIn(_options?: Configuration): Promise<RequestContext>;
  /**
     * Opts out the Admin Console from entitlement management
     * Opt out the Admin Console from entitlement management
     */
  optOut(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the properties of a governance bundle for the Admin Console
     * Replace a governance bundle
     * @param bundleId The &#x60;id&#x60; of a bundle
     * @param governanceBundleUpdateRequest
     */
  replaceGovernanceBundle(bundleId: string, governanceBundleUpdateRequest: GovernanceBundleUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class GovernanceBundleApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createGovernanceBundle
     * @throws ApiException if the response code was not in [200, 299]
     */
  createGovernanceBundle(response: ResponseContext): Promise<GovernanceBundle>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteGovernanceBundle
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteGovernanceBundle(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getGovernanceBundle
     * @throws ApiException if the response code was not in [200, 299]
     */
  getGovernanceBundle(response: ResponseContext): Promise<GovernanceBundle>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOptInStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  getOptInStatus(response: ResponseContext): Promise<OptInStatusResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listBundleEntitlementValues
     * @throws ApiException if the response code was not in [200, 299]
     */
  listBundleEntitlementValues(response: ResponseContext): Promise<EntitlementValuesResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listBundleEntitlements
     * @throws ApiException if the response code was not in [200, 299]
     */
  listBundleEntitlements(response: ResponseContext): Promise<BundleEntitlementsResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGovernanceBundles
     * @throws ApiException if the response code was not in [200, 299]
     */
  listGovernanceBundles(response: ResponseContext): Promise<GovernanceBundlesResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to optIn
     * @throws ApiException if the response code was not in [200, 299]
     */
  optIn(response: ResponseContext): Promise<OptInStatusResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to optOut
     * @throws ApiException if the response code was not in [200, 299]
     */
  optOut(response: ResponseContext): Promise<OptInStatusResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceGovernanceBundle
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceGovernanceBundle(response: ResponseContext): Promise<GovernanceBundle>;
}
