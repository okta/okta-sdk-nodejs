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


/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');


/**
 * @class Subscription
 * @extends Resource
 * @property { hash } _links
 * @property { array } channels
 * @property { NotificationType } notificationType
 * @property { SubscriptionStatus } status
 */
class Subscription extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }


  /**
   * @param {string} roleTypeOrRoleId
   * @returns {Collection} A collection that will yield {@link Subscription} instances.
   */
  listRoleSubscriptions(roleTypeOrRoleId) {
    return this.httpClient.listRoleSubscriptions(roleTypeOrRoleId);
  }

  /**
   * @param {string} roleTypeOrRoleId
   * @param {string} notificationType
   * @returns {Promise<Subscription>}
   */
  getRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType) {
    return this.httpClient.getRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType);
  }

  /**
   * @param {string} userId
   * @param {string} notificationType
   * @returns {Promise<Subscription>}
   */
  getUserSubscriptionByNotificationType(userId, notificationType) {
    return this.httpClient.getUserSubscriptionByNotificationType(userId, notificationType);
  }

  /**
   * @param {string} userId
   * @returns {Collection} A collection that will yield {@link Subscription} instances.
   */
  listUserSubscriptions(userId) {
    return this.httpClient.listUserSubscriptions(userId);
  }

  /**
   * @param {string} userId
   * @param {string} notificationType
   */
  subscribeUserSubscriptionByNotificationType(userId, notificationType) {
    return this.httpClient.subscribeUserSubscriptionByNotificationType(userId, notificationType);
  }

  /**
   * @param {string} roleTypeOrRoleId
   * @param {string} notificationType
   */
  unsubscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType) {
    return this.httpClient.unsubscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType);
  }

  /**
   * @param {string} roleTypeOrRoleId
   * @param {string} notificationType
   */
  subscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType) {
    return this.httpClient.subscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType);
  }

  /**
   * @param {string} userId
   * @param {string} notificationType
   */
  unsubscribeUserSubscriptionByNotificationType(userId, notificationType) {
    return this.httpClient.unsubscribeUserSubscriptionByNotificationType(userId, notificationType);
  }
}

module.exports = Subscription;
