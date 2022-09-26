# okta.EventHookApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateEventHook**](EventHookApi.md#activateEventHook) | **POST** /api/v1/eventHooks/{eventHookId}/lifecycle/activate | Activate an Event Hook
[**createEventHook**](EventHookApi.md#createEventHook) | **POST** /api/v1/eventHooks | Create an Event Hook
[**deactivateEventHook**](EventHookApi.md#deactivateEventHook) | **POST** /api/v1/eventHooks/{eventHookId}/lifecycle/deactivate | Deactivate an Event Hook
[**deleteEventHook**](EventHookApi.md#deleteEventHook) | **DELETE** /api/v1/eventHooks/{eventHookId} | Delete an Event Hook
[**getEventHook**](EventHookApi.md#getEventHook) | **GET** /api/v1/eventHooks/{eventHookId} | Retrieve an Event Hook
[**listEventHooks**](EventHookApi.md#listEventHooks) | **GET** /api/v1/eventHooks | List all Event Hooks
[**updateEventHook**](EventHookApi.md#updateEventHook) | **PUT** /api/v1/eventHooks/{eventHookId} | Replace an Event Hook
[**verifyEventHook**](EventHookApi.md#verifyEventHook) | **POST** /api/v1/eventHooks/{eventHookId}/lifecycle/verify | Verify an Event Hook


# **activateEventHook**
> EventHook activateEventHook()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.EventHookApi(configuration);

let body:okta.EventHookApiActivateEventHookRequest = {
  // string
  eventHookId: "eventHookId_example",
};

apiInstance.activateEventHook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventHookId** | [**string**] |  | defaults to undefined


### Return type

**EventHook**

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

# **createEventHook**
> EventHook createEventHook(eventHook)

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.EventHookApi(configuration);

let body:okta.EventHookApiCreateEventHookRequest = {
  // EventHook
  eventHook: {
    channel: {
      config: {
        authScheme: {
          key: "key_example",
          type: "HEADER",
          value: "value_example",
        },
        headers: [
          {
            key: "key_example",
            value: "value_example",
          },
        ],
        uri: "uri_example",
      },
      type: "HTTP",
      version: "version_example",
    },
    createdBy: "createdBy_example",
    events: {},
    name: "name_example",
    status: "ACTIVE",
    verificationStatus: "UNVERIFIED",
  },
};

apiInstance.createEventHook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventHook** | **EventHook**|  |


### Return type

**EventHook**

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

# **deactivateEventHook**
> EventHook deactivateEventHook()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.EventHookApi(configuration);

let body:okta.EventHookApiDeactivateEventHookRequest = {
  // string
  eventHookId: "eventHookId_example",
};

apiInstance.deactivateEventHook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventHookId** | [**string**] |  | defaults to undefined


### Return type

**EventHook**

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

# **deleteEventHook**
> void deleteEventHook()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.EventHookApi(configuration);

let body:okta.EventHookApiDeleteEventHookRequest = {
  // string
  eventHookId: "eventHookId_example",
};

apiInstance.deleteEventHook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventHookId** | [**string**] |  | defaults to undefined


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

# **getEventHook**
> EventHook getEventHook()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.EventHookApi(configuration);

let body:okta.EventHookApiGetEventHookRequest = {
  // string
  eventHookId: "eventHookId_example",
};

apiInstance.getEventHook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventHookId** | [**string**] |  | defaults to undefined


### Return type

**EventHook**

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

# **listEventHooks**
> Array<EventHook> listEventHooks()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.EventHookApi(configuration);

let body:any = {};

apiInstance.listEventHooks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<EventHook>**

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

# **updateEventHook**
> EventHook updateEventHook(eventHook)

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.EventHookApi(configuration);

let body:okta.EventHookApiUpdateEventHookRequest = {
  // string
  eventHookId: "eventHookId_example",
  // EventHook
  eventHook: {
    channel: {
      config: {
        authScheme: {
          key: "key_example",
          type: "HEADER",
          value: "value_example",
        },
        headers: [
          {
            key: "key_example",
            value: "value_example",
          },
        ],
        uri: "uri_example",
      },
      type: "HTTP",
      version: "version_example",
    },
    createdBy: "createdBy_example",
    events: {},
    name: "name_example",
    status: "ACTIVE",
    verificationStatus: "UNVERIFIED",
  },
};

apiInstance.updateEventHook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventHook** | **EventHook**|  |
 **eventHookId** | [**string**] |  | defaults to undefined


### Return type

**EventHook**

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

# **verifyEventHook**
> EventHook verifyEventHook()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.EventHookApi(configuration);

let body:okta.EventHookApiVerifyEventHookRequest = {
  // string
  eventHookId: "eventHookId_example",
};

apiInstance.verifyEventHook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventHookId** | [**string**] |  | defaults to undefined


### Return type

**EventHook**

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


