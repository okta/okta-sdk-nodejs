# okta.RiskProviderApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRiskProvider**](RiskProviderApi.md#createRiskProvider) | **POST** /api/v1/risk/providers | Create a Risk Provider
[**deleteRiskProvider**](RiskProviderApi.md#deleteRiskProvider) | **DELETE** /api/v1/risk/providers/{riskProviderId} | Delete a Risk Provider
[**getRiskProvider**](RiskProviderApi.md#getRiskProvider) | **GET** /api/v1/risk/providers/{riskProviderId} | Retrieve a Risk Provider
[**listRiskProviders**](RiskProviderApi.md#listRiskProviders) | **GET** /api/v1/risk/providers | List all Risk Providers
[**updateRiskProvider**](RiskProviderApi.md#updateRiskProvider) | **PUT** /api/v1/risk/providers/{riskProviderId} | Replace a Risk Provider


# **createRiskProvider**
> RiskProvider createRiskProvider(instance)

Creates a risk provider. A maximum of 3 providers can be created. By default, one risk provider is created by Okta.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RiskProviderApi(configuration);

let body:okta.RiskProviderApiCreateRiskProviderRequest = {
  // RiskProvider
  instance: {
    action: "log_only",
    clientId: "clientId_example",
    name: "name_example",
  },
};

apiInstance.createRiskProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance** | **RiskProvider**|  |


### Return type

**RiskProvider**

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

# **deleteRiskProvider**
> void deleteRiskProvider()

Delete a CAPTCHA instance by `riskProviderId`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RiskProviderApi(configuration);

let body:okta.RiskProviderApiDeleteRiskProviderRequest = {
  // string | `id` of the risk provider
  riskProviderId: "00rp12r4skkjkjgsn",
};

apiInstance.deleteRiskProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **riskProviderId** | [**string**] | &#x60;id&#x60; of the risk provider | defaults to undefined


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

# **getRiskProvider**
> RiskProvider getRiskProvider()

Retrieves a risk provider by `riskProviderId`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RiskProviderApi(configuration);

let body:okta.RiskProviderApiGetRiskProviderRequest = {
  // string | `id` of the risk provider
  riskProviderId: "00rp12r4skkjkjgsn",
};

apiInstance.getRiskProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **riskProviderId** | [**string**] | &#x60;id&#x60; of the risk provider | defaults to undefined


### Return type

**RiskProvider**

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

# **listRiskProviders**
> Array<RiskProvider> listRiskProviders()

Lists all Risk Providers

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RiskProviderApi(configuration);

let body:any = {};

apiInstance.listRiskProviders(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<RiskProvider>**

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

# **updateRiskProvider**
> RiskProvider updateRiskProvider(instance)

Replaces a risk provider by `riskProviderId`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RiskProviderApi(configuration);

let body:okta.RiskProviderApiUpdateRiskProviderRequest = {
  // string | `id` of the risk provider
  riskProviderId: "00rp12r4skkjkjgsn",
  // RiskProvider
  instance: {
    action: "log_only",
    clientId: "clientId_example",
    name: "name_example",
  },
};

apiInstance.updateRiskProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance** | **RiskProvider**|  |
 **riskProviderId** | [**string**] | &#x60;id&#x60; of the risk provider | defaults to undefined


### Return type

**RiskProvider**

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


