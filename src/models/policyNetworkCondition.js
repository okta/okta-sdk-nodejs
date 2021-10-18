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
exports.PolicyNetworkCondition = void 0;
var PolicyNetworkCondition = /** @class */ (function () {
    function PolicyNetworkCondition() {
    }
    PolicyNetworkCondition.getAttributeTypeMap = function () {
        return PolicyNetworkCondition.attributeTypeMap;
    };
    PolicyNetworkCondition.discriminator = undefined;
    PolicyNetworkCondition.attributeTypeMap = [
        {
            "name": "connection",
            "baseName": "connection",
            "type": "PolicyNetworkCondition.ConnectionEnum"
        },
        {
            "name": "exclude",
            "baseName": "exclude",
            "type": "Array<string>"
        },
        {
            "name": "include",
            "baseName": "include",
            "type": "Array<string>"
        }
    ];
    return PolicyNetworkCondition;
}());
exports.PolicyNetworkCondition = PolicyNetworkCondition;
(function (PolicyNetworkCondition) {
    var ConnectionEnum;
    (function (ConnectionEnum) {
        ConnectionEnum[ConnectionEnum["Anywhere"] = 'ANYWHERE'] = "Anywhere";
        ConnectionEnum[ConnectionEnum["Zone"] = 'ZONE'] = "Zone";
    })(ConnectionEnum = PolicyNetworkCondition.ConnectionEnum || (PolicyNetworkCondition.ConnectionEnum = {}));
})(PolicyNetworkCondition = exports.PolicyNetworkCondition || (exports.PolicyNetworkCondition = {}));
exports.PolicyNetworkCondition = PolicyNetworkCondition;
