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

export class IdentityProviderApplicationUser {
    '_embedded'?: { [key: string]: object; };
    '_links'?: { [key: string]: object; };
    'created'?: string;
    'externalId'?: string;
    'id'?: string;
    'lastUpdated'?: string;
    'profile'?: { [key: string]: object; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "embedded",
            "baseName": "_embedded",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "string"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "lastUpdated",
            "baseName": "lastUpdated",
            "type": "string"
        },
        {
            "name": "profile",
            "baseName": "profile",
            "type": "{ [key: string]: object; }"
        }    ];

    static getAttributeTypeMap() {
        return IdentityProviderApplicationUser.attributeTypeMap;
    }
}

