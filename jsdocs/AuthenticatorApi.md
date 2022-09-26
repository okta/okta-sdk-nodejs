# okta.AuthenticatorApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateAuthenticator**](AuthenticatorApi.md#activateAuthenticator) | **POST** /api/v1/authenticators/{authenticatorId}/lifecycle/activate | Activate an Authenticator
[**createAuthenticator**](AuthenticatorApi.md#createAuthenticator) | **POST** /api/v1/authenticators | Create an Authenticator
[**deactivateAuthenticator**](AuthenticatorApi.md#deactivateAuthenticator) | **POST** /api/v1/authenticators/{authenticatorId}/lifecycle/deactivate | Deactivate an Authenticator
[**getAuthenticator**](AuthenticatorApi.md#getAuthenticator) | **GET** /api/v1/authenticators/{authenticatorId} | Retrieve an Authenticator
[**listAuthenticators**](AuthenticatorApi.md#listAuthenticators) | **GET** /api/v1/authenticators | List all Authenticators
[**updateAuthenticator**](AuthenticatorApi.md#updateAuthenticator) | **PUT** /api/v1/authenticators/{authenticatorId} | Replace an Authenticator


# **activateAuthenticator**
> Authenticator activateAuthenticator()

Activates an authenticator by `authenticatorId`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthenticatorApi(configuration);

let body:okta.AuthenticatorApiActivateAuthenticatorRequest = {
  // string
  authenticatorId: "authenticatorId_example",
};

apiInstance.activateAuthenticator(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authenticatorId** | [**string**] |  | defaults to undefined


### Return type

**Authenticator**

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

# **createAuthenticator**
> Authenticator createAuthenticator(authenticator)

Creates an authenticator. You can use this operation as part of the \"Create a custom authenticator\" flow. See the [Custom authenticator integration guide](https://developer.okta.com/docs/guides/authenticators-custom-authenticator/android/main/).

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthenticatorApi(configuration);

let body:okta.AuthenticatorApiCreateAuthenticatorRequest = {
  // Authenticator
  authenticator: {
    key: "key_example",
    name: "name_example",
    provider: null,
    settings: {
      allowedFor: "any",
      appInstanceId: "appInstanceId_example",
      channelBinding: {
        required: "ALWAYS",
        style: "style_example",
      },
      compliance: {
        fips: "OPTIONAL",
      },
      tokenLifetimeInMinutes: 1,
      userVerification: "PREFERRED",
    },
    status: "ACTIVE",
    type: "app",
  },
  // boolean | Whether to execute the activation lifecycle operation when Okta creates the authenticator (optional)
  activate: false,
};

apiInstance.createAuthenticator(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authenticator** | **Authenticator**|  |
 **activate** | [**boolean**] | Whether to execute the activation lifecycle operation when Okta creates the authenticator | (optional) defaults to undefined


### Return type

**Authenticator**

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

# **deactivateAuthenticator**
> Authenticator deactivateAuthenticator()

Deactivates an authenticator by `authenticatorId`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthenticatorApi(configuration);

let body:okta.AuthenticatorApiDeactivateAuthenticatorRequest = {
  // string
  authenticatorId: "authenticatorId_example",
};

apiInstance.deactivateAuthenticator(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authenticatorId** | [**string**] |  | defaults to undefined


### Return type

**Authenticator**

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

# **getAuthenticator**
> Authenticator getAuthenticator()

Fetches an authenticator from your Okta organization by `authenticatorId`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthenticatorApi(configuration);

let body:okta.AuthenticatorApiGetAuthenticatorRequest = {
  // string
  authenticatorId: "authenticatorId_example",
};

apiInstance.getAuthenticator(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authenticatorId** | [**string**] |  | defaults to undefined


### Return type

**Authenticator**

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

# **listAuthenticators**
> Array<Authenticator> listAuthenticators()

Enumerates authenticators in your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthenticatorApi(configuration);

let body:any = {};

apiInstance.listAuthenticators(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Authenticator>**

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

# **updateAuthenticator**
> Authenticator updateAuthenticator(authenticator)

Updates an authenticator

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthenticatorApi(configuration);

let body:okta.AuthenticatorApiUpdateAuthenticatorRequest = {
  // string
  authenticatorId: "authenticatorId_example",
  // Authenticator
  authenticator: {
    key: "key_example",
    name: "name_example",
    provider: null,
    settings: {
      allowedFor: "any",
      appInstanceId: "appInstanceId_example",
      channelBinding: {
        required: "ALWAYS",
        style: "style_example",
      },
      compliance: {
        fips: "OPTIONAL",
      },
      tokenLifetimeInMinutes: 1,
      userVerification: "PREFERRED",
    },
    status: "ACTIVE",
    type: "app",
  },
};

apiInstance.updateAuthenticator(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authenticator** | **Authenticator**|  |
 **authenticatorId** | [**string**] |  | defaults to undefined


### Return type

**Authenticator**

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


