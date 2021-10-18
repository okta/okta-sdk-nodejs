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
exports.LogCredentialType = void 0;
var LogCredentialType;
(function (LogCredentialType) {
    LogCredentialType[LogCredentialType["Otp"] = 'OTP'] = "Otp";
    LogCredentialType[LogCredentialType["Sms"] = 'SMS'] = "Sms";
    LogCredentialType[LogCredentialType["Password"] = 'PASSWORD'] = "Password";
    LogCredentialType[LogCredentialType["Assertion"] = 'ASSERTION'] = "Assertion";
    LogCredentialType[LogCredentialType["Iwa"] = 'IWA'] = "Iwa";
    LogCredentialType[LogCredentialType["Email"] = 'EMAIL'] = "Email";
    LogCredentialType[LogCredentialType["Oauth2"] = 'OAUTH2'] = "Oauth2";
    LogCredentialType[LogCredentialType["Jwt"] = 'JWT'] = "Jwt";
})(LogCredentialType = exports.LogCredentialType || (exports.LogCredentialType = {}));
