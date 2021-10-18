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
import { LogGeographicalContext } from './logGeographicalContext';
import { LogUserAgent } from './logUserAgent';
export declare class LogClient {
    'device'?: string;
    'geographicalContext'?: LogGeographicalContext;
    'id'?: string;
    'ipAddress'?: string;
    'userAgent'?: LogUserAgent;
    'zone'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
