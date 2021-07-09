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
import { OAuth2ClaimConditions } from './OAuth2ClaimConditions';

declare class OAuth2Claim extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  readonly _links: {[name: string]: unknown};
  alwaysIncludeInToken: boolean;
  claimType: string;
  conditions: OAuth2ClaimConditions;
  group_filter_type: string;
  readonly id: string;
  name: string;
  status: string;
  system: boolean;
  value: string;
  valueType: string;

}

type OAuth2ClaimOptions = OptionalKnownProperties<OAuth2Claim>;

export {
  OAuth2Claim,
  OAuth2ClaimOptions
};
