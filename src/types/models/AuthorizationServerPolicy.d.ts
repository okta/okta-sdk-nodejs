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
import { Collection } from '../collection';
import { AuthorizationServerPolicyRule } from './AuthorizationServerPolicyRule';
import { AuthorizationServerPolicyRuleOptions } from './AuthorizationServerPolicyRule';
import { Response } from 'node-fetch';
import { PolicyRuleConditions } from './PolicyRuleConditions';
import { PolicyType } from './PolicyType';

declare class AuthorizationServerPolicy extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  readonly _embedded: {[name: string]: unknown};
  readonly _links: {[name: string]: unknown};
  conditions: PolicyRuleConditions;
  readonly created: string;
  description: string;
  readonly id: string;
  readonly lastUpdated: string;
  name: string;
  priority: number;
  status: string;
  system: boolean;
  type: PolicyType;

  update(authServerId: string): Promise<AuthorizationServerPolicy>;
  delete(authServerId: string): Promise<Response>;
  listPolicyRules(authServerId: string): Collection<AuthorizationServerPolicyRule>;
  createPolicyRule(authServerId: string, authorizationServerPolicyRule: AuthorizationServerPolicyRuleOptions): Promise<AuthorizationServerPolicyRule>;
  getPolicyRule(authServerId: string, ruleId: string): Promise<AuthorizationServerPolicyRule>;
  deletePolicyRule(authServerId: string, ruleId: string): Promise<Response>;
  activate(authServerId: string): Promise<Response>;
  deactivate(authServerId: string): Promise<Response>;
}

type AuthorizationServerPolicyOptions = OptionalKnownProperties<AuthorizationServerPolicy>;

export {
  AuthorizationServerPolicy,
  AuthorizationServerPolicyOptions
};
