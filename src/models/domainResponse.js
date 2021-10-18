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
exports.DomainResponse = void 0;
var DomainResponse = /** @class */ (function () {
    function DomainResponse() {
    }
    DomainResponse.getAttributeTypeMap = function () {
        return DomainResponse.attributeTypeMap;
    };
    DomainResponse.discriminator = undefined;
    DomainResponse.attributeTypeMap = [
        {
            "name": "certificateSourceType",
            "baseName": "certificateSourceType",
            "type": "DomainResponse.CertificateSourceTypeEnum"
        },
        {
            "name": "dnsRecords",
            "baseName": "dnsRecords",
            "type": "Array<DNSRecord>"
        },
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "DomainLinks"
        },
        {
            "name": "publicCertificate",
            "baseName": "publicCertificate",
            "type": "DomainCertificateMetadata"
        },
        {
            "name": "validationStatus",
            "baseName": "validationStatus",
            "type": "DomainResponse.ValidationStatusEnum"
        }
    ];
    return DomainResponse;
}());
exports.DomainResponse = DomainResponse;
(function (DomainResponse) {
    var CertificateSourceTypeEnum;
    (function (CertificateSourceTypeEnum) {
        CertificateSourceTypeEnum[CertificateSourceTypeEnum["Manual"] = 'MANUAL'] = "Manual";
    })(CertificateSourceTypeEnum = DomainResponse.CertificateSourceTypeEnum || (DomainResponse.CertificateSourceTypeEnum = {}));
    var ValidationStatusEnum;
    (function (ValidationStatusEnum) {
        ValidationStatusEnum[ValidationStatusEnum["NotStarted"] = 'NOT_STARTED'] = "NotStarted";
        ValidationStatusEnum[ValidationStatusEnum["InProgress"] = 'IN_PROGRESS'] = "InProgress";
        ValidationStatusEnum[ValidationStatusEnum["Verified"] = 'VERIFIED'] = "Verified";
        ValidationStatusEnum[ValidationStatusEnum["Completed"] = 'COMPLETED'] = "Completed";
    })(ValidationStatusEnum = DomainResponse.ValidationStatusEnum || (DomainResponse.ValidationStatusEnum = {}));
})(DomainResponse = exports.DomainResponse || (exports.DomainResponse = {}));
exports.DomainResponse = DomainResponse;
