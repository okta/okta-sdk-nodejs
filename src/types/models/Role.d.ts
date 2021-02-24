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
import RoleAssignmentType from './RoleAssignmentType';
import RoleStatus from './RoleStatus';
import RoleType from './RoleType';

declare class Role extends Resource {
  constructor(resourceJson: string, client: any);

  _embedded: {
    [name: string]: unknown;
  };
  _links: {
    [name: string]: unknown;
  };
  assignmentType: RoleAssignmentType;
  created: string;
  description: string;
  id: string;
  label: string;
  lastUpdated: string;
  status: RoleStatus;
  type: RoleType;

  addAdminGroupTarget(targetGroupId: string): Promise<undefined>;
  addAppInstanceTargetToAdminRole(appName: string, applicationId: string): Promise<undefined>;
  addAppTargetToAdminRole(appName: string): Promise<undefined>;
  addAllAppsAsTargetToRole(): Promise<undefined>;
  addAppTargetToAppAdminRoleForUser(appName: string, applicationId: string): Promise<undefined>;
  addAppTargetToAdminRoleForUser(appName: string): Promise<undefined>;
}

export {
  Role
};
