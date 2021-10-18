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
import { FeatureStageState } from './featureStageState';
import { FeatureStageValue } from './featureStageValue';

export class FeatureStage {
    'state'?: FeatureStageState;
    'value'?: FeatureStageValue;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "state",
            "baseName": "state",
            "type": "FeatureStageState"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "FeatureStageValue"
        }    ];

    static getAttributeTypeMap() {
        return FeatureStage.attributeTypeMap;
    }
}

