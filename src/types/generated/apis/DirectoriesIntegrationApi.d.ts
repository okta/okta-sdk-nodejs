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
import { AgentAction } from '../models/AgentAction';
/**
 * no description
 */
export declare class DirectoriesIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Updates an Active Directory group membership directly in Active Directory  > **Note:** See **Before you begin: Active Directory integration with the following setup** in the [Use Okta Access Certifications to manage AD group membership](https://help.okta.com/okta_help.htm?type=oie&id=ad-bidirectional-group-mgt-configure) product documentation.
     * Update an Active Directory group membership
     * @param appInstanceId ID of the Active Directory app instance in Okta
     * @param agentAction
     */
  updateADGroupMembership(appInstanceId: string, agentAction: AgentAction, _options?: Configuration): Promise<RequestContext>;
}
export declare class DirectoriesIntegrationApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateADGroupMembership
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateADGroupMembership(response: ResponseContext): Promise<void>;
}
