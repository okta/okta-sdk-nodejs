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
exports.AuthenticationProviderType = void 0;
var AuthenticationProviderType;
(function (AuthenticationProviderType) {
    AuthenticationProviderType[AuthenticationProviderType["ActiveDirectory"] = 'ACTIVE_DIRECTORY'] = "ActiveDirectory";
    AuthenticationProviderType[AuthenticationProviderType["Federation"] = 'FEDERATION'] = "Federation";
    AuthenticationProviderType[AuthenticationProviderType["Ldap"] = 'LDAP'] = "Ldap";
    AuthenticationProviderType[AuthenticationProviderType["Okta"] = 'OKTA'] = "Okta";
    AuthenticationProviderType[AuthenticationProviderType["Social"] = 'SOCIAL'] = "Social";
    AuthenticationProviderType[AuthenticationProviderType["Import"] = 'IMPORT'] = "Import";
})(AuthenticationProviderType = exports.AuthenticationProviderType || (exports.AuthenticationProviderType = {}));
