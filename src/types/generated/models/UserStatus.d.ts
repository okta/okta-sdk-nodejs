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


/**
 * Okta Admin Management
 * Allows customers to easily access the Okta Management APIs
 *
 * OpenAPI spec version: 5.1.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
* The current status of the user.  The status of a user changes in response to explicit events, such as admin-driven lifecycle changes, user login, or self-service password recovery. Okta doesn\'t asynchronously sweep through users and update their password expiry state, for example. Instead, Okta evaluates password policy at login time, notices the password has expired, and moves the user to the expired state. When running reports, remember that the data is valid as of the last login or lifecycle event for that user.
*/
export declare type UserStatus = 'ACTIVE' | 'DEPROVISIONED' | 'LOCKED_OUT' | 'PASSWORD_EXPIRED' | 'PROVISIONED' | 'RECOVERY' | 'STAGED' | 'SUSPENDED';
