# okta.RoleApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRolePermission**](RoleApi.md#addRolePermission) | **POST** /api/v1/iam/roles/{roleIdOrLabel}/permissions/{permissionType} | Create a Permission
[**createRole**](RoleApi.md#createRole) | **POST** /api/v1/iam/roles | Create a Role
[**deleteRole**](RoleApi.md#deleteRole) | **DELETE** /api/v1/iam/roles/{roleIdOrLabel} | Delete a Role
[**deleteRolePermission**](RoleApi.md#deleteRolePermission) | **DELETE** /api/v1/iam/roles/{roleIdOrLabel}/permissions/{permissionType} | Delete a Permission
[**getRole**](RoleApi.md#getRole) | **GET** /api/v1/iam/roles/{roleIdOrLabel} | Retrieve a Role
[**getRolePermission**](RoleApi.md#getRolePermission) | **GET** /api/v1/iam/roles/{roleIdOrLabel}/permissions/{permissionType} | Retrieve a Permission
[**listRolePermissions**](RoleApi.md#listRolePermissions) | **GET** /api/v1/iam/roles/{roleIdOrLabel}/permissions | List all Permissions
[**listRoles**](RoleApi.md#listRoles) | **GET** /api/v1/iam/roles | List all Roles
[**replaceRole**](RoleApi.md#replaceRole) | **PUT** /api/v1/iam/roles/{roleIdOrLabel} | Replace a Role


# **addRolePermission**
> void addRolePermission()

Adds a permission specified by `permissionType` to the role

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleApi(configuration);

let body:okta.RoleApiAddRolePermissionRequest = {
  // string | `id` or `label` of the role
  roleIdOrLabel: "cr0Yq6IJxGIr0ouum0g3",
  // string | An okta permission type
  permissionType: "okta.users.manage",
};

apiInstance.addRolePermission(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleIdOrLabel** | [**string**] | &#x60;id&#x60; or &#x60;label&#x60; of the role | defaults to undefined
 **permissionType** | [**string**] | An okta permission type | defaults to undefined


### Return type

**void**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createRole**
> IamRole createRole(instance)

Creates a new role

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleApi(configuration);

let body:okta.RoleApiCreateRoleRequest = {
  // IamRole
  instance: {
    description: "description_example",
    label: "label_example",
    permissions: [
      "okta.apps.assignment.manage",
    ],
  },
};

apiInstance.createRole(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance** | **IamRole**|  |


### Return type

**IamRole**

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
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteRole**
> void deleteRole()

Deletes a role by `roleIdOrLabel`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleApi(configuration);

let body:okta.RoleApiDeleteRoleRequest = {
  // string | `id` or `label` of the role
  roleIdOrLabel: "cr0Yq6IJxGIr0ouum0g3",
};

apiInstance.deleteRole(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleIdOrLabel** | [**string**] | &#x60;id&#x60; or &#x60;label&#x60; of the role | defaults to undefined


### Return type

**void**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteRolePermission**
> void deleteRolePermission()

Deletes a permission from a role by `permissionType`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleApi(configuration);

let body:okta.RoleApiDeleteRolePermissionRequest = {
  // string | `id` or `label` of the role
  roleIdOrLabel: "cr0Yq6IJxGIr0ouum0g3",
  // string | An okta permission type
  permissionType: "okta.users.manage",
};

apiInstance.deleteRolePermission(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleIdOrLabel** | [**string**] | &#x60;id&#x60; or &#x60;label&#x60; of the role | defaults to undefined
 **permissionType** | [**string**] | An okta permission type | defaults to undefined


### Return type

**void**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getRole**
> IamRole getRole()

Retrieve a role by `roleIdOrLabel`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleApi(configuration);

let body:okta.RoleApiGetRoleRequest = {
  // string | `id` or `label` of the role
  roleIdOrLabel: "cr0Yq6IJxGIr0ouum0g3",
};

apiInstance.getRole(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleIdOrLabel** | [**string**] | &#x60;id&#x60; or &#x60;label&#x60; of the role | defaults to undefined


### Return type

**IamRole**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getRolePermission**
> Permission getRolePermission()

Retrieves a permission by `permissionType`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleApi(configuration);

let body:okta.RoleApiGetRolePermissionRequest = {
  // string | `id` or `label` of the role
  roleIdOrLabel: "cr0Yq6IJxGIr0ouum0g3",
  // string | An okta permission type
  permissionType: "okta.users.manage",
};

apiInstance.getRolePermission(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleIdOrLabel** | [**string**] | &#x60;id&#x60; or &#x60;label&#x60; of the role | defaults to undefined
 **permissionType** | [**string**] | An okta permission type | defaults to undefined


### Return type

**Permission**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listRolePermissions**
> Permissions listRolePermissions()

Lists all permissions of the role by `roleIdOrLabel`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleApi(configuration);

let body:okta.RoleApiListRolePermissionsRequest = {
  // string | `id` or `label` of the role
  roleIdOrLabel: "cr0Yq6IJxGIr0ouum0g3",
};

apiInstance.listRolePermissions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleIdOrLabel** | [**string**] | &#x60;id&#x60; or &#x60;label&#x60; of the role | defaults to undefined


### Return type

**Permissions**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listRoles**
> IamRoles listRoles()

Lists all roles with pagination support

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleApi(configuration);

let body:okta.RoleApiListRolesRequest = {
  // string | The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the `Link` response header. See [Pagination](/#pagination) for more information. (optional)
  after: "after_example",
};

apiInstance.listRoles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **after** | [**string**] | The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information. | (optional) defaults to undefined


### Return type

**IamRoles**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **replaceRole**
> IamRole replaceRole(instance)

Replaces a role by `roleIdOrLabel`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleApi(configuration);

let body:okta.RoleApiReplaceRoleRequest = {
  // string | `id` or `label` of the role
  roleIdOrLabel: "cr0Yq6IJxGIr0ouum0g3",
  // IamRole
  instance: {
    description: "description_example",
    label: "label_example",
    permissions: [
      "okta.apps.assignment.manage",
    ],
  },
};

apiInstance.replaceRole(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance** | **IamRole**|  |
 **roleIdOrLabel** | [**string**] | &#x60;id&#x60; or &#x60;label&#x60; of the role | defaults to undefined


### Return type

**IamRole**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


