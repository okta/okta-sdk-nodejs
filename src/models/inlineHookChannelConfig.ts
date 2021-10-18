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
import { InlineHookChannelConfigAuthScheme } from './inlineHookChannelConfigAuthScheme';
import { InlineHookChannelConfigHeaders } from './inlineHookChannelConfigHeaders';

export class InlineHookChannelConfig {
    'authScheme'?: InlineHookChannelConfigAuthScheme;
    'headers'?: Array<InlineHookChannelConfigHeaders>;
    'uri'?: string;
    'method'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "authScheme",
            "baseName": "authScheme",
            "type": "InlineHookChannelConfigAuthScheme"
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "Array<InlineHookChannelConfigHeaders>"
        },
        {
            "name": "uri",
            "baseName": "uri",
            "type": "string"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InlineHookChannelConfig.attributeTypeMap;
    }
}

