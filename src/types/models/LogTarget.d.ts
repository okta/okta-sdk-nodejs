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


declare class LogTarget extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  readonly alternateId: string;
  readonly detailEntry: {[name: string]: unknown};
  readonly displayName: string;
  readonly id: string;
  readonly type: string;

}

type LogTargetOptions = OptionalKnownProperties<LogTarget>;

export {
  LogTarget,
  LogTargetOptions
};
