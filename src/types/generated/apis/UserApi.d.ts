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
import { ChangePasswordRequest } from '../models/ChangePasswordRequest';
import { CreateUserRequest } from '../models/CreateUserRequest';
import { ForgotPasswordResponse } from '../models/ForgotPasswordResponse';
import { Group } from '../models/Group';
import { IdentityProvider } from '../models/IdentityProvider';
import { OAuth2Client } from '../models/OAuth2Client';
import { OAuth2RefreshToken } from '../models/OAuth2RefreshToken';
import { OAuth2ScopeConsentGrant } from '../models/OAuth2ScopeConsentGrant';
import { ResetPasswordToken } from '../models/ResetPasswordToken';
import { ResponseLinks } from '../models/ResponseLinks';
import { TempPassword } from '../models/TempPassword';
import { UpdateUserRequest } from '../models/UpdateUserRequest';
import { User } from '../models/User';
import { UserActivationToken } from '../models/UserActivationToken';
import { UserBlock } from '../models/UserBlock';
import { UserCredentials } from '../models/UserCredentials';
import { UserNextLogin } from '../models/UserNextLogin';
/**
 * no description
 */
export declare class UserApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a user. This operation can only be performed on users with a `STAGED` status. Activation of a user is an asynchronous operation. The user will have the `transitioningToStatus` property with a value of `ACTIVE` during activation to indicate that the user hasn't completed the asynchronous operation. The user will have a status of `ACTIVE` when the activation process is complete. > **Legal Disclaimer**<br> After a user is added to the Okta directory, they receive an activation email. As part of signing up for this service, you agreed not to use Okta's service/product to spam and/or send unsolicited messages. Please refrain from adding unrelated accounts to the directory as Okta is not responsible for, and disclaims any and all liability associated with, the activation email's content. You, and you alone, bear responsibility for the emails sent to any recipients.
     * Activate a User
     * @param userId
     * @param sendEmail Sends an activation email to the user if true
     */
  activateUser(userId: string, sendEmail: boolean, _options?: Configuration): Promise<RequestContext>;
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
     * Creates a new user in your Okta organization with or without credentials<br> > **Legal Disclaimer**<br> After a user is added to the Okta directory, they receive an activation email. As part of signing up for this service, you agreed not to use Okta's service/product to spam and/or send unsolicited messages. Please refrain from adding unrelated accounts to the directory as Okta is not responsible for, and disclaims any and all liability associated with, the activation email's content. You, and you alone, bear responsibility for the emails sent to any recipients.
     * Create a User
     * @param body
     * @param activate Executes activation lifecycle operation when creating the user
     * @param provider Indicates whether to create a user with a specified authentication provider
     * @param nextLogin With activate&#x3D;true, set nextLogin to \&quot;changePassword\&quot; to have the password be EXPIRED, so user must change it the next time they log in.
     */
  createUser(body: CreateUserRequest, activate?: boolean, provider?: boolean, nextLogin?: UserNextLogin, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a user. This operation can only be performed on users that do not have a `DEPROVISIONED` status. While the asynchronous operation (triggered by HTTP header `Prefer: respond-async`) is proceeding the user's `transitioningToStatus` property is `DEPROVISIONED`. The user's status is `DEPROVISIONED` when the deactivation process is complete.
     * Deactivate a User
     * @param userId
     * @param sendEmail
     */
  deactivateUser(userId: string, sendEmail?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes linked objects for a user, relationshipName can be ONLY a primary relationship name
     * Delete a Linked Object
     * @param userId
     * @param relationshipName
     */
  deleteLinkedObjectForUser(userId: string, relationshipName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a user permanently. This operation can only be performed on users that have a `DEPROVISIONED` status.  **This action cannot be recovered!**. Calling this on an `ACTIVE` user will transition the user to `DEPROVISIONED`.
     * Delete a User
     * @param userId
     * @param sendEmail
     */
  deleteUser(userId: string, sendEmail?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Expires a user's password and transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login
     * Expire Password
     * @param userId
     */
  expirePassword(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Expires a user's password and transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login, and also sets the user's password to a temporary password returned in the response
     * Expire Password and Set Temporary Password
     * @param userId
     * @param revokeSessions When set to &#x60;true&#x60; (and the session is a user session), all user sessions are revoked except the current session.
     */
  expirePasswordAndGetTemporaryPassword(userId: string, revokeSessions?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Initiates the forgot password flow. Generates a one-time token (OTT) that can be used to reset a user's password.
     * Initiate Forgot Password
     * @param userId
     * @param sendEmail
     */
  forgotPassword(userId: string, sendEmail?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Resets the user's password to the specified password if the provided answer to the recovery question is correct
     * Reset Password with Recovery Question
     * @param userId
     * @param userCredentials
     * @param sendEmail
     */
  forgotPasswordSetNewPassword(userId: string, userCredentials: UserCredentials, sendEmail?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Generates a one-time token (OTT) that can be used to reset a user's password.  The OTT link can be automatically emailed to the user or returned to the API caller and distributed using a custom flow.
     * Generate a Reset Password Token
     * @param userId
     * @param sendEmail
     * @param revokeSessions When set to &#x60;true&#x60; (and the session is a user session), all user sessions are revoked except the current session.
     */
  generateResetPasswordToken(userId: string, sendEmail: boolean, revokeSessions?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a refresh token issued for the specified User and Client
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
     * Retrieves a user from your Okta organization
     * Retrieve a User
     * @param userId
     * @param expand Specifies additional metadata to include in the response. Possible value: &#x60;blocks&#x60;
     */
  getUser(userId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a grant for the specified user
     * Retrieve a User Grant
     * @param userId
     * @param grantId
     * @param expand
     */
  getUserGrant(userId: string, grantId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all appLinks for all direct or indirect (via group membership) assigned applications
     * List all Assigned Application Links
     * @param userId
     */
  listAppLinks(userId: string, _options?: Configuration): Promise<RequestContext>;
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
     * Lists all linked objects for a user, relationshipName can be a primary or associated relationship name
     * List all Linked Objects
     * @param userId
     * @param relationshipName
     * @param after
     * @param limit
     */
  listLinkedObjectsForUser(userId: string, relationshipName: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all refresh tokens issued for the specified User and Client
     * List all Refresh Tokens for a Client
     * @param userId
     * @param clientId
     * @param expand
     * @param after
     * @param limit
     */
  listRefreshTokensForUserAndClient(userId: string, clientId: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists information about how the user is blocked from accessing their account
     * List all User Blocks
     * @param userId
     */
  listUserBlocks(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all client resources for which the specified user has grants or tokens
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
     * Lists all groups of which the user is a member
     * List all Groups
     * @param userId
     */
  listUserGroups(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists the IdPs associated with the user
     * List all Identity Providers
     * @param userId
     */
  listUserIdentityProviders(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all users that do not have a status of 'DEPROVISIONED' (by default), up to the maximum (200 for most orgs), with pagination.  A subset of users can be returned that match a supported filter expression or search criteria.
     * List all Users
     * @param q Finds a user that matches firstName, lastName, and email properties
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information.
     * @param limit Specifies the number of results returned. Defaults to 10 if &#x60;q&#x60; is provided.
     * @param filter Filters users with a supported expression for a subset of properties
     * @param search Searches for users with a supported filtering expression for most properties. Okta recommends using this parameter for search for best performance.
     * @param sortBy
     * @param sortOrder
     */
  listUsers(q?: string, after?: string, limit?: number, filter?: string, search?: string, sortBy?: string, sortOrder?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Reactivates a user.  This operation can only be performed on users with a `PROVISIONED` status.  This operation restarts the activation workflow if for some reason the user activation was not completed when using the activationToken from [Activate User](#activate-user).
     * Reactivate a User
     * @param userId
     * @param sendEmail Sends an activation email to the user if true
     */
  reactivateUser(userId: string, sendEmail?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a user's profile and/or credentials using strict-update semantics
     * Replace a User
     * @param userId
     * @param user
     * @param strict
     */
  replaceUser(userId: string, user: UpdateUserRequest, strict?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Resets all factors for the specified user. All MFA factor enrollments returned to the unenrolled state. The user's status remains ACTIVE. This link is present only if the user is currently enrolled in one or more MFA factors.
     * Reset all Factors
     * @param userId
     */
  resetFactors(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes all grants for the specified user and client
     * Revoke all Grants for a Client
     * @param userId
     * @param clientId
     */
  revokeGrantsForUserAndClient(userId: string, clientId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes the specified refresh token
     * Revoke a Token for a Client
     * @param userId
     * @param clientId
     * @param tokenId
     */
  revokeTokenForUserAndClient(userId: string, clientId: string, tokenId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes all refresh tokens issued for the specified User and Client
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
     * Revokes all active identity provider sessions of the user. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user.
     * Revoke all User Sessions
     * @param userId
     * @param oauthTokens Revoke issued OpenID Connect and OAuth refresh and access tokens
     */
  revokeUserSessions(userId: string, oauthTokens?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a linked object for two users
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
     * Unlocks a user with a `LOCKED_OUT` status or unlocks a user with an `ACTIVE` status that is blocked from unknown devices. Unlocked users have an `ACTIVE` status and can sign in with their current password.
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
     * Updates a user partially determined by the request parameters
     * Update a User
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
     * @params response Response returned by the server for a request to createUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  createUser(response: ResponseContext): Promise<User>;
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
     * @params response Response returned by the server for a request to deleteLinkedObjectForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteLinkedObjectForUser(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteUser(response: ResponseContext): Promise<void>;
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
     * @params response Response returned by the server for a request to generateResetPasswordToken
     * @throws ApiException if the response code was not in [200, 299]
     */
  generateResetPasswordToken(response: ResponseContext): Promise<ResetPasswordToken>;
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
     * @params response Response returned by the server for a request to listAppLinks
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAppLinks(response: ResponseContext): Promise<Array<AppLink>>;
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
     * @params response Response returned by the server for a request to listLinkedObjectsForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  listLinkedObjectsForUser(response: ResponseContext): Promise<Array<ResponseLinks>>;
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
     * @params response Response returned by the server for a request to listUserBlocks
     * @throws ApiException if the response code was not in [200, 299]
     */
  listUserBlocks(response: ResponseContext): Promise<Array<UserBlock>>;
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
     * @params response Response returned by the server for a request to reactivateUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  reactivateUser(response: ResponseContext): Promise<UserActivationToken>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceUser(response: ResponseContext): Promise<User>;
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
     * @params response Response returned by the server for a request to revokeUserSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
  revokeUserSessions(response: ResponseContext): Promise<void>;
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
