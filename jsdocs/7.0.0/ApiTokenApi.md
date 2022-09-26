# okta.ApiTokenApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApiToken**](ApiTokenApi.md#getApiToken) | **GET** /api/v1/api-tokens/{apiTokenId} | Retrieve an API Token&#39;s Metadata
[**listApiTokens**](ApiTokenApi.md#listApiTokens) | **GET** /api/v1/api-tokens | List all API Token Metadata
[**revokeApiToken**](ApiTokenApi.md#revokeApiToken) | **DELETE** /api/v1/api-tokens/{apiTokenId} | Revoke an API Token
[**revokeCurrentApiToken**](ApiTokenApi.md#revokeCurrentApiToken) | **DELETE** /api/v1/api-tokens/current | Revoke the Current API Token


# **getApiToken**
> ApiToken getApiToken()

Get the metadata for an active API token by id.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApiTokenApi(configuration);

let body:okta.ApiTokenApiGetApiTokenRequest = {
  // string | id of the API Token
  apiTokenId: "00Tabcdefg1234567890",
};

apiInstance.getApiToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiTokenId** | [**string**] | id of the API Token | defaults to undefined


### Return type

**ApiToken**

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

# **listApiTokens**
> Array<ApiToken> listApiTokens()

Enumerates the metadata of the active API tokens in your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApiTokenApi(configuration);

let body:okta.ApiTokenApiListApiTokensRequest = {
  // string | The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the `Link` response header. See [Pagination](/#pagination) for more information. (optional)
  after: "after_example",
  // number | A limit on the number of objects to return. (optional)
  limit: 20,
  // string | Finds a token that matches the name or clientName. (optional)
  q: "q_example",
};

apiInstance.listApiTokens(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **after** | [**string**] | The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information. | (optional) defaults to undefined
 **limit** | [**number**] | A limit on the number of objects to return. | (optional) defaults to 20
 **q** | [**string**] | Finds a token that matches the name or clientName. | (optional) defaults to undefined


### Return type

**Array<ApiToken>**

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

# **revokeApiToken**
> void revokeApiToken()

Revoke an API token by id.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApiTokenApi(configuration);

let body:okta.ApiTokenApiRevokeApiTokenRequest = {
  // string | id of the API Token
  apiTokenId: "00Tabcdefg1234567890",
};

apiInstance.revokeApiToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiTokenId** | [**string**] | id of the API Token | defaults to undefined


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

# **revokeCurrentApiToken**
> void revokeCurrentApiToken()

Revokes the API token provided in the Authorization header.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApiTokenApi(configuration);

let body:any = {};

apiInstance.revokeCurrentApiToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

[API_Token](README.md#API_Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**403** | Forbidden |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


