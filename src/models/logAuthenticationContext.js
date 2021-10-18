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
exports.LogAuthenticationContext = void 0;
var LogAuthenticationContext = /** @class */ (function () {
    function LogAuthenticationContext() {
    }
    LogAuthenticationContext.getAttributeTypeMap = function () {
        return LogAuthenticationContext.attributeTypeMap;
    };
    LogAuthenticationContext.discriminator = undefined;
    LogAuthenticationContext.attributeTypeMap = [
        {
            "name": "authenticationProvider",
            "baseName": "authenticationProvider",
            "type": "LogAuthenticationProvider"
        },
        {
            "name": "authenticationStep",
            "baseName": "authenticationStep",
            "type": "number"
        },
        {
            "name": "credentialProvider",
            "baseName": "credentialProvider",
            "type": "LogCredentialProvider"
        },
        {
            "name": "credentialType",
            "baseName": "credentialType",
            "type": "LogCredentialType"
        },
        {
            "name": "externalSessionId",
            "baseName": "externalSessionId",
            "type": "string"
        },
        {
            "name": "_interface",
            "baseName": "interface",
            "type": "string"
        },
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "LogIssuer"
        }
    ];
    return LogAuthenticationContext;
}());
exports.LogAuthenticationContext = LogAuthenticationContext;
