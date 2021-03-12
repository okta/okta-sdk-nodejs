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
import Collection from '../collection';
import AssignRoleRequest from './AssignRoleRequest';
import Role from './Role';
import GroupProfile from './GroupProfile';
import GroupType from './GroupType';

declare class Group extends Resource {
  constructor(resourceJson: string, client: any);

  _embedded: {
    [name: string]: unknown;
  };
  _links: {
    [name: string]: unknown;
  };
  created: string;
  id: string;
  lastMembershipUpdated: string;
  lastUpdated: string;
  objectClass: [];
  profile: GroupProfile;
  type: GroupType;

  update(): Promise<Group>;
  delete(): Promise<undefined>;
  removeUser(userId: string): Promise<undefined>;
  listUsers(queryParameters: { 
    after: string,
    limit: string,
  }): Promise<Collection>;
  listApplications(queryParameters: { 
    after: string,
    limit: string,
  }): Promise<Collection>;
  assignRole(assignRoleRequest: AssignRoleRequest, queryParameters: { 
    disableNotifications: string,
  }): Promise<Role>;
}

export {
  Group
};
