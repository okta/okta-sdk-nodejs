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
import { NetworkZoneAddress } from './networkZoneAddress';
import { NetworkZoneLocation } from './networkZoneLocation';
import { NetworkZoneStatus } from './networkZoneStatus';
import { NetworkZoneType } from './networkZoneType';
import { NetworkZoneUsage } from './networkZoneUsage';

export class NetworkZone {
    'type'?: NetworkZoneType;
    'id'?: string;
    'name'?: string;
    'system'?: boolean;
    'usage'?: NetworkZoneUsage;
    'status'?: NetworkZoneStatus;
    'proxyType'?: string;
    'locations'?: Array<NetworkZoneLocation>;
    'gateways'?: Array<NetworkZoneAddress>;
    'proxies'?: Array<NetworkZoneAddress>;
    'asns'?: Array<string>;
    'created'?: Date;
    'lastUpdated'?: Date;
    '_links'?: { [key: string]: object; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "NetworkZoneType"
        },
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
            "name": "system",
            "baseName": "system",
            "type": "boolean"
        },
        {
            "name": "usage",
            "baseName": "usage",
            "type": "NetworkZoneUsage"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "NetworkZoneStatus"
        },
        {
            "name": "proxyType",
            "baseName": "proxyType",
            "type": "string"
        },
        {
            "name": "locations",
            "baseName": "locations",
            "type": "Array<NetworkZoneLocation>"
        },
        {
            "name": "gateways",
            "baseName": "gateways",
            "type": "Array<NetworkZoneAddress>"
        },
        {
            "name": "proxies",
            "baseName": "proxies",
            "type": "Array<NetworkZoneAddress>"
        },
        {
            "name": "asns",
            "baseName": "asns",
            "type": "Array<string>"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "lastUpdated",
            "baseName": "lastUpdated",
            "type": "Date"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "{ [key: string]: object; }"
        }    ];

    static getAttributeTypeMap() {
        return NetworkZone.attributeTypeMap;
    }
}

