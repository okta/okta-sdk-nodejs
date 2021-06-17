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
import { RoleAssignmentType } from './RoleAssignmentType';
import { RoleStatus } from './RoleStatus';
import { RoleType } from './RoleType';

declare class Role extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  readonly _embedded: {[name: string]: unknown};
  readonly _links: {[name: string]: unknown};
  assignmentType: RoleAssignmentType;
  readonly created: string;
  description: string;
  readonly id: string;
  readonly label: string;
  readonly lastUpdated: string;
  readonly status: RoleStatus;
  type: RoleType;

  addAdminGroupTarget(groupId: string, targetGroupId: string): Promise<Response>;
  addAppInstanceTargetToAdminRole(groupId: string, appName: string, applicationId: string): Promise<Response>;
  addAppTargetToAdminRole(groupId: string, appName: string): Promise<Response>;
  addAllAppsAsTargetToRole(userId: string): Promise<Response>;
  addAppTargetToAppAdminRoleForUser(userId: string, appName: string, applicationId: string): Promise<Response>;
  addAppTargetToAdminRoleForUser(userId: string, appName: string): Promise<Response>;
}

type RoleOptions = OptionalKnownProperties<Role>;

export {
  Role,
  RoleOptions
};
