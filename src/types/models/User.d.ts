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
import ChangePasswordRequest from './ChangePasswordRequest';
import UserCredentials from './UserCredentials';
import ForgotPasswordResponse from './ForgotPasswordResponse';
import AssignRoleRequest from './AssignRoleRequest';
import Role from './Role';
import OAuth2RefreshToken from './OAuth2RefreshToken';
import UserActivationToken from './UserActivationToken';
import ResetPasswordToken from './ResetPasswordToken';
import TempPassword from './TempPassword';
import UserFactor from './UserFactor';
import UserProfile from './UserProfile';
import UserStatus from './UserStatus';
import UserType from './UserType';

declare class User extends Resource {
  constructor(resourceJson: string, client: any);

  _embedded: {
    [name: string]: unknown;
  };
  _links: {
    [name: string]: unknown;
  };
  activated: string;
  created: string;
  credentials: UserCredentials;
  id: string;
  lastLogin: string;
  lastUpdated: string;
  passwordChanged: string;
  profile: UserProfile;
  status: UserStatus;
  statusChanged: string;
  transitioningToStatus: UserStatus;
  type: UserType;

  update(queryParameters: { 
    strict: string,
  }): Promise<User>;
  delete(queryParameters: { 
    sendEmail: string,
  }): Promise<undefined>;
  listAppLinks(): Promise<Collection>;
  changePassword(changePasswordRequest: ChangePasswordRequest, queryParameters: { 
    strict: string,
  }): Promise<UserCredentials>;
  changeRecoveryQuestion(userCredentials: UserCredentials): Promise<UserCredentials>;
  forgotPasswordSetNewPassword(userCredentials: UserCredentials, queryParameters: { 
    sendEmail: string,
  }): Promise<ForgotPasswordResponse>;
  forgotPasswordGenerateOneTimeToken(queryParameters: { 
    sendEmail: string,
  }): Promise<ForgotPasswordResponse>;
  assignRole(assignRoleRequest: AssignRoleRequest, queryParameters: { 
    disableNotifications: string,
  }): Promise<Role>;
  removeRole(roleId: string): Promise<undefined>;
  listGroupTargets(roleId: string, queryParameters: { 
    after: string,
    limit: string,
  }): Promise<Collection>;
  removeGroupTarget(roleId: string, groupId: string): Promise<undefined>;
  addGroupTarget(roleId: string, groupId: string): Promise<undefined>;
  listAssignedRoles(queryParameters: { 
    expand: string,
  }): Promise<Collection>;
  addAllAppsAsTarget(roleId: string): Promise<undefined>;
  listGroups(): Promise<Collection>;
  listGrants(queryParameters: { 
    scopeId: string,
    expand: string,
    after: string,
    limit: string,
  }): Promise<Collection>;
  revokeGrants(): Promise<undefined>;
  revokeGrant(grantId: string): Promise<undefined>;
  revokeGrantsForUserAndClient(clientId: string): Promise<undefined>;
  listRefreshTokensForUserAndClient(clientId: string, queryParameters: { 
    expand: string,
    after: string,
    limit: string,
  }): Promise<Collection>;
  revokeTokenForUserAndClient(clientId: string, tokenId: string): Promise<undefined>;
  getRefreshTokenForUserAndClient(clientId: string, tokenId: string, queryParameters: { 
    expand: string,
    limit: string,
    after: string,
  }): Promise<OAuth2RefreshToken>;
  revokeTokensForUserAndClient(clientId: string): Promise<undefined>;
  listClients(): Promise<Collection>;
  activate(queryParameters: { 
    sendEmail: string,
  }): Promise<UserActivationToken>;
  reactivate(queryParameters: { 
    sendEmail: string,
  }): Promise<UserActivationToken>;
  deactivate(queryParameters: { 
    sendEmail: string,
  }): Promise<undefined>;
  suspend(): Promise<undefined>;
  unsuspend(): Promise<undefined>;
  resetPassword(queryParameters: { 
    sendEmail: string,
  }): Promise<ResetPasswordToken>;
  expirePassword(): Promise<User>;
  expirePasswordAndGetTemporaryPassword(): Promise<TempPassword>;
  unlock(): Promise<undefined>;
  resetFactors(): Promise<undefined>;
  deleteFactor(factorId: string): Promise<undefined>;
  addToGroup(groupId: string): Promise<undefined>;
  enrollFactor(userFactor: UserFactor, queryParameters: { 
    updatePhone: string,
    templateId: string,
    tokenLifetimeSeconds: string,
    activate: string,
  }): Promise<UserFactor>;
  listSupportedFactors(): Promise<Collection>;
  listFactors(): Promise<Collection>;
  listSupportedSecurityQuestions(): Promise<Collection>;
  getFactor(factorId: string): Promise<UserFactor>;
  setLinkedObject(primaryRelationshipName: string, primaryUserId: string): Promise<undefined>;
  listIdentityProviders(): Promise<Collection>;
  getLinkedObjects(relationshipName: string, queryParameters: { 
    after: string,
    limit: string,
  }): Promise<Collection>;
  clearSessions(queryParameters: { 
    oauthTokens: string,
  }): Promise<undefined>;
  removeLinkedObject(relationshipName: string): Promise<undefined>;
}

export default User;
