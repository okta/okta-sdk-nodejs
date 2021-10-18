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
exports.ApplicationCredentialsSigning = void 0;
var ApplicationCredentialsSigning = /** @class */ (function () {
    function ApplicationCredentialsSigning() {
    }
    ApplicationCredentialsSigning.getAttributeTypeMap = function () {
        return ApplicationCredentialsSigning.attributeTypeMap;
    };
    ApplicationCredentialsSigning.discriminator = undefined;
    ApplicationCredentialsSigning.attributeTypeMap = [
        {
            "name": "kid",
            "baseName": "kid",
            "type": "string"
        },
        {
            "name": "lastRotated",
            "baseName": "lastRotated",
            "type": "Date"
        },
        {
            "name": "nextRotation",
            "baseName": "nextRotation",
            "type": "Date"
        },
        {
            "name": "rotationMode",
            "baseName": "rotationMode",
            "type": "string"
        },
        {
            "name": "use",
            "baseName": "use",
            "type": "ApplicationCredentialsSigningUse"
        }
    ];
    return ApplicationCredentialsSigning;
}());
exports.ApplicationCredentialsSigning = ApplicationCredentialsSigning;
