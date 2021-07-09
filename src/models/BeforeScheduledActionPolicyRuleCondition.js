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
const Duration = require('./Duration');
const ScheduledUserLifecycleAction = require('./ScheduledUserLifecycleAction');

/**
 * @class BeforeScheduledActionPolicyRuleCondition
 * @extends Resource
 * @property { Duration } duration
 * @property { ScheduledUserLifecycleAction } lifecycleAction
 */
class BeforeScheduledActionPolicyRuleCondition extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.duration) {
      this.duration = new Duration(resourceJson.duration);
    }
    if (resourceJson && resourceJson.lifecycleAction) {
      this.lifecycleAction = new ScheduledUserLifecycleAction(resourceJson.lifecycleAction);
    }
  }

}

module.exports = BeforeScheduledActionPolicyRuleCondition;
