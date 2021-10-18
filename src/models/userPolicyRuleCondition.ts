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
import { InactivityPolicyRuleCondition } from './inactivityPolicyRuleCondition';
import { LifecycleExpirationPolicyRuleCondition } from './lifecycleExpirationPolicyRuleCondition';
import { PasswordExpirationPolicyRuleCondition } from './passwordExpirationPolicyRuleCondition';
import { UserLifecycleAttributePolicyRuleCondition } from './userLifecycleAttributePolicyRuleCondition';

export class UserPolicyRuleCondition {
    'exclude'?: Array<string>;
    'inactivity'?: InactivityPolicyRuleCondition;
    'include'?: Array<string>;
    'lifecycleExpiration'?: LifecycleExpirationPolicyRuleCondition;
    'passwordExpiration'?: PasswordExpirationPolicyRuleCondition;
    'userLifecycleAttribute'?: UserLifecycleAttributePolicyRuleCondition;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "exclude",
            "baseName": "exclude",
            "type": "Array<string>"
        },
        {
            "name": "inactivity",
            "baseName": "inactivity",
            "type": "InactivityPolicyRuleCondition"
        },
        {
            "name": "include",
            "baseName": "include",
            "type": "Array<string>"
        },
        {
            "name": "lifecycleExpiration",
            "baseName": "lifecycleExpiration",
            "type": "LifecycleExpirationPolicyRuleCondition"
        },
        {
            "name": "passwordExpiration",
            "baseName": "passwordExpiration",
            "type": "PasswordExpirationPolicyRuleCondition"
        },
        {
            "name": "userLifecycleAttribute",
            "baseName": "userLifecycleAttribute",
            "type": "UserLifecycleAttributePolicyRuleCondition"
        }    ];

    static getAttributeTypeMap() {
        return UserPolicyRuleCondition.attributeTypeMap;
    }
}

