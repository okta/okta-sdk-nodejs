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
exports.ProtocolRelayState = void 0;
var ProtocolRelayState = /** @class */ (function () {
    function ProtocolRelayState() {
    }
    ProtocolRelayState.getAttributeTypeMap = function () {
        return ProtocolRelayState.attributeTypeMap;
    };
    ProtocolRelayState.discriminator = undefined;
    ProtocolRelayState.attributeTypeMap = [
        {
            "name": "format",
            "baseName": "format",
            "type": "ProtocolRelayStateFormat"
        }
    ];
    return ProtocolRelayState;
}());
exports.ProtocolRelayState = ProtocolRelayState;
