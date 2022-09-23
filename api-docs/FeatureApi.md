# okta.FeatureApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFeature**](FeatureApi.md#getFeature) | **GET** /api/v1/features/{featureId} | Retrieve a Feature
[**listFeatureDependencies**](FeatureApi.md#listFeatureDependencies) | **GET** /api/v1/features/{featureId}/dependencies | List all Dependencies
[**listFeatureDependents**](FeatureApi.md#listFeatureDependents) | **GET** /api/v1/features/{featureId}/dependents | List all Dependents
[**listFeatures**](FeatureApi.md#listFeatures) | **GET** /api/v1/features | List all Features
[**updateFeatureLifecycle**](FeatureApi.md#updateFeatureLifecycle) | **POST** /api/v1/features/{featureId}/{lifecycle} | Update a Feature Lifecycle


# **getFeature**
> Feature getFeature()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.FeatureApi(configuration);

let body:okta.FeatureApiGetFeatureRequest = {
  // string
  featureId: "featureId_example",
};

apiInstance.getFeature(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **featureId** | [**string**] |  | defaults to undefined


### Return type

**Feature**

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

# **listFeatureDependencies**
> Array<Feature> listFeatureDependencies()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.FeatureApi(configuration);

let body:okta.FeatureApiListFeatureDependenciesRequest = {
  // string
  featureId: "featureId_example",
};

apiInstance.listFeatureDependencies(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **featureId** | [**string**] |  | defaults to undefined


### Return type

**Array<Feature>**

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

# **listFeatureDependents**
> Array<Feature> listFeatureDependents()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.FeatureApi(configuration);

let body:okta.FeatureApiListFeatureDependentsRequest = {
  // string
  featureId: "featureId_example",
};

apiInstance.listFeatureDependents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **featureId** | [**string**] |  | defaults to undefined


### Return type

**Array<Feature>**

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

# **listFeatures**
> Array<Feature> listFeatures()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.FeatureApi(configuration);

let body:any = {};

apiInstance.listFeatures(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Feature>**

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

# **updateFeatureLifecycle**
> Feature updateFeatureLifecycle()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.FeatureApi(configuration);

let body:okta.FeatureApiUpdateFeatureLifecycleRequest = {
  // string
  featureId: "featureId_example",
  // string
  lifecycle: "lifecycle_example",
  // string (optional)
  mode: "mode_example",
};

apiInstance.updateFeatureLifecycle(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **featureId** | [**string**] |  | defaults to undefined
 **lifecycle** | [**string**] |  | defaults to undefined
 **mode** | [**string**] |  | (optional) defaults to undefined


### Return type

**Feature**

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


