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
import { UserSchemaAttributeEnum } from './userSchemaAttributeEnum';
import { UserSchemaAttributeItems } from './userSchemaAttributeItems';
import { UserSchemaAttributeMaster } from './userSchemaAttributeMaster';
import { UserSchemaAttributePermission } from './userSchemaAttributePermission';
import { UserSchemaAttributeScope } from './userSchemaAttributeScope';
import { UserSchemaAttributeType } from './userSchemaAttributeType';
import { UserSchemaAttributeUnion } from './userSchemaAttributeUnion';
export declare class GroupSchemaAttribute {
    'description'?: string;
    'enum'?: Array<string>;
    'externalName'?: string;
    'externalNamespace'?: string;
    'items'?: UserSchemaAttributeItems;
    'master'?: UserSchemaAttributeMaster;
    'maxLength'?: number;
    'minLength'?: number;
    'mutability'?: string;
    'oneOf'?: Array<UserSchemaAttributeEnum>;
    'permissions'?: Array<UserSchemaAttributePermission>;
    'required'?: boolean;
    'scope'?: UserSchemaAttributeScope;
    'title'?: string;
    'type'?: UserSchemaAttributeType;
    'union'?: UserSchemaAttributeUnion;
    'unique'?: string;
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
