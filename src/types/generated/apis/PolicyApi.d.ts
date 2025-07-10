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
import { Application } from '../models/Application';
import { CreateOrUpdatePolicy } from '../models/CreateOrUpdatePolicy';
import { Policy } from '../models/Policy';
import { PolicyMapping } from '../models/PolicyMapping';
import { PolicyMappingRequest } from '../models/PolicyMappingRequest';
import { PolicyRule } from '../models/PolicyRule';
import { SimulatePolicyBody } from '../models/SimulatePolicyBody';
import { SimulatePolicyResponse } from '../models/SimulatePolicyResponse';
/**
 * no description
 */
export declare class PolicyApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a policy
     * Activate a policy
     * @param policyId &#x60;id&#x60; of the Policy
     */
  activatePolicy(policyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Activates a policy rule identified by `policyId` and `ruleId`
     * Activate a policy rule
     * @param policyId &#x60;id&#x60; of the Policy
     * @param ruleId &#x60;id&#x60; of the policy rule
     */
  activatePolicyRule(policyId: string, ruleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Clones an existing policy
     * Clone an existing policy
     * @param policyId &#x60;id&#x60; of the Policy
     */
  clonePolicy(policyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a policy. There are many types of policies that you can create. See [Policies](https://developer.okta.com/docs/concepts/policies/) for an overview of the types of policies available and links to more indepth information.
     * Create a policy
     * @param policy
     * @param activate This query parameter is only valid for Classic Engine orgs.
     */
  createPolicy(policy: CreateOrUpdatePolicy, activate?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a policy rule  > **Note:** You can\'t create additional rules for the `PROFILE_ENROLLMENT` or `POST_AUTH_SESSION` policies.
     * Create a policy rule
     * @param policyId &#x60;id&#x60; of the Policy
     * @param policyRule
     * @param limit Defines the number of policy rules returned. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     * @param activate Set this parameter to &#x60;false&#x60; to create an &#x60;INACTIVE&#x60; rule.
     */
  createPolicyRule(policyId: string, policyRule: PolicyRule, limit?: string, activate?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a policy or policy rule simulation. The access simulation evaluates policy and policy rules based on the existing policy rule configuration. The evaluation result simulates what the real-world authentication flow is and what policy rules have been applied or matched to the authentication flow.
     * Create a policy simulation
     * @param simulatePolicy
     * @param expand Use &#x60;expand&#x3D;EVALUATED&#x60; to include a list of evaluated but not matched policies and policy rules. Use &#x60;expand&#x3D;RULE&#x60; to include details about why a rule condition wasn\&#39;t matched.
     */
  createPolicySimulation(simulatePolicy: Array<SimulatePolicyBody>, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a policy
     * Deactivate a policy
     * @param policyId &#x60;id&#x60; of the Policy
     */
  deactivatePolicy(policyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a policy rule identified by `policyId` and `ruleId`
     * Deactivate a policy rule
     * @param policyId &#x60;id&#x60; of the Policy
     * @param ruleId &#x60;id&#x60; of the policy rule
     */
  deactivatePolicyRule(policyId: string, ruleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a policy
     * Delete a policy
     * @param policyId &#x60;id&#x60; of the Policy
     */
  deletePolicy(policyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes the resource mapping for a policy identified by `policyId` and `mappingId`
     * Delete a policy resource mapping
     * @param policyId &#x60;id&#x60; of the Policy
     * @param mappingId &#x60;id&#x60; of the policy resource Mapping
     */
  deletePolicyResourceMapping(policyId: string, mappingId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a policy rule identified by `policyId` and `ruleId`
     * Delete a policy rule
     * @param policyId &#x60;id&#x60; of the Policy
     * @param ruleId &#x60;id&#x60; of the policy rule
     */
  deletePolicyRule(policyId: string, ruleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a policy
     * Retrieve a policy
     * @param policyId &#x60;id&#x60; of the Policy
     * @param expand
     */
  getPolicy(policyId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a resource mapping for a policy identified by `policyId` and `mappingId`
     * Retrieve a policy resource mapping
     * @param policyId &#x60;id&#x60; of the Policy
     * @param mappingId &#x60;id&#x60; of the policy resource Mapping
     */
  getPolicyMapping(policyId: string, mappingId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a policy rule
     * Retrieve a policy rule
     * @param policyId &#x60;id&#x60; of the Policy
     * @param ruleId &#x60;id&#x60; of the policy rule
     */
  getPolicyRule(policyId: string, ruleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all policies with the specified type
     * List all policies
     * @param type Specifies the type of policy to return. The following policy types are available only with the Okta Identity Engine - &#x60;ACCESS_POLICY&#x60;, &#x60;PROFILE_ENROLLMENT&#x60;, &#x60;POST_AUTH_SESSION&#x60;, and &#x60;ENTITY_RISK&#x60;.
     * @param status Refines the query by the &#x60;status&#x60; of the policy - &#x60;ACTIVE&#x60; or &#x60;INACTIVE&#x60;
     * @param q Refines the query by policy name prefix (startWith method) passed in as &#x60;q&#x3D;string&#x60;
     * @param expand
     * @param sortBy Refines the query by sorting on the policy &#x60;name&#x60; in ascending order
     * @param limit Defines the number of policies returned, see [Pagination](https://developer.okta.com/docs/api/#pagination)
     * @param resourceId Reference to the associated authorization server
     * @param after End page cursor for pagination, see [Pagination](https://developer.okta.com/docs/api/#pagination)
     */
  listPolicies(type: 'OKTA_SIGN_ON' | 'PASSWORD' | 'MFA_ENROLL' | 'IDP_DISCOVERY' | 'ACCESS_POLICY' | 'PROFILE_ENROLLMENT' | 'POST_AUTH_SESSION' | 'ENTITY_RISK', status?: string, q?: string, expand?: string, sortBy?: string, limit?: string, resourceId?: string, after?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all applications mapped to a policy identified by `policyId`  > **Note:** Use [List all resources mapped to a Policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/#tag/Policy/operation/listPolicyMappings) to list all applications mapped to a policy.
     * List all apps mapped to a policy
     * @param policyId &#x60;id&#x60; of the Policy
     */
  listPolicyApps(policyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all resources mapped to a policy identified by `policyId`
     * List all resources mapped to a policy
     * @param policyId &#x60;id&#x60; of the Policy
     */
  listPolicyMappings(policyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all policy rules
     * List all policy rules
     * @param policyId &#x60;id&#x60; of the Policy
     * @param limit Defines the number of policy rules returned. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     */
  listPolicyRules(policyId: string, limit?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Maps a resource to a policy identified by `policyId`
     * Map a resource to a policy
     * @param policyId &#x60;id&#x60; of the Policy
     * @param policyMappingRequest
     */
  mapResourceToPolicy(policyId: string, policyMappingRequest: PolicyMappingRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the properties of a policy identified by `policyId`
     * Replace a policy
     * @param policyId &#x60;id&#x60; of the Policy
     * @param policy
     */
  replacePolicy(policyId: string, policy: CreateOrUpdatePolicy, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the properties for a policy rule identified by `policyId` and `ruleId`
     * Replace a policy rule
     * @param policyId &#x60;id&#x60; of the Policy
     * @param ruleId &#x60;id&#x60; of the policy rule
     * @param policyRule
     */
  replacePolicyRule(policyId: string, ruleId: string, policyRule: PolicyRule, _options?: Configuration): Promise<RequestContext>;
}
export declare class PolicyApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activatePolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  activatePolicy(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activatePolicyRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  activatePolicyRule(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to clonePolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  clonePolicy(response: ResponseContext): Promise<Policy>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  createPolicy(response: ResponseContext): Promise<CreateOrUpdatePolicy>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPolicyRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  createPolicyRule(response: ResponseContext): Promise<PolicyRule>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPolicySimulation
     * @throws ApiException if the response code was not in [200, 299]
     */
  createPolicySimulation(response: ResponseContext): Promise<SimulatePolicyResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivatePolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivatePolicy(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivatePolicyRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivatePolicyRule(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  deletePolicy(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePolicyResourceMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
  deletePolicyResourceMapping(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePolicyRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  deletePolicyRule(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  getPolicy(response: ResponseContext): Promise<Policy>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPolicyMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
  getPolicyMapping(response: ResponseContext): Promise<PolicyMapping>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPolicyRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  getPolicyRule(response: ResponseContext): Promise<PolicyRule>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPolicies
     * @throws ApiException if the response code was not in [200, 299]
     */
  listPolicies(response: ResponseContext): Promise<Array<Policy>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPolicyApps
     * @throws ApiException if the response code was not in [200, 299]
     */
  listPolicyApps(response: ResponseContext): Promise<Array<Application>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPolicyMappings
     * @throws ApiException if the response code was not in [200, 299]
     */
  listPolicyMappings(response: ResponseContext): Promise<Array<PolicyMapping>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPolicyRules
     * @throws ApiException if the response code was not in [200, 299]
     */
  listPolicyRules(response: ResponseContext): Promise<Array<PolicyRule>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to mapResourceToPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  mapResourceToPolicy(response: ResponseContext): Promise<PolicyMapping>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replacePolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  replacePolicy(response: ResponseContext): Promise<Policy>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replacePolicyRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  replacePolicyRule(response: ResponseContext): Promise<PolicyRule>;
}
