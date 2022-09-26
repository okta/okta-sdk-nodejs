# okta.PushProviderApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPushProvider**](PushProviderApi.md#createPushProvider) | **POST** /api/v1/push-providers | Create a Push Provider
[**deletePushProvider**](PushProviderApi.md#deletePushProvider) | **DELETE** /api/v1/push-providers/{pushProviderId} | Delete a Push Provider
[**getPushProvider**](PushProviderApi.md#getPushProvider) | **GET** /api/v1/push-providers/{pushProviderId} | Retrieve a Push Provider
[**listPushProviders**](PushProviderApi.md#listPushProviders) | **GET** /api/v1/push-providers | List all Push Providers
[**updatePushProvider**](PushProviderApi.md#updatePushProvider) | **PUT** /api/v1/push-providers/{pushProviderId} | Replace a Push Provider


# **createPushProvider**
> PushProvider createPushProvider(pushProvider)

Adds a new push provider to your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PushProviderApi(configuration);

let body:okta.PushProviderApiCreatePushProviderRequest = {
  // PushProvider
  pushProvider: {},
};

apiInstance.createPushProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushProvider** | **PushProvider**|  |


### Return type

**PushProvider**

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
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deletePushProvider**
> void deletePushProvider()

Delete a push provider by `pushProviderId`. If the push provider is currently being used in the org by a custom authenticator, the delete will not be allowed.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PushProviderApi(configuration);

let body:okta.PushProviderApiDeletePushProviderRequest = {
  // string | Id of the push provider
  pushProviderId: "pushProviderId_example",
};

apiInstance.deletePushProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushProviderId** | [**string**] | Id of the push provider | defaults to undefined


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
**409** | Conflict |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPushProvider**
> PushProvider getPushProvider()

Fetches a push provider by `pushProviderId`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PushProviderApi(configuration);

let body:okta.PushProviderApiGetPushProviderRequest = {
  // string | Id of the push provider
  pushProviderId: "pushProviderId_example",
};

apiInstance.getPushProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushProviderId** | [**string**] | Id of the push provider | defaults to undefined


### Return type

**PushProvider**

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

# **listPushProviders**
> Array<PushProvider> listPushProviders()

Enumerates push providers in your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PushProviderApi(configuration);

let body:okta.PushProviderApiListPushProvidersRequest = {
  // ProviderType | Filters push providers by `providerType` (optional)
  type: "APNS",
};

apiInstance.listPushProviders(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **ProviderType** | Filters push providers by &#x60;providerType&#x60; | (optional) defaults to undefined


### Return type

**Array<PushProvider>**

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

# **updatePushProvider**
> PushProvider updatePushProvider(pushProvider)

Updates a push provider by `pushProviderId`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PushProviderApi(configuration);

let body:okta.PushProviderApiUpdatePushProviderRequest = {
  // string | Id of the push provider
  pushProviderId: "pushProviderId_example",
  // PushProvider
  pushProvider: {},
};

apiInstance.updatePushProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushProvider** | **PushProvider**|  |
 **pushProviderId** | [**string**] | Id of the push provider | defaults to undefined


### Return type

**PushProvider**

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


