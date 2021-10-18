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
import { EnabledStatus } from './enabledStatus';
import { FeatureStage } from './featureStage';
import { FeatureType } from './featureType';
export declare class Feature {
    '_links'?: {
        [key: string]: object;
    };
    'description'?: string;
    'id'?: string;
    'name'?: string;
    'stage'?: FeatureStage;
    'status'?: EnabledStatus;
    'type'?: FeatureType;
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
