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
exports.GroupRuleConditions = void 0;
var GroupRuleConditions = /** @class */ (function () {
    function GroupRuleConditions() {
    }
    GroupRuleConditions.getAttributeTypeMap = function () {
        return GroupRuleConditions.attributeTypeMap;
    };
    GroupRuleConditions.discriminator = undefined;
    GroupRuleConditions.attributeTypeMap = [
        {
            "name": "expression",
            "baseName": "expression",
            "type": "GroupRuleExpression"
        },
        {
            "name": "people",
            "baseName": "people",
            "type": "GroupRulePeopleCondition"
        }
    ];
    return GroupRuleConditions;
}());
exports.GroupRuleConditions = GroupRuleConditions;
