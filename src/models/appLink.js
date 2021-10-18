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
exports.AppLink = void 0;
var AppLink = /** @class */ (function () {
    function AppLink() {
    }
    AppLink.getAttributeTypeMap = function () {
        return AppLink.attributeTypeMap;
    };
    AppLink.discriminator = undefined;
    AppLink.attributeTypeMap = [
        {
            "name": "appAssignmentId",
            "baseName": "appAssignmentId",
            "type": "string"
        },
        {
            "name": "appInstanceId",
            "baseName": "appInstanceId",
            "type": "string"
        },
        {
            "name": "appName",
            "baseName": "appName",
            "type": "string"
        },
        {
            "name": "credentialsSetup",
            "baseName": "credentialsSetup",
            "type": "boolean"
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean"
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
            "name": "linkUrl",
            "baseName": "linkUrl",
            "type": "string"
        },
        {
            "name": "logoUrl",
            "baseName": "logoUrl",
            "type": "string"
        },
        {
            "name": "sortOrder",
            "baseName": "sortOrder",
            "type": "number"
        }
    ];
    return AppLink;
}());
exports.AppLink = AppLink;
