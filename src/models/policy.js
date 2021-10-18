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
exports.Policy = void 0;
var Policy = /** @class */ (function () {
    function Policy() {
    }
    Policy.getAttributeTypeMap = function () {
        return Policy.attributeTypeMap;
    };
    Policy.discriminator = "type";
    Policy.attributeTypeMap = [
        {
            "name": "embedded",
            "baseName": "_embedded",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "PolicyRuleConditions"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "lastUpdated",
            "baseName": "lastUpdated",
            "type": "Date"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Policy.StatusEnum"
        },
        {
            "name": "system",
            "baseName": "system",
            "type": "boolean"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PolicyType"
        }
    ];
    return Policy;
}());
exports.Policy = Policy;
(function (Policy) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Active"] = 'ACTIVE'] = "Active";
        StatusEnum[StatusEnum["Inactive"] = 'INACTIVE'] = "Inactive";
    })(StatusEnum = Policy.StatusEnum || (Policy.StatusEnum = {}));
})(Policy = exports.Policy || (exports.Policy = {}));
exports.Policy = Policy;
