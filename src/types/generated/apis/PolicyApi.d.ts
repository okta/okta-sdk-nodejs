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
import { Policy } from '../models/Policy';
import { PolicyRule } from '../models/PolicyRule';
/**
 * no description
 */
export declare class PolicyApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a policy.
     * Activate Policy
     * @param policyId
     */
  activatePolicy(policyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Activates a policy rule.
     * Activate Policy Rule
     * @param policyId
     * @param ruleId
     */
  activatePolicyRule(policyId: string, ruleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a policy.
     * Create Policy
     * @param policy
     * @param activate
     */
  createPolicy(policy: Policy, activate?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a policy rule.
     * Create Policy Rule
     * @param policyId
     * @param policyRule
     */
  createPolicyRule(policyId: string, policyRule: PolicyRule, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a policy.
     * Deactivate Policy
     * @param policyId
     */
  deactivatePolicy(policyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a policy rule.
     * Deactivate Policy Rule
     * @param policyId
     * @param ruleId
     */
  deactivatePolicyRule(policyId: string, ruleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Removes a policy.
     * Delete Policy
     * @param policyId
     */
  deletePolicy(policyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Removes a policy rule.
     * Delete Policy Rule
     * @param policyId
     * @param ruleId
     */
  deletePolicyRule(policyId: string, ruleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Gets a policy.
     * Get Policy
     * @param policyId
     * @param expand
     */
  getPolicy(policyId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Gets a policy rule.
     * Get Policy Rule
     * @param policyId
     * @param ruleId
     */
  getPolicyRule(policyId: string, ruleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Gets all policies with the specified type.
     * List Policies
     * @param type
     * @param status
     * @param expand
     */
  listPolicies(type: string, status?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Enumerates all policy rules.
     * List Policy Rules
     * @param policyId
     */
  listPolicyRules(policyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a policy.
     * Update Policy
     * @param policyId
     * @param policy
     */
  updatePolicy(policyId: string, policy: Policy, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a policy rule.
     * Update Policy Rule
     * @param policyId
     * @param ruleId
     * @param policyRule
     */
  updatePolicyRule(policyId: string, ruleId: string, policyRule: PolicyRule, _options?: Configuration): Promise<RequestContext>;
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
     * @params response Response returned by the server for a request to createPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  createPolicy(response: ResponseContext): Promise<Policy>;
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
     * @params response Response returned by the server for a request to listPolicyRules
     * @throws ApiException if the response code was not in [200, 299]
     */
  listPolicyRules(response: ResponseContext): Promise<Array<PolicyRule>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  updatePolicy(response: ResponseContext): Promise<Policy>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePolicyRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  updatePolicyRule(response: ResponseContext): Promise<PolicyRule>;
}
