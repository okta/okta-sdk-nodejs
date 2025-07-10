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
import { GetDRStatus200Response } from '../models/GetDRStatus200Response';
import { StartOrgFailback200Response } from '../models/StartOrgFailback200Response';
import { StartOrgFailbackRequest } from '../models/StartOrgFailbackRequest';
import { StartOrgFailover200Response } from '../models/StartOrgFailover200Response';
import { StartOrgFailoverRequest } from '../models/StartOrgFailoverRequest';
/**
 * no description
 */
export declare class DisasterRecoveryApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Retrieves the failover or failback status for all the domains for your org
     * Retrieve the disaster recovery status for all domains for your org
     */
  getDRStatus(_options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the failover or failback status for the domain specified in the request path
     * Retrieve the disaster recovery status for a domain
     * @param domain The Okta domain name of your org or one of your custom domains
     */
  getDRStatusForDomain(domain: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Starts the failback of your org
     * Start the failback of your org
     * @param startOrgFailbackRequest The request body is optional. You can specify a list of domains to failback, an empty object (&#x60;{}&#x60;), or no payload.
     */
  startOrgFailback(startOrgFailbackRequest?: StartOrgFailbackRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Starts the failover of your org
     * Start the failover of your org
     * @param startOrgFailoverRequest The request body is optional. You can specify a list of domains to failover, an empty object (&#x60;{}&#x60;), or no payload.
     */
  startOrgFailover(startOrgFailoverRequest?: StartOrgFailoverRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class DisasterRecoveryApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDRStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  getDRStatus(response: ResponseContext): Promise<GetDRStatus200Response>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDRStatusForDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
  getDRStatusForDomain(response: ResponseContext): Promise<GetDRStatus200Response>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to startOrgFailback
     * @throws ApiException if the response code was not in [200, 299]
     */
  startOrgFailback(response: ResponseContext): Promise<StartOrgFailback200Response>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to startOrgFailover
     * @throws ApiException if the response code was not in [200, 299]
     */
  startOrgFailover(response: ResponseContext): Promise<StartOrgFailover200Response>;
}
