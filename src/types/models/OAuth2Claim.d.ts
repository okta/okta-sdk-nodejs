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
import { OAuth2ClaimConditions } from './oAuth2ClaimConditions';
export declare class OAuth2Claim {
    '_links'?: {
        [key: string]: object;
    };
    'alwaysIncludeInToken'?: boolean;
    'claimType'?: OAuth2Claim.ClaimTypeEnum;
    'conditions'?: OAuth2ClaimConditions;
    'group_filter_type'?: OAuth2Claim.GroupFilterTypeEnum;
    'id'?: string;
    'name'?: string;
    'status'?: OAuth2Claim.StatusEnum;
    'system'?: boolean;
    'value'?: string;
    'valueType'?: OAuth2Claim.ValueTypeEnum;
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
export declare namespace OAuth2Claim {
    enum ClaimTypeEnum {
        Identity,
        Resource
    }
    enum GroupFilterTypeEnum {
        StartsWith,
        Equals,
        Contains,
        Regex
    }
    enum StatusEnum {
        Active,
        Inactive
    }
    enum ValueTypeEnum {
        Expression,
        Groups,
        System
    }
}
