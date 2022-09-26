# okta.ProfileMappingApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProfileMapping**](ProfileMappingApi.md#getProfileMapping) | **GET** /api/v1/mappings/{mappingId} | Retrieve a Profile Mapping
[**listProfileMappings**](ProfileMappingApi.md#listProfileMappings) | **GET** /api/v1/mappings | List all Profile Mappings
[**updateProfileMapping**](ProfileMappingApi.md#updateProfileMapping) | **POST** /api/v1/mappings/{mappingId} | Update a Profile Mapping


# **getProfileMapping**
> ProfileMapping getProfileMapping()

Fetches a single Profile Mapping referenced by its ID.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ProfileMappingApi(configuration);

let body:okta.ProfileMappingApiGetProfileMappingRequest = {
  // string
  mappingId: "mappingId_example",
};

apiInstance.getProfileMapping(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mappingId** | [**string**] |  | defaults to undefined


### Return type

**ProfileMapping**

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

# **listProfileMappings**
> Array<ProfileMapping> listProfileMappings()

Enumerates Profile Mappings in your organization with pagination.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ProfileMappingApi(configuration);

let body:okta.ProfileMappingApiListProfileMappingsRequest = {
  // string (optional)
  after: "after_example",
  // number (optional)
  limit: -1,
  // string (optional)
  sourceId: "sourceId_example",
  // string (optional)
  targetId: "",
};

apiInstance.listProfileMappings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **after** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to -1
 **sourceId** | [**string**] |  | (optional) defaults to undefined
 **targetId** | [**string**] |  | (optional) defaults to ''


### Return type

**Array<ProfileMapping>**

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

# **updateProfileMapping**
> ProfileMapping updateProfileMapping(profileMapping)

Updates an existing Profile Mapping by adding, updating, or removing one or many Property Mappings.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ProfileMappingApi(configuration);

let body:okta.ProfileMappingApiUpdateProfileMappingRequest = {
  // string
  mappingId: "mappingId_example",
  // ProfileMapping
  profileMapping: {
    source: {
    },
    target: {
    },
  },
};

apiInstance.updateProfileMapping(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileMapping** | **ProfileMapping**|  |
 **mappingId** | [**string**] |  | defaults to undefined


### Return type

**ProfileMapping**

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


