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
import { PlatformConditionEvaluatorPlatform } from './platformConditionEvaluatorPlatform';

export class PlatformPolicyRuleCondition {
    'exclude'?: Array<PlatformConditionEvaluatorPlatform>;
    'include'?: Array<PlatformConditionEvaluatorPlatform>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "exclude",
            "baseName": "exclude",
            "type": "Array<PlatformConditionEvaluatorPlatform>"
        },
        {
            "name": "include",
            "baseName": "include",
            "type": "Array<PlatformConditionEvaluatorPlatform>"
        }    ];

    static getAttributeTypeMap() {
        return PlatformPolicyRuleCondition.attributeTypeMap;
    }
}

