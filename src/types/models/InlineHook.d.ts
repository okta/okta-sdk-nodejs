/*!
 * Copyright (c) 2017-2021, Okta, Inc. and/or its affiliates. All rights reserved.
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

import Resource from '../resource';
import InlineHookPayload from './InlineHookPayload';
import InlineHookResponse from './InlineHookResponse';
import InlineHookChannel from './InlineHookChannel';
import InlineHookStatus from './InlineHookStatus';
import InlineHookType from './InlineHookType';

declare class InlineHook extends Resource {
  constructor(resourceJson: string, client: any);

  readonly _links: {
    [name: string]: unknown;
  };
  channel: InlineHookChannel;
  readonly created: string;
  readonly id: string;
  readonly lastUpdated: string;
  name: string;
  status: InlineHookStatus;
  type: InlineHookType;
  version: string;

  update(): Promise<InlineHook>;
  delete(): Promise<undefined>;
  activate(): Promise<InlineHook>;
  deactivate(): Promise<InlineHook>;
  execute(inlineHookPayload: InlineHookPayload): Promise<InlineHookResponse>;
}

export {
  InlineHook
};
export default InlineHook;
