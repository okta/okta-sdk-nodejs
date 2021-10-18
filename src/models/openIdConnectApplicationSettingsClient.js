"use strict";
/**
 * Okta API
 * Allows customers to easily access the Okta API
 *
 * The version of the OpenAPI document: 2.7.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenIdConnectApplicationSettingsClient = void 0;
var OpenIdConnectApplicationSettingsClient = /** @class */ (function () {
    function OpenIdConnectApplicationSettingsClient() {
    }
    OpenIdConnectApplicationSettingsClient.getAttributeTypeMap = function () {
        return OpenIdConnectApplicationSettingsClient.attributeTypeMap;
    };
    OpenIdConnectApplicationSettingsClient.discriminator = undefined;
    OpenIdConnectApplicationSettingsClient.attributeTypeMap = [
        {
            "name": "applicationType",
            "baseName": "application_type",
            "type": "OpenIdConnectApplicationType"
        },
        {
            "name": "clientUri",
            "baseName": "client_uri",
            "type": "string"
        },
        {
            "name": "consentMethod",
            "baseName": "consent_method",
            "type": "OpenIdConnectApplicationConsentMethod"
        },
        {
            "name": "grantTypes",
            "baseName": "grant_types",
            "type": "Array<OAuthGrantType>"
        },
        {
            "name": "initiateLoginUri",
            "baseName": "initiate_login_uri",
            "type": "string"
        },
        {
            "name": "issuerMode",
            "baseName": "issuer_mode",
            "type": "OpenIdConnectApplicationIssuerMode"
        },
        {
            "name": "idpInitiatedLogin",
            "baseName": "idp_initiated_login",
            "type": "OpenIdConnectApplicationIdpInitiatedLogin"
        },
        {
            "name": "logoUri",
            "baseName": "logo_uri",
            "type": "string"
        },
        {
            "name": "policyUri",
            "baseName": "policy_uri",
            "type": "string"
        },
        {
            "name": "postLogoutRedirectUris",
            "baseName": "post_logout_redirect_uris",
            "type": "Array<string>"
        },
        {
            "name": "redirectUris",
            "baseName": "redirect_uris",
            "type": "Array<string>"
        },
        {
            "name": "wildcardRedirect",
            "baseName": "wildcard_redirect",
            "type": "string"
        },
        {
            "name": "responseTypes",
            "baseName": "response_types",
            "type": "Array<OAuthResponseType>"
        },
        {
            "name": "refreshToken",
            "baseName": "refresh_token",
            "type": "OpenIdConnectApplicationSettingsRefreshToken"
        },
        {
            "name": "tosUri",
            "baseName": "tos_uri",
            "type": "string"
        },
        {
            "name": "jwks",
            "baseName": "jwks",
            "type": "OpenIdConnectApplicationSettingsClientKeys"
        }
    ];
    return OpenIdConnectApplicationSettingsClient;
}());
exports.OpenIdConnectApplicationSettingsClient = OpenIdConnectApplicationSettingsClient;
