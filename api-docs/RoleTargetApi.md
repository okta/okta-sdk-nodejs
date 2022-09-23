# okta.RoleTargetApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAllAppsAsTargetToRole**](RoleTargetApi.md#addAllAppsAsTargetToRole) | **PUT** /api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps | Assign all Apps as Target to Role
[**addApplicationInstanceTargetToAppAdminRoleGivenToGroup**](RoleTargetApi.md#addApplicationInstanceTargetToAppAdminRoleGivenToGroup) | **PUT** /api/v1/groups/{groupId}/roles/{roleId}/targets/catalog/apps/{appName}/{applicationId} | Assign an Application Instance Target to Application Administrator Role
[**addApplicationTargetToAdminRoleForUser**](RoleTargetApi.md#addApplicationTargetToAdminRoleForUser) | **PUT** /api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps/{appName} | Assign an Application Target to Administrator Role
[**addApplicationTargetToAdminRoleGivenToGroup**](RoleTargetApi.md#addApplicationTargetToAdminRoleGivenToGroup) | **PUT** /api/v1/groups/{groupId}/roles/{roleId}/targets/catalog/apps/{appName} | Assign an Application Target to Administrator Role
[**addApplicationTargetToAppAdminRoleForUser**](RoleTargetApi.md#addApplicationTargetToAppAdminRoleForUser) | **PUT** /api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps/{appName}/{applicationId} | Assign an Application Instance Target to an Application Administrator Role
[**addGroupTargetToGroupAdministratorRoleForGroup**](RoleTargetApi.md#addGroupTargetToGroupAdministratorRoleForGroup) | **PUT** /api/v1/groups/{groupId}/roles/{roleId}/targets/groups/{targetGroupId} | Assign a Group Target for Group Role
[**addGroupTargetToRole**](RoleTargetApi.md#addGroupTargetToRole) | **PUT** /api/v1/users/{userId}/roles/{roleId}/targets/groups/{groupId} | Assign a Group Target to Role
[**listApplicationTargetsForApplicationAdministratorRoleForGroup**](RoleTargetApi.md#listApplicationTargetsForApplicationAdministratorRoleForGroup) | **GET** /api/v1/groups/{groupId}/roles/{roleId}/targets/catalog/apps | List all Application Targets for an Application Administrator Role
[**listApplicationTargetsForApplicationAdministratorRoleForUser**](RoleTargetApi.md#listApplicationTargetsForApplicationAdministratorRoleForUser) | **GET** /api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps | List all Application Targets for Application Administrator Role
[**listGroupTargetsForGroupRole**](RoleTargetApi.md#listGroupTargetsForGroupRole) | **GET** /api/v1/groups/{groupId}/roles/{roleId}/targets/groups | List all Group Targets for a Group Role
[**listGroupTargetsForRole**](RoleTargetApi.md#listGroupTargetsForRole) | **GET** /api/v1/users/{userId}/roles/{roleId}/targets/groups | List all Group Targets for Role
[**removeApplicationTargetFromAdministratorRoleForUser**](RoleTargetApi.md#removeApplicationTargetFromAdministratorRoleForUser) | **DELETE** /api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps/{appName}/{applicationId} | Unassign an Application Instance Target to Application Administrator Role
[**removeApplicationTargetFromAdministratorRoleGivenToGroup**](RoleTargetApi.md#removeApplicationTargetFromAdministratorRoleGivenToGroup) | **DELETE** /api/v1/groups/{groupId}/roles/{roleId}/targets/catalog/apps/{appName}/{applicationId} | Delete an Application Instance Target to Application Administrator Role
[**removeApplicationTargetFromApplicationAdministratorRoleForUser**](RoleTargetApi.md#removeApplicationTargetFromApplicationAdministratorRoleForUser) | **DELETE** /api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps/{appName} | Unassign an Application Target from Application Administrator Role
[**removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup**](RoleTargetApi.md#removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup) | **DELETE** /api/v1/groups/{groupId}/roles/{roleId}/targets/catalog/apps/{appName} | Delete an Application Target from Application Administrator Role
[**removeGroupTargetFromGroupAdministratorRoleGivenToGroup**](RoleTargetApi.md#removeGroupTargetFromGroupAdministratorRoleGivenToGroup) | **DELETE** /api/v1/groups/{groupId}/roles/{roleId}/targets/groups/{targetGroupId} | Delete a Group Target for Group Role
[**removeGroupTargetFromRole**](RoleTargetApi.md#removeGroupTargetFromRole) | **DELETE** /api/v1/users/{userId}/roles/{roleId}/targets/groups/{groupId} | Unassign a Group Target from Role


# **addAllAppsAsTargetToRole**
> void addAllAppsAsTargetToRole()

Assign all Apps as Target to Role

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleTargetApi(configuration);

let body:okta.RoleTargetApiAddAllAppsAsTargetToRoleRequest = {
  // string
  userId: "userId_example",
  // string
  roleId: "roleId_example",
};

apiInstance.addAllAppsAsTargetToRole(body).then((data:any) => {
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
**200** | Success |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addApplicationInstanceTargetToAppAdminRoleGivenToGroup**
> void addApplicationInstanceTargetToAppAdminRoleGivenToGroup()

Add App Instance Target to App Administrator Role given to a Group

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleTargetApi(configuration);

let body:okta.RoleTargetApiAddApplicationInstanceTargetToAppAdminRoleGivenToGroupRequest = {
  // string
  groupId: "groupId_example",
  // string
  roleId: "roleId_example",
  // string
  appName: "appName_example",
  // string
  applicationId: "applicationId_example",
};

apiInstance.addApplicationInstanceTargetToAppAdminRoleGivenToGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
 **roleId** | [**string**] |  | defaults to undefined
 **appName** | [**string**] |  | defaults to undefined
 **applicationId** | [**string**] |  | defaults to undefined


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

# **addApplicationTargetToAdminRoleForUser**
> void addApplicationTargetToAdminRoleForUser()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleTargetApi(configuration);

let body:okta.RoleTargetApiAddApplicationTargetToAdminRoleForUserRequest = {
  // string
  userId: "userId_example",
  // string
  roleId: "roleId_example",
  // string
  appName: "appName_example",
};

apiInstance.addApplicationTargetToAdminRoleForUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **roleId** | [**string**] |  | defaults to undefined
 **appName** | [**string**] |  | defaults to undefined


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

# **addApplicationTargetToAdminRoleGivenToGroup**
> void addApplicationTargetToAdminRoleGivenToGroup()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleTargetApi(configuration);

let body:okta.RoleTargetApiAddApplicationTargetToAdminRoleGivenToGroupRequest = {
  // string
  groupId: "groupId_example",
  // string
  roleId: "roleId_example",
  // string
  appName: "appName_example",
};

apiInstance.addApplicationTargetToAdminRoleGivenToGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
 **roleId** | [**string**] |  | defaults to undefined
 **appName** | [**string**] |  | defaults to undefined


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
**200** | Success |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addApplicationTargetToAppAdminRoleForUser**
> void addApplicationTargetToAppAdminRoleForUser()

Add App Instance Target to App Administrator Role given to a User

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleTargetApi(configuration);

let body:okta.RoleTargetApiAddApplicationTargetToAppAdminRoleForUserRequest = {
  // string
  userId: "userId_example",
  // string
  roleId: "roleId_example",
  // string
  appName: "appName_example",
  // string
  applicationId: "applicationId_example",
};

apiInstance.addApplicationTargetToAppAdminRoleForUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **roleId** | [**string**] |  | defaults to undefined
 **appName** | [**string**] |  | defaults to undefined
 **applicationId** | [**string**] |  | defaults to undefined


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

# **addGroupTargetToGroupAdministratorRoleForGroup**
> void addGroupTargetToGroupAdministratorRoleForGroup()

Enumerates group targets for a group role.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleTargetApi(configuration);

let body:okta.RoleTargetApiAddGroupTargetToGroupAdministratorRoleForGroupRequest = {
  // string
  groupId: "groupId_example",
  // string
  roleId: "roleId_example",
  // string
  targetGroupId: "targetGroupId_example",
};

apiInstance.addGroupTargetToGroupAdministratorRoleForGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
 **roleId** | [**string**] |  | defaults to undefined
 **targetGroupId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[OAuth_2.0](README.md#OAuth_2.0)

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

# **addGroupTargetToRole**
> void addGroupTargetToRole()

Assign a Group Target to Role

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleTargetApi(configuration);

let body:okta.RoleTargetApiAddGroupTargetToRoleRequest = {
  // string
  userId: "userId_example",
  // string
  roleId: "roleId_example",
  // string
  groupId: "groupId_example",
};

apiInstance.addGroupTargetToRole(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **roleId** | [**string**] |  | defaults to undefined
 **groupId** | [**string**] |  | defaults to undefined


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

# **listApplicationTargetsForApplicationAdministratorRoleForGroup**
> Array<CatalogApplication> listApplicationTargetsForApplicationAdministratorRoleForGroup()

Lists all App targets for an `APP_ADMIN` Role assigned to a Group. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleTargetApi(configuration);

let body:okta.RoleTargetApiListApplicationTargetsForApplicationAdministratorRoleForGroupRequest = {
  // string
  groupId: "groupId_example",
  // string
  roleId: "roleId_example",
  // string (optional)
  after: "after_example",
  // number (optional)
  limit: 20,
};

apiInstance.listApplicationTargetsForApplicationAdministratorRoleForGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
 **roleId** | [**string**] |  | defaults to undefined
 **after** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 20


### Return type

**Array<CatalogApplication>**

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

# **listApplicationTargetsForApplicationAdministratorRoleForUser**
> Array<CatalogApplication> listApplicationTargetsForApplicationAdministratorRoleForUser()

Lists all App targets for an `APP_ADMIN` Role assigned to a User. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleTargetApi(configuration);

let body:okta.RoleTargetApiListApplicationTargetsForApplicationAdministratorRoleForUserRequest = {
  // string
  userId: "userId_example",
  // string
  roleId: "roleId_example",
  // string (optional)
  after: "after_example",
  // number (optional)
  limit: 20,
};

apiInstance.listApplicationTargetsForApplicationAdministratorRoleForUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **roleId** | [**string**] |  | defaults to undefined
 **after** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 20


### Return type

**Array<CatalogApplication>**

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

# **listGroupTargetsForGroupRole**
> Array<Group> listGroupTargetsForGroupRole()

Enumerates group targets for a group role.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleTargetApi(configuration);

let body:okta.RoleTargetApiListGroupTargetsForGroupRoleRequest = {
  // string
  groupId: "groupId_example",
  // string
  roleId: "roleId_example",
  // string (optional)
  after: "after_example",
  // number (optional)
  limit: 20,
};

apiInstance.listGroupTargetsForGroupRole(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
 **roleId** | [**string**] |  | defaults to undefined
 **after** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 20


### Return type

**Array<Group>**

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

# **listGroupTargetsForRole**
> Array<Group> listGroupTargetsForRole()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleTargetApi(configuration);

let body:okta.RoleTargetApiListGroupTargetsForRoleRequest = {
  // string
  userId: "userId_example",
  // string
  roleId: "roleId_example",
  // string (optional)
  after: "after_example",
  // number (optional)
  limit: 20,
};

apiInstance.listGroupTargetsForRole(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **roleId** | [**string**] |  | defaults to undefined
 **after** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 20


### Return type

**Array<Group>**

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

# **removeApplicationTargetFromAdministratorRoleForUser**
> void removeApplicationTargetFromAdministratorRoleForUser()

Remove App Instance Target to App Administrator Role given to a User

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleTargetApi(configuration);

let body:okta.RoleTargetApiRemoveApplicationTargetFromAdministratorRoleForUserRequest = {
  // string
  userId: "userId_example",
  // string
  roleId: "roleId_example",
  // string
  appName: "appName_example",
  // string
  applicationId: "applicationId_example",
};

apiInstance.removeApplicationTargetFromAdministratorRoleForUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **roleId** | [**string**] |  | defaults to undefined
 **appName** | [**string**] |  | defaults to undefined
 **applicationId** | [**string**] |  | defaults to undefined


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

# **removeApplicationTargetFromAdministratorRoleGivenToGroup**
> void removeApplicationTargetFromAdministratorRoleGivenToGroup()

Remove App Instance Target to App Administrator Role given to a Group

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleTargetApi(configuration);

let body:okta.RoleTargetApiRemoveApplicationTargetFromAdministratorRoleGivenToGroupRequest = {
  // string
  groupId: "groupId_example",
  // string
  roleId: "roleId_example",
  // string
  appName: "appName_example",
  // string
  applicationId: "applicationId_example",
};

apiInstance.removeApplicationTargetFromAdministratorRoleGivenToGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
 **roleId** | [**string**] |  | defaults to undefined
 **appName** | [**string**] |  | defaults to undefined
 **applicationId** | [**string**] |  | defaults to undefined


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

# **removeApplicationTargetFromApplicationAdministratorRoleForUser**
> void removeApplicationTargetFromApplicationAdministratorRoleForUser()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleTargetApi(configuration);

let body:okta.RoleTargetApiRemoveApplicationTargetFromApplicationAdministratorRoleForUserRequest = {
  // string
  userId: "userId_example",
  // string
  roleId: "roleId_example",
  // string
  appName: "appName_example",
};

apiInstance.removeApplicationTargetFromApplicationAdministratorRoleForUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **roleId** | [**string**] |  | defaults to undefined
 **appName** | [**string**] |  | defaults to undefined


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

# **removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup**
> void removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleTargetApi(configuration);

let body:okta.RoleTargetApiRemoveApplicationTargetFromApplicationAdministratorRoleGivenToGroupRequest = {
  // string
  groupId: "groupId_example",
  // string
  roleId: "roleId_example",
  // string
  appName: "appName_example",
};

apiInstance.removeApplicationTargetFromApplicationAdministratorRoleGivenToGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
 **roleId** | [**string**] |  | defaults to undefined
 **appName** | [**string**] |  | defaults to undefined


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

# **removeGroupTargetFromGroupAdministratorRoleGivenToGroup**
> void removeGroupTargetFromGroupAdministratorRoleGivenToGroup()

remove group target for a group role.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleTargetApi(configuration);

let body:okta.RoleTargetApiRemoveGroupTargetFromGroupAdministratorRoleGivenToGroupRequest = {
  // string
  groupId: "groupId_example",
  // string
  roleId: "roleId_example",
  // string
  targetGroupId: "targetGroupId_example",
};

apiInstance.removeGroupTargetFromGroupAdministratorRoleGivenToGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
 **roleId** | [**string**] |  | defaults to undefined
 **targetGroupId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[OAuth_2.0](README.md#OAuth_2.0)

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

# **removeGroupTargetFromRole**
> void removeGroupTargetFromRole()

Unassign a Group Target from Role

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RoleTargetApi(configuration);

let body:okta.RoleTargetApiRemoveGroupTargetFromRoleRequest = {
  // string
  userId: "userId_example",
  // string
  roleId: "roleId_example",
  // string
  groupId: "groupId_example",
};

apiInstance.removeGroupTargetFromRole(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **roleId** | [**string**] |  | defaults to undefined
 **groupId** | [**string**] |  | defaults to undefined


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


