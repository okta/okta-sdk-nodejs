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
import { ListRoleSubscriptionsRoleTypeOrRoleIdParameter } from '../models/ListRoleSubscriptionsRoleTypeOrRoleIdParameter';
import { NotificationType } from '../models/NotificationType';
import { Subscription } from '../models/Subscription';
/**
 * no description
 */
export declare class SubscriptionApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Lists all subscriptions available to a specified Role
     * List all subscriptions for a role
     * @param roleTypeOrRoleId A reference to an existing role. Standard roles require a &#x60;roleType&#x60;, while Custom Roles require a &#x60;roleId&#x60;. See [Standard roles](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles).
     */
  listRoleSubscriptions(roleTypeOrRoleId: ListRoleSubscriptionsRoleTypeOrRoleIdParameter, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a subscription by `notificationType` for a specified Role
     * Retrieve a subscription for a role
     * @param roleTypeOrRoleId A reference to an existing role. Standard roles require a &#x60;roleType&#x60;, while Custom Roles require a &#x60;roleId&#x60;. See [Standard roles](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles).
     * @param notificationType
     */
  listRoleSubscriptionsByNotificationType(roleTypeOrRoleId: ListRoleSubscriptionsRoleTypeOrRoleIdParameter, notificationType: NotificationType, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all subscriptions available to a specified user. Returns an `AccessDeniedException` message if requests are made for another user.
     * List all subscriptions for a user
     * @param userId ID of an existing Okta user
     */
  listUserSubscriptions(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a subscription by `notificationType` for a specified user. Returns an `AccessDeniedException` message if requests are made for another user.
     * Retrieve a subscription for a user
     * @param notificationType
     * @param userId ID of an existing Okta user
     */
  listUserSubscriptionsByNotificationType(notificationType: NotificationType, userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Subscribes a Role to a specified notification type. Changes to Role subscriptions override the subscription status of any individual users with the Role.
     * Subscribe a role to a specific notification type
     * @param roleTypeOrRoleId A reference to an existing role. Standard roles require a &#x60;roleType&#x60;, while Custom Roles require a &#x60;roleId&#x60;. See [Standard roles](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles).
     * @param notificationType
     */
  subscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId: ListRoleSubscriptionsRoleTypeOrRoleIdParameter, notificationType: NotificationType, _options?: Configuration): Promise<RequestContext>;
  /**
     * Subscribes the current user to a specified notification type. Returns an `AccessDeniedException` message if requests are made for another user.
     * Subscribe a user to a specific notification type
     * @param notificationType
     * @param userId ID of an existing Okta user
     */
  subscribeUserSubscriptionByNotificationType(notificationType: NotificationType, userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unsubscribes a Role from a specified notification type. Changes to Role subscriptions override the subscription status of any individual users with the Role.
     * Unsubscribe a role from a specific notification type
     * @param roleTypeOrRoleId A reference to an existing role. Standard roles require a &#x60;roleType&#x60;, while Custom Roles require a &#x60;roleId&#x60;. See [Standard roles](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles).
     * @param notificationType
     */
  unsubscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId: ListRoleSubscriptionsRoleTypeOrRoleIdParameter, notificationType: NotificationType, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unsubscribes the current user from a specified notification type. Returns an `AccessDeniedException` message if requests are made for another user.
     * Unsubscribe a user from a specific notification type
     * @param notificationType
     * @param userId ID of an existing Okta user
     */
  unsubscribeUserSubscriptionByNotificationType(notificationType: NotificationType, userId: string, _options?: Configuration): Promise<RequestContext>;
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
