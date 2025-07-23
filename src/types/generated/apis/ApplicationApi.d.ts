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
import { AppConnectionUserProvisionJWKResponse } from '../models/AppConnectionUserProvisionJWKResponse';
import { AppUser } from '../models/AppUser';
import { AppUserAssignRequest } from '../models/AppUserAssignRequest';
import { AppUserUpdateRequest } from '../models/AppUserUpdateRequest';
import { Application } from '../models/Application';
import { ApplicationFeature } from '../models/ApplicationFeature';
import { ApplicationFeatureType } from '../models/ApplicationFeatureType';
import { ApplicationGroupAssignment } from '../models/ApplicationGroupAssignment';
import { CapabilityType } from '../models/CapabilityType';
import { Csr } from '../models/Csr';
import { CsrMetadata } from '../models/CsrMetadata';
import { FederatedClaim } from '../models/FederatedClaim';
import { FederatedClaimRequestBody } from '../models/FederatedClaimRequestBody';
import { JsonPatchOperation } from '../models/JsonPatchOperation';
import { JsonWebKey } from '../models/JsonWebKey';
import { ListJwk200Response } from '../models/ListJwk200Response';
import { OAuth2ClientJsonWebKey } from '../models/OAuth2ClientJsonWebKey';
import { OAuth2ClientJsonWebKeyRequestBody } from '../models/OAuth2ClientJsonWebKeyRequestBody';
import { OAuth2ClientSecret } from '../models/OAuth2ClientSecret';
import { OAuth2ClientSecretRequestBody } from '../models/OAuth2ClientSecretRequestBody';
import { OAuth2RefreshToken } from '../models/OAuth2RefreshToken';
import { OAuth2ScopeConsentGrant } from '../models/OAuth2ScopeConsentGrant';
import { OAuthProvisioningEnabledApp } from '../models/OAuthProvisioningEnabledApp';
import { OrgCWOConnection } from '../models/OrgCWOConnection';
import { OrgCWOConnectionPatchRequest } from '../models/OrgCWOConnectionPatchRequest';
import { ProvisioningConnectionResponse } from '../models/ProvisioningConnectionResponse';
import { UpdateDefaultProvisioningConnectionForApplicationRequest } from '../models/UpdateDefaultProvisioningConnectionForApplicationRequest';
import { UpdateFeatureForApplicationRequest } from '../models/UpdateFeatureForApplicationRequest';
/**
 * no description
 */
export declare class ApplicationApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates an inactive application
     * Activate an application
     * @param appId Application ID
     */
  activateApplication(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Activates the default provisioning connection for an app
     * Activate the default provisioning connection
     * @param appId Application ID
     */
  activateDefaultProvisioningConnectionForApplication(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Activates an OAuth 2.0 Client JSON Web Key by `keyId`
     * Activate an OAuth 2.0 client JSON Web Key
     * @param appId Application ID
     * @param keyId Unique &#x60;id&#x60; of the OAuth 2.0 Client JSON Web Key
     */
  activateOAuth2ClientJsonWebKey(appId: string, keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Activates an OAuth 2.0 Client Secret by `secretId`
     * Activate an OAuth 2.0 client secret
     * @param appId Application ID
     * @param secretId Unique &#x60;id&#x60; of the OAuth 2.0 Client Secret
     */
  activateOAuth2ClientSecret(appId: string, secretId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Adds a new JSON Web Key to the client`s JSON Web Keys. > **Note:** This API doesn\'t allow you to add a key if the existing key doesn\'t have a `kid`. This is also consistent with how the [Dynamic Client Registration](/openapi/okta-oauth/oauth/tag/Client/) or [Applications](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/) APIs behave, as they don\'t allow the creation of multiple keys without `kids`. Use the [Replace an Application](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication) or the [Replace a Client Application](/openapi/okta-oauth/oauth/tag/Client/#tag/Client/operation/replaceClient) operation to update the JWKS or [Delete an OAuth 2.0 Client JSON Web Key](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationSSOCredentialOAuth2ClientAuth/#tag/ApplicationSSOCredentialOAuth2ClientAuth/operation/deletejwk) and re-add the key with a `kid`.
     * Add a JSON Web Key
     * @param appId Application ID
     * @param oAuth2ClientJsonWebKeyRequestBody
     */
  addJwk(appId: string, oAuth2ClientJsonWebKeyRequestBody: OAuth2ClientJsonWebKeyRequestBody, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns an app to an [authentication policy](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Policy/), identified by `policyId`. If the app was previously assigned to another policy, this operation replaces that assignment with the updated policy identified by `policyId`.  > **Note:** When you [merge duplicate authentication policies](https://help.okta.com/okta_help.htm?type=oie&id=ext-merge-auth-policies), the policy and mapping CRUD operations may be unavailable during the consolidation. When the consolidation is complete, you receive an email with merged results.
     * Assign an authentication policy
     * @param appId Application ID
     * @param policyId &#x60;id&#x60; of the Policy
     */
  assignApplicationPolicy(appId: string, policyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns a [Group](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/) to an app, which in turn assigns the app to each [User](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/) that belongs to the group.  The resulting application user [scope](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationUsers/#tag/ApplicationUsers/operation/listApplicationUsers!c=200&path=scope&t=response) is `GROUP` since the assignment was from the group membership.
     * Assign an application group
     * @param appId Application ID
     * @param groupId The &#x60;id&#x60; of the group
     * @param applicationGroupAssignment
     */
  assignGroupToApplication(appId: string, groupId: string, applicationGroupAssignment?: ApplicationGroupAssignment, _options?: Configuration): Promise<RequestContext>;
  /**
     * Assigns a user to an app for:    * SSO only<br>     Assignments to SSO apps typically don\'t include a user profile.     However, if your SSO app requires a profile but doesn\'t have provisioning enabled, you can add profile attributes in the request body.    * SSO and provisioning<br>     Assignments to SSO and provisioning apps typically include credentials and an app-specific profile.     Profile mappings defined for the app are applied first before applying any profile properties that are specified in the request body.     > **Notes:**     > * When Universal Directory is enabled, you can only specify profile properties that aren\'t defined in profile mappings.     > * Omit mapped properties during assignment to minimize assignment errors.
     * Assign an application user
     * @param appId Application ID
     * @param appUser
     */
  assignUserToApplication(appId: string, appUser: AppUserAssignRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Clones an X.509 certificate for an Application Key Credential from a source app to a target app.  For step-by-step instructions to clone a credential, see [Share application key credentials for IdPs across apps](https://developer.okta.com/docs/guides/sharing-cert/main/). > **Note:** Sharing certificates isn\'t a recommended security practice.
     * Clone a key credential
     * @param appId Application ID
     * @param keyId ID of the Key Credential for the application
     * @param targetAid Unique key of the target Application
     */
  cloneApplicationKey(appId: string, keyId: string, targetAid: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Configures a capability (`SSO` or `PROVISIONING`) in the app instance by automatically exchanging configuration information.
     * Configure a capability in the app instance
     * @param appId Application ID
     * @param capabilityType Capability type
     */
  configureCapabilityApplication(appId: string, capabilityType: CapabilityType, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates an app instance in your Okta org.  You can either create an OIN app instance or a custom app instance: * OIN app instances have prescribed `name` (key app definition) and `signOnMode` options. See the [OIN schemas](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/schema/GoogleApplication) for the request body. * For custom app instances, select the [signOnMode](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/createApplication!path=0/signOnMode&t=request) that pertains to your app and specify the required parameters in the request body.
     * Create an application
     * @param application
     * @param activate Executes activation lifecycle operation when creating the app
     * @param oktaAccessGatewayAgent
     */
  createApplication(application: Application, activate?: boolean, oktaAccessGatewayAgent?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a CWO connection
     * Create a CWO connection
     * @param appId Application ID
     * @param orgCWOConnection
     */
  createCWOConnection(appId: string, orgCWOConnection: OrgCWOConnection, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates a claim that will be included in tokens produced by federation protocols (for example: OIDC `id_tokens` or SAML Assertions)
     * Create a federated claim
     * @param appId Application ID
     * @param federatedClaimRequestBody
     */
  createFederatedClaim(appId: string, federatedClaimRequestBody: FederatedClaimRequestBody, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates an OAuth 2.0 Client Secret object with a new active client secret. You can create up to two Secret objects. An error is returned if you attempt to create more than two Secret objects. > **Note:** This API lets you bring your own secret. If [token_endpoint_auth_method](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/createApplication!path=4/credentials/oauthClient/token_endpoint_auth_method&t=request) of the app is `client_secret_jwt`, then the minimum length of `client_secret` is 32 characters. If no secret is specified in the request, Okta adds a new system-generated secret.
     * Create an OAuth 2.0 client secret
     * @param appId Application ID
     * @param oAuth2ClientSecretRequestBody
     */
  createOAuth2ClientSecret(appId: string, oAuth2ClientSecretRequestBody?: OAuth2ClientSecretRequestBody, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates an active application
     * Deactivate an application
     * @param appId Application ID
     */
  deactivateApplication(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates the default provisioning connection for an app
     * Deactivate the default provisioning connection
     * @param appId Application ID
     */
  deactivateDefaultProvisioningConnectionForApplication(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates an OAuth 2.0 Client JSON Web Key by `keyId`.
     * Deactivate an OAuth 2.0 client JSON Web Key
     * @param appId Application ID
     * @param keyId Unique &#x60;id&#x60; of the OAuth 2.0 Client JSON Web Key
     */
  deactivateOAuth2ClientJsonWebKey(appId: string, keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates an OAuth 2.0 Client Secret by `secretId`. You can\'t deactivate a secret if it\'s the only secret of the client.
     * Deactivate an OAuth 2.0 client secret
     * @param appId Application ID
     * @param secretId Unique &#x60;id&#x60; of the OAuth 2.0 Client Secret
     */
  deactivateOAuth2ClientSecret(appId: string, secretId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an inactive application
     * Delete an application
     * @param appId Application ID
     */
  deleteApplication(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a CWO connection
     * Delete a CWO connection
     * @param appId Application ID
     * @param connectionId Connection ID
     */
  deleteCWOConnection(appId: string, connectionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes a federated claim by `claimId`
     * Delete a federated claim
     * @param appId Application ID
     * @param claimId The unique &#x60;id&#x60; of the federated claim
     */
  deleteFederatedClaim(appId: string, claimId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an OAuth 2.0 Client Secret by `secretId`. You can only delete an inactive Secret.
     * Delete an OAuth 2.0 client secret
     * @param appId Application ID
     * @param secretId Unique &#x60;id&#x60; of the OAuth 2.0 Client Secret
     */
  deleteOAuth2ClientSecret(appId: string, secretId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deletes an OAuth 2.0 Client JSON Web Key by `keyId`. You can only delete an inactive key.
     * Delete an OAuth 2.0 client JSON Web Key
     * @param appId Application ID
     * @param keyId Unique &#x60;id&#x60; of the OAuth 2.0 Client JSON Web Key
     */
  deletejwk(appId: string, keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Generates a new X.509 certificate for an app key credential > **Note:** To update an Application with the newly generated key credential, use the [Replace an Application](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication) request with the new [credentials.signing.kid](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication!path=4/credentials/signing/kid&t=request) value in the request body. You can provide just the [Signing Credential object](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication!path=4/credentials/signing&t=request) instead of the entire [Application Credential object](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/replaceApplication!path=4/credentials&t=request).
     * Generate a key credential
     * @param appId Application ID
     * @param validityYears Expiry years of the Application Key Credential
     */
  generateApplicationKey(appId: string, validityYears: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Generates a new key pair and returns the Certificate Signing Request(CSR) for it. The information in a CSR is used by the Certificate Authority (CA) to verify and create your certificate. It also contains the public key that is included in your certificate.  Returns CSR in `pkcs#10` format if the `Accept` media type is `application/pkcs10` or a CSR object if the `Accept` media type is `application/json`. > **Note:** The key pair isn\'t listed in the Key Credentials for the app until it\'s published.
     * Generate a certificate signing request
     * @param appId Application ID
     * @param metadata
     */
  generateCsrForApplication(appId: string, metadata: CsrMetadata, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves inbound and outbound CWO connections for a given app
     * Retrieve all CWO connections
     * @param appId Application ID
     */
  getAllCWOConnections(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an application from your Okta organization by `id`
     * Retrieve an application
     * @param appId Application ID
     * @param expand An optional query parameter to return the specified [Application User](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationUsers/) in the &#x60;_embedded&#x60; property. Valid value: &#x60;expand&#x3D;user/{userId}&#x60;
     */
  getApplication(appId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an app group assignment
     * Retrieve an application group
     * @param appId Application ID
     * @param groupId The &#x60;id&#x60; of the group
     * @param expand An optional query parameter to return the corresponding assigned [group](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/) or  the group assignment metadata details in the &#x60;_embedded&#x60; property.
     */
  getApplicationGroupAssignment(appId: string, groupId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a specific Application Key Credential by `kid`
     * Retrieve a key credential
     * @param appId Application ID
     * @param keyId ID of the Key Credential for the application
     */
  getApplicationKey(appId: string, keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a specific user assignment for a specific app
     * Retrieve an application user
     * @param appId Application ID
     * @param userId ID of an existing Okta user
     * @param expand An optional query parameter to return the corresponding [User](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/) object in the &#x60;_embedded&#x60; property. Valid value: &#x60;user&#x60;
     */
  getApplicationUser(appId: string, userId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a CWO connection for an app
     * Retrieve a CWO connection
     * @param appId Application ID
     * @param connectionId Connection ID
     */
  getCWOConnection(appId: string, connectionId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a Certificate Signing Request (CSR) for the app by `csrId`.  Returns a Base64-encoded CSR in DER format if the `Accept` media type is `application/pkcs10` or a CSR object if the `Accept` media type is `application/json`.
     * Retrieve a certificate signing request
     * @param appId Application ID
     * @param csrId &#x60;id&#x60; of the CSR
     */
  getCsrForApplication(appId: string, csrId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the default provisioning connection for an app
     * Retrieve the default provisioning connection
     * @param appId Application ID
     */
  getDefaultProvisioningConnectionForApplication(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a Feature object for an app
     * Retrieve a feature
     * @param appId Application ID
     * @param name Name of the Feature
     */
  getFeatureForApplication(appId: string, name: ApplicationFeatureType, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a federated claim by `claimId`
     * Retrieve a federated claim
     * @param appId Application ID
     * @param claimId The unique &#x60;id&#x60; of the federated claim
     */
  getFederatedClaim(appId: string, claimId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an OAuth 2.0 Client JSON Web Key by `keyId`.
     * Retrieve an OAuth 2.0 client JSON Web Key
     * @param appId Application ID
     * @param keyId Unique &#x60;id&#x60; of the OAuth 2.0 Client JSON Web Key
     */
  getJwk(appId: string, keyId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the OAuth 2.0 authorization code from the app\'s authorization server. Use this authorization code to exchange for an access token through another endpoint to enable Express Configuration on behalf of the user.
     * Retrieve the OAuth 2.0 authorization code for Express Configuration.
     * @param appId Application ID
     * @param token XSRF token
     * @param capabilityType The capability type (for example, &#x60;SSO&#x60;) for which the user intends to perform Express Configuration.
     */
  getOAuth2AccessTokenForExpressConfiguration(appId: string, token?: string, capabilityType?: CapabilityType, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an OAuth 2.0 Client Secret by `secretId`
     * Retrieve an OAuth 2.0 client secret
     * @param appId Application ID
     * @param secretId Unique &#x60;id&#x60; of the OAuth 2.0 Client Secret
     */
  getOAuth2ClientSecret(appId: string, secretId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a refresh token for the specified app
     * Retrieve an application token
     * @param appId Application ID
     * @param tokenId &#x60;id&#x60; of Token
     * @param expand An optional parameter to return scope details in the &#x60;_embedded&#x60; property. Valid value: &#x60;scope&#x60;
     */
  getOAuth2TokenForApplication(appId: string, tokenId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a single scope consent Grant object for the app
     * Retrieve an app grant
     * @param appId Application ID
     * @param grantId Grant ID
     * @param expand An optional parameter to return scope details in the &#x60;_embedded&#x60; property. Valid value: &#x60;scope&#x60;
     */
  getScopeConsentGrant(appId: string, grantId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a JWKS for the default provisioning connection.  This can be used by the OAuth 2.0 app\'s `jwk_uri` property in the target org.
     * Retrieve a JSON Web Key Set (JWKS) for the default provisioning connection
     * @param appId Application ID
     */
  getUserProvisioningConnectionJWKS(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Grants consent for the app to request an OAuth 2.0 Okta scope
     * Grant consent to scope
     * @param appId Application ID
     * @param oAuth2ScopeConsentGrant
     */
  grantConsentToScope(appId: string, oAuth2ScopeConsentGrant: OAuth2ScopeConsentGrant, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all app group assignments
     * List all application groups
     * @param appId Application ID
     * @param q Specifies a filter for a list of assigned groups returned based on their names. The value of &#x60;q&#x60; is matched against the group &#x60;name&#x60;.  This filter only supports the &#x60;startsWith&#x60; operation that matches the &#x60;q&#x60; string against the beginning of the [group name](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/#tag/Group/operation/listGroups!c&#x3D;200&amp;path&#x3D;profile/name&amp;t&#x3D;response).
     * @param after Specifies the pagination cursor for the &#x60;next&#x60; page of results. Treat this as an opaque value obtained through the next link relationship. See [Pagination](https://developer.okta.com/docs/api/#pagination).
     * @param limit Specifies the number of objects to return per page. If there are multiple pages of results, the Link header contains a &#x60;next&#x60; link that you need to use as an opaque value (follow it, don\&#39;t parse it). See [Pagination](/#pagination).
     * @param expand An optional query parameter to return the corresponding assigned [group](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/) or  the group assignment metadata details in the &#x60;_embedded&#x60; property.
     */
  listApplicationGroupAssignments(appId: string, q?: string, after?: string, limit?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all key credentials for an app
     * List all key credentials
     * @param appId Application ID
     */
  listApplicationKeys(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all assigned users for an app
     * List all application users
     * @param appId Application ID
     * @param after Specifies the pagination cursor for the next page of results. Treat this as an opaque value obtained through the next link relationship. See [Pagination](/#pagination).
     * @param limit Specifies the number of objects to return per page. If there are multiple pages of results, the Link header contains a &#x60;next&#x60; link that you need to use as an opaque value (follow it, don\&#39;t parse it). See [Pagination](/#pagination).
     * @param q Specifies a filter for the list of application users returned based on their profile attributes. The value of &#x60;q&#x60; is matched against the beginning of the following profile attributes: &#x60;userName&#x60;, &#x60;firstName&#x60;, &#x60;lastName&#x60;, and &#x60;email&#x60;. This filter only supports the &#x60;startsWith&#x60; operation that matches the &#x60;q&#x60; string against the beginning of the attribute values. &gt; **Note:** For OIDC apps, user profiles don\&#39;t contain the &#x60;firstName&#x60; or &#x60;lastName&#x60; attributes. Therefore, the query only matches against the &#x60;userName&#x60; or &#x60;email&#x60; attributes.
     * @param expand An optional query parameter to return the corresponding [User](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/) object in the &#x60;_embedded&#x60; property. Valid value: &#x60;user&#x60;
     */
  listApplicationUsers(appId: string, after?: string, limit?: number, q?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all apps in the org with pagination. A subset of apps can be returned that match a supported filter expression or query. The results are [paginated](/#pagination) according to the `limit` parameter. If there are multiple pages of results, the header contains a `next` link. Treat the link as an opaque value (follow it, don\'t parse it).  > **Note:** To list all of a member\'s assigned app links, use the [List all assigned app links endpoint in the User Resources API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/UserResources/#tag/UserResources/operation/listAppLinks).
     * List all applications
     * @param q Searches for apps with &#x60;name&#x60; or &#x60;label&#x60; properties that starts with the &#x60;q&#x60; value using the &#x60;startsWith&#x60; operation
     * @param after Specifies the [pagination](/#pagination) cursor for the next page of results. Treat this as an opaque value obtained through the &#x60;next&#x60; link relationship.
     * @param useOptimization Specifies whether to use query optimization. If you specify &#x60;useOptimization&#x3D;true&#x60; in the request query, the response contains a subset of app instance properties.
     * @param limit Specifies the number of results per page
     * @param filter Filters apps by &#x60;status&#x60;, &#x60;user.id&#x60;, &#x60;group.id&#x60;, &#x60;credentials.signing.kid&#x60; or &#x60;name&#x60; expression that supports the &#x60;eq&#x60; operator
     * @param expand An optional parameter used for link expansion to embed more resources in the response. Only supports &#x60;expand&#x3D;user/{userId}&#x60; and must be used with the &#x60;user.id eq \&quot;{userId}\&quot;&#x60; filter query for the same user. Returns the assigned [application user](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationUsers/) in the &#x60;_embedded&#x60; property.
     * @param includeNonDeleted Specifies whether to include non-active, but not deleted apps in the results
     */
  listApplications(q?: string, after?: string, useOptimization?: boolean, limit?: number, filter?: string, expand?: string, includeNonDeleted?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all Certificate Signing Requests for an application
     * List all certificate signing requests
     * @param appId Application ID
     */
  listCsrsForApplication(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all features for an app > **Note:** This request returns an error if provisioning isn\'t enabled for the app. > To set up provisioning, see [Update the default provisioning connection](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationConnections/#tag/ApplicationConnections/operation/updateDefaultProvisioningConnectionForApplication).
     * List all features
     * @param appId Application ID
     */
  listFeaturesForApplication(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all federated claims for your app
     * List all configured federated claims
     * @param appId Application ID
     */
  listFederatedClaims(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all JSON Web Keys for an OAuth 2.0 client app
     * List all the OAuth 2.0 client JSON Web Keys
     * @param appId Application ID
     */
  listJwk(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all client secrets for an OAuth 2.0 client app
     * List all OAuth 2.0 client secrets
     * @param appId Application ID
     */
  listOAuth2ClientSecrets(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all refresh tokens for an app  > **Note:** The results are [paginated](/#pagination) according to the `limit` parameter. > If there are multiple pages of results, the Link header contains a `next` link that you need to use as an opaque value (follow it, don\'t parse it).
     * List all application refresh tokens
     * @param appId Application ID
     * @param expand An optional parameter to return scope details in the &#x60;_embedded&#x60; property. Valid value: &#x60;scope&#x60;
     * @param after Specifies the pagination cursor for the next page of results. Treat this as an opaque value obtained through the next link relationship. See [Pagination](/#pagination).
     * @param limit A limit on the number of objects to return
     */
  listOAuth2TokensForApplication(appId: string, expand?: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all scope consent Grants for the app
     * List all app grants
     * @param appId Application ID
     * @param expand An optional parameter to return scope details in the &#x60;_embedded&#x60; property. Valid value: &#x60;scope&#x60;
     */
  listScopeConsentGrants(appId: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Previews the SSO SAML metadata for an application
     * Preview the application SAML metadata
     * @param appId Application ID
     * @param kid
     */
  previewSAMLmetadataForApplication(appId: string, kid: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Publishes a Certificate Signing Request (CSR) for the app with a signed X.509 certificate and adds it into the Application Key Credentials. > **Note:** Publishing a certificate completes the lifecycle of the CSR and it\'s no longer accessible.
     * Publish a certificate signing request
     * @param appId Application ID
     * @param csrId &#x60;id&#x60; of the CSR
     * @param body
     */
  publishCsrFromApplication(appId: string, csrId: string, body: HttpFile, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces properties for an application > **Notes:** > * All required properties must be specified in the request body > * You can\'t modify system-assigned properties, such as `id`, `name`, `status`, `created`, and `lastUpdated`. The values for these properties in the PUT request body are ignored.
     * Replace an application
     * @param appId Application ID
     * @param application
     */
  replaceApplication(appId: string, application: Application, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a claim that will be included in tokens produced by federation protocols (for example: OIDC `id_tokens` or SAML Assertions)
     * Replace a federated claim
     * @param appId Application ID
     * @param claimId The unique &#x60;id&#x60; of the federated claim
     * @param federatedClaim
     */
  replaceFederatedClaim(appId: string, claimId: string, federatedClaim?: FederatedClaim, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes a Certificate Signing Request and deletes the key pair from the app
     * Revoke a certificate signing request
     * @param appId Application ID
     * @param csrId &#x60;id&#x60; of the CSR
     */
  revokeCsrFromApplication(appId: string, csrId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes the specified token for the specified app
     * Revoke an application token
     * @param appId Application ID
     * @param tokenId &#x60;id&#x60; of Token
     */
  revokeOAuth2TokenForApplication(appId: string, tokenId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes all OAuth 2.0 refresh tokens for the specified app. Any access tokens issued with these refresh tokens are also revoked, but access tokens issued without a refresh token aren\'t affected.
     * Revoke all application tokens
     * @param appId Application ID
     */
  revokeOAuth2TokensForApplication(appId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Revokes permission for the app to grant the given scope
     * Revoke an app grant
     * @param appId Application ID
     * @param grantId Grant ID
     */
  revokeScopeConsentGrant(appId: string, grantId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns a Group from an app
     * Unassign an application group
     * @param appId Application ID
     * @param groupId The &#x60;id&#x60; of the group
     */
  unassignApplicationFromGroup(appId: string, groupId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Unassigns a user from an app  For directories like Active Directory and LDAP, they act as the owner of the user\'s credential with Okta delegating authentication (DelAuth) to that directory. If this request is successful for a user when DelAuth is enabled, then the user is in a state with no password. You can then reset the user\'s password.  > **Important:** This is a destructive operation. You can\'t recover the user\'s app profile. If the app is enabled for provisioning and configured to deactivate users, the user is also deactivated in the target app.
     * Unassign an application user
     * @param appId Application ID
     * @param userId ID of an existing Okta user
     * @param sendEmail Sends a deactivation email to the administrator if &#x60;true&#x60;
     */
  unassignUserFromApplication(appId: string, userId: string, sendEmail?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates the profile or credentials of a user assigned to an app
     * Update an application user
     * @param appId Application ID
     * @param userId ID of an existing Okta user
     * @param appUser
     */
  updateApplicationUser(appId: string, userId: string, appUser: AppUserUpdateRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a CWO connection
     * Update a CWO connection
     * @param appId Application ID
     * @param connectionId Connection ID
     * @param orgCWOConnectionPatchRequest
     */
  updateCWOConnection(appId: string, connectionId: string, orgCWOConnectionPatchRequest: OrgCWOConnectionPatchRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates the default provisioning connection for an app
     * Update the default provisioning connection
     * @param appId Application ID
     * @param provisioningConnectionRequest
     * @param activate Activates the provisioning connection
     */
  updateDefaultProvisioningConnectionForApplication(appId: string, provisioningConnectionRequest: UpdateDefaultProvisioningConnectionForApplicationRequest, activate?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a Feature object for an app > **Note:** This endpoint supports partial updates.
     * Update a feature
     * @param appId Application ID
     * @param name Name of the Feature
     * @param capabilitiesObject
     */
  updateFeatureForApplication(appId: string, name: ApplicationFeatureType, capabilitiesObject: UpdateFeatureForApplicationRequest, _options?: Configuration): Promise<RequestContext>;
  /**
     * Updates a group assignment to an app
     * Update an application group
     * @param appId Application ID
     * @param groupId The &#x60;id&#x60; of the group
     * @param jsonPatchOperation
     */
  updateGroupAssignmentToApplication(appId: string, groupId: string, jsonPatchOperation?: Array<JsonPatchOperation>, _options?: Configuration): Promise<RequestContext>;
  /**
     * Uploads a logo for the app instance. If the app already has a logo, this operation replaces the previous logo.  The logo is visible in the Admin Console as an icon for your app instance. If you have one `appLink` object configured, this logo also appears in the End-User Dashboard as an icon for your app. > **Note:** If you have multiple `appLink` objects, use the Admin Console to add logos for each app link. > You can\'t use the API to add logos for multiple app links.
     * Upload an application logo
     * @param appId Application ID
     * @param file The image file containing the logo.  The file must be in PNG, JPG, SVG, or GIF format, and less than one MB in size. For best results, use an image with a transparent background and a square dimension of 200 x 200 pixels to prevent upscaling.  &gt; **Notes:** &gt; * Only SVG files encoded in UTF-8 are supported. For example, &#x60;&lt;xml version&#x3D;\\\&quot;1.0\\\&quot; encoding&#x3D;\\\&quot;UTF-8\\\&quot;&gt;&#x60; is a valid SVG file declaration. &gt; * &#x60;multipart/form-data&#x60; isn\\\&#39;t supported for Python. Remove the &#x60;\\\&quot;Content-Type\\\&quot;: \\\&quot;multipart/form-data\\\&quot;&#x60; line if you use the Python request sample code.
     */
  uploadApplicationLogo(appId: string, file: HttpFile, _options?: Configuration): Promise<RequestContext>;
  /**
     * Verifies the OAuth 2.0-based connection as part of the OAuth 2.0 consent flow. The validation of the consent flow is the last step of the provisioning setup for an OAuth 2.0-based connection. Currently, this operation only supports `office365`,`google`, `zoomus`, and `slack` apps.
     * Verify the provisioning connection
     * @param appName
     * @param appId Application ID
     * @param code
     * @param state
     */
  verifyProvisioningConnectionForApplication(appName: OAuthProvisioningEnabledApp, appId: string, code?: string, state?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Verifies the OAuth 2.0-based connection as part of the OAuth 2.0 consent flow. The validation of the consent flow is the last step of the provisioning setup for the Google Workspace (`google`) OAuth 2.0-based connection.
     * Verify the provisioning connection for Google Workspace
     * @param appId Application ID
     * @param code
     * @param state
     */
  verifyProvisioningConnectionForGoogleApplication(appId: string, code?: string, state?: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Verifies the OAuth 2.0-based connection as part of the OAuth 2.0 consent flow. The validation of the consent flow is the last step of the provisioning setup for the Microsoft Office 365 (`office365`) OAuth 2.0-based connection.
     * Verify the provisioning connection for Microsoft Office 365
     * @param appId Application ID
     * @param code
     * @param state
     */
  verifyProvisioningConnectionForOfficeApplication(appId: string, code?: string, state?: string, _options?: Configuration): Promise<RequestContext>;
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
     * @params response Response returned by the server for a request to activateOAuth2ClientJsonWebKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateOAuth2ClientJsonWebKey(response: ResponseContext): Promise<OAuth2ClientJsonWebKey>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateOAuth2ClientSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateOAuth2ClientSecret(response: ResponseContext): Promise<OAuth2ClientSecret>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addJwk
     * @throws ApiException if the response code was not in [200, 299]
     */
  addJwk(response: ResponseContext): Promise<OAuth2ClientJsonWebKey>;
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
     * @params response Response returned by the server for a request to configureCapabilityApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  configureCapabilityApplication(response: ResponseContext): Promise<void>;
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
     * @params response Response returned by the server for a request to createCWOConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
  createCWOConnection(response: ResponseContext): Promise<OrgCWOConnection>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createFederatedClaim
     * @throws ApiException if the response code was not in [200, 299]
     */
  createFederatedClaim(response: ResponseContext): Promise<FederatedClaim>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOAuth2ClientSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
  createOAuth2ClientSecret(response: ResponseContext): Promise<OAuth2ClientSecret>;
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
     * @params response Response returned by the server for a request to deactivateOAuth2ClientJsonWebKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateOAuth2ClientJsonWebKey(response: ResponseContext): Promise<OAuth2ClientJsonWebKey>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateOAuth2ClientSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateOAuth2ClientSecret(response: ResponseContext): Promise<OAuth2ClientSecret>;
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
     * @params response Response returned by the server for a request to deleteCWOConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteCWOConnection(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteFederatedClaim
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteFederatedClaim(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteOAuth2ClientSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
  deleteOAuth2ClientSecret(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletejwk
     * @throws ApiException if the response code was not in [200, 299]
     */
  deletejwk(response: ResponseContext): Promise<void>;
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
  generateCsrForApplication(response: ResponseContext): Promise<string>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllCWOConnections
     * @throws ApiException if the response code was not in [200, 299]
     */
  getAllCWOConnections(response: ResponseContext): Promise<Array<OrgCWOConnection>>;
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
     * @params response Response returned by the server for a request to getCWOConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
  getCWOConnection(response: ResponseContext): Promise<OrgCWOConnection>;
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
  getDefaultProvisioningConnectionForApplication(response: ResponseContext): Promise<ProvisioningConnectionResponse>;
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
     * @params response Response returned by the server for a request to getFederatedClaim
     * @throws ApiException if the response code was not in [200, 299]
     */
  getFederatedClaim(response: ResponseContext): Promise<FederatedClaimRequestBody>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getJwk
     * @throws ApiException if the response code was not in [200, 299]
     */
  getJwk(response: ResponseContext): Promise<OAuth2ClientJsonWebKey>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOAuth2AccessTokenForExpressConfiguration
     * @throws ApiException if the response code was not in [200, 299]
     */
  getOAuth2AccessTokenForExpressConfiguration(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOAuth2ClientSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
  getOAuth2ClientSecret(response: ResponseContext): Promise<OAuth2ClientSecret>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOAuth2TokenForApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  getOAuth2TokenForApplication(response: ResponseContext): Promise<OAuth2RefreshToken>;
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
     * @params response Response returned by the server for a request to getUserProvisioningConnectionJWKS
     * @throws ApiException if the response code was not in [200, 299]
     */
  getUserProvisioningConnectionJWKS(response: ResponseContext): Promise<AppConnectionUserProvisionJWKResponse>;
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
     * @params response Response returned by the server for a request to listFederatedClaims
     * @throws ApiException if the response code was not in [200, 299]
     */
  listFederatedClaims(response: ResponseContext): Promise<Array<FederatedClaim>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listJwk
     * @throws ApiException if the response code was not in [200, 299]
     */
  listJwk(response: ResponseContext): Promise<ListJwk200Response>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOAuth2ClientSecrets
     * @throws ApiException if the response code was not in [200, 299]
     */
  listOAuth2ClientSecrets(response: ResponseContext): Promise<Array<OAuth2ClientSecret>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOAuth2TokensForApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  listOAuth2TokensForApplication(response: ResponseContext): Promise<Array<OAuth2RefreshToken>>;
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
     * @params response Response returned by the server for a request to previewSAMLmetadataForApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  previewSAMLmetadataForApplication(response: ResponseContext): Promise<string>;
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
     * @params response Response returned by the server for a request to replaceFederatedClaim
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceFederatedClaim(response: ResponseContext): Promise<FederatedClaim>;
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
     * @params response Response returned by the server for a request to updateCWOConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateCWOConnection(response: ResponseContext): Promise<OrgCWOConnection>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDefaultProvisioningConnectionForApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateDefaultProvisioningConnectionForApplication(response: ResponseContext): Promise<ProvisioningConnectionResponse>;
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
     * @params response Response returned by the server for a request to updateGroupAssignmentToApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  updateGroupAssignmentToApplication(response: ResponseContext): Promise<ApplicationGroupAssignment>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadApplicationLogo
     * @throws ApiException if the response code was not in [200, 299]
     */
  uploadApplicationLogo(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to verifyProvisioningConnectionForApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  verifyProvisioningConnectionForApplication(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to verifyProvisioningConnectionForGoogleApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  verifyProvisioningConnectionForGoogleApplication(response: ResponseContext): Promise<void>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to verifyProvisioningConnectionForOfficeApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
  verifyProvisioningConnectionForOfficeApplication(response: ResponseContext): Promise<void>;
}
