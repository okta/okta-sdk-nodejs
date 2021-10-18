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
exports.PolicyRuleActions = void 0;
var PolicyRuleActions = /** @class */ (function () {
    function PolicyRuleActions() {
    }
    PolicyRuleActions.getAttributeTypeMap = function () {
        return PolicyRuleActions.attributeTypeMap;
    };
    PolicyRuleActions.discriminator = undefined;
    PolicyRuleActions.attributeTypeMap = [
        {
            "name": "enroll",
            "baseName": "enroll",
            "type": "PolicyRuleActionsEnroll"
        },
        {
            "name": "signon",
            "baseName": "signon",
            "type": "OktaSignOnPolicyRuleSignonActions"
        },
        {
            "name": "passwordChange",
            "baseName": "passwordChange",
            "type": "PasswordPolicyRuleAction"
        },
        {
            "name": "selfServicePasswordReset",
            "baseName": "selfServicePasswordReset",
            "type": "PasswordPolicyRuleAction"
        },
        {
            "name": "selfServiceUnlock",
            "baseName": "selfServiceUnlock",
            "type": "PasswordPolicyRuleAction"
        }
    ];
    return PolicyRuleActions;
}());
exports.PolicyRuleActions = PolicyRuleActions;
