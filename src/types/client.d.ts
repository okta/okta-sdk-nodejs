/// <reference types="node" />
import * as http from 'http';
import { AppUser } from './models/appUser';
import { Application } from './models/application';
import { ApplicationGroupAssignment } from './models/applicationGroupAssignment';
import { Csr } from './models/csr';
import { CsrMetadata } from './models/csrMetadata';
import { OAuth2ScopeConsentGrant } from './models/oAuth2ScopeConsentGrant';
import { OAuth2Token } from './models/oAuth2Token';
import { Authenticator } from './models/authenticator';
import { AuthorizationServer } from './models/authorizationServer';
import { AuthorizationServerPolicy } from './models/authorizationServerPolicy';
import { AuthorizationServerPolicyRule } from './models/authorizationServerPolicyRule';
import { JsonWebKey } from './models/jsonWebKey';
import { JwkUse } from './models/jwkUse';
import { OAuth2Claim } from './models/oAuth2Claim';
import { OAuth2Client } from './models/oAuth2Client';
import { OAuth2RefreshToken } from './models/oAuth2RefreshToken';
import { OAuth2Scope } from './models/oAuth2Scope';
import { CAPTCHAInstance } from './models/cAPTCHAInstance';
import { Domain } from './models/domain';
import { DomainCertificate } from './models/domainCertificate';
import { DomainListResponse } from './models/domainListResponse';
import { DomainResponse } from './models/domainResponse';
import { EventHook } from './models/eventHook';
import { Feature } from './models/feature';
import { GroupRule } from './models/groupRule';
import { GroupSchema } from './models/groupSchema';
import { IdentityProviderApplicationUser } from './models/identityProviderApplicationUser';
import { SocialAuthToken } from './models/socialAuthToken';
import { UserIdentityProviderLinkRequest } from './models/userIdentityProviderLinkRequest';
import { InlineHook } from './models/inlineHook';
import { InlineHookResponse } from './models/inlineHookResponse';
import { LinkedObject } from './models/linkedObject';
import { LogEvent } from './models/logEvent';
import { NetworkZone } from './models/networkZone';
import { OrgContactTypeObj } from './models/orgContactTypeObj';
import { OrgContactUser } from './models/orgContactUser';
import { OrgOktaCommunicationSetting } from './models/orgOktaCommunicationSetting';
import { OrgOktaSupportSettingsObj } from './models/orgOktaSupportSettingsObj';
import { OrgPreferences } from './models/orgPreferences';
import { OrgSetting } from './models/orgSetting';
import { UserIdString } from './models/userIdString';
import { Policy } from './models/policy';
import { PolicyRule } from './models/policyRule';
import { ProfileMapping } from './models/profileMapping';
import { CreateSessionRequest } from './models/createSessionRequest';
import { Session } from './models/session';
import { SmsTemplate } from './models/smsTemplate';
import { SmsTemplateType } from './models/smsTemplateType';
import { ThreatInsightConfiguration } from './models/threatInsightConfiguration';
import { TrustedOrigin } from './models/trustedOrigin';
import { AppLink } from './models/appLink';
import { AssignRoleRequest } from './models/assignRoleRequest';
import { CatalogApplication } from './models/catalogApplication';
import { ChangePasswordRequest } from './models/changePasswordRequest';
import { CreateUserRequest } from './models/createUserRequest';
import { ForgotPasswordResponse } from './models/forgotPasswordResponse';
import { Group } from './models/group';
import { IdentityProvider } from './models/identityProvider';
import { ResetPasswordToken } from './models/resetPasswordToken';
import { Role } from './models/role';
import { TempPassword } from './models/tempPassword';
import { User } from './models/user';
import { UserActivationToken } from './models/userActivationToken';
import { UserCredentials } from './models/userCredentials';
import { UserNextLogin } from './models/userNextLogin';
import { ActivateFactorRequest } from './models/activateFactorRequest';
import { SecurityQuestion } from './models/securityQuestion';
import { UserFactor } from './models/userFactor';
import { VerifyFactorRequest } from './models/verifyFactorRequest';
import { VerifyUserFactorResponse } from './models/verifyUserFactorResponse';
import { UserSchema } from './models/userSchema';
import { UserType } from './models/userType';
import { Authentication, Interceptor, RequestFile } from './models';
import { ApiKeyAuth } from './models';
export declare class HttpError extends Error {
    response: http.IncomingMessage;
    body: any;
    statusCode?: number;
    errorCode: any;
    errorSummary: any;
    errorCauses: any;
    errorLink: any;
    errorId: any;
    constructor(response: http.IncomingMessage, body: any, statusCode?: number);
}
export declare enum GeneratedClientApiKeys {
    api_token = 0
}
export declare class GeneratedApiClient {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        api_token: ApiKeyAuth;
    };
    protected interceptors: Interceptor[];
    constructor(config: {
        orgUrl: string;
        token: string;
        scopes?: any;
        requestExecutor?: any;
    });
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: GeneratedClientApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    /**
     * Activates an inactive application.
     * @summary Activate Application
     * @param appId
     */
    activateApplication(appId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Assigns an user to an application with [credentials](#application-user-credentials-object) and an app-specific [profile](#application-user-profile-object). Profile mappings defined for the application are first applied before applying any profile properties specified in the request.
     * @summary Assign User to Application for SSO & Provisioning
     * @param appId
     * @param appUser
     */
    assignUserToApplication(appId: string, appUser: AppUser, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<AppUser>;
    /**
     * Clones a X.509 certificate for an application key credential from a source application to target application.
     * @summary Clone Application Key Credential
     * @param appId
     * @param keyId
     * @param targetAid Unique key of the target Application
     */
    cloneApplicationKey(appId: string, keyId: string, targetAid: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<JsonWebKey>;
    /**
     * Adds a new application to your Okta organization.
     * @summary Add Application
     * @param application
     * @param activate Executes activation lifecycle operation when creating the app
     * @param oktaAccessGatewayAgent
     */
    createApplication(application: Application, activate?: boolean, oktaAccessGatewayAgent?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Application>;
    /**
     * Assigns a group to an application
     * @summary Assign Group to Application
     * @param appId
     * @param groupId
     * @param applicationGroupAssignment
     */
    createApplicationGroupAssignment(appId: string, groupId: string, applicationGroupAssignment?: ApplicationGroupAssignment, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<ApplicationGroupAssignment>;
    /**
     * Deactivates an active application.
     * @summary Deactivate Application
     * @param appId
     */
    deactivateApplication(appId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Removes an inactive application.
     * @summary Delete Application
     * @param appId
     */
    deleteApplication(appId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Removes a group assignment from an application.
     * @summary Remove Group from Application
     * @param appId
     * @param groupId
     */
    deleteApplicationGroupAssignment(appId: string, groupId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Removes an assignment for a user from an application.
     * @summary Remove User from Application
     * @param appId
     * @param userId
     * @param sendEmail
     */
    deleteApplicationUser(appId: string, userId: string, sendEmail?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Generates a new X.509 certificate for an application key credential
     * @param appId
     * @param validityYears
     */
    generateApplicationKey(appId: string, validityYears?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<JsonWebKey>;
    /**
     * Generates a new key pair and returns the Certificate Signing Request for it.
     * @summary Generate Certificate Signing Request for Application
     * @param appId
     * @param csrMetadata
     */
    generateCsrForApplication(appId: string, csrMetadata: CsrMetadata, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Csr>;
    /**
     * Fetches an application from your Okta organization by `id`.
     * @summary Get Application
     * @param appId
     * @param expand
     */
    getApplication(appId: string, expand?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Application>;
    /**
     * Fetches an application group assignment
     * @summary Get Assigned Group for Application
     * @param appId
     * @param groupId
     * @param expand
     */
    getApplicationGroupAssignment(appId: string, groupId: string, expand?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<ApplicationGroupAssignment>;
    /**
     * Gets a specific application key credential by kid
     * @summary Get Key Credential for Application
     * @param appId
     * @param keyId
     */
    getApplicationKey(appId: string, keyId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<JsonWebKey>;
    /**
     * Fetches a specific user assignment for application by `id`.
     * @summary Get Assigned User for Application
     * @param appId
     * @param userId
     * @param expand
     */
    getApplicationUser(appId: string, userId: string, expand?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<AppUser>;
    /**
     * Fetches a certificate signing request for the app by `id`.
     * @summary Get Certificate Signing Request
     * @param appId
     * @param csrId
     */
    getCsrForApplication(appId: string, csrId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Csr>;
    /**
     * Gets a token for the specified application
     * @param appId
     * @param tokenId
     * @param expand
     */
    getOAuth2TokenForApplication(appId: string, tokenId: string, expand?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OAuth2Token>;
    /**
     * Fetches a single scope consent grant for the application
     * @param appId
     * @param grantId
     * @param expand
     */
    getScopeConsentGrant(appId: string, grantId: string, expand?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OAuth2ScopeConsentGrant>;
    /**
     * Grants consent for the application to request an OAuth 2.0 Okta scope
     * @param appId
     * @param oAuth2ScopeConsentGrant
     */
    grantConsentToScope(appId: string, oAuth2ScopeConsentGrant: OAuth2ScopeConsentGrant, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OAuth2ScopeConsentGrant>;
    /**
     * Enumerates group assignments for an application.
     * @summary List Groups Assigned to Application
     * @param appId
     * @param q
     * @param after Specifies the pagination cursor for the next page of assignments
     * @param limit Specifies the number of results for a page
     * @param expand
     */
    listApplicationGroupAssignments(appId: string, q?: string, after?: string, limit?: number, expand?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<ApplicationGroupAssignment>>;
    /**
     * Enumerates key credentials for an application
     * @summary List Key Credentials for Application
     * @param appId
     */
    listApplicationKeys(appId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<JsonWebKey>>;
    /**
     * Enumerates all assigned [application users](#application-user-model) for an application.
     * @summary List Users Assigned to Application
     * @param appId
     * @param q
     * @param queryScope
     * @param after specifies the pagination cursor for the next page of assignments
     * @param limit specifies the number of results for a page
     * @param filter
     * @param expand
     */
    listApplicationUsers(appId: string, q?: string, queryScope?: string, after?: string, limit?: number, filter?: string, expand?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<AppUser>>;
    /**
     * Enumerates apps added to your organization with pagination. A subset of apps can be returned that match a supported filter expression or query.
     * @summary List Applications
     * @param q
     * @param after Specifies the pagination cursor for the next page of apps
     * @param limit Specifies the number of results for a page
     * @param filter Filters apps by status, user.id, group.id or credentials.signing.kid expression
     * @param expand Traverses users link relationship and optionally embeds Application User resource
     * @param includeNonDeleted
     */
    listApplications(q?: string, after?: string, limit?: number, filter?: string, expand?: string, includeNonDeleted?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<Application>>;
    /**
     * Enumerates Certificate Signing Requests for an application
     * @summary List Certificate Signing Requests for Application
     * @param appId
     */
    listCsrsForApplication(appId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<Csr>>;
    /**
     * Lists all tokens for the application
     * @param appId
     * @param expand
     * @param after
     * @param limit
     */
    listOAuth2TokensForApplication(appId: string, expand?: string, after?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<OAuth2Token>>;
    /**
     * Lists all scope consent grants for the application
     * @param appId
     * @param expand
     */
    listScopeConsentGrants(appId: string, expand?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<OAuth2ScopeConsentGrant>>;
    /**
     * Updates a certificate signing request for the app with a signed X.509 certificate and adds it into the application key credentials
     * @summary Publish Certificate Signing Request
     * @param appId
     * @param csrId
     * @param body
     */
    publishCsrFromApplication(appId: string, csrId: string, body: RequestFile, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<JsonWebKey>;
    /**
     * Revokes a certificate signing request and deletes the key pair from the application.
     * @summary Revoke Certificate Signing Request
     * @param appId
     * @param csrId
     */
    revokeCsrFromApplication(appId: string, csrId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Revokes the specified token for the specified application
     * @param appId
     * @param tokenId
     */
    revokeOAuth2TokenForApplication(appId: string, tokenId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Revokes all tokens for the specified application
     * @param appId
     */
    revokeOAuth2TokensForApplication(appId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Revokes permission for the application to request the given scope
     * @param appId
     * @param grantId
     */
    revokeScopeConsentGrant(appId: string, grantId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Updates an application in your organization.
     * @summary Update Application
     * @param appId
     * @param application
     */
    updateApplication(appId: string, application: Application, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Application>;
    /**
     * Updates a user\'s profile for an application
     * @summary Update Application Profile for Assigned User
     * @param appId
     * @param userId
     * @param appUser
     */
    updateApplicationUser(appId: string, userId: string, appUser: AppUser, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<AppUser>;
    /**
     * Activates an authenticator by `authenticatorId`.
     * @summary Activate Authenticator
     * @param authenticatorId
     */
    activateAuthenticator(authenticatorId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Deactivates an authenticator by `authenticatorId`.
     * @summary Deactivate Authenticator
     * @param authenticatorId
     */
    deactivateAuthenticator(authenticatorId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Fetches an authenticator from your Okta organization by `authenticatorId`.
     * @summary Get Authenticator
     * @param authenticatorId
     */
    getAuthenticator(authenticatorId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Authenticator>;
    /**
     * Enumerates authenticators in your organization.
     * @summary List Authenticators
     */
    listAuthenticators(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<Authenticator>>;
    /**
     * Success
     * @param authServerId
     */
    activateAuthorizationServer(authServerId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Activate Authorization Server Policy
     * @param authServerId
     * @param policyId
     */
    activateAuthorizationServerPolicy(authServerId: string, policyId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Activate Authorization Server Policy Rule
     * @param authServerId
     * @param policyId
     * @param ruleId
     */
    activateAuthorizationServerPolicyRule(authServerId: string, policyId: string, ruleId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Success
     * @param authorizationServer
     */
    createAuthorizationServer(authorizationServer: AuthorizationServer, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<AuthorizationServer>;
    /**
     * Success
     * @param authServerId
     * @param authorizationServerPolicy
     */
    createAuthorizationServerPolicy(authServerId: string, authorizationServerPolicy: AuthorizationServerPolicy, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<AuthorizationServerPolicy>;
    /**
     * Creates a policy rule for the specified Custom Authorization Server and Policy.
     * @param policyId
     * @param authServerId
     * @param authorizationServerPolicyRule
     */
    createAuthorizationServerPolicyRule(policyId: string, authServerId: string, authorizationServerPolicyRule: AuthorizationServerPolicyRule, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<AuthorizationServerPolicyRule>;
    /**
     * Success
     * @param authServerId
     * @param oAuth2Claim
     */
    createOAuth2Claim(authServerId: string, oAuth2Claim: OAuth2Claim, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OAuth2Claim>;
    /**
     * Success
     * @param authServerId
     * @param oAuth2Scope
     */
    createOAuth2Scope(authServerId: string, oAuth2Scope: OAuth2Scope, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OAuth2Scope>;
    /**
     * Success
     * @param authServerId
     */
    deactivateAuthorizationServer(authServerId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Deactivate Authorization Server Policy
     * @param authServerId
     * @param policyId
     */
    deactivateAuthorizationServerPolicy(authServerId: string, policyId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Deactivate Authorization Server Policy Rule
     * @param authServerId
     * @param policyId
     * @param ruleId
     */
    deactivateAuthorizationServerPolicyRule(authServerId: string, policyId: string, ruleId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Success
     * @param authServerId
     */
    deleteAuthorizationServer(authServerId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Success
     * @param authServerId
     * @param policyId
     */
    deleteAuthorizationServerPolicy(authServerId: string, policyId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Deletes a Policy Rule defined in the specified Custom Authorization Server and Policy.
     * @param policyId
     * @param authServerId
     * @param ruleId
     */
    deleteAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Success
     * @param authServerId
     * @param claimId
     */
    deleteOAuth2Claim(authServerId: string, claimId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Success
     * @param authServerId
     * @param scopeId
     */
    deleteOAuth2Scope(authServerId: string, scopeId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Success
     * @param authServerId
     */
    getAuthorizationServer(authServerId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<AuthorizationServer>;
    /**
     * Success
     * @param authServerId
     * @param policyId
     */
    getAuthorizationServerPolicy(authServerId: string, policyId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<AuthorizationServerPolicy>;
    /**
     * Returns a Policy Rule by ID that is defined in the specified Custom Authorization Server and Policy.
     * @param policyId
     * @param authServerId
     * @param ruleId
     */
    getAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<AuthorizationServerPolicyRule>;
    /**
     * Success
     * @param authServerId
     * @param claimId
     */
    getOAuth2Claim(authServerId: string, claimId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OAuth2Claim>;
    /**
     * Success
     * @param authServerId
     * @param scopeId
     */
    getOAuth2Scope(authServerId: string, scopeId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OAuth2Scope>;
    /**
     * Success
     * @param authServerId
     * @param clientId
     * @param tokenId
     * @param expand
     */
    getRefreshTokenForAuthorizationServerAndClient(authServerId: string, clientId: string, tokenId: string, expand?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OAuth2RefreshToken>;
    /**
     * Success
     * @param authServerId
     */
    listAuthorizationServerKeys(authServerId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<JsonWebKey>>;
    /**
     * Success
     * @param authServerId
     */
    listAuthorizationServerPolicies(authServerId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<AuthorizationServerPolicy>>;
    /**
     * Enumerates all policy rules for the specified Custom Authorization Server and Policy.
     * @param policyId
     * @param authServerId
     */
    listAuthorizationServerPolicyRules(policyId: string, authServerId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<AuthorizationServerPolicyRule>>;
    /**
     * Success
     * @param q
     * @param limit
     * @param after
     */
    listAuthorizationServers(q?: string, limit?: string, after?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<AuthorizationServer>>;
    /**
     * Success
     * @param authServerId
     */
    listOAuth2Claims(authServerId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<OAuth2Claim>>;
    /**
     * Success
     * @param authServerId
     */
    listOAuth2ClientsForAuthorizationServer(authServerId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<OAuth2Client>>;
    /**
     * Success
     * @param authServerId
     * @param q
     * @param filter
     * @param cursor
     * @param limit
     */
    listOAuth2Scopes(authServerId: string, q?: string, filter?: string, cursor?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<OAuth2Scope>>;
    /**
     * Success
     * @param authServerId
     * @param clientId
     * @param expand
     * @param after
     * @param limit
     */
    listRefreshTokensForAuthorizationServerAndClient(authServerId: string, clientId: string, expand?: string, after?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<OAuth2RefreshToken>>;
    /**
     * Success
     * @param authServerId
     * @param clientId
     * @param tokenId
     */
    revokeRefreshTokenForAuthorizationServerAndClient(authServerId: string, clientId: string, tokenId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Success
     * @param authServerId
     * @param clientId
     */
    revokeRefreshTokensForAuthorizationServerAndClient(authServerId: string, clientId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Success
     * @param authServerId
     * @param jwkUse
     */
    rotateAuthorizationServerKeys(authServerId: string, jwkUse: JwkUse, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<JsonWebKey>>;
    /**
     * Success
     * @param authServerId
     * @param authorizationServer
     */
    updateAuthorizationServer(authServerId: string, authorizationServer: AuthorizationServer, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<AuthorizationServer>;
    /**
     * Success
     * @param authServerId
     * @param policyId
     * @param authorizationServerPolicy
     */
    updateAuthorizationServerPolicy(authServerId: string, policyId: string, authorizationServerPolicy: AuthorizationServerPolicy, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<AuthorizationServerPolicy>;
    /**
     * Updates the configuration of the Policy Rule defined in the specified Custom Authorization Server and Policy.
     * @param policyId
     * @param authServerId
     * @param ruleId
     * @param authorizationServerPolicyRule
     */
    updateAuthorizationServerPolicyRule(policyId: string, authServerId: string, ruleId: string, authorizationServerPolicyRule: AuthorizationServerPolicyRule, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<AuthorizationServerPolicyRule>;
    /**
     * Success
     * @param authServerId
     * @param claimId
     * @param oAuth2Claim
     */
    updateOAuth2Claim(authServerId: string, claimId: string, oAuth2Claim: OAuth2Claim, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OAuth2Claim>;
    /**
     * Success
     * @param authServerId
     * @param scopeId
     * @param oAuth2Scope
     */
    updateOAuth2Scope(authServerId: string, scopeId: string, oAuth2Scope: OAuth2Scope, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OAuth2Scope>;
    /**
     * Adds a new CAPTCHA instance to your organization. In current release, we only allow one CAPTCHA instance per org.
     * @summary Create new CAPTCHA instance
     * @param cAPTCHAInstance
     */
    createCaptchaInstance(cAPTCHAInstance?: CAPTCHAInstance, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<CAPTCHAInstance>;
    /**
     * Delete a CAPTCHA instance by `id`.
     * @summary Delete CAPTCHA Instance
     * @param captchaId id of the CAPTCHA
     */
    deleteCaptchaInstance(captchaId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Fetches a CAPTCHA instance by `id`.
     * @summary Get CAPTCHA Instance
     * @param captchaId id of the CAPTCHA
     */
    getCaptchaInstance(captchaId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<CAPTCHAInstance>;
    /**
     * Enumerates CAPTCHA instances in your organization with pagination. A subset of CAPTCHA instances can be returned that match a supported filter expression or query.
     * @summary List CAPTCHA instances
     */
    listCaptchaInstances(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<CAPTCHAInstance>>;
    /**
     * Partially update a CAPTCHA instance by `id`.
     * @summary Partial Update CAPTCHA instance
     * @param captchaId id of the CAPTCHA
     * @param cAPTCHAInstance
     */
    partialUpdateCaptchaInstance(captchaId: string, cAPTCHAInstance: CAPTCHAInstance, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<CAPTCHAInstance>;
    /**
     * Update a CAPTCHA instance by `id`.
     * @summary Update CAPTCHA instance
     * @param captchaId id of the CAPTCHA
     * @param cAPTCHAInstance
     */
    updateCaptchaInstance(captchaId: string, cAPTCHAInstance: CAPTCHAInstance, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<CAPTCHAInstance>;
    /**
     * Creates the Certificate for the Domain.
     * @summary Create Certificate
     * @param domainId
     * @param domainCertificate
     */
    createCertificate(domainId: string, domainCertificate: DomainCertificate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Creates your domain.
     * @summary Create Domain
     * @param domain
     */
    createDomain(domain: Domain, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<DomainResponse>;
    /**
     * Deletes a Domain by `id`.
     * @summary Delete Domain
     * @param domainId
     */
    deleteDomain(domainId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Fetches a Domain by `id`.
     * @summary Get Domain
     * @param domainId
     */
    getDomain(domainId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<DomainResponse>;
    /**
     * List all verified custom Domains for the org.
     * @summary List Domains
     */
    listDomains(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<DomainListResponse>;
    /**
     * Verifies the Domain by `id`.
     * @summary Verify Domain
     * @param domainId
     */
    verifyDomain(domainId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<DomainResponse>;
    /**
     * Success
     * @param eventHookId
     */
    activateEventHook(eventHookId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<EventHook>;
    /**
     * Success
     * @param eventHook
     */
    createEventHook(eventHook: EventHook, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<EventHook>;
    /**
     * Success
     * @param eventHookId
     */
    deactivateEventHook(eventHookId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<EventHook>;
    /**
     * Success
     * @param eventHookId
     */
    deleteEventHook(eventHookId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Success
     * @param eventHookId
     */
    getEventHook(eventHookId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<EventHook>;
    /**
     * Success
     */
    listEventHooks(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<EventHook>>;
    /**
     * Success
     * @param eventHookId
     * @param eventHook
     */
    updateEventHook(eventHookId: string, eventHook: EventHook, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<EventHook>;
    /**
     * Success
     * @param eventHookId
     */
    verifyEventHook(eventHookId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<EventHook>;
    /**
     * Success
     * @param featureId
     */
    getFeature(featureId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Feature>;
    /**
     * Success
     * @param featureId
     */
    listFeatureDependencies(featureId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<Feature>>;
    /**
     * Success
     * @param featureId
     */
    listFeatureDependents(featureId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<Feature>>;
    /**
     * Success
     */
    listFeatures(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<Feature>>;
    /**
     * Success
     * @param featureId
     * @param lifecycle
     * @param mode
     */
    updateFeatureLifecycle(featureId: string, lifecycle: string, mode?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Feature>;
    /**
     * Activates a specific group rule by id from your organization
     * @summary Activate a group Rule
     * @param ruleId
     */
    activateGroupRule(ruleId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Add App Instance Target to App Administrator Role given to a Group
     * @summary Add App Instance Target to App Administrator Role given to a Group
     * @param groupId
     * @param roleId
     * @param appName
     * @param applicationId
     */
    addApplicationInstanceTargetToAppAdminRoleGivenToGroup(groupId: string, roleId: string, appName: string, applicationId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Success
     * @param groupId
     * @param roleId
     * @param appName
     */
    addApplicationTargetToAdminRoleGivenToGroup(groupId: string, roleId: string, appName: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Enumerates group targets for a group role.
     * @summary Add Group Target for Group Role
     * @param groupId
     * @param roleId
     * @param targetGroupId
     */
    addGroupTargetToGroupAdministratorRoleForGroup(groupId: string, roleId: string, targetGroupId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Adds a user to a group with \'OKTA_GROUP\' type.
     * @summary Add User to Group
     * @param groupId
     * @param userId
     */
    addUserToGroup(groupId: string, userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Assigns a Role to a Group
     * @param groupId
     * @param assignRoleRequest
     * @param disableNotifications
     */
    assignRoleToGroup(groupId: string, assignRoleRequest: AssignRoleRequest, disableNotifications?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Role>;
    /**
     * Adds a new group with `OKTA_GROUP` type to your organization.
     * @summary Add Group
     * @param group
     */
    createGroup(group: Group, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Group>;
    /**
     * Creates a group rule to dynamically add users to the specified group if they match the condition
     * @summary Create Group Rule
     * @param groupRule
     */
    createGroupRule(groupRule: GroupRule, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<GroupRule>;
    /**
     * Deactivates a specific group rule by id from your organization
     * @summary Deactivate a group Rule
     * @param ruleId
     */
    deactivateGroupRule(ruleId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Removes a group with `OKTA_GROUP` type from your organization.
     * @summary Remove Group
     * @param groupId
     */
    deleteGroup(groupId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Removes a specific group rule by id from your organization
     * @summary Delete a group Rule
     * @param ruleId
     * @param removeUsers Indicates whether to keep or remove users from groups assigned by this rule.
     */
    deleteGroupRule(ruleId: string, removeUsers?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Fetches a group from your organization.
     * @summary List Group Rules
     * @param groupId
     */
    getGroup(groupId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Group>;
    /**
     * Fetches a specific group rule by id from your organization
     * @summary Get Group Rule
     * @param ruleId
     * @param expand
     */
    getGroupRule(ruleId: string, expand?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<GroupRule>;
    /**
     * Success
     * @param groupId
     * @param roleId
     */
    getRole(groupId: string, roleId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Role>;
    /**
     * Lists all App targets for an `APP_ADMIN` Role assigned to a Group. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
     * @param groupId
     * @param roleId
     * @param after
     * @param limit
     */
    listApplicationTargetsForApplicationAdministratorRoleForGroup(groupId: string, roleId: string, after?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<CatalogApplication>>;
    /**
     * Enumerates all applications that are assigned to a group.
     * @summary List Assigned Applications
     * @param groupId
     * @param after Specifies the pagination cursor for the next page of apps
     * @param limit Specifies the number of app results for a page
     */
    listAssignedApplicationsForGroup(groupId: string, after?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<Application>>;
    /**
     * Success
     * @param groupId
     * @param expand
     */
    listGroupAssignedRoles(groupId: string, expand?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<Role>>;
    /**
     * Lists all group rules for your organization.
     * @summary List Group Rules
     * @param limit Specifies the number of rule results in a page
     * @param after Specifies the pagination cursor for the next page of rules
     * @param search Specifies the keyword to search fules for
     * @param expand If specified as &#x60;groupIdToGroupNameMap&#x60;, then show group names
     */
    listGroupRules(limit?: number, after?: string, search?: string, expand?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<GroupRule>>;
    /**
     * Enumerates group targets for a group role.
     * @summary List Group Targets for Group Role
     * @param groupId
     * @param roleId
     * @param after
     * @param limit
     */
    listGroupTargetsForGroupRole(groupId: string, roleId: string, after?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<Group>>;
    /**
     * Enumerates all users that are a member of a group.
     * @summary List Group Members
     * @param groupId
     * @param after Specifies the pagination cursor for the next page of users
     * @param limit Specifies the number of user results in a page
     */
    listGroupUsers(groupId: string, after?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<User>>;
    /**
     * Enumerates groups in your organization with pagination. A subset of groups can be returned that match a supported filter expression or query.
     * @summary List Groups
     * @param q Searches the name property of groups for matching value
     * @param search Filter expression for groups
     * @param after Specifies the pagination cursor for the next page of groups
     * @param limit Specifies the number of group results in a page
     * @param expand If specified, it causes additional metadata to be included in the response.
     */
    listGroups(q?: string, search?: string, after?: string, limit?: number, expand?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<Group>>;
    /**
     * Remove App Instance Target to App Administrator Role given to a Group
     * @summary Remove App Instance Target to App Administrator Role given to a Group
     * @param groupId
     * @param roleId
     * @param appName
     * @param applicationId
     */
    removeApplicationTargetFromAdministratorRoleGivenToGroup(groupId: string, roleId: string, appName: string, applicationId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Success
     * @param groupId
     * @param roleId
     * @param appName
     */
    removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(groupId: string, roleId: string, appName: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * remove group target for a group role.
     * @summary Delete Group Target for Group Role
     * @param groupId
     * @param roleId
     * @param targetGroupId
     */
    removeGroupTargetFromGroupAdministratorRoleGivenToGroup(groupId: string, roleId: string, targetGroupId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Unassigns a Role from a Group
     * @param groupId
     * @param roleId
     */
    removeRoleFromGroup(groupId: string, roleId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Removes a user from a group with \'OKTA_GROUP\' type.
     * @summary Remove User from Group
     * @param groupId
     * @param userId
     */
    removeUserFromGroup(groupId: string, userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Updates the profile for a group with `OKTA_GROUP` type from your organization.
     * @summary Update Group
     * @param groupId
     * @param group
     */
    updateGroup(groupId: string, group: Group, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Group>;
    /**
     * Updates a group rule. Only `INACTIVE` rules can be updated.
     * @param ruleId
     * @param groupRule
     */
    updateGroupRule(ruleId: string, groupRule: GroupRule, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<GroupRule>;
    /**
     * Fetches the group schema
     * @summary Fetches the group schema
     */
    getGroupSchema(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<GroupSchema>;
    /**
     * Updates, adds ore removes one or more custom Group Profile properties in the schema
     * @summary Updates, adds ore removes one or more custom Group Profile properties in the schema
     * @param groupSchema
     */
    updateGroupSchema(groupSchema?: GroupSchema, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<GroupSchema>;
    /**
     * Activates an inactive IdP.
     * @summary Activate Identity Provider
     * @param idpId
     */
    activateIdentityProvider(idpId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<IdentityProvider>;
    /**
     * Clones a X.509 certificate for an IdP signing key credential from a source IdP to target IdP
     * @summary Clone Signing Key Credential for IdP
     * @param idpId
     * @param keyId
     * @param targetIdpId
     */
    cloneIdentityProviderKey(idpId: string, keyId: string, targetIdpId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<JsonWebKey>;
    /**
     * Adds a new IdP to your organization.
     * @summary Add Identity Provider
     * @param identityProvider
     */
    createIdentityProvider(identityProvider: IdentityProvider, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<IdentityProvider>;
    /**
     * Adds a new X.509 certificate credential to the IdP key store.
     * @summary Add X.509 Certificate Public Key
     * @param jsonWebKey
     */
    createIdentityProviderKey(jsonWebKey: JsonWebKey, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<JsonWebKey>;
    /**
     * Deactivates an active IdP.
     * @summary Deactivate Identity Provider
     * @param idpId
     */
    deactivateIdentityProvider(idpId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<IdentityProvider>;
    /**
     * Removes an IdP from your organization.
     * @summary Delete Identity Provider
     * @param idpId
     */
    deleteIdentityProvider(idpId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Deletes a specific IdP Key Credential by `kid` if it is not currently being used by an Active or Inactive IdP.
     * @summary Delete Key
     * @param keyId
     */
    deleteIdentityProviderKey(keyId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Generates a new key pair and returns a Certificate Signing Request for it.
     * @summary Generate Certificate Signing Request for IdP
     * @param idpId
     * @param csrMetadata
     */
    generateCsrForIdentityProvider(idpId: string, csrMetadata: CsrMetadata, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Csr>;
    /**
     * Generates a new X.509 certificate for an IdP signing key credential to be used for signing assertions sent to the IdP
     * @summary Generate New IdP Signing Key Credential
     * @param idpId
     * @param validityYears expiry of the IdP Key Credential
     */
    generateIdentityProviderSigningKey(idpId: string, validityYears: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<JsonWebKey>;
    /**
     * Gets a specific Certificate Signing Request model by id
     * @param idpId
     * @param csrId
     */
    getCsrForIdentityProvider(idpId: string, csrId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Csr>;
    /**
     * Fetches an IdP by `id`.
     * @summary Get Identity Provider
     * @param idpId
     */
    getIdentityProvider(idpId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<IdentityProvider>;
    /**
     * Fetches a linked IdP user by ID
     * @param idpId
     * @param userId
     */
    getIdentityProviderApplicationUser(idpId: string, userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<IdentityProviderApplicationUser>;
    /**
     * Gets a specific IdP Key Credential by `kid`
     * @summary Get Key
     * @param keyId
     */
    getIdentityProviderKey(keyId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<JsonWebKey>;
    /**
     * Gets a specific IdP Key Credential by `kid`
     * @summary Get Signing Key Credential for IdP
     * @param idpId
     * @param keyId
     */
    getIdentityProviderSigningKey(idpId: string, keyId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<JsonWebKey>;
    /**
     * Links an Okta user to an existing Social Identity Provider. This does not support the SAML2 Identity Provider Type
     * @summary Link a user to a Social IdP without a transaction
     * @param idpId
     * @param userId
     * @param userIdentityProviderLinkRequest
     */
    linkUserToIdentityProvider(idpId: string, userId: string, userIdentityProviderLinkRequest: UserIdentityProviderLinkRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<IdentityProviderApplicationUser>;
    /**
     * Enumerates Certificate Signing Requests for an IdP
     * @summary List Certificate Signing Requests for IdP
     * @param idpId
     */
    listCsrsForIdentityProvider(idpId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<Csr>>;
    /**
     * Find all the users linked to an identity provider
     * @summary Find Users
     * @param idpId
     */
    listIdentityProviderApplicationUsers(idpId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<IdentityProviderApplicationUser>>;
    /**
     * Enumerates IdP key credentials.
     * @summary List Keys
     * @param after Specifies the pagination cursor for the next page of keys
     * @param limit Specifies the number of key results in a page
     */
    listIdentityProviderKeys(after?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<JsonWebKey>>;
    /**
     * Enumerates signing key credentials for an IdP
     * @summary List Signing Key Credentials for IdP
     * @param idpId
     */
    listIdentityProviderSigningKeys(idpId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<JsonWebKey>>;
    /**
     * Enumerates IdPs in your organization with pagination. A subset of IdPs can be returned that match a supported filter expression or query.
     * @summary List Identity Providers
     * @param q Searches the name property of IdPs for matching value
     * @param after Specifies the pagination cursor for the next page of IdPs
     * @param limit Specifies the number of IdP results in a page
     * @param type Filters IdPs by type
     */
    listIdentityProviders(q?: string, after?: string, limit?: number, type?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<IdentityProvider>>;
    /**
     * Fetches the tokens minted by the Social Authentication Provider when the user authenticates with Okta via Social Auth.
     * @summary Social Authentication Token Operation
     * @param idpId
     * @param userId
     */
    listSocialAuthTokens(idpId: string, userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<SocialAuthToken>>;
    /**
     * Update the Certificate Signing Request with a signed X.509 certificate and add it into the signing key credentials for the IdP.
     * @param idpId
     * @param csrId
     * @param body
     */
    publishCsrForIdentityProvider(idpId: string, csrId: string, body: RequestFile, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<JsonWebKey>;
    /**
     * Revoke a Certificate Signing Request and delete the key pair from the IdP
     * @param idpId
     * @param csrId
     */
    revokeCsrForIdentityProvider(idpId: string, csrId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Removes the link between the Okta user and the IdP user.
     * @summary Unlink User from IdP
     * @param idpId
     * @param userId
     */
    unlinkUserFromIdentityProvider(idpId: string, userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Updates the configuration for an IdP.
     * @summary Update Identity Provider
     * @param idpId
     * @param identityProvider
     */
    updateIdentityProvider(idpId: string, identityProvider: IdentityProvider, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<IdentityProvider>;
    /**
     * Activates the Inline Hook matching the provided id
     * @param inlineHookId
     */
    activateInlineHook(inlineHookId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<InlineHook>;
    /**
     * Success
     * @param inlineHook
     */
    createInlineHook(inlineHook: InlineHook, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<InlineHook>;
    /**
     * Deactivates the Inline Hook matching the provided id
     * @param inlineHookId
     */
    deactivateInlineHook(inlineHookId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<InlineHook>;
    /**
     * Deletes the Inline Hook matching the provided id. Once deleted, the Inline Hook is unrecoverable. As a safety precaution, only Inline Hooks with a status of INACTIVE are eligible for deletion.
     * @param inlineHookId
     */
    deleteInlineHook(inlineHookId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Executes the Inline Hook matching the provided inlineHookId using the request body as the input. This will send the provided data through the Channel and return a response if it matches the correct data contract. This execution endpoint should only be used for testing purposes.
     * @param inlineHookId
     * @param body
     */
    executeInlineHook(inlineHookId: string, body: object, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<InlineHookResponse>;
    /**
     * Gets an inline hook by ID
     * @param inlineHookId
     */
    getInlineHook(inlineHookId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<InlineHook>;
    /**
     * Success
     * @param type
     */
    listInlineHooks(type?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<InlineHook>>;
    /**
     * Updates an inline hook by ID
     * @param inlineHookId
     * @param inlineHook
     */
    updateInlineHook(inlineHookId: string, inlineHook: InlineHook, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<InlineHook>;
    /**
     * Success
     * @param linkedObject
     */
    addLinkedObjectDefinition(linkedObject: LinkedObject, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<LinkedObject>;
    /**
     * Success
     * @param linkedObjectName
     */
    deleteLinkedObjectDefinition(linkedObjectName: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Success
     * @param linkedObjectName
     */
    getLinkedObjectDefinition(linkedObjectName: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<LinkedObject>;
    /**
     * Success
     */
    listLinkedObjectDefinitions(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<LinkedObject>>;
    /**
     * The Okta System Log API provides read access to your organization’s system log. This API provides more functionality than the Events API
     * @summary Fetch a list of events from your Okta organization system log.
     * @param since
     * @param until
     * @param filter
     * @param q
     * @param limit
     * @param sortOrder
     * @param after
     */
    getLogs(since?: Date, until?: Date, filter?: string, q?: string, limit?: number, sortOrder?: string, after?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<LogEvent>>;
    /**
     * Activate Network Zone
     * @summary Activate Network Zone
     * @param zoneId
     */
    activateNetworkZone(zoneId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<NetworkZone>;
    /**
     * Adds a new network zone to your Okta organization.
     * @summary Add Network Zone
     * @param networkZone
     */
    createNetworkZone(networkZone: NetworkZone, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<NetworkZone>;
    /**
     * Deactivates a network zone.
     * @summary Deactivate Network Zone
     * @param zoneId
     */
    deactivateNetworkZone(zoneId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<NetworkZone>;
    /**
     * Removes network zone.
     * @summary Delete Network Zone
     * @param zoneId
     */
    deleteNetworkZone(zoneId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Fetches a network zone from your Okta organization by `id`.
     * @summary Get Network Zone
     * @param zoneId
     */
    getNetworkZone(zoneId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<NetworkZone>;
    /**
     * Enumerates network zones added to your organization with pagination. A subset of zones can be returned that match a supported filter expression or query.
     * @summary List Network Zones
     * @param after Specifies the pagination cursor for the next page of network zones
     * @param limit Specifies the number of results for a page
     * @param filter Filters zones by usage or id expression
     */
    listNetworkZones(after?: string, limit?: number, filter?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<NetworkZone>>;
    /**
     * Updates a network zone in your organization.
     * @summary Update Network Zone
     * @param zoneId
     * @param networkZone
     */
    updateNetworkZone(zoneId: string, networkZone: NetworkZone, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<NetworkZone>;
    /**
     * Extends the length of time that Okta Support can access your org by 24 hours. This means that 24 hours are added to the remaining access time.
     * @summary Extend Okta Support
     */
    extendOktaSupport(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OrgOktaSupportSettingsObj>;
    /**
     * Gets Okta Communication Settings of your organization.
     * @summary Get Okta Communication Settings
     */
    getOktaCommunicationSettings(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OrgOktaCommunicationSetting>;
    /**
     * Gets Contact Types of your organization.
     * @summary Get org contact types
     */
    getOrgContactTypes(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<OrgContactTypeObj>>;
    /**
     * Retrieves the URL of the User associated with the specified Contact Type.
     * @summary Get org contact user
     * @param contactType
     */
    getOrgContactUser(contactType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OrgContactUser>;
    /**
     * Gets Okta Support Settings of your organization.
     * @summary Get Okta Support settings
     */
    getOrgOktaSupportSettings(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OrgOktaSupportSettingsObj>;
    /**
     * Gets preferences of your organization.
     * @summary Get org preferences
     */
    getOrgPreferences(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OrgPreferences>;
    /**
     * Get settings of your organization.
     * @summary Get org settings
     */
    getOrgSettings(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OrgSetting>;
    /**
     * Enables you to temporarily allow Okta Support to access your org as an administrator for eight hours.
     * @summary Grant Okta Support
     */
    grantOktaSupport(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OrgOktaSupportSettingsObj>;
    /**
     * Hide the Okta UI footer for all end users of your organization.
     * @summary Show Okta UI Footer
     */
    hideOktaUIFooter(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OrgPreferences>;
    /**
     * Opts in all users of this org to Okta Communication emails.
     * @summary Opt in all users to Okta Communication emails
     */
    optInUsersToOktaCommunicationEmails(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OrgOktaCommunicationSetting>;
    /**
     * Opts out all users of this org from Okta Communication emails.
     * @summary Opt out all users from Okta Communication emails
     */
    optOutUsersFromOktaCommunicationEmails(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OrgOktaCommunicationSetting>;
    /**
     * Partial update settings of your organization.
     * @summary Partial update Org Setting
     * @param orgSetting
     */
    partialUpdateOrgSetting(orgSetting?: OrgSetting, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OrgSetting>;
    /**
     * Revokes Okta Support access to your organization.
     * @summary Extend Okta Support
     */
    revokeOktaSupport(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OrgOktaSupportSettingsObj>;
    /**
     * Makes the Okta UI footer visible for all end users of your organization.
     * @summary Show Okta UI Footer
     */
    showOktaUIFooter(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OrgPreferences>;
    /**
     * Updates the User associated with the specified Contact Type.
     * @summary Update org contact user
     * @param contactType
     * @param userIdString
     */
    updateOrgContactUser(contactType: string, userIdString: UserIdString, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OrgContactUser>;
    /**
     * Update settings of your organization.
     * @summary Update Org setting
     * @param orgSetting
     */
    updateOrgSetting(orgSetting: OrgSetting, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OrgSetting>;
    /**
     * Activates a policy.
     * @param policyId
     */
    activatePolicy(policyId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Activates a policy rule.
     * @param policyId
     * @param ruleId
     */
    activatePolicyRule(policyId: string, ruleId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Creates a policy.
     * @param policy
     * @param activate
     */
    createPolicy(policy: Policy, activate?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Policy>;
    /**
     * Creates a policy rule.
     * @param policyId
     * @param policyRule
     */
    createPolicyRule(policyId: string, policyRule: PolicyRule, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<PolicyRule>;
    /**
     * Deactivates a policy.
     * @param policyId
     */
    deactivatePolicy(policyId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Deactivates a policy rule.
     * @param policyId
     * @param ruleId
     */
    deactivatePolicyRule(policyId: string, ruleId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Removes a policy.
     * @param policyId
     */
    deletePolicy(policyId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Removes a policy rule.
     * @param policyId
     * @param ruleId
     */
    deletePolicyRule(policyId: string, ruleId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Gets a policy.
     * @param policyId
     * @param expand
     */
    getPolicy(policyId: string, expand?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Policy>;
    /**
     * Gets a policy rule.
     * @param policyId
     * @param ruleId
     */
    getPolicyRule(policyId: string, ruleId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<PolicyRule>;
    /**
     * Gets all policies with the specified type.
     * @param type
     * @param status
     * @param expand
     */
    listPolicies(type: string, status?: string, expand?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<Policy>>;
    /**
     * Enumerates all policy rules.
     * @param policyId
     */
    listPolicyRules(policyId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<PolicyRule>>;
    /**
     * Updates a policy.
     * @param policyId
     * @param policy
     */
    updatePolicy(policyId: string, policy: Policy, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Policy>;
    /**
     * Updates a policy rule.
     * @param policyId
     * @param ruleId
     * @param policyRule
     */
    updatePolicyRule(policyId: string, ruleId: string, policyRule: PolicyRule, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<PolicyRule>;
    /**
     * Fetches a single Profile Mapping referenced by its ID.
     * @summary Get Profile Mapping
     * @param mappingId
     */
    getProfileMapping(mappingId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<ProfileMapping>;
    /**
     * Enumerates Profile Mappings in your organization with pagination.
     * @param after
     * @param limit
     * @param sourceId
     * @param targetId
     */
    listProfileMappings(after?: string, limit?: number, sourceId?: string, targetId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<ProfileMapping>>;
    /**
     * Updates an existing Profile Mapping by adding, updating, or removing one or many Property Mappings.
     * @summary Update Profile Mapping
     * @param mappingId
     * @param profileMapping
     */
    updateProfileMapping(mappingId: string, profileMapping: ProfileMapping, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<ProfileMapping>;
    /**
     * Creates a new session for a user with a valid session token. Use this API if, for example, you want to set the session cookie yourself instead of allowing Okta to set it, or want to hold the session ID in order to delete a session via the API instead of visiting the logout URL.
     * @summary Create Session with Session Token
     * @param createSessionRequest
     */
    createSession(createSessionRequest: CreateSessionRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Session>;
    /**
     * End a session.
     * @summary End Session
     * @param sessionId
     */
    endSession(sessionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Get details about a session.
     * @summary Get Session
     * @param sessionId
     */
    getSession(sessionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Session>;
    /**
     * Refresh a session.
     * @summary Refresh Session
     * @param sessionId
     */
    refreshSession(sessionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Session>;
    /**
     * Adds a new custom SMS template to your organization.
     * @summary Add SMS Template
     * @param smsTemplate
     */
    createSmsTemplate(smsTemplate: SmsTemplate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<SmsTemplate>;
    /**
     * Removes an SMS template.
     * @summary Remove SMS Template
     * @param templateId
     */
    deleteSmsTemplate(templateId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Fetches a specific template by `id`
     * @summary Get SMS Template
     * @param templateId
     */
    getSmsTemplate(templateId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<SmsTemplate>;
    /**
     * Enumerates custom SMS templates in your organization. A subset of templates can be returned that match a template type.
     * @summary List SMS Templates
     * @param templateType
     */
    listSmsTemplates(templateType?: SmsTemplateType, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<SmsTemplate>>;
    /**
     * Updates only some of the SMS template properties:
     * @summary Partial SMS Template Update
     * @param templateId
     * @param smsTemplate
     */
    partialUpdateSmsTemplate(templateId: string, smsTemplate: SmsTemplate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<SmsTemplate>;
    /**
     * Updates the SMS template.
     * @summary Update SMS Template
     * @param templateId
     * @param smsTemplate
     */
    updateSmsTemplate(templateId: string, smsTemplate: SmsTemplate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<SmsTemplate>;
    /**
     * Gets current ThreatInsight configuration
     */
    getCurrentConfiguration(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<ThreatInsightConfiguration>;
    /**
     * Updates ThreatInsight configuration
     * @param threatInsightConfiguration
     */
    updateConfiguration(threatInsightConfiguration: ThreatInsightConfiguration, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<ThreatInsightConfiguration>;
    /**
     * Success
     * @param trustedOriginId
     */
    activateOrigin(trustedOriginId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<TrustedOrigin>;
    /**
     * Success
     * @param trustedOrigin
     */
    createOrigin(trustedOrigin: TrustedOrigin, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<TrustedOrigin>;
    /**
     * Success
     * @param trustedOriginId
     */
    deactivateOrigin(trustedOriginId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<TrustedOrigin>;
    /**
     * Success
     * @param trustedOriginId
     */
    deleteOrigin(trustedOriginId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Success
     * @param trustedOriginId
     */
    getOrigin(trustedOriginId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<TrustedOrigin>;
    /**
     * Success
     * @param q
     * @param filter
     * @param after
     * @param limit
     */
    listOrigins(q?: string, filter?: string, after?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<TrustedOrigin>>;
    /**
     * Success
     * @param trustedOriginId
     * @param trustedOrigin
     */
    updateOrigin(trustedOriginId: string, trustedOrigin: TrustedOrigin, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<TrustedOrigin>;
    /**
     * Activates a user.  This operation can only be performed on users with a `STAGED` status.  Activation of a user is an asynchronous operation. The user will have the `transitioningToStatus` property with a value of `ACTIVE` during activation to indicate that the user hasn\'t completed the asynchronous operation.  The user will have a status of `ACTIVE` when the activation process is complete.
     * @summary Activate User
     * @param userId
     * @param sendEmail Sends an activation email to the user if true
     */
    activateUser(userId: string, sendEmail: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<UserActivationToken>;
    /**
     * Success
     * @param userId
     * @param roleId
     */
    addAllAppsAsTargetToRole(userId: string, roleId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Success
     * @param userId
     * @param roleId
     * @param appName
     */
    addApplicationTargetToAdminRoleForUser(userId: string, roleId: string, appName: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Add App Instance Target to App Administrator Role given to a User
     * @summary Add App Instance Target to App Administrator Role given to a User
     * @param userId
     * @param roleId
     * @param appName
     * @param applicationId
     */
    addApplicationTargetToAppAdminRoleForUser(userId: string, roleId: string, appName: string, applicationId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Success
     * @param userId
     * @param roleId
     * @param groupId
     */
    addGroupTargetToRole(userId: string, roleId: string, groupId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Assigns a role to a user.
     * @param userId
     * @param assignRoleRequest
     * @param disableNotifications
     */
    assignRoleToUser(userId: string, assignRoleRequest: AssignRoleRequest, disableNotifications?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Role>;
    /**
     * Changes a user\'s password by validating the user\'s current password. This operation can only be performed on users in `STAGED`, `ACTIVE`, `PASSWORD_EXPIRED`, or `RECOVERY` status that have a valid password credential
     * @summary Change Password
     * @param userId
     * @param changePasswordRequest
     * @param strict
     */
    changePassword(userId: string, changePasswordRequest: ChangePasswordRequest, strict?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<UserCredentials>;
    /**
     * Changes a user\'s recovery question & answer credential by validating the user\'s current password.  This operation can only be performed on users in **STAGED**, **ACTIVE** or **RECOVERY** `status` that have a valid password credential
     * @summary Change Recovery Question
     * @param userId
     * @param userCredentials
     */
    changeRecoveryQuestion(userId: string, userCredentials: UserCredentials, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<UserCredentials>;
    /**
     * Removes all active identity provider sessions. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user.
     * @param userId
     * @param oauthTokens Revoke issued OpenID Connect and OAuth refresh and access tokens
     */
    clearUserSessions(userId: string, oauthTokens?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Creates a new user in your Okta organization with or without credentials.
     * @summary Create User
     * @param createUserRequest
     * @param activate Executes activation lifecycle operation when creating the user
     * @param provider Indicates whether to create a user with a specified authentication provider
     * @param nextLogin With activate&#x3D;true, set nextLogin to \&quot;changePassword\&quot; to have the password be EXPIRED, so user must change it the next time they log in.
     */
    createUser(createUserRequest: CreateUserRequest, activate?: boolean, provider?: boolean, nextLogin?: UserNextLogin, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<User>;
    /**
     * Deletes a user permanently.  This operation can only be performed on users that have a `DEPROVISIONED` status.  **This action cannot be recovered!**
     * @summary Delete User
     * @param userId
     * @param sendEmail
     */
    deactivateOrDeleteUser(userId: string, sendEmail?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Deactivates a user.  This operation can only be performed on users that do not have a `DEPROVISIONED` status.  Deactivation of a user is an asynchronous operation.  The user will have the `transitioningToStatus` property with a value of `DEPROVISIONED` during deactivation to indicate that the user hasn\'t completed the asynchronous operation.  The user will have a status of `DEPROVISIONED` when the deactivation process is complete.
     * @summary Deactivate User
     * @param userId
     * @param sendEmail
     */
    deactivateUser(userId: string, sendEmail?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * This operation transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login.
     * @summary Expire Password
     * @param userId
     */
    expirePassword(userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<User>;
    /**
     * This operation transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login, and also sets the user\'s password to a temporary password returned in the response.
     * @summary Expire Password and Set Temporary Password
     * @param userId
     */
    expirePasswordAndGetTemporaryPassword(userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<TempPassword>;
    /**
     * Initiate forgot password flow. Generates a one-time token (OTT) that can be used to reset a user\'s password.
     * @summary Initiate Forgot Password
     * @param userId
     * @param sendEmail
     */
    forgotPassword(userId: string, sendEmail?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<ForgotPasswordResponse>;
    /**
     * Resets the user\'s password to the specified password if the provided answer to the recovery question is correct.
     * @summary Reset Password with Recovery Question
     * @param userId
     * @param sendEmail
     * @param userCredentials
     */
    forgotPasswordSetNewPassword(userId: string, sendEmail?: boolean, userCredentials?: UserCredentials, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<UserCredentials>;
    /**
     * Get linked objects for a user, relationshipName can be a primary or associated relationship name
     * @param userId
     * @param relationshipName
     * @param after
     * @param limit
     */
    getLinkedObjectsForUser(userId: string, relationshipName: string, after?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<object>>;
    /**
     * Gets a refresh token issued for the specified User and Client.
     * @param userId
     * @param clientId
     * @param tokenId
     * @param expand
     * @param limit
     * @param after
     */
    getRefreshTokenForUserAndClient(userId: string, clientId: string, tokenId: string, expand?: string, limit?: number, after?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OAuth2RefreshToken>;
    /**
     * Fetches a user from your Okta organization.
     * @summary Get User
     * @param userId
     */
    getUser(userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<User>;
    /**
     * Gets a grant for the specified user
     * @param userId
     * @param grantId
     * @param expand
     */
    getUserGrant(userId: string, grantId: string, expand?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<OAuth2ScopeConsentGrant>;
    /**
     * Gets role that is assigned to user.
     * @param userId
     * @param roleId
     */
    getUserRole(userId: string, roleId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Role>;
    /**
     * Fetches appLinks for all direct or indirect (via group membership) assigned applications.
     * @summary Get Assigned App Links
     * @param userId
     */
    listAppLinks(userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<AppLink>>;
    /**
     * Lists all App targets for an `APP_ADMIN` Role assigned to a User. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
     * @param userId
     * @param roleId
     * @param after
     * @param limit
     */
    listApplicationTargetsForApplicationAdministratorRoleForUser(userId: string, roleId: string, after?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<CatalogApplication>>;
    /**
     * Lists all roles assigned to a user.
     * @param userId
     * @param expand
     */
    listAssignedRolesForUser(userId: string, expand?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<Role>>;
    /**
     * Lists all grants for a specified user and client
     * @param userId
     * @param clientId
     * @param expand
     * @param after
     * @param limit
     */
    listGrantsForUserAndClient(userId: string, clientId: string, expand?: string, after?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<OAuth2ScopeConsentGrant>>;
    /**
     * Success
     * @param userId
     * @param roleId
     * @param after
     * @param limit
     */
    listGroupTargetsForRole(userId: string, roleId: string, after?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<Group>>;
    /**
     * Lists all refresh tokens issued for the specified User and Client.
     * @param userId
     * @param clientId
     * @param expand
     * @param after
     * @param limit
     */
    listRefreshTokensForUserAndClient(userId: string, clientId: string, expand?: string, after?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<OAuth2RefreshToken>>;
    /**
     * Lists all client resources for which the specified user has grants or tokens.
     * @param userId
     */
    listUserClients(userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<OAuth2Client>>;
    /**
     * Lists all grants for the specified user
     * @param userId
     * @param scopeId
     * @param expand
     * @param after
     * @param limit
     */
    listUserGrants(userId: string, scopeId?: string, expand?: string, after?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<OAuth2ScopeConsentGrant>>;
    /**
     * Fetches the groups of which the user is a member.
     * @summary Get Member Groups
     * @param userId
     */
    listUserGroups(userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<Group>>;
    /**
     * Lists the IdPs associated with the user.
     * @summary Listing IdPs associated with a user
     * @param userId
     */
    listUserIdentityProviders(userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<IdentityProvider>>;
    /**
     * Lists users in your organization with pagination in most cases.  A subset of users can be returned that match a supported filter expression or search criteria.
     * @summary List Users
     * @param q Finds a user that matches firstName, lastName, and email properties
     * @param after Specifies the pagination cursor for the next page of users
     * @param limit Specifies the number of results returned
     * @param filter Filters users with a supported expression for a subset of properties
     * @param search Searches for users with a supported filtering  expression for most properties
     * @param sortBy
     * @param sortOrder
     */
    listUsers(q?: string, after?: string, limit?: number, filter?: string, search?: string, sortBy?: string, sortOrder?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<User>>;
    /**
     * Fetch a user by `id`, `login`, or `login shortname` if the short name is unambiguous.
     * @param userId
     * @param user
     * @param strict
     */
    partialUpdateUser(userId: string, user: User, strict?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<User>;
    /**
     * Reactivates a user.  This operation can only be performed on users with a `PROVISIONED` status.  This operation restarts the activation workflow if for some reason the user activation was not completed when using the activationToken from [Activate User](#activate-user).
     * @summary Reactivate User
     * @param userId
     * @param sendEmail Sends an activation email to the user if true
     */
    reactivateUser(userId: string, sendEmail?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<UserActivationToken>;
    /**
     * Remove App Instance Target to App Administrator Role given to a User
     * @summary Remove App Instance Target to App Administrator Role given to a User
     * @param userId
     * @param roleId
     * @param appName
     * @param applicationId
     */
    removeApplicationTargetFromAdministratorRoleForUser(userId: string, roleId: string, appName: string, applicationId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Success
     * @param userId
     * @param roleId
     * @param appName
     */
    removeApplicationTargetFromApplicationAdministratorRoleForUser(userId: string, roleId: string, appName: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Success
     * @param userId
     * @param roleId
     * @param groupId
     */
    removeGroupTargetFromRole(userId: string, roleId: string, groupId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Delete linked objects for a user, relationshipName can be ONLY a primary relationship name
     * @param userId
     * @param relationshipName
     */
    removeLinkedObjectForUser(userId: string, relationshipName: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Unassigns a role from a user.
     * @param userId
     * @param roleId
     */
    removeRoleFromUser(userId: string, roleId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * This operation resets all factors for the specified user. All MFA factor enrollments returned to the unenrolled state. The user\'s status remains ACTIVE. This link is present only if the user is currently enrolled in one or more MFA factors.
     * @summary Reset Factors
     * @param userId
     */
    resetFactors(userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Generates a one-time token (OTT) that can be used to reset a user\'s password.  The OTT link can be automatically emailed to the user or returned to the API caller and distributed using a custom flow.
     * @summary Reset Password
     * @param userId
     * @param sendEmail
     */
    resetPassword(userId: string, sendEmail: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<ResetPasswordToken>;
    /**
     * Revokes all grants for the specified user and client
     * @param userId
     * @param clientId
     */
    revokeGrantsForUserAndClient(userId: string, clientId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Revokes the specified refresh token.
     * @param userId
     * @param clientId
     * @param tokenId
     */
    revokeTokenForUserAndClient(userId: string, clientId: string, tokenId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Revokes all refresh tokens issued for the specified User and Client.
     * @param userId
     * @param clientId
     */
    revokeTokensForUserAndClient(userId: string, clientId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Revokes one grant for a specified user
     * @param userId
     * @param grantId
     */
    revokeUserGrant(userId: string, grantId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Revokes all grants for a specified user
     * @param userId
     */
    revokeUserGrants(userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Sets a linked object for a user.
     * @summary Set Linked Object for User
     * @param associatedUserId
     * @param primaryRelationshipName
     * @param primaryUserId
     */
    setLinkedObjectForUser(associatedUserId: string, primaryRelationshipName: string, primaryUserId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Suspends a user.  This operation can only be performed on users with an `ACTIVE` status.  The user will have a status of `SUSPENDED` when the process is complete.
     * @summary Suspend User
     * @param userId
     */
    suspendUser(userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Unlocks a user with a `LOCKED_OUT` status and returns them to `ACTIVE` status.  Users will be able to login with their current password.
     * @summary Unlock User
     * @param userId
     */
    unlockUser(userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Unsuspends a user and returns them to the `ACTIVE` state.  This operation can only be performed on users that have a `SUSPENDED` status.
     * @summary Unsuspend User
     * @param userId
     */
    unsuspendUser(userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Update a user\'s profile and/or credentials using strict-update semantics.
     * @summary Update User
     * @param userId
     * @param user
     * @param strict
     */
    updateUser(userId: string, user: User, strict?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<User>;
    /**
     * The `sms` and `token:software:totp` factor types require activation to complete the enrollment process.
     * @summary Activate Factor
     * @param userId
     * @param factorId
     * @param activateFactorRequest
     */
    activateFactor(userId: string, factorId: string, activateFactorRequest?: ActivateFactorRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<UserFactor>;
    /**
     * Unenrolls an existing factor for the specified user, allowing the user to enroll a new factor.
     * @param userId
     * @param factorId
     */
    deleteFactor(userId: string, factorId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Enrolls a user with a supported factor.
     * @summary Enroll Factor
     * @param userId
     * @param userFactor Factor
     * @param updatePhone
     * @param templateId id of SMS template (only for SMS factor)
     * @param tokenLifetimeSeconds
     * @param activate
     */
    enrollFactor(userId: string, userFactor: UserFactor, updatePhone?: boolean, templateId?: string, tokenLifetimeSeconds?: number, activate?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<UserFactor>;
    /**
     * Fetches a factor for the specified user
     * @param userId
     * @param factorId
     */
    getFactor(userId: string, factorId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<UserFactor>;
    /**
     * Polls factors verification transaction for status.
     * @param userId
     * @param factorId
     * @param transactionId
     */
    getFactorTransactionStatus(userId: string, factorId: string, transactionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<VerifyUserFactorResponse>;
    /**
     * Enumerates all the enrolled factors for the specified user
     * @param userId
     */
    listFactors(userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<UserFactor>>;
    /**
     * Enumerates all the supported factors that can be enrolled for the specified user
     * @param userId
     */
    listSupportedFactors(userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<UserFactor>>;
    /**
     * Enumerates all available security questions for a user\'s `question` factor
     * @param userId
     */
    listSupportedSecurityQuestions(userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<SecurityQuestion>>;
    /**
     * Verifies an OTP for a `token` or `token:hardware` factor
     * @summary Verify MFA Factor
     * @param userId
     * @param factorId
     * @param templateId
     * @param tokenLifetimeSeconds
     * @param xForwardedFor
     * @param userAgent
     * @param acceptLanguage
     * @param verifyFactorRequest
     */
    verifyFactor(userId: string, factorId: string, templateId?: string, tokenLifetimeSeconds?: number, xForwardedFor?: string, userAgent?: string, acceptLanguage?: string, verifyFactorRequest?: VerifyFactorRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<VerifyUserFactorResponse>;
    /**
     * Fetches the Schema for an App User
     * @summary Fetches the Schema for an App User
     * @param appInstanceId
     */
    getApplicationUserSchema(appInstanceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<UserSchema>;
    /**
     * Fetches the schema for a Schema Id.
     * @summary Fetches the schema for a Schema Id.
     * @param schemaId
     */
    getUserSchema(schemaId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<UserSchema>;
    /**
     * Partial updates on the User Profile properties of the Application User Schema.
     * @summary Partial updates on the User Profile properties of the Application User Schema.
     * @param appInstanceId
     * @param userSchema
     */
    updateApplicationUserProfile(appInstanceId: string, userSchema?: UserSchema, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<UserSchema>;
    /**
     * Partial updates on the User Profile properties of the user schema.
     * @param schemaId
     * @param userSchema
     */
    updateUserProfile(schemaId: string, userSchema: UserSchema, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<UserSchema>;
    /**
     * Creates a new User Type. A default User Type is automatically created along with your org, and you may add another 9 User Types for a maximum of 10.
     * @param userType
     */
    createUserType(userType: UserType, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<UserType>;
    /**
     * Deletes a User Type permanently. This operation is not permitted for the default type, nor for any User Type that has existing users
     * @param typeId
     */
    deleteUserType(typeId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * Fetches a User Type by ID. The special identifier `default` may be used to fetch the default User Type.
     * @param typeId
     */
    getUserType(typeId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<UserType>;
    /**
     * Fetches all User Types in your org
     */
    listUserTypes(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<Array<UserType>>;
    /**
     * Replace an existing User Type
     * @param typeId
     * @param userType
     */
    replaceUserType(typeId: string, userType: UserType, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<UserType>;
    /**
     * Updates an existing User Type
     * @param typeId
     * @param userType
     */
    updateUserType(typeId: string, userType: UserType, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<UserType>;
}
