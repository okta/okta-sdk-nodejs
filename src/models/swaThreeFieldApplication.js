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
exports.SwaThreeFieldApplication = void 0;
var SwaThreeFieldApplication = /** @class */ (function () {
    function SwaThreeFieldApplication() {
    }
    SwaThreeFieldApplication.getAttributeTypeMap = function () {
        return SwaThreeFieldApplication.attributeTypeMap;
    };
    SwaThreeFieldApplication.discriminator = undefined;
    SwaThreeFieldApplication.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "SwaThreeFieldApplicationSettings"
        }
    ];
    return SwaThreeFieldApplication;
}());
exports.SwaThreeFieldApplication = SwaThreeFieldApplication;
