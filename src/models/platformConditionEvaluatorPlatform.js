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
exports.PlatformConditionEvaluatorPlatform = void 0;
var PlatformConditionEvaluatorPlatform = /** @class */ (function () {
    function PlatformConditionEvaluatorPlatform() {
    }
    PlatformConditionEvaluatorPlatform.getAttributeTypeMap = function () {
        return PlatformConditionEvaluatorPlatform.attributeTypeMap;
    };
    PlatformConditionEvaluatorPlatform.discriminator = undefined;
    PlatformConditionEvaluatorPlatform.attributeTypeMap = [
        {
            "name": "os",
            "baseName": "os",
            "type": "PlatformConditionEvaluatorPlatformOperatingSystem"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PlatformConditionEvaluatorPlatform.TypeEnum"
        }
    ];
    return PlatformConditionEvaluatorPlatform;
}());
exports.PlatformConditionEvaluatorPlatform = PlatformConditionEvaluatorPlatform;
(function (PlatformConditionEvaluatorPlatform) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Desktop"] = 'DESKTOP'] = "Desktop";
        TypeEnum[TypeEnum["Mobile"] = 'MOBILE'] = "Mobile";
        TypeEnum[TypeEnum["Other"] = 'OTHER'] = "Other";
        TypeEnum[TypeEnum["Any"] = 'ANY'] = "Any";
    })(TypeEnum = PlatformConditionEvaluatorPlatform.TypeEnum || (PlatformConditionEvaluatorPlatform.TypeEnum = {}));
})(PlatformConditionEvaluatorPlatform = exports.PlatformConditionEvaluatorPlatform || (exports.PlatformConditionEvaluatorPlatform = {}));
exports.PlatformConditionEvaluatorPlatform = PlatformConditionEvaluatorPlatform;
