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

import { Resource } from '../resource';
import { Client } from '../client';
import { OptionalKnownProperties } from '../optional-known-properties-type';
import { Response } from 'node-fetch';
import { AuthorizationServerPolicyRuleActions } from './AuthorizationServerPolicyRuleActions';
import { AuthorizationServerPolicyRuleConditions } from './AuthorizationServerPolicyRuleConditions';

declare class AuthorizationServerPolicyRule extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  actions: AuthorizationServerPolicyRuleActions;
  conditions: AuthorizationServerPolicyRuleConditions;
  readonly created: string;
  readonly id: string;
  readonly lastUpdated: string;
  name: string;
  priority: number;
  status: string;
  system: boolean;
  type: string;

  update(policyId: string, authServerId: string): Promise<AuthorizationServerPolicyRule>;
  delete(policyId: string, authServerId: string): Promise<Response>;
  activate(policyId: string): Promise<Response>;
  deactivate(policyId: string): Promise<Response>;
}

type AuthorizationServerPolicyRuleOptions = OptionalKnownProperties<AuthorizationServerPolicyRule>;

export {
  AuthorizationServerPolicyRule,
  AuthorizationServerPolicyRuleOptions
};
