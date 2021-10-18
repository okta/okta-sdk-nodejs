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
exports.OrgContactTypeObj = void 0;
var OrgContactTypeObj = /** @class */ (function () {
    function OrgContactTypeObj() {
    }
    OrgContactTypeObj.getAttributeTypeMap = function () {
        return OrgContactTypeObj.attributeTypeMap;
    };
    OrgContactTypeObj.discriminator = undefined;
    OrgContactTypeObj.attributeTypeMap = [
        {
            "name": "links",
            "baseName": "_links",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "contactType",
            "baseName": "contactType",
            "type": "OrgContactType"
        }
    ];
    return OrgContactTypeObj;
}());
exports.OrgContactTypeObj = OrgContactTypeObj;
