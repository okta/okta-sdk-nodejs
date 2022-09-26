# okta.DomainApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCertificate**](DomainApi.md#createCertificate) | **PUT** /api/v1/domains/{domainId}/certificate | Replace the Certificate
[**createDomain**](DomainApi.md#createDomain) | **POST** /api/v1/domains | Create a Domain
[**deleteDomain**](DomainApi.md#deleteDomain) | **DELETE** /api/v1/domains/{domainId} | Delete a Domain
[**getDomain**](DomainApi.md#getDomain) | **GET** /api/v1/domains/{domainId} | Retrieve a Domain
[**listDomains**](DomainApi.md#listDomains) | **GET** /api/v1/domains | List all Domains
[**updateDomain**](DomainApi.md#updateDomain) | **PUT** /api/v1/domains/{domainId} | Replace a Domain&#39;s brandId
[**verifyDomain**](DomainApi.md#verifyDomain) | **POST** /api/v1/domains/{domainId}/verify | Verify a Domain


# **createCertificate**
> void createCertificate(certificate)

Creates the Certificate for the Domain.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.DomainApi(configuration);

let body:okta.DomainApiCreateCertificateRequest = {
  // string
  domainId: "domainId_example",
  // DomainCertificate
  certificate: {
    certificate: "certificate_example",
    certificateChain: "certificateChain_example",
    privateKey: "privateKey_example",
    type: "PEM",
  },
};

apiInstance.createCertificate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate** | **DomainCertificate**|  |
 **domainId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createDomain**
> DomainResponse createDomain(domain)

Creates your domain.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.DomainApi(configuration);

let body:okta.DomainApiCreateDomainRequest = {
  // Domain
  domain: {
    brandId: "brandId_example",
    certificateSourceType: "MANUAL",
    dnsRecords: [
      {
        expiration: "expiration_example",
        fqdn: "fqdn_example",
        recordType: "CNAME",
        values: [
          "values_example",
        ],
      },
    ],
    domain: "domain_example",
    id: "id_example",
    publicCertificate: {
      expiration: "expiration_example",
      fingerprint: "fingerprint_example",
      subject: "subject_example",
    },
    validationStatus: "COMPLETED",
  },
};

apiInstance.createDomain(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **Domain**|  |


### Return type

**DomainResponse**

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

# **deleteDomain**
> void deleteDomain()

Deletes a Domain by `id`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.DomainApi(configuration);

let body:okta.DomainApiDeleteDomainRequest = {
  // string
  domainId: "domainId_example",
};

apiInstance.deleteDomain(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainId** | [**string**] |  | defaults to undefined


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

# **getDomain**
> DomainResponse getDomain()

Fetches a Domain by `id`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.DomainApi(configuration);

let body:okta.DomainApiGetDomainRequest = {
  // string
  domainId: "domainId_example",
};

apiInstance.getDomain(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainId** | [**string**] |  | defaults to undefined


### Return type

**DomainResponse**

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

# **listDomains**
> DomainListResponse listDomains()

List all verified custom Domains for the org.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.DomainApi(configuration);

let body:any = {};

apiInstance.listDomains(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**DomainListResponse**

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

# **updateDomain**
> DomainResponse updateDomain(UpdateDomain)

Updates a Domain by `id`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.DomainApi(configuration);

let body:okta.DomainApiUpdateDomainRequest = {
  // string
  domainId: "domainId_example",
  // UpdateDomain
  UpdateDomain: {
    brandId: "brandId_example",
  },
};

apiInstance.updateDomain(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UpdateDomain** | **UpdateDomain**|  |
 **domainId** | [**string**] |  | defaults to undefined


### Return type

**DomainResponse**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **verifyDomain**
> DomainResponse verifyDomain()

Verifies the Domain by `id`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.DomainApi(configuration);

let body:okta.DomainApiVerifyDomainRequest = {
  // string
  domainId: "domainId_example",
};

apiInstance.verifyDomain(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainId** | [**string**] |  | defaults to undefined


### Return type

**DomainResponse**

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


