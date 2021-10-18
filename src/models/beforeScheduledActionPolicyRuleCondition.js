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
exports.BeforeScheduledActionPolicyRuleCondition = void 0;
var BeforeScheduledActionPolicyRuleCondition = /** @class */ (function () {
    function BeforeScheduledActionPolicyRuleCondition() {
    }
    BeforeScheduledActionPolicyRuleCondition.getAttributeTypeMap = function () {
        return BeforeScheduledActionPolicyRuleCondition.attributeTypeMap;
    };
    BeforeScheduledActionPolicyRuleCondition.discriminator = undefined;
    BeforeScheduledActionPolicyRuleCondition.attributeTypeMap = [
        {
            "name": "duration",
            "baseName": "duration",
            "type": "Duration"
        },
        {
            "name": "lifecycleAction",
            "baseName": "lifecycleAction",
            "type": "ScheduledUserLifecycleAction"
        }
    ];
    return BeforeScheduledActionPolicyRuleCondition;
}());
exports.BeforeScheduledActionPolicyRuleCondition = BeforeScheduledActionPolicyRuleCondition;
