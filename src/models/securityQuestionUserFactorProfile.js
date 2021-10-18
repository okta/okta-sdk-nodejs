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
exports.SecurityQuestionUserFactorProfile = void 0;
var SecurityQuestionUserFactorProfile = /** @class */ (function () {
    function SecurityQuestionUserFactorProfile() {
    }
    SecurityQuestionUserFactorProfile.getAttributeTypeMap = function () {
        return SecurityQuestionUserFactorProfile.attributeTypeMap;
    };
    SecurityQuestionUserFactorProfile.discriminator = undefined;
    SecurityQuestionUserFactorProfile.attributeTypeMap = [
        {
            "name": "answer",
            "baseName": "answer",
            "type": "string"
        },
        {
            "name": "question",
            "baseName": "question",
            "type": "string"
        },
        {
            "name": "questionText",
            "baseName": "questionText",
            "type": "string"
        }
    ];
    return SecurityQuestionUserFactorProfile;
}());
exports.SecurityQuestionUserFactorProfile = SecurityQuestionUserFactorProfile;
