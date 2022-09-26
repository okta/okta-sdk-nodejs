# okta.CAPTCHAApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCaptchaInstance**](CAPTCHAApi.md#createCaptchaInstance) | **POST** /api/v1/captchas | Create a CAPTCHA instance
[**deleteCaptchaInstance**](CAPTCHAApi.md#deleteCaptchaInstance) | **DELETE** /api/v1/captchas/{captchaId} | Delete a CAPTCHA Instance
[**getCaptchaInstance**](CAPTCHAApi.md#getCaptchaInstance) | **GET** /api/v1/captchas/{captchaId} | Retrieve a CAPTCHA Instance
[**listCaptchaInstances**](CAPTCHAApi.md#listCaptchaInstances) | **GET** /api/v1/captchas | List all CAPTCHA instances
[**partialUpdateCaptchaInstance**](CAPTCHAApi.md#partialUpdateCaptchaInstance) | **POST** /api/v1/captchas/{captchaId} | Update a CAPTCHA instance
[**updateCaptchaInstance**](CAPTCHAApi.md#updateCaptchaInstance) | **PUT** /api/v1/captchas/{captchaId} | Replace a CAPTCHA instance


# **createCaptchaInstance**
> CAPTCHAInstance createCaptchaInstance(instance)

Adds a new CAPTCHA instance to your organization. In the current release, we only allow one CAPTCHA instance per org.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CAPTCHAApi(configuration);

let body:okta.CAPTCHAApiCreateCaptchaInstanceRequest = {
  // CAPTCHAInstance
  instance: {
    name: "name_example",
    secretKey: "secretKey_example",
    siteKey: "siteKey_example",
    type: "HCAPTCHA",
  },
};

apiInstance.createCaptchaInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance** | **CAPTCHAInstance**|  |


### Return type

**CAPTCHAInstance**

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

# **deleteCaptchaInstance**
> void deleteCaptchaInstance()

Delete a CAPTCHA instance by `captchaId`. If the CAPTCHA instance is currently being used in the org, the delete will not be allowed.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CAPTCHAApi(configuration);

let body:okta.CAPTCHAApiDeleteCaptchaInstanceRequest = {
  // string | id of the CAPTCHA
  captchaId: "abcd1234",
};

apiInstance.deleteCaptchaInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **captchaId** | [**string**] | id of the CAPTCHA | defaults to undefined


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

# **getCaptchaInstance**
> CAPTCHAInstance getCaptchaInstance()

Fetches a CAPTCHA instance by `captchaId`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CAPTCHAApi(configuration);

let body:okta.CAPTCHAApiGetCaptchaInstanceRequest = {
  // string | id of the CAPTCHA
  captchaId: "abcd1234",
};

apiInstance.getCaptchaInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **captchaId** | [**string**] | id of the CAPTCHA | defaults to undefined


### Return type

**CAPTCHAInstance**

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

# **listCaptchaInstances**
> Array<CAPTCHAInstance> listCaptchaInstances()

Enumerates CAPTCHA instances in your organization with pagination. A subset of CAPTCHA instances can be returned that match a supported filter expression or query.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CAPTCHAApi(configuration);

let body:any = {};

apiInstance.listCaptchaInstances(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<CAPTCHAInstance>**

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

# **partialUpdateCaptchaInstance**
> CAPTCHAInstance partialUpdateCaptchaInstance(instance)

Partially update a CAPTCHA instance by `captchaId`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CAPTCHAApi(configuration);

let body:okta.CAPTCHAApiPartialUpdateCaptchaInstanceRequest = {
  // string | id of the CAPTCHA
  captchaId: "abcd1234",
  // CAPTCHAInstance
  instance: {
    name: "name_example",
    secretKey: "secretKey_example",
    siteKey: "siteKey_example",
    type: "HCAPTCHA",
  },
};

apiInstance.partialUpdateCaptchaInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance** | **CAPTCHAInstance**|  |
 **captchaId** | [**string**] | id of the CAPTCHA | defaults to undefined


### Return type

**CAPTCHAInstance**

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

# **updateCaptchaInstance**
> CAPTCHAInstance updateCaptchaInstance(instance)

Update a CAPTCHA instance by `captchaId`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CAPTCHAApi(configuration);

let body:okta.CAPTCHAApiUpdateCaptchaInstanceRequest = {
  // string | id of the CAPTCHA
  captchaId: "abcd1234",
  // CAPTCHAInstance
  instance: {
    name: "name_example",
    secretKey: "secretKey_example",
    siteKey: "siteKey_example",
    type: "HCAPTCHA",
  },
};

apiInstance.updateCaptchaInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance** | **CAPTCHAInstance**|  |
 **captchaId** | [**string**] | id of the CAPTCHA | defaults to undefined


### Return type

**CAPTCHAInstance**

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


