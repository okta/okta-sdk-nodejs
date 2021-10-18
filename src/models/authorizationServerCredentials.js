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
exports.AuthorizationServerCredentials = void 0;
var AuthorizationServerCredentials = /** @class */ (function () {
    function AuthorizationServerCredentials() {
    }
    AuthorizationServerCredentials.getAttributeTypeMap = function () {
        return AuthorizationServerCredentials.attributeTypeMap;
    };
    AuthorizationServerCredentials.discriminator = undefined;
    AuthorizationServerCredentials.attributeTypeMap = [
        {
            "name": "signing",
            "baseName": "signing",
            "type": "AuthorizationServerCredentialsSigningConfig"
        }
    ];
    return AuthorizationServerCredentials;
}());
exports.AuthorizationServerCredentials = AuthorizationServerCredentials;
