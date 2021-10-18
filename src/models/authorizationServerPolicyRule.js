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
exports.AuthorizationServerPolicyRule = void 0;
var AuthorizationServerPolicyRule = /** @class */ (function () {
    function AuthorizationServerPolicyRule() {
    }
    AuthorizationServerPolicyRule.getAttributeTypeMap = function () {
        return AuthorizationServerPolicyRule.attributeTypeMap;
    };
    AuthorizationServerPolicyRule.discriminator = undefined;
    AuthorizationServerPolicyRule.attributeTypeMap = [
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "lastUpdated",
            "baseName": "lastUpdated",
            "type": "Date"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "AuthorizationServerPolicyRule.StatusEnum"
        },
        {
            "name": "system",
            "baseName": "system",
            "type": "boolean"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "AuthorizationServerPolicyRule.TypeEnum"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "AuthorizationServerPolicyRuleConditions"
        },
        {
            "name": "actions",
            "baseName": "actions",
            "type": "AuthorizationServerPolicyRuleActions"
        }
    ];
    return AuthorizationServerPolicyRule;
}());
exports.AuthorizationServerPolicyRule = AuthorizationServerPolicyRule;
(function (AuthorizationServerPolicyRule) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Active"] = 'ACTIVE'] = "Active";
        StatusEnum[StatusEnum["Inactive"] = 'INACTIVE'] = "Inactive";
    })(StatusEnum = AuthorizationServerPolicyRule.StatusEnum || (AuthorizationServerPolicyRule.StatusEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["ResourceAccess"] = 'RESOURCE_ACCESS'] = "ResourceAccess";
    })(TypeEnum = AuthorizationServerPolicyRule.TypeEnum || (AuthorizationServerPolicyRule.TypeEnum = {}));
})(AuthorizationServerPolicyRule = exports.AuthorizationServerPolicyRule || (exports.AuthorizationServerPolicyRule = {}));
exports.AuthorizationServerPolicyRule = AuthorizationServerPolicyRule;
