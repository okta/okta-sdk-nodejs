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

export class OrgOktaCommunicationSetting {
    '_links'?: { [key: string]: object; };
    'optOutEmailUsers'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "links",
            "baseName": "_links",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "optOutEmailUsers",
            "baseName": "optOutEmailUsers",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return OrgOktaCommunicationSetting.attributeTypeMap;
    }
}

