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

export class OAuth2Scope {
    'consent'?: OAuth2Scope.ConsentEnum;
    'default'?: boolean;
    'description'?: string;
    'displayName'?: string;
    'id'?: string;
    'metadataPublish'?: OAuth2Scope.MetadataPublishEnum;
    'name'?: string;
    'system'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "consent",
            "baseName": "consent",
            "type": "OAuth2Scope.ConsentEnum"
        },
        {
            "name": "_default",
            "baseName": "default",
            "type": "boolean"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "metadataPublish",
            "baseName": "metadataPublish",
            "type": "OAuth2Scope.MetadataPublishEnum"
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
        }    ];

    static getAttributeTypeMap() {
        return OAuth2Scope.attributeTypeMap;
    }
}

export namespace OAuth2Scope {
    export enum ConsentEnum {
        Required = <any> 'REQUIRED',
        Implicit = <any> 'IMPLICIT',
        Admin = <any> 'ADMIN'
    }
    export enum MetadataPublishEnum {
        AllClients = <any> 'ALL_CLIENTS',
        NoClients = <any> 'NO_CLIENTS'
    }
}
