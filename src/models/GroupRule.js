/*!
 * Copyright (c) 2017-2018, Okta, Inc. and/or its affiliates. All rights reserved.
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
const GroupRuleAction = require('./GroupRuleAction');
const GroupRuleConditions = require('./GroupRuleConditions');

/**
 * @class GroupRule
 * @extends Resource
 * @property { GroupRuleAction } actions
 * @property { GroupRuleConditions } conditions
 * @property { dateTime } created
 * @property { string } id
 * @property { dateTime } lastUpdated
 * @property { string } name
 * @property { GroupRuleStatus } status
 * @property { string } type
 */
class GroupRule extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.actions) {
      this.actions = new GroupRuleAction(this.actions);
    }
    if (resourceJson && resourceJson.conditions) {
      this.conditions = new GroupRuleConditions(this.conditions);
    }
  }

  update() {
    return this.client.updateRule(this.id, this);
  }
  delete(queryParameters) {
    return this.client.deleteRule(this.id, queryParameters);
  }
  activate() {
    return this.client.activateRule(this.id);
  }
  deactivate() {
    return this.client.deactivateRule(this.id);
  }
}

module.exports = GroupRule;
