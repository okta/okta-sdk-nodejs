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
import { RequestContext, ResponseContext, HttpFile } from '../http/http';
import { AppUser } from '../models/AppUser';
import { Application } from '../models/Application';
import { ApplicationFeature } from '../models/ApplicationFeature';
import { ApplicationGroupAssignment } from '../models/ApplicationGroupAssignment';
import { CapabilitiesObject } from '../models/CapabilitiesObject';
import { Csr } from '../models/Csr';
import { CsrMetadata } from '../models/CsrMetadata';
import { JsonWebKey } from '../models/JsonWebKey';
import { OAuth2ScopeConsentGrant } from '../models/OAuth2ScopeConsentGrant';
import { OAuth2Token } from '../models/OAuth2Token';
import { ProvisioningConnection } from '../models/ProvisioningConnection';
import { ProvisioningConnectionRequest } from '../models/ProvisioningConnectionRequest';
/**
 * no description
 */
export declare class ApplicationApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates an inactive application
     * Activate an Application
     * @param appId
     */
  activateApplication(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Activates the default Provisioning Connection for an application
     * Activate the default Provisioning Connection
     * @param appId
     */
  activateDefaultProvisioningConnectionForApplication(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns an application to a policy identified by `policyId`. If the application was previously assigned to another policy, this removes that assignment.
     * Assign an Application to a Policy
     * @param appId
     * @param policyId
     */
  assignApplicationPolicy(appId: string, policyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns a group to an application
     * Assign a Group
     * @param appId
     * @param groupId
     * @param applicationGroupAssignment
     */
  assignGroupToApplication(appId: string, groupId: string, applicationGroupAssignment?: ApplicationGroupAssignment, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns an user to an application with [credentials](#application-user-credentials-object) and an app-specific [profile](#application-user-profile-object). Profile mappings defined for the application are first applied before applying any profile properties specified in the request.
     * Assign a User
     * @param appId
     * @param appUser
     */
  assignUserToApplication(appId: string, appUser: AppUser, _options?: Configuration): Promise<RequestContext>;
  /**
     * Clones a X.509 certificate for an application key credential from a source application to target application.
     * Clone a Key Credential
     * @param appId
     * @param keyId
     * @param targetAid Unique key of the target Application
     */
  cloneApplicationKey(appId: string, keyId: string, targetAid: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a new application to your Okta organization
     * Create an Application
     * @param application
     * @param activate Executes activation lifecycle operation when creating the app
     * @param OktaAccessGateway_Agent
     */
  createApplication(application: Application, activate?: boolean, OktaAccessGateway_Agent?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates an active application
     * Deactivate an Application
     * @param appId
     */
  deactivateApplication(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates the default Provisioning Connection for an application
     * Deactivate the default Provisioning Connection for an Application
     * @param appId
     */
  deactivateDefaultProvisioningConnectionForApplication(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an inactive application
     * Delete an Application
     * @param appId
     */
  deleteApplication(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Generates a new X.509 certificate for an application key credential
     * Generate a Key Credential
     * @param appId
     * @param validityYears
     */
  generateApplicationKey(appId: string, validityYears?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Generates a new key pair and returns the Certificate Signing Request for it
     * Generate a Certificate Signing Request
     * @param appId
     * @param metadata
     */
  generateCsrForApplication(appId: string, metadata: CsrMetadata, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an application from your Okta organization by `id`
     * Retrieve an Application
     * @param appId
     * @param expand
     */
  getApplication(appId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an application group assignment
     * Retrieve an Assigned Group
     * @param appId
     * @param groupId
     * @param expand
     */
  getApplicationGroupAssignment(appId: string, groupId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a specific application key credential by kid
     * Retrieve a Key Credential
     * @param appId
     * @param keyId
     */
  getApplicationKey(appId: string, keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a specific user assignment for application by `id`
     * Retrieve an Assigned User
     * @param appId
     * @param userId
     * @param expand
     */
  getApplicationUser(appId: string, userId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a certificate signing request for the app by `id`
     * Retrieve a Certificate Signing Request
     * @param appId
     * @param csrId
     */
  getCsrForApplication(appId: string, csrId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the default Provisioning Connection for application
     * Retrieve the default Provisioning Connection
     * @param appId
     */
  getDefaultProvisioningConnectionForApplication(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a Feature object for an application
     * Retrieve a Feature
     * @param appId
     * @param name
     */
  getFeatureForApplication(appId: string, name: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a token for the specified application
     * Retrieve an OAuth 2.0 Token
     * @param appId
     * @param tokenId
     * @param expand
     */
  getOAuth2TokenForApplication(appId: string, tokenId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a single scope consent grant for the application
     * Retrieve a Scope Consent Grant
     * @param appId
     * @param grantId
     * @param expand
     */
  getScopeConsentGrant(appId: string, grantId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Grants consent for the application to request an OAuth 2.0 Okta scope
     * Grant Consent to Scope
     * @param appId
     * @param oAuth2ScopeConsentGrant
     */
  grantConsentToScope(appId: string, oAuth2ScopeConsentGrant: OAuth2ScopeConsentGrant, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all group assignments for an application
     * List all Assigned Groups
     * @param appId
     * @param q
     * @param after Specifies the pagination cursor for the next page of assignments
     * @param limit Specifies the number of results for a page
     * @param expand
     */
  listApplicationGroupAssignments(appId: string, q?: string, after?: string, limit?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all key credentials for an application
     * List all Key Credentials
     * @param appId
     */
  listApplicationKeys(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all assigned [application users](#application-user-model) for an application
     * List all Assigned Users
     * @param appId
     * @param q
     * @param query_scope
     * @param after specifies the pagination cursor for the next page of assignments
     * @param limit specifies the number of results for a page
     * @param filter
     * @param expand
     */
  listApplicationUsers(appId: string, q?: string, query_scope?: string, after?: string, limit?: number, filter?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all applications with pagination. A subset of apps can be returned that match a supported filter expression or query.
     * List all Applications
     * @param q
     * @param after Specifies the pagination cursor for the next page of apps
     * @param limit Specifies the number of results for a page
     * @param filter Filters apps by status, user.id, group.id or credentials.signing.kid expression
     * @param expand Traverses users link relationship and optionally embeds Application User resource
     * @param includeNonDeleted
     */
  listApplications(q?: string, after?: string, limit?: number, filter?: string, expand?: string, includeNonDeleted?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all Certificate Signing Requests for an application
     * List all Certificate Signing Requests
     * @param appId
     */
  listCsrsForApplication(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all features for an application
     * List all Features
     * @param appId
     */
  listFeaturesForApplication(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all tokens for the application
     * List all OAuth 2.0 Tokens
     * @param appId
     * @param expand
     * @param after
     * @param limit
     */
  listOAuth2TokensForApplication(appId: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all scope consent grants for the application
     * List all Scope Consent Grants
     * @param appId
     * @param expand
     */
  listScopeConsentGrants(appId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Publishes a certificate signing request for the app with a signed X.509 certificate and adds it into the application key credentials
     * Publish a Certificate Signing Request
     * @param appId
     * @param csrId
     * @param body
     */
  publishCsrFromApplication(appId: string, csrId: string, body: HttpFile, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces an application
     * Replace an Application
     * @param appId
     * @param application
     */
  replaceApplication(appId: string, application: Application, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes a certificate signing request and deletes the key pair from the application
     * Revoke a Certificate Signing Request
     * @param appId
     * @param csrId
     */
  revokeCsrFromApplication(appId: string, csrId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes the specified token for the specified application
     * Revoke an OAuth 2.0 Token
     * @param appId
     * @param tokenId
     */
  revokeOAuth2TokenForApplication(appId: string, tokenId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes all tokens for the specified application
     * Revoke all OAuth 2.0 Tokens
     * @param appId
     */
  revokeOAuth2TokensForApplication(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes permission for the application to request the given scope
     * Revoke a Scope Consent Grant
     * @param appId
     * @param grantId
     */
  revokeScopeConsentGrant(appId: string, grantId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns a group from an application
     * Unassign a Group
     * @param appId
     * @param groupId
     */
  unassignApplicationFromGroup(appId: string, groupId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns a user from an application
     * Unassign a User
     * @param appId
     * @param userId
     * @param sendEmail
     */
  unassignUserFromApplication(appId: string, userId: string, sendEmail?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a user's profile for an application
     * Update an Application Profile for Assigned User
     * @param appId
     * @param userId
     * @param appUser
     */
  updateApplicationUser(appId: string, userId: string, appUser: AppUser, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates the default provisioning connection for application
     * Update the default Provisioning Connection
     * @param appId
     * @param ProvisioningConnectionRequest
     * @param activate
     */
  updateDefaultProvisioningConnectionForApplication(appId: string, ProvisioningConnectionRequest: ProvisioningConnectionRequest, activate?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a Feature object for an application
     * Update a Feature
     * @param appId
     * @param name
     * @param CapabilitiesObject
     */
  updateFeatureForApplication(appId: string, name: string, CapabilitiesObject: CapabilitiesObject, _options?: Configuration): Promise<RequestContext>;
  /**
     * Uploads a logo for the application. The file must be in PNG, JPG, or GIF format, and less than 1 MB in size. For best results use landscape orientation, a transparent background, and a minimum size of 420px by 120px to prevent upscaling.
     * Upload a Logo
     * @param appId
     * @param file
     */
  uploadApplicationLogo(appId: string, file: HttpFile, _options?: Configuration): Promise<RequestContext>;
}
export declare class ApplicationApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateApplication(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateDefaultProvisioningConnectionForApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateDefaultProvisioningConnectionForApplication(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignApplicationPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  assignApplicationPolicy(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignGroupToApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  assignGroupToApplication(response: ResponseContext): Promise<ApplicationGroupAssignment>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignUserToApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  assignUserToApplication(response: ResponseContext): Promise<AppUser>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloneApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  cloneApplicationKey(response: ResponseContext): Promise<JsonWebKey>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  createApplication(response: ResponseContext): Promise<Application>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateApplication(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateDefaultProvisioningConnectionForApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateDefaultProvisioningConnectionForApplication(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteApplication(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  generateApplicationKey(response: ResponseContext): Promise<JsonWebKey>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateCsrForApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  generateCsrForApplication(response: ResponseContext): Promise<Csr>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  getApplication(response: ResponseContext): Promise<Application>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApplicationGroupAssignment
     * @throws ApiException if the response code was not in [200, 299]
     */
  getApplicationGroupAssignment(response: ResponseContext): Promise<ApplicationGroupAssignment>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  getApplicationKey(response: ResponseContext): Promise<JsonWebKey>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApplicationUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  getApplicationUser(response: ResponseContext): Promise<AppUser>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCsrForApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  getCsrForApplication(response: ResponseContext): Promise<Csr>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDefaultProvisioningConnectionForApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  getDefaultProvisioningConnectionForApplication(response: ResponseContext): Promise<ProvisioningConnection>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFeatureForApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  getFeatureForApplication(response: ResponseContext): Promise<ApplicationFeature>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOAuth2TokenForApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  getOAuth2TokenForApplication(response: ResponseContext): Promise<OAuth2Token>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getScopeConsentGrant
     * @throws ApiException if the response code was not in [200, 299]
     */
  getScopeConsentGrant(response: ResponseContext): Promise<OAuth2ScopeConsentGrant>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to grantConsentToScope
     * @throws ApiException if the response code was not in [200, 299]
     */
  grantConsentToScope(response: ResponseContext): Promise<OAuth2ScopeConsentGrant>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApplicationGroupAssignments
     * @throws ApiException if the response code was not in [200, 299]
     */
  listApplicationGroupAssignments(response: ResponseContext): Promise<Array<ApplicationGroupAssignment>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApplicationKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
  listApplicationKeys(response: ResponseContext): Promise<Array<JsonWebKey>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApplicationUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
  listApplicationUsers(response: ResponseContext): Promise<Array<AppUser>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApplications
     * @throws ApiException if the response code was not in [200, 299]
     */
  listApplications(response: ResponseContext): Promise<Array<Application>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCsrsForApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  listCsrsForApplication(response: ResponseContext): Promise<Array<Csr>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFeaturesForApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  listFeaturesForApplication(response: ResponseContext): Promise<Array<ApplicationFeature>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOAuth2TokensForApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  listOAuth2TokensForApplication(response: ResponseContext): Promise<Array<OAuth2Token>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listScopeConsentGrants
     * @throws ApiException if the response code was not in [200, 299]
     */
  listScopeConsentGrants(response: ResponseContext): Promise<Array<OAuth2ScopeConsentGrant>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to publishCsrFromApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  publishCsrFromApplication(response: ResponseContext): Promise<JsonWebKey>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceApplication(response: ResponseContext): Promise<Application>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeCsrFromApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  revokeCsrFromApplication(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeOAuth2TokenForApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  revokeOAuth2TokenForApplication(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeOAuth2TokensForApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  revokeOAuth2TokensForApplication(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeScopeConsentGrant
     * @throws ApiException if the response code was not in [200, 299]
     */
  revokeScopeConsentGrant(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unassignApplicationFromGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  unassignApplicationFromGroup(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unassignUserFromApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  unassignUserFromApplication(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateApplicationUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateApplicationUser(response: ResponseContext): Promise<AppUser>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDefaultProvisioningConnectionForApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateDefaultProvisioningConnectionForApplication(response: ResponseContext): Promise<ProvisioningConnection>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateFeatureForApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateFeatureForApplication(response: ResponseContext): Promise<ApplicationFeature>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadApplicationLogo
     * @throws ApiException if the response code was not in [200, 299]
     */
  uploadApplicationLogo(response: ResponseContext): Promise<void>;
}
