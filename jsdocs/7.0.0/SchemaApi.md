# okta.SchemaApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApplicationLayout**](SchemaApi.md#getApplicationLayout) | **GET** /api/v1/meta/layouts/apps/{appName} | Retrieve the UI Layout for an Application
[**getApplicationUserSchema**](SchemaApi.md#getApplicationUserSchema) | **GET** /api/v1/meta/schemas/apps/{appInstanceId}/default | Retrieve the default Application User Schema for an Application
[**getGroupSchema**](SchemaApi.md#getGroupSchema) | **GET** /api/v1/meta/schemas/group/default | Retrieve the default Group Schema
[**getUserSchema**](SchemaApi.md#getUserSchema) | **GET** /api/v1/meta/schemas/user/{schemaId} | Retrieve a User Schema
[**updateApplicationUserProfile**](SchemaApi.md#updateApplicationUserProfile) | **POST** /api/v1/meta/schemas/apps/{appInstanceId}/default | Update the default Application User Schema for an Application
[**updateGroupSchema**](SchemaApi.md#updateGroupSchema) | **POST** /api/v1/meta/schemas/group/default | Update the default Group Schema
[**updateUserProfile**](SchemaApi.md#updateUserProfile) | **POST** /api/v1/meta/schemas/user/{schemaId} | Update a User Schema


# **getApplicationLayout**
> ApplicationLayout getApplicationLayout()

Takes an Application name as an input parameter and retrieves the App Instance page Layout for that Application.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.SchemaApi(configuration);

let body:okta.SchemaApiGetApplicationLayoutRequest = {
  // string
  appName: "appName_example",
};

apiInstance.getApplicationLayout(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appName** | [**string**] |  | defaults to undefined


### Return type

**ApplicationLayout**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApplicationUserSchema**
> UserSchema getApplicationUserSchema()

Fetches the Schema for an App User

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.SchemaApi(configuration);

let body:okta.SchemaApiGetApplicationUserSchemaRequest = {
  // string
  appInstanceId: "appInstanceId_example",
};

apiInstance.getApplicationUserSchema(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appInstanceId** | [**string**] |  | defaults to undefined


### Return type

**UserSchema**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getGroupSchema**
> GroupSchema getGroupSchema()

Fetches the group schema

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.SchemaApi(configuration);

let body:any = {};

apiInstance.getGroupSchema(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GroupSchema**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**403** | Forbidden |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUserSchema**
> UserSchema getUserSchema()

Fetches the schema for a Schema Id.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.SchemaApi(configuration);

let body:okta.SchemaApiGetUserSchemaRequest = {
  // string
  schemaId: "schemaId_example",
};

apiInstance.getUserSchema(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schemaId** | [**string**] |  | defaults to undefined


### Return type

**UserSchema**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateApplicationUserProfile**
> UserSchema updateApplicationUserProfile()

Partial updates on the User Profile properties of the Application User Schema.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.SchemaApi(configuration);

let body:okta.SchemaApiUpdateApplicationUserProfileRequest = {
  // string
  appInstanceId: "appInstanceId_example",
  // UserSchema (optional)
  body: {
    definitions: {
      base: {
        id: "id_example",
        properties: {
          city: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          costCenter: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          countryCode: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          department: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          displayName: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          division: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          email: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          employeeNumber: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          firstName: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          honorificPrefix: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          honorificSuffix: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          lastName: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          locale: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          login: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          manager: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          managerId: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          middleName: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          mobilePhone: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          nickName: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          organization: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          postalAddress: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          preferredLanguage: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          primaryPhone: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          profileUrl: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          secondEmail: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          state: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          streetAddress: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          timezone: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          title: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          userType: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          zipCode: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
        },
        required: [
          "required_example",
        ],
        type: "type_example",
      },
      custom: {
        id: "id_example",
        properties: {
          "key": {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
        },
        required: [
          "required_example",
        ],
        type: "type_example",
      },
    },
    properties: {
      profile: {
        allOf: [
          {
            ref: "ref_example",
          },
        ],
      },
    },
    title: "title_example",
  },
};

apiInstance.updateApplicationUserProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UserSchema**|  |
 **appInstanceId** | [**string**] |  | defaults to undefined


### Return type

**UserSchema**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateGroupSchema**
> GroupSchema updateGroupSchema()

Updates, adds or removes one or more custom Group Profile properties in the schema

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.SchemaApi(configuration);

let body:okta.SchemaApiUpdateGroupSchemaRequest = {
  // GroupSchema (optional)
  GroupSchema: {
    definitions: {
      base: {
        properties: {
          description: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          name: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
        },
        required: [
          "required_example",
        ],
        type: "type_example",
      },
      custom: {
        properties: {
          "key": {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
        },
        required: [
          "required_example",
        ],
        type: "type_example",
      },
    },
    description: "description_example",
    properties: {
      profile: {
        allOf: [
          {
            ref: "ref_example",
          },
        ],
      },
    },
    title: "title_example",
  },
};

apiInstance.updateGroupSchema(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **GroupSchema** | **GroupSchema**|  |


### Return type

**GroupSchema**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateUserProfile**
> UserSchema updateUserProfile(userSchema)

Partial updates on the User Profile properties of the user schema.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.SchemaApi(configuration);

let body:okta.SchemaApiUpdateUserProfileRequest = {
  // string
  schemaId: "schemaId_example",
  // UserSchema
  userSchema: {
    definitions: {
      base: {
        id: "id_example",
        properties: {
          city: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          costCenter: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          countryCode: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          department: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          displayName: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          division: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          email: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          employeeNumber: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          firstName: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          honorificPrefix: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          honorificSuffix: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          lastName: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          locale: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          login: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          manager: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          managerId: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          middleName: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          mobilePhone: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          nickName: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          organization: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          postalAddress: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          preferredLanguage: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          primaryPhone: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          profileUrl: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          secondEmail: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          state: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          streetAddress: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          timezone: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          title: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          userType: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
          zipCode: {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
        },
        required: [
          "required_example",
        ],
        type: "type_example",
      },
      custom: {
        id: "id_example",
        properties: {
          "key": {
            description: "description_example",
            _enum: [
              "_enum_example",
            ],
            externalName: "externalName_example",
            externalNamespace: "externalNamespace_example",
            items: {
              _enum: [
                "_enum_example",
              ],
              oneOf: [
                {
                  _const: "_const_example",
                  title: "title_example",
                },
              ],
              type: "type_example",
            },
            master: {
              priority: [
                {
                  type: "type_example",
                  value: "value_example",
                },
              ],
              type: "OKTA",
            },
            maxLength: 1,
            minLength: 1,
            mutability: "mutability_example",
            oneOf: [
              {
                _const: "_const_example",
                title: "title_example",
              },
            ],
            pattern: "pattern_example",
            permissions: [
              {
                action: "action_example",
                principal: "principal_example",
              },
            ],
            required: true,
            scope: "NONE",
            title: "title_example",
            type: "array",
            union: "DISABLE",
            unique: "unique_example",
          },
        },
        required: [
          "required_example",
        ],
        type: "type_example",
      },
    },
    properties: {
      profile: {
        allOf: [
          {
            ref: "ref_example",
          },
        ],
      },
    },
    title: "title_example",
  },
};

apiInstance.updateUserProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userSchema** | **UserSchema**|  |
 **schemaId** | [**string**] |  | defaults to undefined


### Return type

**UserSchema**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


