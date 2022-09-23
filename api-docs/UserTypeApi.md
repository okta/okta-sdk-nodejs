# okta.UserTypeApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserType**](UserTypeApi.md#createUserType) | **POST** /api/v1/meta/types/user | Create a User Type
[**deleteUserType**](UserTypeApi.md#deleteUserType) | **DELETE** /api/v1/meta/types/user/{typeId} | Delete a User Type
[**getUserType**](UserTypeApi.md#getUserType) | **GET** /api/v1/meta/types/user/{typeId} | Retrieve a User Type
[**listUserTypes**](UserTypeApi.md#listUserTypes) | **GET** /api/v1/meta/types/user | List all User Types
[**replaceUserType**](UserTypeApi.md#replaceUserType) | **PUT** /api/v1/meta/types/user/{typeId} | Replace a User Type
[**updateUserType**](UserTypeApi.md#updateUserType) | **POST** /api/v1/meta/types/user/{typeId} | Update a User Type


# **createUserType**
> UserType createUserType(userType)

Creates a new User Type. A default User Type is automatically created along with your org, and you may add another 9 User Types for a maximum of 10.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserTypeApi(configuration);

let body:okta.UserTypeApiCreateUserTypeRequest = {
  // UserType
  userType: {
    description: "description_example",
    displayName: "displayName_example",
    id: "id_example",
    name: "name_example",
  },
};

apiInstance.createUserType(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userType** | **UserType**|  |


### Return type

**UserType**

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

# **deleteUserType**
> void deleteUserType()

Deletes a User Type permanently. This operation is not permitted for the default type, nor for any User Type that has existing users

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserTypeApi(configuration);

let body:okta.UserTypeApiDeleteUserTypeRequest = {
  // string
  typeId: "typeId_example",
};

apiInstance.deleteUserType(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **typeId** | [**string**] |  | defaults to undefined


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

# **getUserType**
> UserType getUserType()

Fetches a User Type by ID. The special identifier `default` may be used to fetch the default User Type.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserTypeApi(configuration);

let body:okta.UserTypeApiGetUserTypeRequest = {
  // string
  typeId: "typeId_example",
};

apiInstance.getUserType(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **typeId** | [**string**] |  | defaults to undefined


### Return type

**UserType**

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

# **listUserTypes**
> Array<UserType> listUserTypes()

Fetches all User Types in your org

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserTypeApi(configuration);

let body:any = {};

apiInstance.listUserTypes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<UserType>**

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
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **replaceUserType**
> UserType replaceUserType(userType)

Replace an existing User Type

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserTypeApi(configuration);

let body:okta.UserTypeApiReplaceUserTypeRequest = {
  // string
  typeId: "typeId_example",
  // UserType
  userType: {
    description: "description_example",
    displayName: "displayName_example",
    id: "id_example",
    name: "name_example",
  },
};

apiInstance.replaceUserType(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userType** | **UserType**|  |
 **typeId** | [**string**] |  | defaults to undefined


### Return type

**UserType**

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

# **updateUserType**
> UserType updateUserType(userType)

Updates an existing User Type

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserTypeApi(configuration);

let body:okta.UserTypeApiUpdateUserTypeRequest = {
  // string
  typeId: "typeId_example",
  // UserType
  userType: {
    description: "description_example",
    displayName: "displayName_example",
    id: "id_example",
    name: "name_example",
  },
};

apiInstance.updateUserType(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userType** | **UserType**|  |
 **typeId** | [**string**] |  | defaults to undefined


### Return type

**UserType**

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


