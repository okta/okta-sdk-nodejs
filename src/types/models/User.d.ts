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
import { AppLink } from './AppLink';
import { ChangePasswordRequestOptions } from './ChangePasswordRequest';
import { UserCredentials } from './UserCredentials';
import { UserCredentialsOptions } from './UserCredentials';
import { ForgotPasswordResponse } from './ForgotPasswordResponse';
import { AssignRoleRequestOptions } from './AssignRoleRequest';
import { Role } from './Role';
import { Response } from 'node-fetch';
import { Group } from './Group';
import { OAuth2ScopeConsentGrant } from './OAuth2ScopeConsentGrant';
import { OAuth2RefreshToken } from './OAuth2RefreshToken';
import { OAuth2Client } from './OAuth2Client';
import { UserActivationToken } from './UserActivationToken';
import { ResetPasswordToken } from './ResetPasswordToken';
import { TempPassword } from './TempPassword';
import { UserFactorOptions } from './UserFactor';
import { UserFactor } from './UserFactor';
import { SecurityQuestion } from './SecurityQuestion';
import { IdentityProvider } from './IdentityProvider';
import { ResponseLinks } from './ResponseLinks';
import { UserProfile } from './UserProfile';
import { UserStatus } from './UserStatus';
import { UserType } from './UserType';

declare class User extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  readonly _embedded: {[name: string]: unknown};
  readonly _links: {[name: string]: unknown};
  readonly activated: string;
  readonly created: string;
  credentials: UserCredentials;
  readonly id: string;
  readonly lastLogin: string;
  readonly lastUpdated: string;
  readonly passwordChanged: string;
  profile: UserProfile;
  readonly status: UserStatus;
  readonly statusChanged: string;
  readonly transitioningToStatus: UserStatus;
  type: UserType;

  update(queryParameters?: {
    strict?: boolean,
  }): Promise<User>;
  delete(queryParameters?: {
    sendEmail?: boolean,
  }): Promise<Response>;
  listAppLinks(): Collection<AppLink>;
  changePassword(changePasswordRequest: ChangePasswordRequestOptions, queryParameters?: {
    strict?: boolean,
  }): Promise<UserCredentials>;
  changeRecoveryQuestion(userCredentials: UserCredentialsOptions): Promise<UserCredentials>;
  forgotPasswordSetNewPassword(userCredentials: UserCredentialsOptions, queryParameters?: {
    sendEmail?: boolean,
  }): Promise<ForgotPasswordResponse>;
  forgotPasswordGenerateOneTimeToken(queryParameters?: {
    sendEmail?: boolean,
  }): Promise<ForgotPasswordResponse>;
  assignRole(assignRoleRequest: AssignRoleRequestOptions, queryParameters?: {
    disableNotifications?: string,
  }): Promise<Role>;
  removeRole(roleId: string): Promise<Response>;
  listGroupTargets(roleId: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Collection<Group>;
  removeGroupTarget(roleId: string, groupId: string): Promise<Response>;
  addGroupTarget(roleId: string, groupId: string): Promise<Response>;
  listAssignedRoles(queryParameters?: {
    expand?: string,
  }): Collection<Role>;
  addAllAppsAsTarget(roleId: string): Promise<Response>;
  listGroups(): Collection<Group>;
  listGrants(queryParameters?: {
    scopeId?: string,
    expand?: string,
    after?: string,
    limit?: number,
  }): Collection<OAuth2ScopeConsentGrant>;
  revokeGrants(): Promise<Response>;
  revokeGrant(grantId: string): Promise<Response>;
  revokeGrantsForUserAndClient(clientId: string): Promise<Response>;
  listRefreshTokensForUserAndClient(clientId: string, queryParameters?: {
    expand?: string,
    after?: string,
    limit?: number,
  }): Collection<OAuth2RefreshToken>;
  revokeTokenForUserAndClient(clientId: string, tokenId: string): Promise<Response>;
  getRefreshTokenForUserAndClient(clientId: string, tokenId: string, queryParameters?: {
    expand?: string,
    limit?: number,
    after?: string,
  }): Promise<OAuth2RefreshToken>;
  revokeTokensForUserAndClient(clientId: string): Promise<Response>;
  listClients(): Collection<OAuth2Client>;
  activate(queryParameters: {
    sendEmail: boolean,
  }): Promise<UserActivationToken>;
  reactivate(queryParameters?: {
    sendEmail?: boolean,
  }): Promise<UserActivationToken>;
  deactivate(queryParameters?: {
    sendEmail?: boolean,
  }): Promise<Response>;
  suspend(): Promise<Response>;
  unsuspend(): Promise<Response>;
  resetPassword(queryParameters: {
    sendEmail: boolean,
  }): Promise<ResetPasswordToken>;
  expirePassword(): Promise<User>;
  expirePasswordAndGetTemporaryPassword(): Promise<TempPassword>;
  unlock(): Promise<Response>;
  resetFactors(): Promise<Response>;
  deleteFactor(factorId: string): Promise<Response>;
  addToGroup(groupId: string): Promise<Response>;
  enrollFactor(userFactor: UserFactorOptions, queryParameters?: {
    updatePhone?: boolean,
    templateId?: string,
    tokenLifetimeSeconds?: number,
    activate?: boolean,
  }): Promise<UserFactor>;
  listSupportedFactors(): Collection<UserFactor>;
  listFactors(): Collection<UserFactor>;
  listSupportedSecurityQuestions(): Collection<SecurityQuestion>;
  getFactor(factorId: string): Promise<UserFactor>;
  setLinkedObject(primaryRelationshipName: string, primaryUserId: string): Promise<Response>;
  listIdentityProviders(): Collection<IdentityProvider>;
  getLinkedObjects(relationshipName: string, queryParameters?: {
    after?: string,
    limit?: number,
  }): Collection<ResponseLinks>;
  clearSessions(queryParameters?: {
    oauthTokens?: boolean,
  }): Promise<Response>;
  removeLinkedObject(relationshipName: string): Promise<Response>;
}

type UserOptions = OptionalKnownProperties<User>;

export {
  User,
  UserOptions
};
