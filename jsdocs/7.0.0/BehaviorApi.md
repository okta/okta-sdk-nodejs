# okta.BehaviorApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateBehaviorDetectionRule**](BehaviorApi.md#activateBehaviorDetectionRule) | **POST** /api/v1/behaviors/{behaviorId}/lifecycle/activate | Activate a Behavior Detection Rule
[**createBehaviorDetectionRule**](BehaviorApi.md#createBehaviorDetectionRule) | **POST** /api/v1/behaviors | Create a Behavior Detection Rule
[**deactivateBehaviorDetectionRule**](BehaviorApi.md#deactivateBehaviorDetectionRule) | **POST** /api/v1/behaviors/{behaviorId}/lifecycle/deactivate | Deactivate a Behavior Detection Rule
[**deleteBehaviorDetectionRule**](BehaviorApi.md#deleteBehaviorDetectionRule) | **DELETE** /api/v1/behaviors/{behaviorId} | Delete a Behavior Detection Rule
[**getBehaviorDetectionRule**](BehaviorApi.md#getBehaviorDetectionRule) | **GET** /api/v1/behaviors/{behaviorId} | Retrieve a Behavior Detection Rule
[**listBehaviorDetectionRules**](BehaviorApi.md#listBehaviorDetectionRules) | **GET** /api/v1/behaviors | List all Behavior Detection Rules
[**updateBehaviorDetectionRule**](BehaviorApi.md#updateBehaviorDetectionRule) | **PUT** /api/v1/behaviors/{behaviorId} | Replace a Behavior Detection Rule


# **activateBehaviorDetectionRule**
> BehaviorRule activateBehaviorDetectionRule()

Activate Behavior Detection Rule

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.BehaviorApi(configuration);

let body:okta.BehaviorApiActivateBehaviorDetectionRuleRequest = {
  // string | id of the Behavior Detection Rule
  behaviorId: "abcd1234",
};

apiInstance.activateBehaviorDetectionRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **behaviorId** | [**string**] | id of the Behavior Detection Rule | defaults to undefined


### Return type

**BehaviorRule**

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

# **createBehaviorDetectionRule**
> BehaviorRule createBehaviorDetectionRule(rule)

Adds a new Behavior Detection Rule to your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.BehaviorApi(configuration);

let body:okta.BehaviorApiCreateBehaviorDetectionRuleRequest = {
  // BehaviorRule
  rule: {},
};

apiInstance.createBehaviorDetectionRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule** | **BehaviorRule**|  |


### Return type

**BehaviorRule**

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

# **deactivateBehaviorDetectionRule**
> BehaviorRule deactivateBehaviorDetectionRule()

Deactivate Behavior Detection Rule

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.BehaviorApi(configuration);

let body:okta.BehaviorApiDeactivateBehaviorDetectionRuleRequest = {
  // string | id of the Behavior Detection Rule
  behaviorId: "abcd1234",
};

apiInstance.deactivateBehaviorDetectionRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **behaviorId** | [**string**] | id of the Behavior Detection Rule | defaults to undefined


### Return type

**BehaviorRule**

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

# **deleteBehaviorDetectionRule**
> void deleteBehaviorDetectionRule()

Delete a Behavior Detection Rule by `behaviorId`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.BehaviorApi(configuration);

let body:okta.BehaviorApiDeleteBehaviorDetectionRuleRequest = {
  // string | id of the Behavior Detection Rule
  behaviorId: "abcd1234",
};

apiInstance.deleteBehaviorDetectionRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **behaviorId** | [**string**] | id of the Behavior Detection Rule | defaults to undefined


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

# **getBehaviorDetectionRule**
> BehaviorRule getBehaviorDetectionRule()

Fetches a Behavior Detection Rule by `behaviorId`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.BehaviorApi(configuration);

let body:okta.BehaviorApiGetBehaviorDetectionRuleRequest = {
  // string | id of the Behavior Detection Rule
  behaviorId: "abcd1234",
};

apiInstance.getBehaviorDetectionRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **behaviorId** | [**string**] | id of the Behavior Detection Rule | defaults to undefined


### Return type

**BehaviorRule**

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

# **listBehaviorDetectionRules**
> Array<BehaviorRule> listBehaviorDetectionRules()

Enumerates Behavior Detection Rules in your organization with pagination.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.BehaviorApi(configuration);

let body:any = {};

apiInstance.listBehaviorDetectionRules(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<BehaviorRule>**

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

# **updateBehaviorDetectionRule**
> BehaviorRule updateBehaviorDetectionRule(rule)

Update a Behavior Detection Rule by `behaviorId`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.BehaviorApi(configuration);

let body:okta.BehaviorApiUpdateBehaviorDetectionRuleRequest = {
  // string | id of the Behavior Detection Rule
  behaviorId: "abcd1234",
  // BehaviorRule
  rule: {},
};

apiInstance.updateBehaviorDetectionRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule** | **BehaviorRule**|  |
 **behaviorId** | [**string**] | id of the Behavior Detection Rule | defaults to undefined


### Return type

**BehaviorRule**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


