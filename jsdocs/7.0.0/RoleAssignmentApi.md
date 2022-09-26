# okta.RoleAssignmentApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignRoleToGroup**](RoleAssignmentApi.md#assignRoleToGroup) | **POST** /api/v1/groups/{groupId}/roles | Assign a Role to a Group
[**assignRoleToUser**](RoleAssignmentApi.md#assignRoleToUser) | **POST** /api/v1/users/{userId}/roles | Assign a Role to a User
[**getGroupAssignedRole**](RoleAssignmentApi.md#getGroupAssignedRole) | **GET** /api/v1/groups/{groupId}/roles/{roleId} | Retrieve a Role assigned to Group
[**getUserAssignedRole**](RoleAssignmentApi.md#getUserAssignedRole) | **GET** /api/v1/users/{userId}/roles/{roleId} | Retrieve a Role assigned to a User
[**listAssignedRolesForUser**](RoleAssignmentApi.md#listAssignedRolesForUser) | **GET** /api/v1/users/{userId}/roles | List all Roles assigned to a User
[**listGroupAssignedRoles**](RoleAssignmentApi.md#listGroupAssignedRoles) | **GET** /api/v1/groups/{groupId}/roles | List all Assigned Roles of Group
[**unassignRoleFromGroup**](RoleAssignmentApi.md#unassignRoleFromGroup) | **DELETE** /api/v1/groups/{groupId}/roles/{roleId} | Unassign a Role from a Group
[**unassignRoleFromUser**](RoleAssignmentApi.md#unassignRoleFromUser) | **DELETE** /api/v1/users/{userId}/roles/{roleId} | Unassign a Role from a User


# **assignRoleToGroup**
> Role | void assignRoleToGroup(assignRoleRequest)

Assigns a role to a group.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleAssignmentApi(configuration);

let body:okta.RoleAssignmentApiAssignRoleToGroupRequest = {
  // string
  groupId: "groupId_example",
  // AssignRoleRequest
  assignRoleRequest: {
    type: "API_ACCESS_MANAGEMENT_ADMIN",
  },
  // boolean | Setting this to `true` grants the group third-party admin status (optional)
  disableNotifications: true,
};

apiInstance.assignRoleToGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignRoleRequest** | **AssignRoleRequest**|  |
 **groupId** | [**string**] |  | defaults to undefined
 **disableNotifications** | [**boolean**] | Setting this to &#x60;true&#x60; grants the group third-party admin status | (optional) defaults to undefined


### Return type

**Role | void**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**201** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assignRoleToUser**
> Role assignRoleToUser(assignRoleRequest)

Assigns a role to a user identified by `userId`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleAssignmentApi(configuration);

let body:okta.RoleAssignmentApiAssignRoleToUserRequest = {
  // string
  userId: "userId_example",
  // AssignRoleRequest
  assignRoleRequest: {
    type: "API_ACCESS_MANAGEMENT_ADMIN",
  },
  // boolean | Setting this to `true` grants the user third-party admin status (optional)
  disableNotifications: true,
};

apiInstance.assignRoleToUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignRoleRequest** | **AssignRoleRequest**|  |
 **userId** | [**string**] |  | defaults to undefined
 **disableNotifications** | [**boolean**] | Setting this to &#x60;true&#x60; grants the user third-party admin status | (optional) defaults to undefined


### Return type

**Role**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getGroupAssignedRole**
> Role getGroupAssignedRole()

Retrieves a role identified by `roleId` assigned to group identified by `groupId`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleAssignmentApi(configuration);

let body:okta.RoleAssignmentApiGetGroupAssignedRoleRequest = {
  // string
  groupId: "groupId_example",
  // string
  roleId: "roleId_example",
};

apiInstance.getGroupAssignedRole(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
 **roleId** | [**string**] |  | defaults to undefined


### Return type

**Role**

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

# **getUserAssignedRole**
> Role getUserAssignedRole()

Retrieves a role identified by `roleId` assigned to a user identified by `userId`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleAssignmentApi(configuration);

let body:okta.RoleAssignmentApiGetUserAssignedRoleRequest = {
  // string
  userId: "userId_example",
  // string
  roleId: "roleId_example",
};

apiInstance.getUserAssignedRole(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **roleId** | [**string**] |  | defaults to undefined


### Return type

**Role**

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

# **listAssignedRolesForUser**
> Array<Role> listAssignedRolesForUser()

Lists all roles assigned to a user identified by `userId`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleAssignmentApi(configuration);

let body:okta.RoleAssignmentApiListAssignedRolesForUserRequest = {
  // string
  userId: "userId_example",
  // string (optional)
  expand: "expand_example",
};

apiInstance.listAssignedRolesForUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **expand** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<Role>**

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

# **listGroupAssignedRoles**
> Array<Role> listGroupAssignedRoles()

Lists all assigned roles of group identified by `groupId`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleAssignmentApi(configuration);

let body:okta.RoleAssignmentApiListGroupAssignedRolesRequest = {
  // string
  groupId: "groupId_example",
  // string (optional)
  expand: "expand_example",
};

apiInstance.listGroupAssignedRoles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
 **expand** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<Role>**

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

# **unassignRoleFromGroup**
> void unassignRoleFromGroup()

Unassigns a role identified by `roleId` assigned to group identified by `groupId`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleAssignmentApi(configuration);

let body:okta.RoleAssignmentApiUnassignRoleFromGroupRequest = {
  // string
  groupId: "groupId_example",
  // string
  roleId: "roleId_example",
};

apiInstance.unassignRoleFromGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
 **roleId** | [**string**] |  | defaults to undefined


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

# **unassignRoleFromUser**
> void unassignRoleFromUser()

Unassigns a role identified by `roleId` from a user identified by `userId`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleAssignmentApi(configuration);

let body:okta.RoleAssignmentApiUnassignRoleFromUserRequest = {
  // string
  userId: "userId_example",
  // string
  roleId: "roleId_example",
};

apiInstance.unassignRoleFromUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **roleId** | [**string**] |  | defaults to undefined


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


