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
* All Okta orgs contain only one IdP Discovery policy with an immutable default rule routing to your org\'s sign-in page, one entity risk policy, and one session protection policy. Creating or replacing a policy with the `IDP_DISCOVERY` type, the `ENTITY_RISK` type, or the `POST_AUTH_SESSION` type isn\'t supported. The following policy types are available with Identity Engine: `ACCESS_POLICY`, `PROFILE_ENROLLMENT`, `POST_AUTH_SESSION`, and `ENTITY_RISK`.
*/
export declare type PolicyType = 'ACCESS_POLICY' | 'ENTITY_RISK' | 'IDP_DISCOVERY' | 'MFA_ENROLL' | 'OKTA_SIGN_ON' | 'PASSWORD' | 'POST_AUTH_SESSION' | 'PROFILE_ENROLLMENT';
