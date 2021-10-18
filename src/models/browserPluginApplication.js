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
exports.BrowserPluginApplication = void 0;
var BrowserPluginApplication = /** @class */ (function () {
    function BrowserPluginApplication() {
    }
    BrowserPluginApplication.getAttributeTypeMap = function () {
        return BrowserPluginApplication.attributeTypeMap;
    };
    BrowserPluginApplication.discriminator = "name";
    BrowserPluginApplication.attributeTypeMap = [
        {
            "name": "credentials",
            "baseName": "credentials",
            "type": "SchemeApplicationCredentials"
        }
    ];
    return BrowserPluginApplication;
}());
exports.BrowserPluginApplication = BrowserPluginApplication;
