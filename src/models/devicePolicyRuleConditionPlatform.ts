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

import { RequestFile } from './models';

export class DevicePolicyRuleConditionPlatform {
    'supportedMDMFrameworks'?: Array<DevicePolicyRuleConditionPlatform.SupportedMDMFrameworksEnum>;
    'types'?: Array<DevicePolicyRuleConditionPlatform.TypesEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "supportedMDMFrameworks",
            "baseName": "supportedMDMFrameworks",
            "type": "Array<DevicePolicyRuleConditionPlatform.SupportedMDMFrameworksEnum>"
        },
        {
            "name": "types",
            "baseName": "types",
            "type": "Array<DevicePolicyRuleConditionPlatform.TypesEnum>"
        }    ];

    static getAttributeTypeMap() {
        return DevicePolicyRuleConditionPlatform.attributeTypeMap;
    }
}

export namespace DevicePolicyRuleConditionPlatform {
    export enum SupportedMDMFrameworksEnum {
        Afw = <any> 'AFW',
        Safe = <any> 'SAFE',
        Native = <any> 'NATIVE'
    }
    export enum TypesEnum {
        Ios = <any> 'IOS',
        Android = <any> 'ANDROID',
        Osx = <any> 'OSX',
        Windows = <any> 'WINDOWS'
    }
}
