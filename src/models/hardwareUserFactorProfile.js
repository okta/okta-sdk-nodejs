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
exports.HardwareUserFactorProfile = void 0;
var HardwareUserFactorProfile = /** @class */ (function () {
    function HardwareUserFactorProfile() {
    }
    HardwareUserFactorProfile.getAttributeTypeMap = function () {
        return HardwareUserFactorProfile.attributeTypeMap;
    };
    HardwareUserFactorProfile.discriminator = undefined;
    HardwareUserFactorProfile.attributeTypeMap = [
        {
            "name": "credentialId",
            "baseName": "credentialId",
            "type": "string"
        }
    ];
    return HardwareUserFactorProfile;
}());
exports.HardwareUserFactorProfile = HardwareUserFactorProfile;
