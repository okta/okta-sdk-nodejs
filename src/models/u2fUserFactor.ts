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
import { U2fUserFactorProfile } from './u2fUserFactorProfile';

export class U2fUserFactor {
    'profile'?: U2fUserFactorProfile;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "profile",
            "baseName": "profile",
            "type": "U2fUserFactorProfile"
        }    ];

    static getAttributeTypeMap() {
        return U2fUserFactor.attributeTypeMap;
    }
}

