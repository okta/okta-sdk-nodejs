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
exports.NetworkZoneAddress = void 0;
var NetworkZoneAddress = /** @class */ (function () {
    function NetworkZoneAddress() {
    }
    NetworkZoneAddress.getAttributeTypeMap = function () {
        return NetworkZoneAddress.attributeTypeMap;
    };
    NetworkZoneAddress.discriminator = undefined;
    NetworkZoneAddress.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "NetworkZoneAddressType"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }
    ];
    return NetworkZoneAddress;
}());
exports.NetworkZoneAddress = NetworkZoneAddress;
