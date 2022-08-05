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


import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { AppLink } from '../models/AppLink';
import { AssignRoleRequest } from '../models/AssignRoleRequest';
import { CatalogApplication } from '../models/CatalogApplication';
import { ChangePasswordRequest } from '../models/ChangePasswordRequest';
import { CreateUserRequest } from '../models/CreateUserRequest';
import { ForgotPasswordResponse } from '../models/ForgotPasswordResponse';
import { Group } from '../models/Group';
import { IdentityProvider } from '../models/IdentityProvider';
import { OAuth2Client } from '../models/OAuth2Client';
import { OAuth2RefreshToken } from '../models/OAuth2RefreshToken';
import { OAuth2ScopeConsentGrant } from '../models/OAuth2ScopeConsentGrant';
import { ResetPasswordToken } from '../models/ResetPasswordToken';
import { Role } from '../models/Role';
import { TempPassword } from '../models/TempPassword';
import { UpdateUserRequest } from '../models/UpdateUserRequest';
import { User } from '../models/User';
import { UserActivationToken } from '../models/UserActivationToken';
import { UserCredentials } from '../models/UserCredentials';
import { UserNextLogin } from '../models/UserNextLogin';
/**
 * no description
 */
export declare class UserApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a user.  This operation can only be performed on users with a `STAGED` status.  Activation of a user is an asynchronous operation. The user will have the `transitioningToStatus` property with a value of `ACTIVE` during activation to indicate that the user hasn't completed the asynchronous operation.  The user will have a status of `ACTIVE` when the activation process is complete.
     * Activate a User
     * @param userId
     * @param sendEmail Sends an activation email to the user if true
     */
  activateUser(userId: string, sendEmail: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assign all Apps as Target to Role
     * Assign all Apps as Target to Role
     * @param userId
     * @param roleId
     */
  addAllAppsAsTargetToRole(userId: string, roleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Assign an Application Target to Administrator Role
     * @param userId
     * @param roleId
     * @param appName
     */
  addApplicationTargetToAdminRoleForUser(userId: string, roleId: string, appName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Add App Instance Target to App Administrator Role given to a User
     * Assign an Application Instance Target to an Application Administrator Role
     * @param userId
     * @param roleId
     * @param appName
     * @param applicationId
     */
  addApplicationTargetToAppAdminRoleForUser(userId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assign a Group Target to Role
     * Assign a Group Target to Role
     * @param userId
     * @param roleId
     * @param groupId
     */
  addGroupTargetToRole(userId: string, roleId: string, groupId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns a role to a user.
     * Assign a Role
     * @param userId
     * @param assignRoleRequest
     * @param disableNotifications
     */
  assignRoleToUser(userId: string, assignRoleRequest: AssignRoleRequest, disableNotifications?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Changes a user's password by validating the user's current password. This operation can only be performed on users in `STAGED`, `ACTIVE`, `PASSWORD_EXPIRED`, or `RECOVERY` status that have a valid password credential
     * Change Password
     * @param userId
     * @param changePasswordRequest
     * @param strict
     */
  changePassword(userId: string, changePasswordRequest: ChangePasswordRequest, strict?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Changes a user's recovery question & answer credential by validating the user's current password.  This operation can only be performed on users in **STAGED**, **ACTIVE** or **RECOVERY** `status` that have a valid password credential
     * Change Recovery Question
     * @param userId
     * @param userCredentials
     */
  changeRecoveryQuestion(userId: string, userCredentials: UserCredentials, _options?: Configuration): Promise<RequestContext>;
  /**
     * Removes all active identity provider sessions. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user.
     * Delete all User Sessions
     * @param userId
     * @param oauthTokens Revoke issued OpenID Connect and OAuth refresh and access tokens
     */
  clearUserSessions(userId: string, oauthTokens?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a new user in your Okta organization with or without credentials.
     * Create a User
     * @param body
     * @param activate Executes activation lifecycle operation when creating the user
     * @param provider Indicates whether to create a user with a specified authentication provider
     * @param nextLogin With activate&#x3D;true, set nextLogin to \&quot;changePassword\&quot; to have the password be EXPIRED, so user must change it the next time they log in.
     */
  createUser(body: CreateUserRequest, activate?: boolean, provider?: boolean, nextLogin?: UserNextLogin, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a user permanently.  This operation can only be performed on users that have a `DEPROVISIONED` status.  **This action cannot be recovered!**
     * Delete a User
     * @param userId
     * @param sendEmail
     */
  deactivateOrDeleteUser(userId: string, sendEmail?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a user. This operation can only be performed on users that do not have a `DEPROVISIONED` status. While the asynchronous operation (triggered by HTTP header `Prefer: respond-async`) is proceeding the user's `transitioningToStatus` property is `DEPROVISIONED`. The user's status is `DEPROVISIONED` when the deactivation process is complete.
     * Deactivate a User
     * @param userId
     * @param sendEmail
     */
  deactivateUser(userId: string, sendEmail?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * This operation transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login.
     * Expire Password
     * @param userId
     */
  expirePassword(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * This operation transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login, and also sets the user's password to a temporary password returned in the response.
     * Expire Password and Set Temporary Password
     * @param userId
     */
  expirePasswordAndGetTemporaryPassword(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Initiate forgot password flow. Generates a one-time token (OTT) that can be used to reset a user's password.
     * Initiate Forgot Password
     * @param userId
     * @param sendEmail
     */
  forgotPassword(userId: string, sendEmail?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Resets the user's password to the specified password if the provided answer to the recovery question is correct.
     * Reset Password with Recovery Question
     * @param userId
     * @param userCredentials
     * @param sendEmail
     */
  forgotPasswordSetNewPassword(userId: string, userCredentials: UserCredentials, sendEmail?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Get linked objects for a user, relationshipName can be a primary or associated relationship name
     * List all Linked Objects
     * @param userId
     * @param relationshipName
     * @param after
     * @param limit
     */
  getLinkedObjectsForUser(userId: string, relationshipName: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Gets a refresh token issued for the specified User and Client.
     * Retrieve a Refresh Token for a Client
     * @param userId
     * @param clientId
     * @param tokenId
     * @param expand
     * @param limit
     * @param after
     */
  getRefreshTokenForUserAndClient(userId: string, clientId: string, tokenId: string, expand?: string, limit?: number, after?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Fetches a user from your Okta organization.
     * Retrieve a User
     * @param userId
     */
  getUser(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Gets a grant for the specified user
     * Retrieve a User Grant
     * @param userId
     * @param grantId
     * @param expand
     */
  getUserGrant(userId: string, grantId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Gets role that is assigned to user.
     * Retrieve a Role
     * @param userId
     * @param roleId
     */
  getUserRole(userId: string, roleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Fetches appLinks for all direct or indirect (via group membership) assigned applications.
     * List all Assigned Application Links
     * @param userId
     */
  listAppLinks(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all App targets for an `APP_ADMIN` Role assigned to a User. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
     * List all Application Targets for Application Administrator Role
     * @param userId
     * @param roleId
     * @param after
     * @param limit
     */
  listApplicationTargetsForApplicationAdministratorRoleForUser(userId: string, roleId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all roles assigned to a user.
     * List all Assigned Roles
     * @param userId
     * @param expand
     */
  listAssignedRolesForUser(userId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all grants for a specified user and client
     * List all Grants for a Client
     * @param userId
     * @param clientId
     * @param expand
     * @param after
     * @param limit
     */
  listGrantsForUserAndClient(userId: string, clientId: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * List all Group Targets for Role
     * @param userId
     * @param roleId
     * @param after
     * @param limit
     */
  listGroupTargetsForRole(userId: string, roleId: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all refresh tokens issued for the specified User and Client.
     * List all Refresh Tokens for a Client
     * @param userId
     * @param clientId
     * @param expand
     * @param after
     * @param limit
     */
  listRefreshTokensForUserAndClient(userId: string, clientId: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all client resources for which the specified user has grants or tokens.
     * List all Clients
     * @param userId
     */
  listUserClients(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all grants for the specified user
     * List all User Grants
     * @param userId
     * @param scopeId
     * @param expand
     * @param after
     * @param limit
     */
  listUserGrants(userId: string, scopeId?: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Fetches the groups of which the user is a member.
     * List all Groups
     * @param userId
     */
  listUserGroups(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists the IdPs associated with the user.
     * List all Identity Providers
     * @param userId
     */
  listUserIdentityProviders(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists users in your organization with pagination in most cases.  A subset of users can be returned that match a supported filter expression or search criteria.
     * List all Users
     * @param q Finds a user that matches firstName, lastName, and email properties
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination) for more information.
     * @param limit Specifies the number of results returned. Defaults to 10 if &#x60;q&#x60; is provided.
     * @param filter Filters users with a supported expression for a subset of properties
     * @param search Searches for users with a supported filtering  expression for most properties
     * @param sortBy
     * @param sortOrder
     */
  listUsers(q?: string, after?: string, limit?: number, filter?: string, search?: string, sortBy?: string, sortOrder?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Fetch a user by `id`, `login`, or `login shortname` if the short name is unambiguous.
     * Update a User
     * @param userId
     * @param user
     * @param strict
     */
  partialUpdateUser(userId: string, user: UpdateUserRequest, strict?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Reactivates a user.  This operation can only be performed on users with a `PROVISIONED` status.  This operation restarts the activation workflow if for some reason the user activation was not completed when using the activationToken from [Activate User](#activate-user).
     * Reactivate a User
     * @param userId
     * @param sendEmail Sends an activation email to the user if true
     */
  reactivateUser(userId: string, sendEmail?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Remove App Instance Target to App Administrator Role given to a User
     * Unassign an Application Instance Target to Application Administrator Role
     * @param userId
     * @param roleId
     * @param appName
     * @param applicationId
     */
  removeApplicationTargetFromAdministratorRoleForUser(userId: string, roleId: string, appName: string, applicationId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Success
     * Unassign an Application Target from Application Administrator Role
     * @param userId
     * @param roleId
     * @param appName
     */
  removeApplicationTargetFromApplicationAdministratorRoleForUser(userId: string, roleId: string, appName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassign a Group Target from Role
     * Unassign a Group Target from Role
     * @param userId
     * @param roleId
     * @param groupId
     */
  removeGroupTargetFromRole(userId: string, roleId: string, groupId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Delete linked objects for a user, relationshipName can be ONLY a primary relationship name
     * Delete a Linked Object
     * @param userId
     * @param relationshipName
     */
  removeLinkedObjectForUser(userId: string, relationshipName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns a role from a user.
     * Delete a Role
     * @param userId
     * @param roleId
     */
  removeRoleFromUser(userId: string, roleId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * This operation resets all factors for the specified user. All MFA factor enrollments returned to the unenrolled state. The user's status remains ACTIVE. This link is present only if the user is currently enrolled in one or more MFA factors.
     * Reset all Factors
     * @param userId
     */
  resetFactors(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Generates a one-time token (OTT) that can be used to reset a user's password.  The OTT link can be automatically emailed to the user or returned to the API caller and distributed using a custom flow.
     * Reset Password
     * @param userId
     * @param sendEmail
     */
  resetPassword(userId: string, sendEmail: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes all grants for the specified user and client
     * Revoke all Grants for a Client
     * @param userId
     * @param clientId
     */
  revokeGrantsForUserAndClient(userId: string, clientId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes the specified refresh token.
     * Revoke a Token for a Client
     * @param userId
     * @param clientId
     * @param tokenId
     */
  revokeTokenForUserAndClient(userId: string, clientId: string, tokenId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes all refresh tokens issued for the specified User and Client.
     * Revoke all Refresh Tokens for a Client
     * @param userId
     * @param clientId
     */
  revokeTokensForUserAndClient(userId: string, clientId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes one grant for a specified user
     * Revoke a User Grant
     * @param userId
     * @param grantId
     */
  revokeUserGrant(userId: string, grantId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes all grants for a specified user
     * Revoke all User Grants
     * @param userId
     */
  revokeUserGrants(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Sets a linked object for two users.
     * Create a Linked Object for two User
     * @param associatedUserId
     * @param primaryRelationshipName
     * @param primaryUserId
     */
  setLinkedObjectForUser(associatedUserId: string, primaryRelationshipName: string, primaryUserId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Suspends a user.  This operation can only be performed on users with an `ACTIVE` status.  The user will have a status of `SUSPENDED` when the process is complete.
     * Suspend a User
     * @param userId
     */
  suspendUser(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unlocks a user with a `LOCKED_OUT` status and returns them to `ACTIVE` status.  Users will be able to login with their current password.
     * Unlock a User
     * @param userId
     */
  unlockUser(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unsuspends a user and returns them to the `ACTIVE` state.  This operation can only be performed on users that have a `SUSPENDED` status.
     * Unsuspend a User
     * @param userId
     */
  unsuspendUser(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Update a user's profile and/or credentials using strict-update semantics.
     * Replace a User
     * @param userId
     * @param user
     * @param strict
     */
  updateUser(userId: string, user: UpdateUserRequest, strict?: boolean, _options?: Configuration): Promise<RequestContext>;
}
export declare class UserApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateUser(response: ResponseContext): Promise<UserActivationToken>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addAllAppsAsTargetToRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  addAllAppsAsTargetToRole(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addApplicationTargetToAdminRoleForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  addApplicationTargetToAdminRoleForUser(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addApplicationTargetToAppAdminRoleForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  addApplicationTargetToAppAdminRoleForUser(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addGroupTargetToRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  addGroupTargetToRole(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignRoleToUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  assignRoleToUser(response: ResponseContext): Promise<Role>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to changePassword
     * @throws ApiException if the response code was not in [200, 299]
     */
  changePassword(response: ResponseContext): Promise<UserCredentials>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to changeRecoveryQuestion
     * @throws ApiException if the response code was not in [200, 299]
     */
  changeRecoveryQuestion(response: ResponseContext): Promise<UserCredentials>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to clearUserSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
  clearUserSessions(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  createUser(response: ResponseContext): Promise<User>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateOrDeleteUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateOrDeleteUser(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateUser(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to expirePassword
     * @throws ApiException if the response code was not in [200, 299]
     */
  expirePassword(response: ResponseContext): Promise<User>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to expirePasswordAndGetTemporaryPassword
     * @throws ApiException if the response code was not in [200, 299]
     */
  expirePasswordAndGetTemporaryPassword(response: ResponseContext): Promise<TempPassword>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to forgotPassword
     * @throws ApiException if the response code was not in [200, 299]
     */
  forgotPassword(response: ResponseContext): Promise<ForgotPasswordResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to forgotPasswordSetNewPassword
     * @throws ApiException if the response code was not in [200, 299]
     */
  forgotPasswordSetNewPassword(response: ResponseContext): Promise<UserCredentials>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLinkedObjectsForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  getLinkedObjectsForUser(response: ResponseContext): Promise<Array<any>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRefreshTokenForUserAndClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  getRefreshTokenForUserAndClient(response: ResponseContext): Promise<OAuth2RefreshToken>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  getUser(response: ResponseContext): Promise<User>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserGrant
     * @throws ApiException if the response code was not in [200, 299]
     */
  getUserGrant(response: ResponseContext): Promise<OAuth2ScopeConsentGrant>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  getUserRole(response: ResponseContext): Promise<Role>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAppLinks
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAppLinks(response: ResponseContext): Promise<Array<AppLink>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApplicationTargetsForApplicationAdministratorRoleForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  listApplicationTargetsForApplicationAdministratorRoleForUser(response: ResponseContext): Promise<Array<CatalogApplication>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAssignedRolesForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAssignedRolesForUser(response: ResponseContext): Promise<Array<Role>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGrantsForUserAndClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  listGrantsForUserAndClient(response: ResponseContext): Promise<Array<OAuth2ScopeConsentGrant>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGroupTargetsForRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  listGroupTargetsForRole(response: ResponseContext): Promise<Array<Group>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRefreshTokensForUserAndClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  listRefreshTokensForUserAndClient(response: ResponseContext): Promise<Array<OAuth2RefreshToken>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUserClients
     * @throws ApiException if the response code was not in [200, 299]
     */
  listUserClients(response: ResponseContext): Promise<Array<OAuth2Client>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUserGrants
     * @throws ApiException if the response code was not in [200, 299]
     */
  listUserGrants(response: ResponseContext): Promise<Array<OAuth2ScopeConsentGrant>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUserGroups
     * @throws ApiException if the response code was not in [200, 299]
     */
  listUserGroups(response: ResponseContext): Promise<Array<Group>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUserIdentityProviders
     * @throws ApiException if the response code was not in [200, 299]
     */
  listUserIdentityProviders(response: ResponseContext): Promise<Array<IdentityProvider>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
  listUsers(response: ResponseContext): Promise<Array<User>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to partialUpdateUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  partialUpdateUser(response: ResponseContext): Promise<User>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to reactivateUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  reactivateUser(response: ResponseContext): Promise<UserActivationToken>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeApplicationTargetFromAdministratorRoleForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  removeApplicationTargetFromAdministratorRoleForUser(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeApplicationTargetFromApplicationAdministratorRoleForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  removeApplicationTargetFromApplicationAdministratorRoleForUser(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeGroupTargetFromRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  removeGroupTargetFromRole(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeLinkedObjectForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  removeLinkedObjectForUser(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeRoleFromUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  removeRoleFromUser(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to resetFactors
     * @throws ApiException if the response code was not in [200, 299]
     */
  resetFactors(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to resetPassword
     * @throws ApiException if the response code was not in [200, 299]
     */
  resetPassword(response: ResponseContext): Promise<ResetPasswordToken>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeGrantsForUserAndClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  revokeGrantsForUserAndClient(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeTokenForUserAndClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  revokeTokenForUserAndClient(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeTokensForUserAndClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  revokeTokensForUserAndClient(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeUserGrant
     * @throws ApiException if the response code was not in [200, 299]
     */
  revokeUserGrant(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeUserGrants
     * @throws ApiException if the response code was not in [200, 299]
     */
  revokeUserGrants(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setLinkedObjectForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  setLinkedObjectForUser(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to suspendUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  suspendUser(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unlockUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  unlockUser(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unsuspendUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  unsuspendUser(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateUser(response: ResponseContext): Promise<User>;
}
