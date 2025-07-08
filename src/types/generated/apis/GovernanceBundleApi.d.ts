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
     * Creates a Governance Bundle for the Admin Console in RAMP
     * Create a governance bundle for the Admin Console in RAMP
     * @param governanceBundleCreateRequest
     */
  createGovernanceBundle(governanceBundleCreateRequest: GovernanceBundleCreateRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a Governance Bundle from RAMP
     * Delete a governance bundle from RAMP
     * @param bundleId The &#x60;id&#x60; of a bundle
     */
  deleteGovernanceBundle(bundleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a Governance Bundle from RAMP
     * Retrieve a governance bundle from RAMP
     * @param bundleId The &#x60;id&#x60; of a bundle
     */
  getGovernanceBundle(bundleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the opt-in status of the Admin Console from RAMP
     * Retrieve the opt-in status from RAMP
     */
  getOptInStatus(_options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all Entitlement Values specific to a Bundle Entitlement
     * List all entitlement values for a bundle entitlement
     * @param bundleId The &#x60;id&#x60; of a bundle
     * @param entitlementId The &#x60;id&#x60; of a bundle entitlement
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     * @param limit A limit on the number of objects to return
     */
  listBundleEntitlementValues(bundleId: string, entitlementId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all Entitlements specific to a Governance Bundle
     * List all entitlements for a governance bundle
     * @param bundleId The &#x60;id&#x60; of a bundle
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     * @param limit A limit on the number of objects to return
     */
  listBundleEntitlements(bundleId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all Governance Bundles for the Admin Console in your org
     * List all governance bundles for the Admin Console
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     * @param limit A limit on the number of objects to return
     */
  listGovernanceBundles(after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Opts in the Admin Console to RAMP
     * Opt in the Admin Console to RAMP
     */
  optIn(_options?: Configuration): Promise<RequestContext>;
  /**
     * Opts out the Admin Console from RAMP
     * Opt out the Admin Console from RAMP
     */
  optOut(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a Governance Bundle in RAMP
     * Replace a governance bundle in RAMP
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
