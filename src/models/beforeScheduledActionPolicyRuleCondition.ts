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
import { Duration } from './duration';
import { ScheduledUserLifecycleAction } from './scheduledUserLifecycleAction';

export class BeforeScheduledActionPolicyRuleCondition {
    'duration'?: Duration;
    'lifecycleAction'?: ScheduledUserLifecycleAction;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "duration",
            "baseName": "duration",
            "type": "Duration"
        },
        {
            "name": "lifecycleAction",
            "baseName": "lifecycleAction",
            "type": "ScheduledUserLifecycleAction"
        }    ];

    static getAttributeTypeMap() {
        return BeforeScheduledActionPolicyRuleCondition.attributeTypeMap;
    }
}

