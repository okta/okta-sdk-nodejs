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
import { FeatureLifecycle } from '../models/FeatureLifecycle';
/**
 * no description
 */
export declare class FeatureApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Retrieves a feature by ID
     * Retrieve a feature
     * @param featureId &#x60;id&#x60; of the feature
     */
  getFeature(featureId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all feature dependencies for a specified feature.  A feature\'s dependencies are the features that it requires to be enabled in order for itself to be enabled.
     * List all dependencies
     * @param featureId &#x60;id&#x60; of the feature
     */
  listFeatureDependencies(featureId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all feature dependents for the specified feature.  A feature\'s dependents are the features that need to be disabled in order for the feature itself to be disabled.
     * List all dependents
     * @param featureId &#x60;id&#x60; of the feature
     */
  listFeatureDependents(featureId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all self-service features for your org
     * List all features
     */
  listFeatures(_options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a feature\'s lifecycle status. Use this endpoint to enable or disable a feature for your org.  Use the `mode=force` parameter to override dependency restrictions for a particular feature. Normally, you can\'t enable a feature if it has one or more dependencies that aren\'t enabled.  When you use the `mode=force` parameter while enabling a feature, Okta first tries to enable any disabled features that this feature may have as dependencies. If you don\'t pass the `mode=force` parameter and the feature has dependencies that need to be enabled before the feature is enabled, a 400 error is returned.  When you use the `mode=force` parameter while disabling a feature, Okta first tries to disable any enabled features that this feature may have as dependents. If you don\'t pass the `mode=force` parameter and the feature has dependents that need to be disabled before the feature is disabled, a 400 error is returned.  The following chart shows the different state transitions for a feature.  ![State transitions of a feature](../../../../../images/features/update-ssfeat-flowchart.png \'#width=500px;\')
     * Update a feature lifecycle
     * @param featureId &#x60;id&#x60; of the feature
     * @param lifecycle Whether to &#x60;ENABLE&#x60; or &#x60;DISABLE&#x60; the feature
     * @param mode Indicates if you want to force enable or disable a feature. Supported value is &#x60;force&#x60;.
     */
  updateFeatureLifecycle(featureId: string, lifecycle: FeatureLifecycle, mode?: string, _options?: Configuration): Promise<RequestContext>;
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
