# okta.PrincipalRateLimitApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPrincipalRateLimitEntity**](PrincipalRateLimitApi.md#createPrincipalRateLimitEntity) | **POST** /api/v1/principal-rate-limits | Create a Principal Rate Limit
[**getPrincipalRateLimitEntity**](PrincipalRateLimitApi.md#getPrincipalRateLimitEntity) | **GET** /api/v1/principal-rate-limits/{principalRateLimitId} | Retrieve a Principal Rate Limit
[**listPrincipalRateLimitEntities**](PrincipalRateLimitApi.md#listPrincipalRateLimitEntities) | **GET** /api/v1/principal-rate-limits | List all Principal Rate Limits
[**updatePrincipalRateLimitEntity**](PrincipalRateLimitApi.md#updatePrincipalRateLimitEntity) | **PUT** /api/v1/principal-rate-limits/{principalRateLimitId} | Replace a Principal Rate Limit


# **createPrincipalRateLimitEntity**
> PrincipalRateLimitEntity createPrincipalRateLimitEntity(entity)

Adds a new Principal Rate Limit entity to your organization. In the current release, we only allow one Principal Rate Limit entity per org and principal.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PrincipalRateLimitApi(configuration);

let body:okta.PrincipalRateLimitApiCreatePrincipalRateLimitEntityRequest = {
  // PrincipalRateLimitEntity
  entity: {
    principalId: "principalId_example",
    principalType: "SSWS_TOKEN",
  },
};

apiInstance.createPrincipalRateLimitEntity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity** | **PrincipalRateLimitEntity**|  |


### Return type

**PrincipalRateLimitEntity**

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

# **getPrincipalRateLimitEntity**
> PrincipalRateLimitEntity getPrincipalRateLimitEntity()

Fetches a Principal Rate Limit entity by `principalRateLimitId`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PrincipalRateLimitApi(configuration);

let body:okta.PrincipalRateLimitApiGetPrincipalRateLimitEntityRequest = {
  // string | id of the Principal Rate Limit
  principalRateLimitId: "abcd1234",
};

apiInstance.getPrincipalRateLimitEntity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **principalRateLimitId** | [**string**] | id of the Principal Rate Limit | defaults to undefined


### Return type

**PrincipalRateLimitEntity**

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

# **listPrincipalRateLimitEntities**
> Array<PrincipalRateLimitEntity> listPrincipalRateLimitEntities()

Lists all Principal Rate Limit entities considering the provided parameters.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PrincipalRateLimitApi(configuration);

let body:okta.PrincipalRateLimitApiListPrincipalRateLimitEntitiesRequest = {
  // string (optional)
  filter: "filter_example",
  // string (optional)
  after: "after_example",
  // number (optional)
  limit: 20,
};

apiInstance.listPrincipalRateLimitEntities(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] |  | (optional) defaults to undefined
 **after** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 20


### Return type

**Array<PrincipalRateLimitEntity>**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePrincipalRateLimitEntity**
> PrincipalRateLimitEntity updatePrincipalRateLimitEntity(entity)

Update a  Principal Rate Limit entity by `principalRateLimitId`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PrincipalRateLimitApi(configuration);

let body:okta.PrincipalRateLimitApiUpdatePrincipalRateLimitEntityRequest = {
  // string | id of the Principal Rate Limit
  principalRateLimitId: "abcd1234",
  // PrincipalRateLimitEntity
  entity: {
    principalId: "principalId_example",
    principalType: "SSWS_TOKEN",
  },
};

apiInstance.updatePrincipalRateLimitEntity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity** | **PrincipalRateLimitEntity**|  |
 **principalRateLimitId** | [**string**] | id of the Principal Rate Limit | defaults to undefined


### Return type

**PrincipalRateLimitEntity**

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


