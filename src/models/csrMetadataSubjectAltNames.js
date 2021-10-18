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
exports.CsrMetadataSubjectAltNames = void 0;
var CsrMetadataSubjectAltNames = /** @class */ (function () {
    function CsrMetadataSubjectAltNames() {
    }
    CsrMetadataSubjectAltNames.getAttributeTypeMap = function () {
        return CsrMetadataSubjectAltNames.attributeTypeMap;
    };
    CsrMetadataSubjectAltNames.discriminator = undefined;
    CsrMetadataSubjectAltNames.attributeTypeMap = [
        {
            "name": "dnsNames",
            "baseName": "dnsNames",
            "type": "Array<string>"
        }
    ];
    return CsrMetadataSubjectAltNames;
}());
exports.CsrMetadataSubjectAltNames = CsrMetadataSubjectAltNames;
