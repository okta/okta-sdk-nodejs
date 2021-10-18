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
exports.GroupSchemaDefinitions = void 0;
var GroupSchemaDefinitions = /** @class */ (function () {
    function GroupSchemaDefinitions() {
    }
    GroupSchemaDefinitions.getAttributeTypeMap = function () {
        return GroupSchemaDefinitions.attributeTypeMap;
    };
    GroupSchemaDefinitions.discriminator = undefined;
    GroupSchemaDefinitions.attributeTypeMap = [
        {
            "name": "base",
            "baseName": "base",
            "type": "GroupSchemaBase"
        },
        {
            "name": "custom",
            "baseName": "custom",
            "type": "GroupSchemaCustom"
        }
    ];
    return GroupSchemaDefinitions;
}());
exports.GroupSchemaDefinitions = GroupSchemaDefinitions;
