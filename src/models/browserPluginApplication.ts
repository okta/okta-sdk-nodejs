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
import { SchemeApplicationCredentials } from './schemeApplicationCredentials';

export class BrowserPluginApplication {
    'credentials'?: SchemeApplicationCredentials;

    static discriminator: string | undefined = "name";

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "credentials",
            "baseName": "credentials",
            "type": "SchemeApplicationCredentials"
        }    ];

    static getAttributeTypeMap() {
        return BrowserPluginApplication.attributeTypeMap;
    }
}

