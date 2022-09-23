# okta.TrustedOriginApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateOrigin**](TrustedOriginApi.md#activateOrigin) | **POST** /api/v1/trustedOrigins/{trustedOriginId}/lifecycle/activate | Activate a Trusted Origin
[**createOrigin**](TrustedOriginApi.md#createOrigin) | **POST** /api/v1/trustedOrigins | Create a Trusted Origin
[**deactivateOrigin**](TrustedOriginApi.md#deactivateOrigin) | **POST** /api/v1/trustedOrigins/{trustedOriginId}/lifecycle/deactivate | Deactivate a Trusted Origin
[**deleteOrigin**](TrustedOriginApi.md#deleteOrigin) | **DELETE** /api/v1/trustedOrigins/{trustedOriginId} | Delete a Trusted Origin
[**getOrigin**](TrustedOriginApi.md#getOrigin) | **GET** /api/v1/trustedOrigins/{trustedOriginId} | Retrieve a Trusted Origin
[**listOrigins**](TrustedOriginApi.md#listOrigins) | **GET** /api/v1/trustedOrigins | List all Trusted Origins
[**updateOrigin**](TrustedOriginApi.md#updateOrigin) | **PUT** /api/v1/trustedOrigins/{trustedOriginId} | Replace a Trusted Origin


# **activateOrigin**
> TrustedOrigin activateOrigin()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.TrustedOriginApi(configuration);

let body:okta.TrustedOriginApiActivateOriginRequest = {
  // string
  trustedOriginId: "trustedOriginId_example",
};

apiInstance.activateOrigin(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trustedOriginId** | [**string**] |  | defaults to undefined


### Return type

**TrustedOrigin**

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

# **createOrigin**
> TrustedOrigin createOrigin(trustedOrigin)

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.TrustedOriginApi(configuration);

let body:okta.TrustedOriginApiCreateOriginRequest = {
  // TrustedOrigin
  trustedOrigin: {
    createdBy: "createdBy_example",
    lastUpdatedBy: "lastUpdatedBy_example",
    name: "name_example",
    origin: "origin_example",
    scopes: [
      {
        allowedOktaApps: [
          "OKTA_ENDUSER",
        ],
        type: "CORS",
      },
    ],
    status: "status_example",
  },
};

apiInstance.createOrigin(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trustedOrigin** | **TrustedOrigin**|  |


### Return type

**TrustedOrigin**

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

# **deactivateOrigin**
> TrustedOrigin deactivateOrigin()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.TrustedOriginApi(configuration);

let body:okta.TrustedOriginApiDeactivateOriginRequest = {
  // string
  trustedOriginId: "trustedOriginId_example",
};

apiInstance.deactivateOrigin(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trustedOriginId** | [**string**] |  | defaults to undefined


### Return type

**TrustedOrigin**

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

# **deleteOrigin**
> void deleteOrigin()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.TrustedOriginApi(configuration);

let body:okta.TrustedOriginApiDeleteOriginRequest = {
  // string
  trustedOriginId: "trustedOriginId_example",
};

apiInstance.deleteOrigin(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trustedOriginId** | [**string**] |  | defaults to undefined


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
**204** | Success |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrigin**
> TrustedOrigin getOrigin()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.TrustedOriginApi(configuration);

let body:okta.TrustedOriginApiGetOriginRequest = {
  // string
  trustedOriginId: "trustedOriginId_example",
};

apiInstance.getOrigin(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trustedOriginId** | [**string**] |  | defaults to undefined


### Return type

**TrustedOrigin**

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

# **listOrigins**
> Array<TrustedOrigin> listOrigins()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.TrustedOriginApi(configuration);

let body:okta.TrustedOriginApiListOriginsRequest = {
  // string (optional)
  q: "q_example",
  // string (optional)
  filter: "filter_example",
  // string (optional)
  after: "after_example",
  // number (optional)
  limit: -1,
};

apiInstance.listOrigins(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] |  | (optional) defaults to undefined
 **filter** | [**string**] |  | (optional) defaults to undefined
 **after** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to -1


### Return type

**Array<TrustedOrigin>**

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

# **updateOrigin**
> TrustedOrigin updateOrigin(trustedOrigin)

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.TrustedOriginApi(configuration);

let body:okta.TrustedOriginApiUpdateOriginRequest = {
  // string
  trustedOriginId: "trustedOriginId_example",
  // TrustedOrigin
  trustedOrigin: {
    createdBy: "createdBy_example",
    lastUpdatedBy: "lastUpdatedBy_example",
    name: "name_example",
    origin: "origin_example",
    scopes: [
      {
        allowedOktaApps: [
          "OKTA_ENDUSER",
        ],
        type: "CORS",
      },
    ],
    status: "status_example",
  },
};

apiInstance.updateOrigin(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trustedOrigin** | **TrustedOrigin**|  |
 **trustedOriginId** | [**string**] |  | defaults to undefined


### Return type

**TrustedOrigin**

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


