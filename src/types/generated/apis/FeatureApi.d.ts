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
import { Feature } from '../models/Feature';
/**
 * no description
 */
export declare class FeatureApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Retrieves a feature
     * Retrieve a Feature
     * @param featureId
     */
  getFeature(featureId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all dependencies
     * List all Dependencies
     * @param featureId
     */
  listFeatureDependencies(featureId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all dependents
     * List all Dependents
     * @param featureId
     */
  listFeatureDependents(featureId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all features
     * List all Features
     */
  listFeatures(_options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a feature lifecycle
     * Update a Feature Lifecycle
     * @param featureId
     * @param lifecycle
     * @param mode
     */
  updateFeatureLifecycle(featureId: string, lifecycle: string, mode?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class FeatureApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFeature
     * @throws ApiException if the response code was not in [200, 299]
     */
  getFeature(response: ResponseContext): Promise<Feature>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFeatureDependencies
     * @throws ApiException if the response code was not in [200, 299]
     */
  listFeatureDependencies(response: ResponseContext): Promise<Array<Feature>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFeatureDependents
     * @throws ApiException if the response code was not in [200, 299]
     */
  listFeatureDependents(response: ResponseContext): Promise<Array<Feature>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFeatures
     * @throws ApiException if the response code was not in [200, 299]
     */
  listFeatures(response: ResponseContext): Promise<Array<Feature>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateFeatureLifecycle
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateFeatureLifecycle(response: ResponseContext): Promise<Feature>;
}
