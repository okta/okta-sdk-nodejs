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
import Client from '../client';


declare class AppLink extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  readonly appAssignmentId: string;
  readonly appInstanceId: string;
  readonly appName: string;
  readonly credentialsSetup: boolean;
  readonly hidden: boolean;
  readonly id: string;
  readonly label: string;
  readonly linkUrl: string;
  readonly logoUrl: string;
  readonly sortOrder: number;

}

export {
  AppLink
};
export default AppLink;
