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
exports.IdentityProviderPolicyRuleCondition = void 0;
var IdentityProviderPolicyRuleCondition = /** @class */ (function () {
    function IdentityProviderPolicyRuleCondition() {
    }
    IdentityProviderPolicyRuleCondition.getAttributeTypeMap = function () {
        return IdentityProviderPolicyRuleCondition.attributeTypeMap;
    };
    IdentityProviderPolicyRuleCondition.discriminator = undefined;
    IdentityProviderPolicyRuleCondition.attributeTypeMap = [
        {
            "name": "idpIds",
            "baseName": "idpIds",
            "type": "Array<string>"
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "IdentityProviderPolicyRuleCondition.ProviderEnum"
        }
    ];
    return IdentityProviderPolicyRuleCondition;
}());
exports.IdentityProviderPolicyRuleCondition = IdentityProviderPolicyRuleCondition;
(function (IdentityProviderPolicyRuleCondition) {
    var ProviderEnum;
    (function (ProviderEnum) {
        ProviderEnum[ProviderEnum["Any"] = 'ANY'] = "Any";
        ProviderEnum[ProviderEnum["Okta"] = 'OKTA'] = "Okta";
        ProviderEnum[ProviderEnum["SpecificIdp"] = 'SPECIFIC_IDP'] = "SpecificIdp";
    })(ProviderEnum = IdentityProviderPolicyRuleCondition.ProviderEnum || (IdentityProviderPolicyRuleCondition.ProviderEnum = {}));
})(IdentityProviderPolicyRuleCondition = exports.IdentityProviderPolicyRuleCondition || (exports.IdentityProviderPolicyRuleCondition = {}));
exports.IdentityProviderPolicyRuleCondition = IdentityProviderPolicyRuleCondition;
