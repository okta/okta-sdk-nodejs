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
exports.UserIdentityProviderLinkRequest = void 0;
var UserIdentityProviderLinkRequest = /** @class */ (function () {
    function UserIdentityProviderLinkRequest() {
    }
    UserIdentityProviderLinkRequest.getAttributeTypeMap = function () {
        return UserIdentityProviderLinkRequest.attributeTypeMap;
    };
    UserIdentityProviderLinkRequest.discriminator = undefined;
    UserIdentityProviderLinkRequest.attributeTypeMap = [
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        }
    ];
    return UserIdentityProviderLinkRequest;
}());
exports.UserIdentityProviderLinkRequest = UserIdentityProviderLinkRequest;
