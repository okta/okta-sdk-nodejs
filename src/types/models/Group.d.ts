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
import Collection from '../collection';
import { User } from './User';
import { Application } from './Application';
import { AssignRoleRequest } from './AssignRoleRequest';
import { Role } from './Role';
import { GroupProfile } from './GroupProfile';
import { GroupType } from './GroupType';

declare class Group extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  readonly _embedded: {[name: string]: unknown};
  readonly _links: {[name: string]: unknown};
  readonly created: string;
  readonly id: string;
  readonly lastMembershipUpdated: string;
  readonly lastUpdated: string;
  readonly objectClass: [];
  profile: GroupProfile;
  readonly type: GroupType;

  update(): Promise<Group>;
  delete(): Promise<undefined>;
  removeUser(userId: string): Promise<undefined>;
  listUsers(queryParameters?: {
    after: string,
    limit: string,
  }): Collection<User>;
  listApplications(queryParameters?: {
    after: string,
    limit: string,
  }): Collection<Application>;
  assignRole(assignRoleRequest: AssignRoleRequest, queryParameters?: {
    disableNotifications: string,
  }): Promise<Role>;
}

export {
  Group
};
