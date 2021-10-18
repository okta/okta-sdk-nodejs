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
exports.LogDebugContext = void 0;
var LogDebugContext = /** @class */ (function () {
    function LogDebugContext() {
    }
    LogDebugContext.getAttributeTypeMap = function () {
        return LogDebugContext.attributeTypeMap;
    };
    LogDebugContext.discriminator = undefined;
    LogDebugContext.attributeTypeMap = [
        {
            "name": "debugData",
            "baseName": "debugData",
            "type": "{ [key: string]: object; }"
        }
    ];
    return LogDebugContext;
}());
exports.LogDebugContext = LogDebugContext;
