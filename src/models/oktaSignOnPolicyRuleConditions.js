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
exports.OktaSignOnPolicyRuleConditions = void 0;
var OktaSignOnPolicyRuleConditions = /** @class */ (function () {
    function OktaSignOnPolicyRuleConditions() {
    }
    OktaSignOnPolicyRuleConditions.getAttributeTypeMap = function () {
        return OktaSignOnPolicyRuleConditions.attributeTypeMap;
    };
    OktaSignOnPolicyRuleConditions.discriminator = undefined;
    OktaSignOnPolicyRuleConditions.attributeTypeMap = [
        {
            "name": "authContext",
            "baseName": "authContext",
            "type": "PolicyRuleAuthContextCondition"
        },
        {
            "name": "network",
            "baseName": "network",
            "type": "PolicyNetworkCondition"
        },
        {
            "name": "people",
            "baseName": "people",
            "type": "PolicyPeopleCondition"
        }
    ];
    return OktaSignOnPolicyRuleConditions;
}());
exports.OktaSignOnPolicyRuleConditions = OktaSignOnPolicyRuleConditions;
