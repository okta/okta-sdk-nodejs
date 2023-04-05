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
import { BehaviorRule } from '../models/BehaviorRule';
/**
 * no description
 */
export declare class BehaviorApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a behavior detection rule
     * Activate a Behavior Detection Rule
     * @param behaviorId id of the Behavior Detection Rule
     */
  activateBehaviorDetectionRule(behaviorId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a new behavior detection rule
     * Create a Behavior Detection Rule
     * @param rule
     */
  createBehaviorDetectionRule(rule: BehaviorRule, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a behavior detection rule
     * Deactivate a Behavior Detection Rule
     * @param behaviorId id of the Behavior Detection Rule
     */
  deactivateBehaviorDetectionRule(behaviorId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a Behavior Detection Rule by `behaviorId`
     * Delete a Behavior Detection Rule
     * @param behaviorId id of the Behavior Detection Rule
     */
  deleteBehaviorDetectionRule(behaviorId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a Behavior Detection Rule by `behaviorId`
     * Retrieve a Behavior Detection Rule
     * @param behaviorId id of the Behavior Detection Rule
     */
  getBehaviorDetectionRule(behaviorId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all behavior detection rules with pagination support
     * List all Behavior Detection Rules
     */
  listBehaviorDetectionRules(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a Behavior Detection Rule by `behaviorId`
     * Replace a Behavior Detection Rule
     * @param behaviorId id of the Behavior Detection Rule
     * @param rule
     */
  replaceBehaviorDetectionRule(behaviorId: string, rule: BehaviorRule, _options?: Configuration): Promise<RequestContext>;
}
export declare class BehaviorApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateBehaviorDetectionRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateBehaviorDetectionRule(response: ResponseContext): Promise<BehaviorRule>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBehaviorDetectionRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  createBehaviorDetectionRule(response: ResponseContext): Promise<BehaviorRule>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateBehaviorDetectionRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateBehaviorDetectionRule(response: ResponseContext): Promise<BehaviorRule>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteBehaviorDetectionRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteBehaviorDetectionRule(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBehaviorDetectionRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  getBehaviorDetectionRule(response: ResponseContext): Promise<BehaviorRule>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listBehaviorDetectionRules
     * @throws ApiException if the response code was not in [200, 299]
     */
  listBehaviorDetectionRules(response: ResponseContext): Promise<Array<BehaviorRule>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceBehaviorDetectionRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceBehaviorDetectionRule(response: ResponseContext): Promise<BehaviorRule>;
}
