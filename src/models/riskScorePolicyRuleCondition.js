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
exports.RiskScorePolicyRuleCondition = void 0;
var RiskScorePolicyRuleCondition = /** @class */ (function () {
    function RiskScorePolicyRuleCondition() {
    }
    RiskScorePolicyRuleCondition.getAttributeTypeMap = function () {
        return RiskScorePolicyRuleCondition.attributeTypeMap;
    };
    RiskScorePolicyRuleCondition.discriminator = undefined;
    RiskScorePolicyRuleCondition.attributeTypeMap = [
        {
            "name": "level",
            "baseName": "level",
            "type": "string"
        }
    ];
    return RiskScorePolicyRuleCondition;
}());
exports.RiskScorePolicyRuleCondition = RiskScorePolicyRuleCondition;
