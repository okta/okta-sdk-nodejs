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
import { InlineHookResponseCommandValue } from './inlineHookResponseCommandValue';

export class InlineHookResponseCommands {
    'type'?: string;
    'value'?: Array<InlineHookResponseCommandValue>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "Array<InlineHookResponseCommandValue>"
        }    ];

    static getAttributeTypeMap() {
        return InlineHookResponseCommands.attributeTypeMap;
    }
}

