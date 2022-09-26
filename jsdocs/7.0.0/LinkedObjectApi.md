# okta.LinkedObjectApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLinkedObjectDefinition**](LinkedObjectApi.md#addLinkedObjectDefinition) | **POST** /api/v1/meta/schemas/user/linkedObjects | Create a Linked Object Definition
[**deleteLinkedObjectDefinition**](LinkedObjectApi.md#deleteLinkedObjectDefinition) | **DELETE** /api/v1/meta/schemas/user/linkedObjects/{linkedObjectName} | Delete a Linked Object Definition
[**getLinkedObjectDefinition**](LinkedObjectApi.md#getLinkedObjectDefinition) | **GET** /api/v1/meta/schemas/user/linkedObjects/{linkedObjectName} | Retrieve a Linked Object Definition
[**listLinkedObjectDefinitions**](LinkedObjectApi.md#listLinkedObjectDefinitions) | **GET** /api/v1/meta/schemas/user/linkedObjects | List all Linked Object Definitions


# **addLinkedObjectDefinition**
> LinkedObject addLinkedObjectDefinition(linkedObject)

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.LinkedObjectApi(configuration);

let body:okta.LinkedObjectApiAddLinkedObjectDefinitionRequest = {
  // LinkedObject
  linkedObject: {
    associated: {
      description: "description_example",
      name: "name_example",
      title: "title_example",
      type: "USER",
    },
    primary: {
      description: "description_example",
      name: "name_example",
      title: "title_example",
      type: "USER",
    },
  },
};

apiInstance.addLinkedObjectDefinition(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkedObject** | **LinkedObject**|  |


### Return type

**LinkedObject**

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
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteLinkedObjectDefinition**
> void deleteLinkedObjectDefinition()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.LinkedObjectApi(configuration);

let body:okta.LinkedObjectApiDeleteLinkedObjectDefinitionRequest = {
  // string
  linkedObjectName: "linkedObjectName_example",
};

apiInstance.deleteLinkedObjectDefinition(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkedObjectName** | [**string**] |  | defaults to undefined


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

# **getLinkedObjectDefinition**
> LinkedObject getLinkedObjectDefinition()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.LinkedObjectApi(configuration);

let body:okta.LinkedObjectApiGetLinkedObjectDefinitionRequest = {
  // string
  linkedObjectName: "linkedObjectName_example",
};

apiInstance.getLinkedObjectDefinition(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkedObjectName** | [**string**] |  | defaults to undefined


### Return type

**LinkedObject**

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

# **listLinkedObjectDefinitions**
> Array<LinkedObject> listLinkedObjectDefinitions()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.LinkedObjectApi(configuration);

let body:any = {};

apiInstance.listLinkedObjectDefinitions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<LinkedObject>**

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


