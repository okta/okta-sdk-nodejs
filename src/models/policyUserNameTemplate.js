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
exports.PolicyUserNameTemplate = void 0;
var PolicyUserNameTemplate = /** @class */ (function () {
    function PolicyUserNameTemplate() {
    }
    PolicyUserNameTemplate.getAttributeTypeMap = function () {
        return PolicyUserNameTemplate.attributeTypeMap;
    };
    PolicyUserNameTemplate.discriminator = undefined;
    PolicyUserNameTemplate.attributeTypeMap = [
        {
            "name": "template",
            "baseName": "template",
            "type": "string"
        }
    ];
    return PolicyUserNameTemplate;
}());
exports.PolicyUserNameTemplate = PolicyUserNameTemplate;
