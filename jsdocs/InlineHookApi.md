# okta.InlineHookApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateInlineHook**](InlineHookApi.md#activateInlineHook) | **POST** /api/v1/inlineHooks/{inlineHookId}/lifecycle/activate | Activate an Inline Hook
[**createInlineHook**](InlineHookApi.md#createInlineHook) | **POST** /api/v1/inlineHooks | Create an Inline Hook
[**deactivateInlineHook**](InlineHookApi.md#deactivateInlineHook) | **POST** /api/v1/inlineHooks/{inlineHookId}/lifecycle/deactivate | Deactivate an Inline Hook
[**deleteInlineHook**](InlineHookApi.md#deleteInlineHook) | **DELETE** /api/v1/inlineHooks/{inlineHookId} | Delete an Inline Hook
[**executeInlineHook**](InlineHookApi.md#executeInlineHook) | **POST** /api/v1/inlineHooks/{inlineHookId}/execute | Execute an Inline Hook
[**getInlineHook**](InlineHookApi.md#getInlineHook) | **GET** /api/v1/inlineHooks/{inlineHookId} | Retrieve an Inline Hook
[**listInlineHooks**](InlineHookApi.md#listInlineHooks) | **GET** /api/v1/inlineHooks | List all Inline Hooks
[**updateInlineHook**](InlineHookApi.md#updateInlineHook) | **PUT** /api/v1/inlineHooks/{inlineHookId} | Replace an Inline Hook


# **activateInlineHook**
> InlineHook activateInlineHook()

Activates the Inline Hook matching the provided id

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.InlineHookApi(configuration);

let body:okta.InlineHookApiActivateInlineHookRequest = {
  // string
  inlineHookId: "inlineHookId_example",
};

apiInstance.activateInlineHook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineHookId** | [**string**] |  | defaults to undefined


### Return type

**InlineHook**

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

# **createInlineHook**
> InlineHook createInlineHook(inlineHook)

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.InlineHookApi(configuration);

let body:okta.InlineHookApiCreateInlineHookRequest = {
  // InlineHook
  inlineHook: {
    channel: {
      config: {
        authScheme: {
          key: "key_example",
          type: "type_example",
          value: "value_example",
        },
        headers: [
          {
            key: "key_example",
            value: "value_example",
          },
        ],
        method: "method_example",
        uri: "uri_example",
      },
      type: "HTTP",
      version: "version_example",
    },
    name: "name_example",
    status: "ACTIVE",
    type: "com.okta.import.transform",
    version: "version_example",
  },
};

apiInstance.createInlineHook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineHook** | **InlineHook**|  |


### Return type

**InlineHook**

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

# **deactivateInlineHook**
> InlineHook deactivateInlineHook()

Deactivates the Inline Hook matching the provided id

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.InlineHookApi(configuration);

let body:okta.InlineHookApiDeactivateInlineHookRequest = {
  // string
  inlineHookId: "inlineHookId_example",
};

apiInstance.deactivateInlineHook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineHookId** | [**string**] |  | defaults to undefined


### Return type

**InlineHook**

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

# **deleteInlineHook**
> void deleteInlineHook()

Deletes the Inline Hook matching the provided id. Once deleted, the Inline Hook is unrecoverable. As a safety precaution, only Inline Hooks with a status of INACTIVE are eligible for deletion.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.InlineHookApi(configuration);

let body:okta.InlineHookApiDeleteInlineHookRequest = {
  // string
  inlineHookId: "inlineHookId_example",
};

apiInstance.deleteInlineHook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineHookId** | [**string**] |  | defaults to undefined


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

# **executeInlineHook**
> InlineHookResponse executeInlineHook(payloadData)

Executes the Inline Hook matching the provided inlineHookId using the request body as the input. This will send the provided data through the Channel and return a response if it matches the correct data contract. This execution endpoint should only be used for testing purposes.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.InlineHookApi(configuration);

let body:okta.InlineHookApiExecuteInlineHookRequest = {
  // string
  inlineHookId: "inlineHookId_example",
  // any
  payloadData: {},
};

apiInstance.executeInlineHook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payloadData** | **any**|  |
 **inlineHookId** | [**string**] |  | defaults to undefined


### Return type

**InlineHookResponse**

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

# **getInlineHook**
> InlineHook getInlineHook()

Gets an inline hook by ID

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.InlineHookApi(configuration);

let body:okta.InlineHookApiGetInlineHookRequest = {
  // string
  inlineHookId: "inlineHookId_example",
};

apiInstance.getInlineHook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineHookId** | [**string**] |  | defaults to undefined


### Return type

**InlineHook**

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

# **listInlineHooks**
> Array<InlineHook> listInlineHooks()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.InlineHookApi(configuration);

let body:okta.InlineHookApiListInlineHooksRequest = {
  // string (optional)
  type: "type_example",
};

apiInstance.listInlineHooks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<InlineHook>**

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

# **updateInlineHook**
> InlineHook updateInlineHook(inlineHook)

Updates an inline hook by ID

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.InlineHookApi(configuration);

let body:okta.InlineHookApiUpdateInlineHookRequest = {
  // string
  inlineHookId: "inlineHookId_example",
  // InlineHook
  inlineHook: {
    channel: {
      config: {
        authScheme: {
          key: "key_example",
          type: "type_example",
          value: "value_example",
        },
        headers: [
          {
            key: "key_example",
            value: "value_example",
          },
        ],
        method: "method_example",
        uri: "uri_example",
      },
      type: "HTTP",
      version: "version_example",
    },
    name: "name_example",
    status: "ACTIVE",
    type: "com.okta.import.transform",
    version: "version_example",
  },
};

apiInstance.updateInlineHook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineHook** | **InlineHook**|  |
 **inlineHookId** | [**string**] |  | defaults to undefined


### Return type

**InlineHook**

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


