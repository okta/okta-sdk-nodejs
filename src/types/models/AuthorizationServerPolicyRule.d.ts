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
import { AuthorizationServerPolicyRuleActions } from './authorizationServerPolicyRuleActions';
import { AuthorizationServerPolicyRuleConditions } from './authorizationServerPolicyRuleConditions';
export declare class AuthorizationServerPolicyRule {
    'created'?: Date;
    'id'?: string;
    'name'?: string;
    'lastUpdated'?: Date;
    'priority'?: number;
    'status'?: AuthorizationServerPolicyRule.StatusEnum;
    'system'?: boolean;
    'type'?: AuthorizationServerPolicyRule.TypeEnum;
    'conditions'?: AuthorizationServerPolicyRuleConditions;
    'actions'?: AuthorizationServerPolicyRuleActions;
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
export declare namespace AuthorizationServerPolicyRule {
    enum StatusEnum {
        Active,
        Inactive
    }
    enum TypeEnum {
        ResourceAccess
    }
}
