# okta.DeviceAssuranceApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDeviceAssurancePolicy**](DeviceAssuranceApi.md#createDeviceAssurancePolicy) | **POST** /api/v1/device-assurances | Create a Device Assurance Policy
[**deleteDeviceAssurancePolicy**](DeviceAssuranceApi.md#deleteDeviceAssurancePolicy) | **DELETE** /api/v1/device-assurances/{deviceAssuranceId} | Delete a Device Assurance Policy
[**getDeviceAssurancePolicy**](DeviceAssuranceApi.md#getDeviceAssurancePolicy) | **GET** /api/v1/device-assurances/{deviceAssuranceId} | Retrieve a Device Assurance Policy
[**listDeviceAssurancePolicies**](DeviceAssuranceApi.md#listDeviceAssurancePolicies) | **GET** /api/v1/device-assurances | List all Device Assurance Policies
[**updateDeviceAssurancePolicy**](DeviceAssuranceApi.md#updateDeviceAssurancePolicy) | **PUT** /api/v1/device-assurances/{deviceAssuranceId} | Replace a Device Assurance Policy


# **createDeviceAssurancePolicy**
> DeviceAssurance createDeviceAssurancePolicy(deviceAssurance)

Adds a new Device Assurance Policy.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.DeviceAssuranceApi(configuration);

let body:okta.DeviceAssuranceApiCreateDeviceAssurancePolicyRequest = {
  // DeviceAssurance
  deviceAssurance: {
    diskEncryptionType: {
      include: [
        "ALL_INTERNAL_VOLUMES",
      ],
    },
    jailbreak: true,
    name: "name_example",
    osVersion: {
      minimum: "minimum_example",
    },
    platform: "ANDROID",
    screenLockType: {
      include: [
        "BIOMETRIC",
      ],
    },
    secureHardwarePresent: true,
  },
};

apiInstance.createDeviceAssurancePolicy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceAssurance** | **DeviceAssurance**|  |


### Return type

**DeviceAssurance**

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

# **deleteDeviceAssurancePolicy**
> void deleteDeviceAssurancePolicy()

Delete a Device Assurance Policy by `deviceAssuranceId`. If the Device Assurance Policy is currently being used in the org Authentication Policies, the delete will not be allowed.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.DeviceAssuranceApi(configuration);

let body:okta.DeviceAssuranceApiDeleteDeviceAssurancePolicyRequest = {
  // string | Id of the Device Assurance Policy
  deviceAssuranceId: "deviceAssuranceId_example",
};

apiInstance.deleteDeviceAssurancePolicy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceAssuranceId** | [**string**] | Id of the Device Assurance Policy | defaults to undefined


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

# **getDeviceAssurancePolicy**
> DeviceAssurance getDeviceAssurancePolicy()

Fetches a Device Assurance Policy by `deviceAssuranceId`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.DeviceAssuranceApi(configuration);

let body:okta.DeviceAssuranceApiGetDeviceAssurancePolicyRequest = {
  // string | Id of the Device Assurance Policy
  deviceAssuranceId: "deviceAssuranceId_example",
};

apiInstance.getDeviceAssurancePolicy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceAssuranceId** | [**string**] | Id of the Device Assurance Policy | defaults to undefined


### Return type

**DeviceAssurance**

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

# **listDeviceAssurancePolicies**
> Array<DeviceAssurance> listDeviceAssurancePolicies()

Enumerates Device Assurance Policies in your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.DeviceAssuranceApi(configuration);

let body:any = {};

apiInstance.listDeviceAssurancePolicies(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<DeviceAssurance>**

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

# **updateDeviceAssurancePolicy**
> DeviceAssurance updateDeviceAssurancePolicy(deviceAssurance)

Updates a Device Assurance Policy by `deviceAssuranceId`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.DeviceAssuranceApi(configuration);

let body:okta.DeviceAssuranceApiUpdateDeviceAssurancePolicyRequest = {
  // string | Id of the Device Assurance Policy
  deviceAssuranceId: "deviceAssuranceId_example",
  // DeviceAssurance
  deviceAssurance: {
    diskEncryptionType: {
      include: [
        "ALL_INTERNAL_VOLUMES",
      ],
    },
    jailbreak: true,
    name: "name_example",
    osVersion: {
      minimum: "minimum_example",
    },
    platform: "ANDROID",
    screenLockType: {
      include: [
        "BIOMETRIC",
      ],
    },
    secureHardwarePresent: true,
  },
};

apiInstance.updateDeviceAssurancePolicy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceAssurance** | **DeviceAssurance**|  |
 **deviceAssuranceId** | [**string**] | Id of the Device Assurance Policy | defaults to undefined


### Return type

**DeviceAssurance**

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


