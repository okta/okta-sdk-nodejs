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
const PolicyRuleActionsEnroll = require('./PolicyRuleActionsEnroll');
const PasswordPolicyRuleAction = require('./PasswordPolicyRuleAction');
const OktaSignOnPolicyRuleSignonActions = require('./OktaSignOnPolicyRuleSignonActions');

/**
 * @class PolicyRuleActions
 * @extends Resource
 * @property { PolicyRuleActionsEnroll } enroll
 * @property { PasswordPolicyRuleAction } passwordChange
 * @property { PasswordPolicyRuleAction } selfServicePasswordReset
 * @property { PasswordPolicyRuleAction } selfServiceUnlock
 * @property { OktaSignOnPolicyRuleSignonActions } signon
 */
class PolicyRuleActions extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.enroll) {
      this.enroll = new PolicyRuleActionsEnroll(resourceJson.enroll);
    }
    if (resourceJson && resourceJson.passwordChange) {
      this.passwordChange = new PasswordPolicyRuleAction(resourceJson.passwordChange);
    }
    if (resourceJson && resourceJson.selfServicePasswordReset) {
      this.selfServicePasswordReset = new PasswordPolicyRuleAction(resourceJson.selfServicePasswordReset);
    }
    if (resourceJson && resourceJson.selfServiceUnlock) {
      this.selfServiceUnlock = new PasswordPolicyRuleAction(resourceJson.selfServiceUnlock);
    }
    if (resourceJson && resourceJson.signon) {
      this.signon = new OktaSignOnPolicyRuleSignonActions(resourceJson.signon);
    }
  }

}

module.exports = PolicyRuleActions;
