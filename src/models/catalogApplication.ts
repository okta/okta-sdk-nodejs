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
import { CatalogApplicationStatus } from './catalogApplicationStatus';

export class CatalogApplication {
    'id'?: string;
    'name'?: string;
    'displayName'?: string;
    'description'?: string;
    'status'?: CatalogApplicationStatus;
    'lastUpdated'?: Date;
    'category'?: string;
    'verificationStatus'?: string;
    'website'?: string;
    'signOnModes'?: Array<string>;
    'features'?: Array<string>;
    '_links'?: { [key: string]: object; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "CatalogApplicationStatus"
        },
        {
            "name": "lastUpdated",
            "baseName": "lastUpdated",
            "type": "Date"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "string"
        },
        {
            "name": "verificationStatus",
            "baseName": "verificationStatus",
            "type": "string"
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string"
        },
        {
            "name": "signOnModes",
            "baseName": "signOnModes",
            "type": "Array<string>"
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "Array<string>"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "{ [key: string]: object; }"
        }    ];

    static getAttributeTypeMap() {
        return CatalogApplication.attributeTypeMap;
    }
}

