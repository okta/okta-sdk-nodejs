# okta.EmailDomainApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEmailDomain**](EmailDomainApi.md#createEmailDomain) | **POST** /api/v1/email-domains | Create an Email Domain
[**deleteEmailDomain**](EmailDomainApi.md#deleteEmailDomain) | **DELETE** /api/v1/email-domains/{emailDomainId} | Delete an Email Domain
[**getEmailDomain**](EmailDomainApi.md#getEmailDomain) | **GET** /api/v1/email-domains/{emailDomainId} | Retrieve a Email Domain
[**listEmailDomainBrands**](EmailDomainApi.md#listEmailDomainBrands) | **GET** /api/v1/email-domains/{emailDomainId}/brands | List all brands linked to an email domain
[**listEmailDomains**](EmailDomainApi.md#listEmailDomains) | **GET** /api/v1/email-domains | List all email domains
[**updateEmailDomain**](EmailDomainApi.md#updateEmailDomain) | **PUT** /api/v1/email-domains/{emailDomainId} | Replace an Email Domain
[**verifyEmailDomain**](EmailDomainApi.md#verifyEmailDomain) | **POST** /api/v1/email-domains/{emailDomainId}/verify | Verify an Email Domain


# **createEmailDomain**
> EmailDomainResponse createEmailDomain(emailDomain)

Creates a custom email domain.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.EmailDomainApi(configuration);

let body:okta.EmailDomainApiCreateEmailDomainRequest = {
  // EmailDomain
  emailDomain: ,
};

apiInstance.createEmailDomain(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailDomain** | **EmailDomain**|  |


### Return type

**EmailDomainResponse**

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
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteEmailDomain**
> void deleteEmailDomain()

Deletes an Email Domain by `emailDomainId`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.EmailDomainApi(configuration);

let body:okta.EmailDomainApiDeleteEmailDomainRequest = {
  // string
  emailDomainId: "emailDomainId_example",
};

apiInstance.deleteEmailDomain(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailDomainId** | [**string**] |  | defaults to undefined


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

# **getEmailDomain**
> EmailDomainResponse getEmailDomain()

Fetches an Email Domain by `emailDomainId`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.EmailDomainApi(configuration);

let body:okta.EmailDomainApiGetEmailDomainRequest = {
  // string
  emailDomainId: "emailDomainId_example",
};

apiInstance.getEmailDomain(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailDomainId** | [**string**] |  | defaults to undefined


### Return type

**EmailDomainResponse**

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

# **listEmailDomainBrands**
> Array<Brand> listEmailDomainBrands()

List all brands linked to an email domain.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.EmailDomainApi(configuration);

let body:okta.EmailDomainApiListEmailDomainBrandsRequest = {
  // string
  emailDomainId: "emailDomainId_example",
};

apiInstance.listEmailDomainBrands(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailDomainId** | [**string**] |  | defaults to undefined


### Return type

**Array<Brand>**

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

# **listEmailDomains**
> EmailDomainListResponse listEmailDomains()

List all the email domains in your org.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.EmailDomainApi(configuration);

let body:any = {};

apiInstance.listEmailDomains(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**EmailDomainListResponse**

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

# **updateEmailDomain**
> EmailDomainResponse updateEmailDomain(updateEmailDomain)

Replaces an email domain by `emailDomainId`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.EmailDomainApi(configuration);

let body:okta.EmailDomainApiUpdateEmailDomainRequest = {
  // string
  emailDomainId: "emailDomainId_example",
  // UpdateEmailDomain
  updateEmailDomain: null,
};

apiInstance.updateEmailDomain(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateEmailDomain** | **UpdateEmailDomain**|  |
 **emailDomainId** | [**string**] |  | defaults to undefined


### Return type

**EmailDomainResponse**

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

# **verifyEmailDomain**
> EmailDomainResponse verifyEmailDomain()

Verifies an Email Domain by `emailDomainId`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.EmailDomainApi(configuration);

let body:okta.EmailDomainApiVerifyEmailDomainRequest = {
  // string
  emailDomainId: "emailDomainId_example",
};

apiInstance.verifyEmailDomain(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailDomainId** | [**string**] |  | defaults to undefined


### Return type

**EmailDomainResponse**

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


