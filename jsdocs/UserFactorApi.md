# okta.UserFactorApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateFactor**](UserFactorApi.md#activateFactor) | **POST** /api/v1/users/{userId}/factors/{factorId}/lifecycle/activate | Activate a Factor
[**deleteFactor**](UserFactorApi.md#deleteFactor) | **DELETE** /api/v1/users/{userId}/factors/{factorId} | Delete a Factor
[**enrollFactor**](UserFactorApi.md#enrollFactor) | **POST** /api/v1/users/{userId}/factors | Enroll a Factor
[**getFactor**](UserFactorApi.md#getFactor) | **GET** /api/v1/users/{userId}/factors/{factorId} | Retrieve a Factor
[**getFactorTransactionStatus**](UserFactorApi.md#getFactorTransactionStatus) | **GET** /api/v1/users/{userId}/factors/{factorId}/transactions/{transactionId} | Retrieve a Factor Transaction Status
[**listFactors**](UserFactorApi.md#listFactors) | **GET** /api/v1/users/{userId}/factors | List all Factors
[**listSupportedFactors**](UserFactorApi.md#listSupportedFactors) | **GET** /api/v1/users/{userId}/factors/catalog | List all Supported Factors
[**listSupportedSecurityQuestions**](UserFactorApi.md#listSupportedSecurityQuestions) | **GET** /api/v1/users/{userId}/factors/questions | List all Supported Security Questions
[**verifyFactor**](UserFactorApi.md#verifyFactor) | **POST** /api/v1/users/{userId}/factors/{factorId}/verify | Verify an MFA Factor


# **activateFactor**
> UserFactor activateFactor()

The `sms` and `token:software:totp` factor types require activation to complete the enrollment process.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserFactorApi(configuration);

let body:okta.UserFactorApiActivateFactorRequest = {
  // string
  userId: "userId_example",
  // string
  factorId: "factorId_example",
  // ActivateFactorRequest (optional)
  body: {
    attestation: "attestation_example",
    clientData: "clientData_example",
    passCode: "passCode_example",
    registrationData: "registrationData_example",
    stateToken: "stateToken_example",
  },
};

apiInstance.activateFactor(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ActivateFactorRequest**|  |
 **userId** | [**string**] |  | defaults to undefined
 **factorId** | [**string**] |  | defaults to undefined


### Return type

**UserFactor**

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

# **deleteFactor**
> void deleteFactor()

Unenrolls an existing factor for the specified user, allowing the user to enroll a new factor.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserFactorApi(configuration);

let body:okta.UserFactorApiDeleteFactorRequest = {
  // string
  userId: "userId_example",
  // string
  factorId: "factorId_example",
  // boolean (optional)
  removeEnrollmentRecovery: false,
};

apiInstance.deleteFactor(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **factorId** | [**string**] |  | defaults to undefined
 **removeEnrollmentRecovery** | [**boolean**] |  | (optional) defaults to undefined


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

# **enrollFactor**
> UserFactor enrollFactor(body)

Enrolls a user with a supported factor.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserFactorApi(configuration);

let body:okta.UserFactorApiEnrollFactorRequest = {
  // string
  userId: "userId_example",
  // UserFactor | Factor
  body: {},
  // boolean (optional)
  updatePhone: false,
  // string | id of SMS template (only for SMS factor) (optional)
  templateId: "templateId_example",
  // number (optional)
  tokenLifetimeSeconds: 300,
  // boolean (optional)
  activate: false,
};

apiInstance.enrollFactor(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UserFactor**| Factor |
 **userId** | [**string**] |  | defaults to undefined
 **updatePhone** | [**boolean**] |  | (optional) defaults to undefined
 **templateId** | [**string**] | id of SMS template (only for SMS factor) | (optional) defaults to undefined
 **tokenLifetimeSeconds** | [**number**] |  | (optional) defaults to 300
 **activate** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**UserFactor**

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

# **getFactor**
> UserFactor getFactor()

Fetches a factor for the specified user

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserFactorApi(configuration);

let body:okta.UserFactorApiGetFactorRequest = {
  // string
  userId: "userId_example",
  // string
  factorId: "factorId_example",
};

apiInstance.getFactor(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **factorId** | [**string**] |  | defaults to undefined


### Return type

**UserFactor**

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

# **getFactorTransactionStatus**
> VerifyUserFactorResponse getFactorTransactionStatus()

Polls factors verification transaction for status.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserFactorApi(configuration);

let body:okta.UserFactorApiGetFactorTransactionStatusRequest = {
  // string
  userId: "userId_example",
  // string
  factorId: "factorId_example",
  // string
  transactionId: "transactionId_example",
};

apiInstance.getFactorTransactionStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **factorId** | [**string**] |  | defaults to undefined
 **transactionId** | [**string**] |  | defaults to undefined


### Return type

**VerifyUserFactorResponse**

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

# **listFactors**
> Array<UserFactor> listFactors()

Enumerates all the enrolled factors for the specified user

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserFactorApi(configuration);

let body:okta.UserFactorApiListFactorsRequest = {
  // string
  userId: "userId_example",
};

apiInstance.listFactors(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined


### Return type

**Array<UserFactor>**

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

# **listSupportedFactors**
> Array<UserFactor> listSupportedFactors()

Enumerates all the supported factors that can be enrolled for the specified user

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserFactorApi(configuration);

let body:okta.UserFactorApiListSupportedFactorsRequest = {
  // string
  userId: "userId_example",
};

apiInstance.listSupportedFactors(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined


### Return type

**Array<UserFactor>**

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

# **listSupportedSecurityQuestions**
> Array<SecurityQuestion> listSupportedSecurityQuestions()

Enumerates all available security questions for a user's `question` factor

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserFactorApi(configuration);

let body:okta.UserFactorApiListSupportedSecurityQuestionsRequest = {
  // string
  userId: "userId_example",
};

apiInstance.listSupportedSecurityQuestions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined


### Return type

**Array<SecurityQuestion>**

### Authorization

[API_Token](README.md#API_Token)

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

# **verifyFactor**
> VerifyUserFactorResponse verifyFactor()

Verifies an OTP for a `token` or `token:hardware` factor

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserFactorApi(configuration);

let body:okta.UserFactorApiVerifyFactorRequest = {
  // string
  userId: "userId_example",
  // string
  factorId: "factorId_example",
  // string (optional)
  templateId: "templateId_example",
  // number (optional)
  tokenLifetimeSeconds: 300,
  // string (optional)
  X_Forwarded_For: "X-Forwarded-For_example",
  // string (optional)
  User_Agent: "User-Agent_example",
  // string (optional)
  Accept_Language: "Accept-Language_example",
  // VerifyFactorRequest (optional)
  body: {
    activationToken: "activationToken_example",
    answer: "answer_example",
    attestation: "attestation_example",
    clientData: "clientData_example",
    nextPassCode: "nextPassCode_example",
    passCode: "passCode_example",
    registrationData: "registrationData_example",
    stateToken: "stateToken_example",
  },
};

apiInstance.verifyFactor(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **VerifyFactorRequest**|  |
 **userId** | [**string**] |  | defaults to undefined
 **factorId** | [**string**] |  | defaults to undefined
 **templateId** | [**string**] |  | (optional) defaults to undefined
 **tokenLifetimeSeconds** | [**number**] |  | (optional) defaults to 300
 **X_Forwarded_For** | [**string**] |  | (optional) defaults to undefined
 **User_Agent** | [**string**] |  | (optional) defaults to undefined
 **Accept_Language** | [**string**] |  | (optional) defaults to undefined


### Return type

**VerifyUserFactorResponse**

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


