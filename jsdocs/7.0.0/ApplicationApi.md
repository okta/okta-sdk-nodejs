# okta.ApplicationApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateApplication**](ApplicationApi.md#activateApplication) | **POST** /api/v1/apps/{appId}/lifecycle/activate | Activate an Application
[**activateDefaultProvisioningConnectionForApplication**](ApplicationApi.md#activateDefaultProvisioningConnectionForApplication) | **POST** /api/v1/apps/{appId}/connections/default/lifecycle/activate | Activate the default Provisioning Connection
[**assignUserToApplication**](ApplicationApi.md#assignUserToApplication) | **POST** /api/v1/apps/{appId}/users | Assign a User
[**cloneApplicationKey**](ApplicationApi.md#cloneApplicationKey) | **POST** /api/v1/apps/{appId}/credentials/keys/{keyId}/clone | Clone a Key Credential
[**createApplication**](ApplicationApi.md#createApplication) | **POST** /api/v1/apps | Create an Application
[**createApplicationGroupAssignment**](ApplicationApi.md#createApplicationGroupAssignment) | **PUT** /api/v1/apps/{appId}/groups/{groupId} | Assign a Group
[**deactivateApplication**](ApplicationApi.md#deactivateApplication) | **POST** /api/v1/apps/{appId}/lifecycle/deactivate | Deactivate an Application
[**deactivateDefaultProvisioningConnectionForApplication**](ApplicationApi.md#deactivateDefaultProvisioningConnectionForApplication) | **POST** /api/v1/apps/{appId}/connections/default/lifecycle/deactivate | Deactivate the default Provisioning Connection for an Application
[**deleteApplication**](ApplicationApi.md#deleteApplication) | **DELETE** /api/v1/apps/{appId} | Delete an Application
[**deleteApplicationGroupAssignment**](ApplicationApi.md#deleteApplicationGroupAssignment) | **DELETE** /api/v1/apps/{appId}/groups/{groupId} | Unassign a Group
[**deleteApplicationUser**](ApplicationApi.md#deleteApplicationUser) | **DELETE** /api/v1/apps/{appId}/users/{userId} | Unassign a User
[**generateApplicationKey**](ApplicationApi.md#generateApplicationKey) | **POST** /api/v1/apps/{appId}/credentials/keys/generate | Generate a Key Credential
[**generateCsrForApplication**](ApplicationApi.md#generateCsrForApplication) | **POST** /api/v1/apps/{appId}/credentials/csrs | Generate a Certificate Signing Request
[**getApplication**](ApplicationApi.md#getApplication) | **GET** /api/v1/apps/{appId} | Retrieve an Application
[**getApplicationGroupAssignment**](ApplicationApi.md#getApplicationGroupAssignment) | **GET** /api/v1/apps/{appId}/groups/{groupId} | Retrieve an Assigned Group
[**getApplicationKey**](ApplicationApi.md#getApplicationKey) | **GET** /api/v1/apps/{appId}/credentials/keys/{keyId} | Retrieve a Key Credential
[**getApplicationUser**](ApplicationApi.md#getApplicationUser) | **GET** /api/v1/apps/{appId}/users/{userId} | Retrieve an Assigned User
[**getCsrForApplication**](ApplicationApi.md#getCsrForApplication) | **GET** /api/v1/apps/{appId}/credentials/csrs/{csrId} | Retrieve a Certificate Signing Request
[**getDefaultProvisioningConnectionForApplication**](ApplicationApi.md#getDefaultProvisioningConnectionForApplication) | **GET** /api/v1/apps/{appId}/connections/default | Retrieve the default Provisioning Connection
[**getFeatureForApplication**](ApplicationApi.md#getFeatureForApplication) | **GET** /api/v1/apps/{appId}/features/{name} | Retrieve a Feature
[**getOAuth2TokenForApplication**](ApplicationApi.md#getOAuth2TokenForApplication) | **GET** /api/v1/apps/{appId}/tokens/{tokenId} | Retrieve an OAuth 2.0 Token
[**getScopeConsentGrant**](ApplicationApi.md#getScopeConsentGrant) | **GET** /api/v1/apps/{appId}/grants/{grantId} | Retrieve a Scope Consent Grant
[**grantConsentToScope**](ApplicationApi.md#grantConsentToScope) | **POST** /api/v1/apps/{appId}/grants | Grant Consent to Scope
[**listApplicationGroupAssignments**](ApplicationApi.md#listApplicationGroupAssignments) | **GET** /api/v1/apps/{appId}/groups | List all Assigned Groups
[**listApplicationKeys**](ApplicationApi.md#listApplicationKeys) | **GET** /api/v1/apps/{appId}/credentials/keys | List all Key Credentials
[**listApplicationUsers**](ApplicationApi.md#listApplicationUsers) | **GET** /api/v1/apps/{appId}/users | List all Assigned Users
[**listApplications**](ApplicationApi.md#listApplications) | **GET** /api/v1/apps | List all Applications
[**listCsrsForApplication**](ApplicationApi.md#listCsrsForApplication) | **GET** /api/v1/apps/{appId}/credentials/csrs | List all Certificate Signing Requests
[**listFeaturesForApplication**](ApplicationApi.md#listFeaturesForApplication) | **GET** /api/v1/apps/{appId}/features | List all Features
[**listOAuth2TokensForApplication**](ApplicationApi.md#listOAuth2TokensForApplication) | **GET** /api/v1/apps/{appId}/tokens | List all OAuth 2.0 Tokens
[**listScopeConsentGrants**](ApplicationApi.md#listScopeConsentGrants) | **GET** /api/v1/apps/{appId}/grants | List all Scope Consent Grants
[**publishCsrFromApplication**](ApplicationApi.md#publishCsrFromApplication) | **POST** /api/v1/apps/{appId}/credentials/csrs/{csrId}/lifecycle/publish | Publish a Certificate Signing Request
[**revokeCsrFromApplication**](ApplicationApi.md#revokeCsrFromApplication) | **DELETE** /api/v1/apps/{appId}/credentials/csrs/{csrId} | Revoke a Certificate Signing Request
[**revokeOAuth2TokenForApplication**](ApplicationApi.md#revokeOAuth2TokenForApplication) | **DELETE** /api/v1/apps/{appId}/tokens/{tokenId} | Revoke an OAuth 2.0 Token
[**revokeOAuth2TokensForApplication**](ApplicationApi.md#revokeOAuth2TokensForApplication) | **DELETE** /api/v1/apps/{appId}/tokens | Revoke all OAuth 2.0 Tokens
[**revokeScopeConsentGrant**](ApplicationApi.md#revokeScopeConsentGrant) | **DELETE** /api/v1/apps/{appId}/grants/{grantId} | Revoke a Scope Consent Grant
[**setDefaultProvisioningConnectionForApplication**](ApplicationApi.md#setDefaultProvisioningConnectionForApplication) | **POST** /api/v1/apps/{appId}/connections/default | Update the default Provisioning Connection
[**updateApplication**](ApplicationApi.md#updateApplication) | **PUT** /api/v1/apps/{appId} | Replace an Application
[**updateApplicationUser**](ApplicationApi.md#updateApplicationUser) | **POST** /api/v1/apps/{appId}/users/{userId} | Update an Application Profile for Assigned User
[**updateFeatureForApplication**](ApplicationApi.md#updateFeatureForApplication) | **PUT** /api/v1/apps/{appId}/features/{name} | Update a Feature
[**uploadApplicationLogo**](ApplicationApi.md#uploadApplicationLogo) | **POST** /api/v1/apps/{appId}/logo | Upload a Logo


# **activateApplication**
> void activateApplication()

Activates an inactive application.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiActivateApplicationRequest = {
  // string
  appId: "appId_example",
};

apiInstance.activateApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined


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
**200** | Success |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **activateDefaultProvisioningConnectionForApplication**
> void activateDefaultProvisioningConnectionForApplication()

Activates the default Provisioning Connection for an application.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiActivateDefaultProvisioningConnectionForApplicationRequest = {
  // string
  appId: "appId_example",
};

apiInstance.activateDefaultProvisioningConnectionForApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined


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

# **assignUserToApplication**
> AppUser assignUserToApplication(appUser)

Assigns an user to an application with [credentials](#application-user-credentials-object) and an app-specific [profile](#application-user-profile-object). Profile mappings defined for the application are first applied before applying any profile properties specified in the request.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiAssignUserToApplicationRequest = {
  // string
  appId: "appId_example",
  // AppUser
  appUser: {
    credentials: {
      password: {
        value: "value_example",
      },
      userName: "userName_example",
    },
    id: "id_example",
    profile: {
      "key": {},
    },
    scope: "scope_example",
  },
};

apiInstance.assignUserToApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appUser** | **AppUser**|  |
 **appId** | [**string**] |  | defaults to undefined


### Return type

**AppUser**

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

# **cloneApplicationKey**
> JsonWebKey cloneApplicationKey()

Clones a X.509 certificate for an application key credential from a source application to target application.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiCloneApplicationKeyRequest = {
  // string
  appId: "appId_example",
  // string
  keyId: "keyId_example",
  // string | Unique key of the target Application
  targetAid: "targetAid_example",
};

apiInstance.cloneApplicationKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **keyId** | [**string**] |  | defaults to undefined
 **targetAid** | [**string**] | Unique key of the target Application | defaults to undefined


### Return type

**JsonWebKey**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createApplication**
> Application createApplication(application)

Adds a new application to your Okta organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiCreateApplicationRequest = {
  // Application
  application: {},
  // boolean | Executes activation lifecycle operation when creating the app (optional)
  activate: true,
  // string (optional)
  OktaAccessGateway_Agent: "OktaAccessGateway-Agent_example",
};

apiInstance.createApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **Application**|  |
 **activate** | [**boolean**] | Executes activation lifecycle operation when creating the app | (optional) defaults to undefined
 **OktaAccessGateway_Agent** | [**string**] |  | (optional) defaults to undefined


### Return type

**Application**

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

# **createApplicationGroupAssignment**
> ApplicationGroupAssignment createApplicationGroupAssignment()

Assigns a group to an application

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiCreateApplicationGroupAssignmentRequest = {
  // string
  appId: "appId_example",
  // string
  groupId: "groupId_example",
  // ApplicationGroupAssignment (optional)
  applicationGroupAssignment: {
    priority: 1,
    profile: {
      "key": {},
    },
  },
};

apiInstance.createApplicationGroupAssignment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationGroupAssignment** | **ApplicationGroupAssignment**|  |
 **appId** | [**string**] |  | defaults to undefined
 **groupId** | [**string**] |  | defaults to undefined


### Return type

**ApplicationGroupAssignment**

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

# **deactivateApplication**
> void deactivateApplication()

Deactivates an active application.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiDeactivateApplicationRequest = {
  // string
  appId: "appId_example",
};

apiInstance.deactivateApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined


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
**200** | Success |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deactivateDefaultProvisioningConnectionForApplication**
> void deactivateDefaultProvisioningConnectionForApplication()

Deactivates the default Provisioning Connection for an application.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiDeactivateDefaultProvisioningConnectionForApplicationRequest = {
  // string
  appId: "appId_example",
};

apiInstance.deactivateDefaultProvisioningConnectionForApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined


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

# **deleteApplication**
> void deleteApplication()

Removes an inactive application.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiDeleteApplicationRequest = {
  // string
  appId: "appId_example",
};

apiInstance.deleteApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined


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

# **deleteApplicationGroupAssignment**
> void deleteApplicationGroupAssignment()

Removes a group assignment from an application.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiDeleteApplicationGroupAssignmentRequest = {
  // string
  appId: "appId_example",
  // string
  groupId: "groupId_example",
};

apiInstance.deleteApplicationGroupAssignment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **groupId** | [**string**] |  | defaults to undefined


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

# **deleteApplicationUser**
> void deleteApplicationUser()

Removes an assignment for a user from an application.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiDeleteApplicationUserRequest = {
  // string
  appId: "appId_example",
  // string
  userId: "userId_example",
  // boolean (optional)
  sendEmail: false,
};

apiInstance.deleteApplicationUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined
 **sendEmail** | [**boolean**] |  | (optional) defaults to undefined


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

# **generateApplicationKey**
> JsonWebKey generateApplicationKey()

Generates a new X.509 certificate for an application key credential

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiGenerateApplicationKeyRequest = {
  // string
  appId: "appId_example",
  // number (optional)
  validityYears: 1,
};

apiInstance.generateApplicationKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **validityYears** | [**number**] |  | (optional) defaults to undefined


### Return type

**JsonWebKey**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **generateCsrForApplication**
> Csr generateCsrForApplication(metadata)

Generates a new key pair and returns the Certificate Signing Request for it.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiGenerateCsrForApplicationRequest = {
  // string
  appId: "appId_example",
  // CsrMetadata
  metadata: {
    subject: {
      commonName: "commonName_example",
      countryName: "countryName_example",
      localityName: "localityName_example",
      organizationalUnitName: "organizationalUnitName_example",
      organizationName: "organizationName_example",
      stateOrProvinceName: "stateOrProvinceName_example",
    },
    subjectAltNames: {
      dnsNames: [
        "dnsNames_example",
      ],
    },
  },
};

apiInstance.generateCsrForApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metadata** | **CsrMetadata**|  |
 **appId** | [**string**] |  | defaults to undefined


### Return type

**Csr**

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

# **getApplication**
> Application getApplication()

Fetches an application from your Okta organization by `id`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiGetApplicationRequest = {
  // string
  appId: "appId_example",
  // string (optional)
  expand: "expand_example",
};

apiInstance.getApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **expand** | [**string**] |  | (optional) defaults to undefined


### Return type

**Application**

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

# **getApplicationGroupAssignment**
> ApplicationGroupAssignment getApplicationGroupAssignment()

Fetches an application group assignment

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiGetApplicationGroupAssignmentRequest = {
  // string
  appId: "appId_example",
  // string
  groupId: "groupId_example",
  // string (optional)
  expand: "expand_example",
};

apiInstance.getApplicationGroupAssignment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **groupId** | [**string**] |  | defaults to undefined
 **expand** | [**string**] |  | (optional) defaults to undefined


### Return type

**ApplicationGroupAssignment**

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

# **getApplicationKey**
> JsonWebKey getApplicationKey()

Gets a specific application key credential by kid

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiGetApplicationKeyRequest = {
  // string
  appId: "appId_example",
  // string
  keyId: "keyId_example",
};

apiInstance.getApplicationKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **keyId** | [**string**] |  | defaults to undefined


### Return type

**JsonWebKey**

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

# **getApplicationUser**
> AppUser getApplicationUser()

Fetches a specific user assignment for application by `id`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiGetApplicationUserRequest = {
  // string
  appId: "appId_example",
  // string
  userId: "userId_example",
  // string (optional)
  expand: "expand_example",
};

apiInstance.getApplicationUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined
 **expand** | [**string**] |  | (optional) defaults to undefined


### Return type

**AppUser**

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

# **getCsrForApplication**
> Csr getCsrForApplication()

Fetches a certificate signing request for the app by `id`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiGetCsrForApplicationRequest = {
  // string
  appId: "appId_example",
  // string
  csrId: "csrId_example",
};

apiInstance.getCsrForApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **csrId** | [**string**] |  | defaults to undefined


### Return type

**Csr**

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

# **getDefaultProvisioningConnectionForApplication**
> ProvisioningConnection getDefaultProvisioningConnectionForApplication()

Get default Provisioning Connection for application

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiGetDefaultProvisioningConnectionForApplicationRequest = {
  // string
  appId: "appId_example",
};

apiInstance.getDefaultProvisioningConnectionForApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined


### Return type

**ProvisioningConnection**

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

# **getFeatureForApplication**
> ApplicationFeature getFeatureForApplication()

Fetches a Feature object for an application.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiGetFeatureForApplicationRequest = {
  // string
  appId: "appId_example",
  // string
  name: "name_example",
};

apiInstance.getFeatureForApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined


### Return type

**ApplicationFeature**

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

# **getOAuth2TokenForApplication**
> OAuth2Token getOAuth2TokenForApplication()

Gets a token for the specified application

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiGetOAuth2TokenForApplicationRequest = {
  // string
  appId: "appId_example",
  // string
  tokenId: "tokenId_example",
  // string (optional)
  expand: "expand_example",
};

apiInstance.getOAuth2TokenForApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **tokenId** | [**string**] |  | defaults to undefined
 **expand** | [**string**] |  | (optional) defaults to undefined


### Return type

**OAuth2Token**

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

# **getScopeConsentGrant**
> OAuth2ScopeConsentGrant getScopeConsentGrant()

Fetches a single scope consent grant for the application

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiGetScopeConsentGrantRequest = {
  // string
  appId: "appId_example",
  // string
  grantId: "grantId_example",
  // string (optional)
  expand: "expand_example",
};

apiInstance.getScopeConsentGrant(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **grantId** | [**string**] |  | defaults to undefined
 **expand** | [**string**] |  | (optional) defaults to undefined


### Return type

**OAuth2ScopeConsentGrant**

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

# **grantConsentToScope**
> OAuth2ScopeConsentGrant grantConsentToScope(oAuth2ScopeConsentGrant)

Grants consent for the application to request an OAuth 2.0 Okta scope

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiGrantConsentToScopeRequest = {
  // string
  appId: "appId_example",
  // OAuth2ScopeConsentGrant
  oAuth2ScopeConsentGrant: {
    clientId: "clientId_example",
    createdBy: {
      type: "type_example",
    },
    issuer: "issuer_example",
    scopeId: "scopeId_example",
    source: "ADMIN",
    status: "ACTIVE",
    userId: "userId_example",
  },
};

apiInstance.grantConsentToScope(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oAuth2ScopeConsentGrant** | **OAuth2ScopeConsentGrant**|  |
 **appId** | [**string**] |  | defaults to undefined


### Return type

**OAuth2ScopeConsentGrant**

### Authorization

[API_Token](README.md#API_Token)

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

# **listApplicationGroupAssignments**
> Array<ApplicationGroupAssignment> listApplicationGroupAssignments()

Enumerates group assignments for an application.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiListApplicationGroupAssignmentsRequest = {
  // string
  appId: "appId_example",
  // string (optional)
  q: "q_example",
  // string | Specifies the pagination cursor for the next page of assignments (optional)
  after: "after_example",
  // number | Specifies the number of results for a page (optional)
  limit: -1,
  // string (optional)
  expand: "expand_example",
};

apiInstance.listApplicationGroupAssignments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **q** | [**string**] |  | (optional) defaults to undefined
 **after** | [**string**] | Specifies the pagination cursor for the next page of assignments | (optional) defaults to undefined
 **limit** | [**number**] | Specifies the number of results for a page | (optional) defaults to -1
 **expand** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<ApplicationGroupAssignment>**

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

# **listApplicationKeys**
> Array<JsonWebKey> listApplicationKeys()

Enumerates key credentials for an application

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiListApplicationKeysRequest = {
  // string
  appId: "appId_example",
};

apiInstance.listApplicationKeys(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined


### Return type

**Array<JsonWebKey>**

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

# **listApplicationUsers**
> Array<AppUser> listApplicationUsers()

Enumerates all assigned [application users](#application-user-model) for an application.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiListApplicationUsersRequest = {
  // string
  appId: "appId_example",
  // string (optional)
  q: "q_example",
  // string (optional)
  query_scope: "query_scope_example",
  // string | specifies the pagination cursor for the next page of assignments (optional)
  after: "after_example",
  // number | specifies the number of results for a page (optional)
  limit: -1,
  // string (optional)
  filter: "filter_example",
  // string (optional)
  expand: "expand_example",
};

apiInstance.listApplicationUsers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **q** | [**string**] |  | (optional) defaults to undefined
 **query_scope** | [**string**] |  | (optional) defaults to undefined
 **after** | [**string**] | specifies the pagination cursor for the next page of assignments | (optional) defaults to undefined
 **limit** | [**number**] | specifies the number of results for a page | (optional) defaults to -1
 **filter** | [**string**] |  | (optional) defaults to undefined
 **expand** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<AppUser>**

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

# **listApplications**
> Array<Application> listApplications()

Enumerates apps added to your organization with pagination. A subset of apps can be returned that match a supported filter expression or query.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiListApplicationsRequest = {
  // string (optional)
  q: "q_example",
  // string | Specifies the pagination cursor for the next page of apps (optional)
  after: "after_example",
  // number | Specifies the number of results for a page (optional)
  limit: -1,
  // string | Filters apps by status, user.id, group.id or credentials.signing.kid expression (optional)
  filter: "filter_example",
  // string | Traverses users link relationship and optionally embeds Application User resource (optional)
  expand: "expand_example",
  // boolean (optional)
  includeNonDeleted: false,
};

apiInstance.listApplications(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] |  | (optional) defaults to undefined
 **after** | [**string**] | Specifies the pagination cursor for the next page of apps | (optional) defaults to undefined
 **limit** | [**number**] | Specifies the number of results for a page | (optional) defaults to -1
 **filter** | [**string**] | Filters apps by status, user.id, group.id or credentials.signing.kid expression | (optional) defaults to undefined
 **expand** | [**string**] | Traverses users link relationship and optionally embeds Application User resource | (optional) defaults to undefined
 **includeNonDeleted** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**Array<Application>**

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

# **listCsrsForApplication**
> Array<Csr> listCsrsForApplication()

Enumerates Certificate Signing Requests for an application

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiListCsrsForApplicationRequest = {
  // string
  appId: "appId_example",
};

apiInstance.listCsrsForApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined


### Return type

**Array<Csr>**

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

# **listFeaturesForApplication**
> Array<ApplicationFeature> listFeaturesForApplication()

List Features for application

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiListFeaturesForApplicationRequest = {
  // string
  appId: "appId_example",
};

apiInstance.listFeaturesForApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined


### Return type

**Array<ApplicationFeature>**

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

# **listOAuth2TokensForApplication**
> Array<OAuth2Token> listOAuth2TokensForApplication()

Lists all tokens for the application

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiListOAuth2TokensForApplicationRequest = {
  // string
  appId: "appId_example",
  // string (optional)
  expand: "expand_example",
  // string (optional)
  after: "after_example",
  // number (optional)
  limit: 20,
};

apiInstance.listOAuth2TokensForApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **expand** | [**string**] |  | (optional) defaults to undefined
 **after** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 20


### Return type

**Array<OAuth2Token>**

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

# **listScopeConsentGrants**
> Array<OAuth2ScopeConsentGrant> listScopeConsentGrants()

Lists all scope consent grants for the application

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiListScopeConsentGrantsRequest = {
  // string
  appId: "appId_example",
  // string (optional)
  expand: "expand_example",
};

apiInstance.listScopeConsentGrants(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **expand** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<OAuth2ScopeConsentGrant>**

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

# **publishCsrFromApplication**
> JsonWebKey publishCsrFromApplication(body)

Updates a certificate signing request for the app with a signed X.509 certificate and adds it into the application key credentials

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiPublishCsrFromApplicationRequest = {
  // string
  appId: "appId_example",
  // string
  csrId: "csrId_example",
  // HttpFile
  body: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.publishCsrFromApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **HttpFile**|  |
 **appId** | [**string**] |  | defaults to undefined
 **csrId** | [**string**] |  | defaults to undefined


### Return type

**JsonWebKey**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/x-x509-ca-cert, application/pkix-cert, application/x-pem-file
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

# **revokeCsrFromApplication**
> void revokeCsrFromApplication()

Revokes a certificate signing request and deletes the key pair from the application.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiRevokeCsrFromApplicationRequest = {
  // string
  appId: "appId_example",
  // string
  csrId: "csrId_example",
};

apiInstance.revokeCsrFromApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **csrId** | [**string**] |  | defaults to undefined


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

# **revokeOAuth2TokenForApplication**
> void revokeOAuth2TokenForApplication()

Revokes the specified token for the specified application

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiRevokeOAuth2TokenForApplicationRequest = {
  // string
  appId: "appId_example",
  // string
  tokenId: "tokenId_example",
};

apiInstance.revokeOAuth2TokenForApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **tokenId** | [**string**] |  | defaults to undefined


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

# **revokeOAuth2TokensForApplication**
> void revokeOAuth2TokensForApplication()

Revokes all tokens for the specified application

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiRevokeOAuth2TokensForApplicationRequest = {
  // string
  appId: "appId_example",
};

apiInstance.revokeOAuth2TokensForApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined


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

# **revokeScopeConsentGrant**
> void revokeScopeConsentGrant()

Revokes permission for the application to request the given scope

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiRevokeScopeConsentGrantRequest = {
  // string
  appId: "appId_example",
  // string
  grantId: "grantId_example",
};

apiInstance.revokeScopeConsentGrant(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **grantId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[API_Token](README.md#API_Token)

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

# **setDefaultProvisioningConnectionForApplication**
> ProvisioningConnection setDefaultProvisioningConnectionForApplication(ProvisioningConnectionRequest)

Set default Provisioning Connection for application

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiSetDefaultProvisioningConnectionForApplicationRequest = {
  // string
  appId: "appId_example",
  // ProvisioningConnectionRequest
  ProvisioningConnectionRequest: {
    profile: {
      authScheme: "TOKEN",
      token: "token_example",
    },
  },
  // boolean (optional)
  activate: true,
};

apiInstance.setDefaultProvisioningConnectionForApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ProvisioningConnectionRequest** | **ProvisioningConnectionRequest**|  |
 **appId** | [**string**] |  | defaults to undefined
 **activate** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**ProvisioningConnection**

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

# **updateApplication**
> Application updateApplication(application)

Updates an application in your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiUpdateApplicationRequest = {
  // string
  appId: "appId_example",
  // Application
  application: {},
};

apiInstance.updateApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **Application**|  |
 **appId** | [**string**] |  | defaults to undefined


### Return type

**Application**

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

# **updateApplicationUser**
> AppUser updateApplicationUser(appUser)

Updates a user's profile for an application

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiUpdateApplicationUserRequest = {
  // string
  appId: "appId_example",
  // string
  userId: "userId_example",
  // AppUser
  appUser: {
    credentials: {
      password: {
        value: "value_example",
      },
      userName: "userName_example",
    },
    id: "id_example",
    profile: {
      "key": {},
    },
    scope: "scope_example",
  },
};

apiInstance.updateApplicationUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appUser** | **AppUser**|  |
 **appId** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined


### Return type

**AppUser**

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

# **updateFeatureForApplication**
> ApplicationFeature updateFeatureForApplication(CapabilitiesObject)

Updates a Feature object for an application.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiUpdateFeatureForApplicationRequest = {
  // string
  appId: "appId_example",
  // string
  name: "name_example",
  // CapabilitiesObject
  CapabilitiesObject: {
    create: {
      lifecycleCreate: {
        status: "DISABLED",
      },
    },
    update: {
      lifecycleDeactivate: {
        status: "DISABLED",
      },
      password: {
        change: "CHANGE",
        seed: "OKTA",
        status: "DISABLED",
      },
      profile: {
        status: "DISABLED",
      },
    },
  },
};

apiInstance.updateFeatureForApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CapabilitiesObject** | **CapabilitiesObject**|  |
 **appId** | [**string**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined


### Return type

**ApplicationFeature**

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

# **uploadApplicationLogo**
> void uploadApplicationLogo()

The file must be in PNG, JPG, or GIF format, and less than 1 MB in size. For best results use landscape orientation, a transparent background, and a minimum size of 420px by 120px to prevent upscaling.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ApplicationApi(configuration);

let body:okta.ApplicationApiUploadApplicationLogoRequest = {
  // string
  appId: "appId_example",
  // HttpFile
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.uploadApplicationLogo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **file** | [**HttpFile**] |  | defaults to undefined


### Return type

**void**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: multipart/form-data
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


