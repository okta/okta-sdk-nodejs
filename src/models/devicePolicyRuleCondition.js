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
exports.DevicePolicyRuleCondition = void 0;
var DevicePolicyRuleCondition = /** @class */ (function () {
    function DevicePolicyRuleCondition() {
    }
    DevicePolicyRuleCondition.getAttributeTypeMap = function () {
        return DevicePolicyRuleCondition.attributeTypeMap;
    };
    DevicePolicyRuleCondition.discriminator = undefined;
    DevicePolicyRuleCondition.attributeTypeMap = [
        {
            "name": "migrated",
            "baseName": "migrated",
            "type": "boolean"
        },
        {
            "name": "platform",
            "baseName": "platform",
            "type": "DevicePolicyRuleConditionPlatform"
        },
        {
            "name": "rooted",
            "baseName": "rooted",
            "type": "boolean"
        },
        {
            "name": "trustLevel",
            "baseName": "trustLevel",
            "type": "DevicePolicyRuleCondition.TrustLevelEnum"
        }
    ];
    return DevicePolicyRuleCondition;
}());
exports.DevicePolicyRuleCondition = DevicePolicyRuleCondition;
(function (DevicePolicyRuleCondition) {
    var TrustLevelEnum;
    (function (TrustLevelEnum) {
        TrustLevelEnum[TrustLevelEnum["Any"] = 'ANY'] = "Any";
        TrustLevelEnum[TrustLevelEnum["Trusted"] = 'TRUSTED'] = "Trusted";
    })(TrustLevelEnum = DevicePolicyRuleCondition.TrustLevelEnum || (DevicePolicyRuleCondition.TrustLevelEnum = {}));
})(DevicePolicyRuleCondition = exports.DevicePolicyRuleCondition || (exports.DevicePolicyRuleCondition = {}));
exports.DevicePolicyRuleCondition = DevicePolicyRuleCondition;
