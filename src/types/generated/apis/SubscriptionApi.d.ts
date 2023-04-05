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
import { Subscription } from '../models/Subscription';
/**
 * no description
 */
export declare class SubscriptionApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Lists all subscriptions of a Role identified by `roleType` or of a Custom Role identified by `roleId`
     * List all Subscriptions of a Custom Role
     * @param roleTypeOrRoleId
     */
  listRoleSubscriptions(roleTypeOrRoleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all subscriptions with a specific notification type of a Role identified by `roleType` or of a Custom Role identified by `roleId`
     * List all Subscriptions of a Custom Role with a specific notification type
     * @param roleTypeOrRoleId
     * @param notificationType
     */
  listRoleSubscriptionsByNotificationType(roleTypeOrRoleId: string, notificationType: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all subscriptions of a user. Only lists subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
     * List all Subscriptions
     * @param userId
     */
  listUserSubscriptions(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all the subscriptions of a User with a specific notification type. Only gets subscriptions for current user. An AccessDeniedException message is sent if requests are made from other users.
     * List all Subscriptions by type
     * @param userId
     * @param notificationType
     */
  listUserSubscriptionsByNotificationType(userId: string, notificationType: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Subscribes a Role identified by `roleType` or of a Custom Role identified by `roleId` to a specific notification type. When you change the subscription status of a Role or Custom Role, it overrides the subscription of any individual user of that Role or Custom Role.
     * Subscribe a Custom Role to a specific notification type
     * @param roleTypeOrRoleId
     * @param notificationType
     */
  subscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId: string, notificationType: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Subscribes a User to a specific notification type. Only the current User can subscribe to a specific notification type. An AccessDeniedException message is sent if requests are made from other users.
     * Subscribe to a specific notification type
     * @param userId
     * @param notificationType
     */
  subscribeUserSubscriptionByNotificationType(userId: string, notificationType: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unsubscribes a Role identified by `roleType` or of a Custom Role identified by `roleId` from a specific notification type. When you change the subscription status of a Role or Custom Role, it overrides the subscription of any individual user of that Role or Custom Role.
     * Unsubscribe a Custom Role from a specific notification type
     * @param roleTypeOrRoleId
     * @param notificationType
     */
  unsubscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId: string, notificationType: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unsubscribes a User from a specific notification type. Only the current User can unsubscribe from a specific notification type. An AccessDeniedException message is sent if requests are made from other users.
     * Unsubscribe from a specific notification type
     * @param userId
     * @param notificationType
     */
  unsubscribeUserSubscriptionByNotificationType(userId: string, notificationType: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class SubscriptionApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRoleSubscriptions
     * @throws ApiException if the response code was not in [200, 299]
     */
  listRoleSubscriptions(response: ResponseContext): Promise<Array<Subscription>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRoleSubscriptionsByNotificationType
     * @throws ApiException if the response code was not in [200, 299]
     */
  listRoleSubscriptionsByNotificationType(response: ResponseContext): Promise<Subscription>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUserSubscriptions
     * @throws ApiException if the response code was not in [200, 299]
     */
  listUserSubscriptions(response: ResponseContext): Promise<Array<Subscription>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUserSubscriptionsByNotificationType
     * @throws ApiException if the response code was not in [200, 299]
     */
  listUserSubscriptionsByNotificationType(response: ResponseContext): Promise<Subscription>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscribeRoleSubscriptionByNotificationType
     * @throws ApiException if the response code was not in [200, 299]
     */
  subscribeRoleSubscriptionByNotificationType(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscribeUserSubscriptionByNotificationType
     * @throws ApiException if the response code was not in [200, 299]
     */
  subscribeUserSubscriptionByNotificationType(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unsubscribeRoleSubscriptionByNotificationType
     * @throws ApiException if the response code was not in [200, 299]
     */
  unsubscribeRoleSubscriptionByNotificationType(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unsubscribeUserSubscriptionByNotificationType
     * @throws ApiException if the response code was not in [200, 299]
     */
  unsubscribeUserSubscriptionByNotificationType(response: ResponseContext): Promise<void>;
}
