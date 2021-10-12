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
const InactivityPolicyRuleCondition = require('./InactivityPolicyRuleCondition');
const LifecycleExpirationPolicyRuleCondition = require('./LifecycleExpirationPolicyRuleCondition');
const PasswordExpirationPolicyRuleCondition = require('./PasswordExpirationPolicyRuleCondition');
const UserLifecycleAttributePolicyRuleCondition = require('./UserLifecycleAttributePolicyRuleCondition');

/**
 * @class UserPolicyRuleCondition
 * @extends Resource
 * @property { array } exclude
 * @property { InactivityPolicyRuleCondition } inactivity
 * @property { array } include
 * @property { LifecycleExpirationPolicyRuleCondition } lifecycleExpiration
 * @property { PasswordExpirationPolicyRuleCondition } passwordExpiration
 * @property { UserLifecycleAttributePolicyRuleCondition } userLifecycleAttribute
 */
class UserPolicyRuleCondition extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.inactivity) {
      this.inactivity = new InactivityPolicyRuleCondition(resourceJson.inactivity);
    }
    if (resourceJson && resourceJson.lifecycleExpiration) {
      this.lifecycleExpiration = new LifecycleExpirationPolicyRuleCondition(resourceJson.lifecycleExpiration);
    }
    if (resourceJson && resourceJson.passwordExpiration) {
      this.passwordExpiration = new PasswordExpirationPolicyRuleCondition(resourceJson.passwordExpiration);
    }
    if (resourceJson && resourceJson.userLifecycleAttribute) {
      this.userLifecycleAttribute = new UserLifecycleAttributePolicyRuleCondition(resourceJson.userLifecycleAttribute);
    }
  }

}

module.exports = UserPolicyRuleCondition;
