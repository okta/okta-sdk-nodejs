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
exports.EmailUserFactorProfile = void 0;
var EmailUserFactorProfile = /** @class */ (function () {
    function EmailUserFactorProfile() {
    }
    EmailUserFactorProfile.getAttributeTypeMap = function () {
        return EmailUserFactorProfile.attributeTypeMap;
    };
    EmailUserFactorProfile.discriminator = undefined;
    EmailUserFactorProfile.attributeTypeMap = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        }
    ];
    return EmailUserFactorProfile;
}());
exports.EmailUserFactorProfile = EmailUserFactorProfile;
