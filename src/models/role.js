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
exports.Role = void 0;
var Role = /** @class */ (function () {
    function Role() {
    }
    Role.getAttributeTypeMap = function () {
        return Role.attributeTypeMap;
    };
    Role.discriminator = undefined;
    Role.attributeTypeMap = [
        {
            "name": "embedded",
            "baseName": "_embedded",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "assignmentType",
            "baseName": "assignmentType",
            "type": "RoleAssignmentType"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "lastUpdated",
            "baseName": "lastUpdated",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "RoleStatus"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "RoleType"
        }
    ];
    return Role;
}());
exports.Role = Role;
