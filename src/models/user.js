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
exports.User = void 0;
var User = /** @class */ (function () {
    function User() {
    }
    User.getAttributeTypeMap = function () {
        return User.attributeTypeMap;
    };
    User.discriminator = undefined;
    User.attributeTypeMap = [
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
            "name": "activated",
            "baseName": "activated",
            "type": "Date"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "credentials",
            "baseName": "credentials",
            "type": "UserCredentials"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "lastLogin",
            "baseName": "lastLogin",
            "type": "Date"
        },
        {
            "name": "lastUpdated",
            "baseName": "lastUpdated",
            "type": "Date"
        },
        {
            "name": "passwordChanged",
            "baseName": "passwordChanged",
            "type": "Date"
        },
        {
            "name": "profile",
            "baseName": "profile",
            "type": "UserProfile"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "UserStatus"
        },
        {
            "name": "statusChanged",
            "baseName": "statusChanged",
            "type": "Date"
        },
        {
            "name": "transitioningToStatus",
            "baseName": "transitioningToStatus",
            "type": "UserStatus"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "UserType"
        }
    ];
    return User;
}());
exports.User = User;
