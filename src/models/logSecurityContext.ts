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

export class LogSecurityContext {
    'asNumber'?: number;
    'asOrg'?: string;
    'domain'?: string;
    'isProxy'?: boolean;
    'isp'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "asNumber",
            "baseName": "asNumber",
            "type": "number"
        },
        {
            "name": "asOrg",
            "baseName": "asOrg",
            "type": "string"
        },
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string"
        },
        {
            "name": "isProxy",
            "baseName": "isProxy",
            "type": "boolean"
        },
        {
            "name": "isp",
            "baseName": "isp",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LogSecurityContext.attributeTypeMap;
    }
}

