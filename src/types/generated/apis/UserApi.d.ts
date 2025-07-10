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
import { AssignedAppLink } from '../models/AssignedAppLink';
import { ChangePasswordRequest } from '../models/ChangePasswordRequest';
import { CreateUserRequest } from '../models/CreateUserRequest';
import { ForgotPasswordResponse } from '../models/ForgotPasswordResponse';
import { Group } from '../models/Group';
import { IdentityProvider } from '../models/IdentityProvider';
import { IdentityProviderApplicationUser } from '../models/IdentityProviderApplicationUser';
import { KeepCurrent } from '../models/KeepCurrent';
import { OAuth2Client } from '../models/OAuth2Client';
import { OAuth2RefreshToken } from '../models/OAuth2RefreshToken';
import { OAuth2ScopeConsentGrant } from '../models/OAuth2ScopeConsentGrant';
import { ReplaceUserClassification } from '../models/ReplaceUserClassification';
import { ResetPasswordToken } from '../models/ResetPasswordToken';
import { ResponseLinks } from '../models/ResponseLinks';
import { SocialAuthToken } from '../models/SocialAuthToken';
import { UpdateUserRequest } from '../models/UpdateUserRequest';
import { User } from '../models/User';
import { UserActivationToken } from '../models/UserActivationToken';
import { UserBlock } from '../models/UserBlock';
import { UserClassification } from '../models/UserClassification';
import { UserCredentials } from '../models/UserCredentials';
import { UserDevice } from '../models/UserDevice';
import { UserGetSingleton } from '../models/UserGetSingleton';
import { UserIdentityProviderLinkRequest } from '../models/UserIdentityProviderLinkRequest';
import { UserNextLogin } from '../models/UserNextLogin';
import { UserRiskGetResponse } from '../models/UserRiskGetResponse';
import { UserRiskPutResponse } from '../models/UserRiskPutResponse';
import { UserRiskRequest } from '../models/UserRiskRequest';
/**
 * no description
 */
export declare class UserApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates a user.  Perform this operation only on users with a `STAGED` or `DEPROVISIONED` status. Activation of a user is an asynchronous operation. * The user has the `transitioningToStatus` property with an `ACTIVE` value during activation. This indicates that the user hasn\'t completed the asynchronous operation. * The user has an `ACTIVE` status when the activation process completes.  Users who don\'t have a password must complete the welcome flow by visiting the activation link to complete the transition to `ACTIVE` status.  > **Note:** If you want to send a branded user activation email, change the subdomain of your request to the custom domain that\'s associated with the brand. > For example, change `subdomain.okta.com` to `custom.domain.one`. See [Multibrand and custom domains](https://developer.okta.com/docs/concepts/brands/#multibrand-and-custom-domains).  > **Note:** If you have optional password enabled, visiting the activation link is optional for users who aren\'t required to enroll a password. > See [Create user with optional password](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#create-user-with-optional-password).  > **Legal disclaimer** > After a user is added to the Okta directory, they receive an activation email. As part of signing up for this service, > you agreed not to use Okta\'s service/product to spam and/or send unsolicited messages. > Please refrain from adding unrelated accounts to the directory as Okta is not responsible for, and disclaims any and all > liability associated with, the activation email\'s content. You, and you alone, bear responsibility for the emails sent to any recipients.
     * Activate a user
     * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
     * @param sendEmail Sends an activation email to the user if &#x60;true&#x60;
     */
  activateUser(userId: string, sendEmail?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a user\'s password by validating the user\'s current password.  This operation provides an option to delete all the sessions of the specified user. However, if the request is made in the context of a session owned by the specified user, that session isn\'t cleared.  You can only perform this operation on users in `STAGED`, `ACTIVE`, `PASSWORD_EXPIRED`, or `RECOVERY` status that have a valid [password credential](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/createUser!path=credentials/password&t=request).  The user transitions to `ACTIVE` status when successfully invoked in `RECOVERY` status.  > **Note:** The Okta account management policy doesn\'t support the `/users/{userId}/credentials/change_password` endpoint. See [Configure an Okta account management policy](https://developer.okta.com/docs/guides/okta-account-management-policy/main/).
     * Update password
     * @param userId ID of an existing Okta user
     * @param changePasswordRequest
     * @param strict If true, validates against the password minimum age policy
     */
  changePassword(userId: string, changePasswordRequest: ChangePasswordRequest, strict?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a user\'s recovery question and answer credential by validating the user\'s current password. You can only perform this operation on users in `STAGED`, `ACTIVE`, or `RECOVERY` status that have a valid [password credential](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/createUser!path=credentials/password&t=request).
     * Update recovery question
     * @param userId ID of an existing Okta user
     * @param userCredentials
     */
  changeRecoveryQuestion(userId: string, userCredentials: UserCredentials, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a new user in your Okta org with or without credentials.<br> > **Legal Disclaimer** > > After a user is added to the Okta directory, they receive an activation email. As part of signing up for this service, > you agreed not to use Okta\'s service/product to spam and/or send unsolicited messages. > Please refrain from adding unrelated accounts to the directory as Okta is not responsible for, and disclaims any and all > liability associated with, the activation email\'s content. You, and you alone, bear responsibility for the emails sent to any recipients.  All responses return the created user. Activation of a user is an asynchronous operation. The system performs group reconciliation during activation and assigns the user to all apps via direct or indirect relationships (group memberships). * The user\'s `transitioningToStatus` property is `ACTIVE` during activation to indicate that the user hasn\'t completed the asynchronous operation. * The user\'s `status` is `ACTIVE` when the activation process is complete.  The user is emailed a one-time activation token if activated without a password.  > **Note:** If the user is assigned to an app that is configured for provisioning, the activation process triggers downstream provisioning to the app.  It is possible for a user to sign in before these apps have been successfully provisioned for the user.  > **Important:** Do not generate or send a one-time activation token when activating users with an assigned password. Users should sign in with their assigned password.  For more information about the various scenarios of creating a user listed in the examples, see the [User creation scenarios](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#user-creation-scenarios) section.
     * Create a user
     * @param body
     * @param activate Executes an [activation lifecycle](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserLifecycle/#tag/UserLifecycle/operation/activateUser) operation when creating the user
     * @param provider Indicates whether to create a user with a specified authentication provider
     * @param nextLogin With &#x60;activate&#x3D;true&#x60;, if &#x60;nextLogin&#x3D;changePassword&#x60;, a user is created, activated, and the password is set to &#x60;EXPIRED&#x60;. The user must change it the next time they sign in.
     */
  createUser(body: CreateUserRequest, activate?: boolean, provider?: boolean, nextLogin?: UserNextLogin, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a user.  Perform this operation only on users that do not have a `DEPROVISIONED` status. * The user\'s `transitioningToStatus` property is `DEPROVISIONED` during deactivation to indicate that the user hasn\'t completed the asynchronous operation. * The user\'s status is `DEPROVISIONED` when the deactivation process is complete.  > **Important:** Deactivating a user is a **destructive** operation. The user is deprovisioned from all assigned apps, which might destroy their data such as email or files. **This action cannot be recovered!**  You can also perform user deactivation asynchronously. To invoke asynchronous user deactivation, pass an HTTP header `Prefer: respond-async` with the request.
     * Deactivate a user
     * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
     * @param sendEmail Sends a deactivation email to the admin if &#x60;true&#x60;
     * @param prefer Request asynchronous processing
     */
  deactivateUser(userId: string, sendEmail?: boolean, prefer?: 'respond-async', _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes any existing relationship between the `associated` and `primary` user. For the `associated` user, this is specified by the ID. The `primary` name specifies the relationship.  The operation is successful if the relationship is deleted. The operation is also successful if the specified user isn\'t in the `associated` relationship for any instance of the specified `primary` and thus, no relationship is found.
     * Delete a linked object value
     * @param userId If for the &#x60;self&#x60; link, this is the ID of the user for whom you want to get the primary user ID. If for the &#x60;associated&#x60; relation, this is the user ID or login value of the user assigned the associated relationship.  This can be &#x60;me&#x60; to represent the current session user.
     * @param relationshipName Name of the &#x60;primary&#x60; or &#x60;associated&#x60; relationship being queried
     */
  deleteLinkedObjectForUser(userId: string, relationshipName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a user permanently. This operation can only be performed on users that have a `DEPROVISIONED` status.  > **Warning:** This action can\'t be recovered!  This operation on a user that hasn\'t been deactivated causes that user to be deactivated. A second delete operation is required to delete the user.  > **Note:** You can also perform user deletion asynchronously. To invoke asynchronous user deletion, pass an HTTP header `Prefer: respond-async` with the request.  This header is also supported by user deactivation, which is performed if the delete endpoint is invoked on a user that hasn\'t been deactivated.
     * Delete a user
     * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
     * @param sendEmail Sends a deactivation email to the admin if &#x60;true&#x60;
     * @param prefer
     */
  deleteUser(userId: string, sendEmail?: boolean, prefer?: 'respond-async', _options?: Configuration): Promise<RequestContext>;
  /**
     * Ends Okta sessions for the currently signed in user. By default, the current session remains active. Use this method in a browser-based app. > **Note:** This operation requires a session cookie for the user. The API token isn\'t allowed for this operation.
     * End a current user session
     * @param keepCurrent
     */
  endUserSessions(keepCurrent?: KeepCurrent, _options?: Configuration): Promise<RequestContext>;
  /**
     * Expires the password. This operation transitions the user status to `PASSWORD_EXPIRED` so that the user must change their password the next time that they sign in. <br> If you have integrated Okta with your on-premises Active Directory (AD), then setting a user\'s password as expired in Okta also expires the password in AD. When the user tries to sign in to Okta, delegated authentication finds the password-expired status in AD, and the user is presented with the password-expired page where they can change their password.  > **Note:** The Okta account management policy doesn\'t support the `/users/{id}/lifecycle/expire_password` endpoint. See [Configure an Okta account management policy](https://developer.okta.com/docs/guides/okta-account-management-policy/main/).
     * Expire the password
     * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
     */
  expirePassword(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Expires the password and resets the user\'s password to a temporary password. This operation transitions the user status to `PASSWORD_EXPIRED` so that the user must change their password the next time that they sign in. The user\'s password is reset to a temporary password that\'s returned, and then the user\'s password is expired. If `revokeSessions` is included in the request with a value of `true`, the user\'s current outstanding sessions are revoked and require re-authentication. <br> If you have integrated Okta with your on-premises Active Directory (AD), then setting a user\'s password as expired in Okta also expires the password in AD. When the user tries to sign in to Okta, delegated authentication finds the password-expired status in AD, and the user is presented with the password-expired page where they can change their password.
     * Expire the password with a temporary password
     * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
     * @param revokeSessions Revokes the user\&#39;s existing sessions if &#x60;true&#x60;
     */
  expirePasswordAndGetTemporaryPassword(userId: string, revokeSessions?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Starts the forgot password flow.  Generates a one-time token (OTT) that you can use to reset a user\'s password.  The user must validate their security question\'s answer when visiting the reset link. Perform this operation only on users with an `ACTIVE` status and a valid [recovery question credential](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/createUser!path=credentials/recovery_question&t=request).  > **Note:** If you have migrated to Identity Engine, you can allow users to recover passwords with any enrolled MFA authenticator. See [Self-service account recovery](https://help.okta.com/oie/en-us/content/topics/identity-engine/authenticators/configure-sspr.htm?cshid=ext-config-sspr).  If an email address is associated with multiple users, keep in mind the following to ensure a successful password recovery lookup:   * Okta no longer includes deactivated users in the lookup.   * The lookup searches sign-in IDs first, then primary email addresses, and then secondary email addresses.  If `sendEmail` is `false`, returns a link for the user to reset their password. This operation doesn\'t affect the status of the user.
     * Start forgot password flow
     * @param userId ID of an existing Okta user
     * @param sendEmail Sends a forgot password email to the user if &#x60;true&#x60;
     */
  forgotPassword(userId: string, sendEmail?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Resets the user\'s password to the specified password if the provided answer to the recovery question is correct. You must include the recovery question answer with the submission.
     * Reset password with recovery question
     * @param userId ID of an existing Okta user
     * @param userCredentials
     * @param sendEmail
     */
  forgotPasswordSetNewPassword(userId: string, userCredentials: UserCredentials, sendEmail?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Resets a password. Generates a one-time token (OTT) that you can use to reset a user\'s password. You can automatically email the OTT link to the user or return the OTT to the API caller and distribute using a custom flow.  This operation transitions the user to the `RECOVERY` status. The user is then not able to sign in or initiate a forgot password flow until they complete the reset flow.  This operation provides an option to delete all the user\'s sessions. However, if the request is made in the context of a session owned by the specified user, that session isn\'t cleared. > **Note:** You can also use this API to convert a user with the Okta credential provider to use a federated provider. After this conversion, the user can\'t directly sign in with a password. > To convert a federated user back to an Okta user, use the default API call.  If an email address is associated with multiple users, keep in mind the following to ensure a successful password recovery lookup:   * Okta no longer includes deactivated users in the lookup.   * The lookup searches sign-in IDs first, then primary email addresses, and then secondary email addresses.   If `sendEmail` is `false`, returns a link for the user to reset their password.
     * Reset a password
     * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
     * @param sendEmail
     * @param revokeSessions Revokes all user sessions, except for the current session, if set to &#x60;true&#x60;
     */
  generateResetPasswordToken(userId: string, sendEmail: boolean, revokeSessions?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a linked identity provider (IdP) user by ID
     * Retrieve a user for IdP
     * @param idpId &#x60;id&#x60; of IdP
     * @param userId ID of an existing Okta user
     */
  getIdentityProviderApplicationUser(idpId: string, userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a refresh token issued for the specified user and client
     * Retrieve a refresh token for a client
     * @param userId ID of an existing Okta user
     * @param clientId Client app ID
     * @param tokenId &#x60;id&#x60; of Token
     * @param expand Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
     */
  getRefreshTokenForUserAndClient(userId: string, clientId: string, tokenId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a user from your Okta org.  You can substitute `me` for the `id` to fetch the current user linked to an API token or session cookie.  * The request returns the user linked to the API token that is specified in the Authorization header, not the user linked to the active session. Details of the admin user who granted the API token is returned.  * When the end user has an active Okta session, it is typically a CORS request from the browser. Therefore, it\'s possible to retrieve the current user without the Authorization header.  When fetching a user by `login` or `login shortname`, [URL encode](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding) the request parameter to ensure that special characters are escaped properly. Logins with a `/` character can only be fetched by `id` due to URL issues with escaping the `/` character. If you don\'t know a user\'s ID, you can use the [List all users](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers) endpoint to find it.  > **Note:** Some browsers block third-party cookies by default, which disrupts Okta functionality in certain flows. See [Mitigate the impact of third-party cookie deprecation](https://help.okta.com/okta_help.htm?type=oie&id=ext-third-party-cookies).
     * Retrieve a user
     * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
     * @param contentType Specifies the media type of the resource. Optional &#x60;okta-response&#x60; value can be included for performance optimization.  Complex DelAuth configurations may degrade performance when fetching specific parts of the response, and passing this parameter can omit these parts, bypassing the bottleneck.  Enum values for &#x60;okta-response&#x60;:   * &#x60;omitCredentials&#x60;: Omits the credentials subobject from the response.   * &#x60;omitCredentialsLinks&#x60;: Omits the following HAL links from the response: Update password, Change recovery question, Start forgot password flow, Reset password, Reset factors, Unlock.   * &#x60;omitTransitioningToStatus&#x60;: Omits the &#x60;transitioningToStatus&#x60; field from the response.
     * @param expand An optional parameter to include metadata in the &#x60;_embedded&#x60; attribute. Valid value: &#x60;blocks&#x60;.
     */
  getUser(userId: string, contentType?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a user\'s classification
     * Retrieve a user\'s classification
     * @param userId ID of an existing Okta user
     */
  getUserClassification(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a grant for the specified user
     * Retrieve a user grant
     * @param userId ID of an existing Okta user
     * @param grantId Grant ID
     * @param expand Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
     */
  getUserGrant(userId: string, grantId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the user risk object for a user ID
     * Retrieve the user\'s risk
     * @param userId ID of an existing Okta user
     */
  getUserRisk(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Links an Okta user to an existing SAML or social identity provider (IdP).  The SAML IdP must have `honorPersistentNameId` set to `true` to use this API. The [Name Identifier Format](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/replaceIdentityProvider!path=protocol/0/settings&t=request) of the incoming assertion must be `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent`.
     * Link a user to IdP
     * @param idpId &#x60;id&#x60; of IdP
     * @param userId ID of an existing Okta user
     * @param userIdentityProviderLinkRequest
     */
  linkUserToIdentityProvider(idpId: string, userId: string, userIdentityProviderLinkRequest: UserIdentityProviderLinkRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all app links for all direct or indirect (through group membership) assigned apps.  > **Note:** To list all apps in an org, use the [List all applications endpoint in the Applications API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/listApplications).
     * List all assigned app links
     * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
     */
  listAppLinks(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all grants for a specified user and client
     * List all grants for a client
     * @param userId ID of an existing Okta user
     * @param clientId Client app ID
     * @param expand Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     * @param limit Specifies the number of tokens to return
     */
  listGrantsForUserAndClient(userId: string, clientId: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all the users linked to an identity provider (IdP)
     * List all users for IdP
     * @param idpId &#x60;id&#x60; of IdP
     * @param q Searches the records for matching value
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     * @param limit A limit on the number of objects to return
     * @param expand Expand user data
     */
  listIdentityProviderApplicationUsers(idpId: string, q?: string, after?: string, limit?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists either the `self` link for the primary user or all associated users in the relationship specified by `relationshipName`. If the specified user isn\'t associated in any relationship, an empty array is returned.  Use `me` instead of `id` to specify the current session user.
     * List the primary or all of the associated linked object values
     * @param userId If for the &#x60;self&#x60; link, this is the ID of the user for whom you want to get the primary user ID. If for the &#x60;associated&#x60; relation, this is the user ID or login value of the user assigned the associated relationship.  This can be &#x60;me&#x60; to represent the current session user.
     * @param relationshipName Name of the &#x60;primary&#x60; or &#x60;associated&#x60; relationship being queried
     */
  listLinkedObjectsForUser(userId: string, relationshipName: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all refresh tokens issued for the specified user and client
     * List all refresh tokens for a client
     * @param userId ID of an existing Okta user
     * @param clientId Client app ID
     * @param expand Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     * @param limit Specifies the number of tokens to return
     */
  listRefreshTokensForUserAndClient(userId: string, clientId: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists the tokens minted by the social authentication provider when the user authenticates with Okta via Social Auth.  Okta doesn\'t import all the user information from a social provider. If the app needs information that isn\'t imported, it can get the user token from this endpoint. Then the app can make an API call to the social provider with the token to request the additional information.
     * List all tokens from OIDC IdP
     * @param idpId &#x60;id&#x60; of IdP
     * @param userId ID of an existing Okta user
     */
  listSocialAuthTokens(idpId: string, userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists information about how the user is blocked from accessing their account
     * List all user blocks
     * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
     */
  listUserBlocks(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all client resources for which the specified user has grants or tokens.  > **Note:** To list all client resources for which a specified authorization server has tokens, use the [List all client resources for an authorization server in the Authorization Servers API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/AuthorizationServerClients/#tag/AuthorizationServerClients/operation/listOAuth2ClientsForAuthorizationServer).
     * List all clients
     * @param userId ID of an existing Okta user
     */
  listUserClients(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all devices enrolled by a user.  > **Note:** To list all devices registered to an org, use the [List all devices endpoint in the Devices API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Device/#tag/Device/operation/listDevices).
     * List all devices
     * @param userId ID of an existing Okta user
     */
  listUserDevices(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all grants for the specified user
     * List all user grants
     * @param userId ID of an existing Okta user
     * @param scopeId The scope ID to filter on
     * @param expand Valid value: &#x60;scope&#x60;. If specified, scope details are included in the &#x60;_embedded&#x60; attribute.
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     * @param limit Specifies the number of grants to return
     */
  listUserGrants(userId: string, scopeId?: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all groups of which the user is a member. > **Note:** To list all groups in your org, use the [List all groups endpoints in the Groups API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/#tag/Group/operation/listGroups).
     * List all groups
     * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
     */
  listUserGroups(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists the identity providers (IdPs) associated with the user
     * List all IdPs for user
     * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
     */
  listUserIdentityProviders(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists users in your org, with pagination in most cases.  A subset of users can be returned that match a supported filter expression or search criteria. Different results are returned depending on specified queries in the request.  > **Note:** This operation omits users that have a status of `DEPROVISIONED` in the response. To return all users, use a filter or search query instead.
     * List all users
     * @param contentType Specifies the media type of the resource. Optional &#x60;okta-response&#x60; value can be included for performance optimization.  Complex DelAuth configurations may degrade performance when fetching specific parts of the response, and passing this parameter can omit these parts, bypassing the bottleneck.  Enum values for &#x60;okta-response&#x60;:   * &#x60;omitCredentials&#x60;: Omits the credentials subobject from the response.   * &#x60;omitCredentialsLinks&#x60;: Omits the following HAL links from the response: Update password, Change recovery question, Start forgot password flow, Reset password, Reset factors, Unlock.   * &#x60;omitTransitioningToStatus&#x60;: Omits the &#x60;transitioningToStatus&#x60; field from the response.
     * @param search Searches for users with a supported filtering expression for most properties. Okta recommends using this parameter for optimal search performance.   &gt; **Note:** Using an overly complex or long search query can result in an error.  This operation supports [pagination](https://developer.okta.com/docs/api/#pagination). Use an ID lookup for records that you update to ensure your results contain the latest data. Returned users include those with the &#x60;DEPROVISIONED&#x60; status.  Property names in the search parameter are case sensitive, whereas operators (&#x60;eq&#x60;, &#x60;sw&#x60;, and so on) and string values are case insensitive. Unlike with user logins, diacritical marks are significant in search string values: a search for &#x60;isaac.brock&#x60; finds &#x60;Isaac.Brock&#x60;, but doesn\&#39;t find a property whose value is &#x60;isáàc.bröck&#x60;.   This operation requires [URL encoding](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding). For example, &#x60;search&#x3D;profile.department eq \&quot;Engineering\&quot;&#x60; is encoded as &#x60;search&#x3D;profile.department%20eq%20%22Engineering%22&#x60;. If you use the special character &#x60;\&quot;&#x60; within a quoted string, it must also be escaped &#x60;\\&#x60; and encoded. For example, &#x60;search&#x3D;profile.lastName eq \&quot;bob\&quot;smith\&quot;&#x60; is encoded as &#x60;search&#x3D;profile.lastName%20eq%20%22bob%5C%22smith%22&#x60;. See [Special Characters](https://developer.okta.com/docs/api/#special-characters).  This operation searches many properties:   * Any user profile attribute, including custom-defined attributes   * The top-level properties: &#x60;id&#x60;, &#x60;status&#x60;, &#x60;created&#x60;, &#x60;activated&#x60;, &#x60;statusChanged&#x60;, and &#x60;lastUpdated&#x60;   * The [user type](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserType/#tag/UserType/operation/updateUserType) accessed as &#x60;type.id&#x60;  &gt; **Note:** &lt;x-lifecycle class&#x3D;\&quot;ea\&quot;&gt;&lt;/x-lifecycle&gt; The ability to search by user classification is available as an [Early Access](https://developer.okta.com/docs/api/openapi/okta-management/guides/release-lifecycle/#early-access-ea) feature. The &#x60;classification.type&#x60; property cannot be used in conjunction with other search terms. You can search using &#x60;classification.type eq \&quot;LITE\&quot;&#x60; or &#x60;classification.type eq \&quot;STANDARD\&quot;&#x60;.  You can also use &#x60;sortBy&#x60; and &#x60;sortOrder&#x60; parameters. The &#x60;ne&#x60; (not equal) operator isn\&#39;t supported, but you can obtain the same result by using &#x60;lt ... or ... gt&#x60;. For example, to see all users except those that have a status of &#x60;STAGED&#x60;, use &#x60;(status lt \&quot;STAGED\&quot; or status gt \&quot;STAGED\&quot;)&#x60;.  You can search properties that are arrays. If any element matches the search term, the entire array (object) is returned. Okta follows the [SCIM Protocol Specification](https://tools.ietf.org/html/rfc7644#section-3.4.2.2) for searching arrays. You can search multiple arrays, multiple values in an array, as well as using the standard logical and filtering operators. See [Filter](https://developer.okta.com/docs/reference/core-okta-api/#filter).  Searches for users can be filtered by the following operators: &#x60;sw&#x60;, &#x60;eq&#x60;, and &#x60;co&#x60;. You can only use &#x60;co&#x60; with these select user profile attributes: &#x60;profile.firstName&#x60;, &#x60;profile.lastName&#x60;, &#x60;profile.email&#x60;, and &#x60;profile.login&#x60;. See [Operators](https://developer.okta.com/docs/api/#operators).
     * @param filter Filters users with a supported expression for a subset of properties.   &gt; **Note:** Returned users include those with the &#x60;DEPROVISIONED&#x60; status.  This requires [URL encoding](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding). For example, &#x60;filter&#x3D;lastUpdated gt \&quot;2013-06-01T00:00:00.000Z\&quot;&#x60; is encoded as &#x60;filter&#x3D;lastUpdated%20gt%20%222013-06-01T00:00:00.000Z%22&#x60;. Filtering is case-sensitive for property names and query values, while operators are case-insensitive.  Filtering supports the following limited number of properties: &#x60;status&#x60;, &#x60;lastUpdated&#x60;, &#x60;id&#x60;, &#x60;profile.login&#x60;, &#x60;profile.email&#x60;, &#x60;profile.firstName&#x60;, and &#x60;profile.lastName&#x60;.  Additionally, filtering supports only the equal &#x60;eq&#x60; operator from the standard Okta API filtering semantics, except in the case of the &#x60;lastUpdated&#x60; property. This property can also use the inequality operators (&#x60;gt&#x60;, &#x60;ge&#x60;, &#x60;lt&#x60;, and &#x60;le&#x60;). For logical operators, only the logical operators &#x60;and&#x60; and &#x60;or&#x60; are supported. The &#x60;not&#x60; operator isn\&#39;t supported. See [Filter](https://developer.okta.com/docs/api/#filter) and [Operators](https://developer.okta.com/docs/api/#operators).
     * @param q Finds users who match the specified query. This doesn\&#39;t support pagination.  &gt; **Note:** For optimal performance, use the &#x60;search&#x60; parameter instead.  Use the &#x60;q&#x60; parameter for simple queries, such as a lookup of users by name when creating a people picker.  The value of &#x60;q&#x60; is matched against &#x60;firstName&#x60;, &#x60;lastName&#x60;, or &#x60;email&#x60;. This performs a &#x60;startsWith&#x60; match, but this is an implementation detail and can change without notice. You don\&#39;t need to specify &#x60;firstName&#x60;, &#x60;lastName&#x60;, or &#x60;email&#x60;.  &gt; **Note:** Using the &#x60;q&#x60; parameter in a request omits users that have a status of &#x60;DEPROVISIONED&#x60;. To return all users, use a filter or search query instead.
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     * @param limit Specifies the number of results returned. Defaults to 10 if &#x60;q&#x60; is provided.
     * @param sortBy Specifies field to sort by (for search queries only). This can be any single property, for example &#x60;sortBy&#x3D;profile.lastName&#x60;. Users with the same value for the &#x60;sortBy&#x60; property will be ordered by &#x60;id&#x60;.
     * @param sortOrder Specifies the sort order: &#x60;asc&#x60; or &#x60;desc&#x60; (for search queries only). Sorting is done in ASCII sort order (that is, by ASCII character value), but isn\&#39;t case sensitive. &#x60;sortOrder&#x60; is ignored if &#x60;sortBy&#x60; isn\&#39;t present.
     * @param expand A parameter to include metadata in the &#x60;_embedded&#x60; property. Supported value: &#x60;classification&#x60;.
     */
  listUsers(contentType?: string, search?: string, filter?: string, q?: string, after?: string, limit?: number, sortBy?: string, sortOrder?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Reactivates a user.  Perform this operation only on users with a `PROVISIONED` or `RECOVERY` [status](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers!c=200&path=status&t=response). This operation restarts the activation workflow if for some reason the user activation wasn\'t completed when using the `activationToken` from [Activate User](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserLifecycle/#tag/UserLifecycle/operation/activateUser).  Users that don\'t have a password must complete the flow by completing the [Reset password](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserCred/#tag/UserCred/operation/resetPassword) flow and MFA enrollment steps to transition the user to `ACTIVE` status.  If `sendEmail` is `false`, returns an activation link for the user to set up their account. The activation token can be used to create a custom activation link.
     * Reactivate a user
     * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
     * @param sendEmail Sends an activation email to the user if &#x60;true&#x60;
     */
  reactivateUser(userId: string, sendEmail?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a user\'s profile, credentials, or both using strict-update semantics.  All profile properties must be specified when updating a user\'s profile with a `PUT` method. Any property not specified in the request is deleted. > **Important:** Don\'t use a `PUT` method for partial updates.
     * Replace a user
     * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
     * @param user
     * @param strict If &#x60;true&#x60;, validates against minimum age and history password policy
     * @param ifMatch The ETag value of the user\&#39;s expected current state. This becomes a conditional request used for concurrency control. See [Conditional Requests and Entity Tags](/#conditional-requests-and-entity-tags).
     */
  replaceUser(userId: string, user: UpdateUserRequest, strict?: boolean, ifMatch?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the user\'s classification
     * Replace the user\'s classification
     * @param userId ID of an existing Okta user
     * @param replaceUserClassification
     */
  replaceUserClassification(userId: string, replaceUserClassification: ReplaceUserClassification, _options?: Configuration): Promise<RequestContext>;
  /**
     * Resets all factors for the specified user. All MFA factor enrollments return to the unenrolled state. The user\'s status remains `ACTIVE`. This link is present only if the user is currently enrolled in one or more MFA factors.
     * Reset the factors
     * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
     */
  resetFactors(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes all grants for the specified user and client
     * Revoke all grants for a client
     * @param userId ID of an existing Okta user
     * @param clientId Client app ID
     */
  revokeGrantsForUserAndClient(userId: string, clientId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes the specified refresh token
     * Revoke a token for a client
     * @param userId ID of an existing Okta user
     * @param clientId Client app ID
     * @param tokenId &#x60;id&#x60; of Token
     */
  revokeTokenForUserAndClient(userId: string, clientId: string, tokenId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes all refresh tokens issued for the specified user and client
     * Revoke all refresh tokens for a client
     * @param userId ID of an existing Okta user
     * @param clientId Client app ID
     */
  revokeTokensForUserAndClient(userId: string, clientId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes one grant for a specified user
     * Revoke a user grant
     * @param userId ID of an existing Okta user
     * @param grantId Grant ID
     */
  revokeUserGrant(userId: string, grantId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes all grants for a specified user
     * Revoke all user grants
     * @param userId ID of an existing Okta user
     */
  revokeUserGrants(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes all active identity provider sessions of the user. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user. > **Note:** This operation doesn\'t clear the sessions created for web or native apps.
     * Revoke all user sessions
     * @param userId ID of an existing Okta user
     * @param oauthTokens Revoke issued OpenID Connect and OAuth refresh and access tokens
     */
  revokeUserSessions(userId: string, oauthTokens?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns the first user as the `associated` and the second user as the `primary` for the specified relationship.  If the first user is already associated with a different `primary` for this relationship, the previous link is removed. A linked object relationship can specify only one primary user for an associated user.
     * Assign a linked object value for primary
     * @param associatedUserId If for the &#x60;self&#x60; link, this is the ID of the user for whom you want to get the primary user ID. If for the &#x60;associated&#x60; relation, this is the user ID or login value of the user assigned the associated relationship.  This can be &#x60;me&#x60; to represent the current session user.
     * @param primaryRelationshipName Name of the &#x60;primary&#x60; relationship being assigned
     * @param primaryUserId User ID to be assigned to the &#x60;primary&#x60; relationship for the &#x60;associated&#x60; user
     */
  setLinkedObjectForUser(associatedUserId: string, primaryRelationshipName: string, primaryUserId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Suspends a user. Perform this operation only on users with an `ACTIVE` status. The user has a `SUSPENDED` status when the process completes.  Suspended users can\'t sign in to Okta. They can only be unsuspended or deactivated. Their group and app assignments are retained.
     * Suspend a user
     * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
     */
  suspendUser(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unlinks the Okta user and the identity provider (IdP) user. The next time the user federates into Okta through this IdP, they have to re-link their account according to the account link policy.
     * Unlink a user from IdP
     * @param idpId &#x60;id&#x60; of IdP
     * @param userId ID of an existing Okta user
     */
  unlinkUserFromIdentityProvider(idpId: string, userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unlocks a user with a `LOCKED_OUT` status or unlocks a user with an `ACTIVE` status that\'s blocked from unknown devices. Unlocked users have an `ACTIVE` status and can sign in with their current password. > **Note:** This operation works with Okta-sourced users. It doesn\'t support directory-sourced accounts such as Active Directory.
     * Unlock a user
     * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
     */
  unlockUser(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unsuspends a user and returns them to the `ACTIVE` state. This operation can only be performed on users that have a `SUSPENDED` status.
     * Unsuspend a user
     * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
     */
  unsuspendUser(userId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a user\'s profile or credentials with partial update semantics.  > **Important:** Use the `POST` method for partial updates. Unspecified properties are set to null with `PUT`.  `profile` and `credentials` can be updated independently or together with a single request. > **Note**: Currently, the user type of a user can only be changed via a full replacement PUT operation. If the request parameters of a partial update include the type element from the user object, the value must match the existing type of the user. Only admins are permitted to change the user type of a user; end users are not allowed to change their own user type.  > **Note**: To update a current user\'s profile with partial semantics, the `/api/v1/users/me` endpoint can be invoked. > > A user can only update profile properties for which the user has write access. Within the profile, if the user tries to update the primary or the secondary email IDs, verification emails are sent to those email IDs, and the fields are updated only upon verification.  If you are using this endpoint to set a password, it sets a password without validating existing user credentials. This is an administrative operation. For operations that validate credentials, refer to the [Reset password](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserCred/#tag/UserCred/operation/resetPassword), [Start forgot password flow](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserCred/#tag/UserCred/operation/forgotPassword), and [Update password](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserCred/#tag/UserCred/operation/changePassword) endpoints.
     * Update a user
     * @param userId An ID, login, or login shortname (as long as the shortname is unambiguous) of an existing Okta user
     * @param user
     * @param strict If true, validates against minimum age and history password policy
     * @param ifMatch The ETag value of the user\&#39;s expected current state. This becomes a conditional request used for concurrency control. See [Conditional Requests and Entity Tags](/#conditional-requests-and-entity-tags).
     */
  updateUser(userId: string, user: UpdateUserRequest, strict?: boolean, ifMatch?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Upserts (creates or updates) the user risk object for a user ID
     * Upsert the user\'s risk
     * @param userId ID of an existing Okta user
     * @param userRiskRequest
     */
  upsertUserRisk(userId: string, userRiskRequest: UserRiskRequest, _options?: Configuration): Promise<RequestContext>;
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
     * @params response Response returned by the server for a request to endUserSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
  endUserSessions(response: ResponseContext): Promise<void>;
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
  expirePasswordAndGetTemporaryPassword(response: ResponseContext): Promise<User>;
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
     * @params response Response returned by the server for a request to getIdentityProviderApplicationUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  getIdentityProviderApplicationUser(response: ResponseContext): Promise<IdentityProviderApplicationUser>;
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
  getUser(response: ResponseContext): Promise<UserGetSingleton>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserClassification
     * @throws ApiException if the response code was not in [200, 299]
     */
  getUserClassification(response: ResponseContext): Promise<UserClassification>;
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
     * @params response Response returned by the server for a request to getUserRisk
     * @throws ApiException if the response code was not in [200, 299]
     */
  getUserRisk(response: ResponseContext): Promise<UserRiskGetResponse>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to linkUserToIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  linkUserToIdentityProvider(response: ResponseContext): Promise<IdentityProviderApplicationUser>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAppLinks
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAppLinks(response: ResponseContext): Promise<Array<AssignedAppLink>>;
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
     * @params response Response returned by the server for a request to listIdentityProviderApplicationUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
  listIdentityProviderApplicationUsers(response: ResponseContext): Promise<Array<IdentityProviderApplicationUser>>;
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
     * @params response Response returned by the server for a request to listSocialAuthTokens
     * @throws ApiException if the response code was not in [200, 299]
     */
  listSocialAuthTokens(response: ResponseContext): Promise<Array<SocialAuthToken>>;
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
     * @params response Response returned by the server for a request to listUserDevices
     * @throws ApiException if the response code was not in [200, 299]
     */
  listUserDevices(response: ResponseContext): Promise<Array<UserDevice>>;
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
     * @params response Response returned by the server for a request to replaceUserClassification
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceUserClassification(response: ResponseContext): Promise<UserClassification>;
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
     * @params response Response returned by the server for a request to unlinkUserFromIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  unlinkUserFromIdentityProvider(response: ResponseContext): Promise<void>;
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
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to upsertUserRisk
     * @throws ApiException if the response code was not in [200, 299]
     */
  upsertUserRisk(response: ResponseContext): Promise<UserRiskPutResponse>;
}
