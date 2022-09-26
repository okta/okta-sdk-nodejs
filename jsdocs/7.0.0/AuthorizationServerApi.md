# okta.AuthorizationServerApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateAuthorizationServer**](AuthorizationServerApi.md#activateAuthorizationServer) | **POST** /api/v1/authorizationServers/{authServerId}/lifecycle/activate | Activate an Authorization Server
[**activateAuthorizationServerPolicy**](AuthorizationServerApi.md#activateAuthorizationServerPolicy) | **POST** /api/v1/authorizationServers/{authServerId}/policies/{policyId}/lifecycle/activate | Activate a Policy
[**activateAuthorizationServerPolicyRule**](AuthorizationServerApi.md#activateAuthorizationServerPolicyRule) | **POST** /api/v1/authorizationServers/{authServerId}/policies/{policyId}/rules/{ruleId}/lifecycle/activate | Activate a Policy Rule
[**createAuthorizationServer**](AuthorizationServerApi.md#createAuthorizationServer) | **POST** /api/v1/authorizationServers | Create an Authorization Server
[**createAuthorizationServerPolicy**](AuthorizationServerApi.md#createAuthorizationServerPolicy) | **POST** /api/v1/authorizationServers/{authServerId}/policies | Create a Policy
[**createAuthorizationServerPolicyRule**](AuthorizationServerApi.md#createAuthorizationServerPolicyRule) | **POST** /api/v1/authorizationServers/{authServerId}/policies/{policyId}/rules | Create a Policy Rule
[**createOAuth2Claim**](AuthorizationServerApi.md#createOAuth2Claim) | **POST** /api/v1/authorizationServers/{authServerId}/claims | Create a Custom Token Claim
[**createOAuth2Scope**](AuthorizationServerApi.md#createOAuth2Scope) | **POST** /api/v1/authorizationServers/{authServerId}/scopes | Create a Custom Token Scope
[**deactivateAuthorizationServer**](AuthorizationServerApi.md#deactivateAuthorizationServer) | **POST** /api/v1/authorizationServers/{authServerId}/lifecycle/deactivate | Deactivate an Authorization Server
[**deactivateAuthorizationServerPolicy**](AuthorizationServerApi.md#deactivateAuthorizationServerPolicy) | **POST** /api/v1/authorizationServers/{authServerId}/policies/{policyId}/lifecycle/deactivate | Deactivate a Policy
[**deactivateAuthorizationServerPolicyRule**](AuthorizationServerApi.md#deactivateAuthorizationServerPolicyRule) | **POST** /api/v1/authorizationServers/{authServerId}/policies/{policyId}/rules/{ruleId}/lifecycle/deactivate | Deactivate a Policy Rule
[**deleteAuthorizationServer**](AuthorizationServerApi.md#deleteAuthorizationServer) | **DELETE** /api/v1/authorizationServers/{authServerId} | Delete an Authorization Server
[**deleteAuthorizationServerPolicy**](AuthorizationServerApi.md#deleteAuthorizationServerPolicy) | **DELETE** /api/v1/authorizationServers/{authServerId}/policies/{policyId} | Delete a Policy
[**deleteAuthorizationServerPolicyRule**](AuthorizationServerApi.md#deleteAuthorizationServerPolicyRule) | **DELETE** /api/v1/authorizationServers/{authServerId}/policies/{policyId}/rules/{ruleId} | Delete a Policy Rule
[**deleteOAuth2Claim**](AuthorizationServerApi.md#deleteOAuth2Claim) | **DELETE** /api/v1/authorizationServers/{authServerId}/claims/{claimId} | Delete a Custom Token Claim
[**deleteOAuth2Scope**](AuthorizationServerApi.md#deleteOAuth2Scope) | **DELETE** /api/v1/authorizationServers/{authServerId}/scopes/{scopeId} | Delete a Custom Token Scope
[**getAuthorizationServer**](AuthorizationServerApi.md#getAuthorizationServer) | **GET** /api/v1/authorizationServers/{authServerId} | Retrieve an Authorization Server
[**getAuthorizationServerPolicy**](AuthorizationServerApi.md#getAuthorizationServerPolicy) | **GET** /api/v1/authorizationServers/{authServerId}/policies/{policyId} | Retrieve a Policy
[**getAuthorizationServerPolicyRule**](AuthorizationServerApi.md#getAuthorizationServerPolicyRule) | **GET** /api/v1/authorizationServers/{authServerId}/policies/{policyId}/rules/{ruleId} | Retrieve a Policy Rule
[**getOAuth2Claim**](AuthorizationServerApi.md#getOAuth2Claim) | **GET** /api/v1/authorizationServers/{authServerId}/claims/{claimId} | Retrieve a Custom Token Claim
[**getOAuth2Scope**](AuthorizationServerApi.md#getOAuth2Scope) | **GET** /api/v1/authorizationServers/{authServerId}/scopes/{scopeId} | Retrieve a Custom Token Scope
[**getRefreshTokenForAuthorizationServerAndClient**](AuthorizationServerApi.md#getRefreshTokenForAuthorizationServerAndClient) | **GET** /api/v1/authorizationServers/{authServerId}/clients/{clientId}/tokens/{tokenId} | Retrieve a Refresh Token for a Client
[**listAuthorizationServerKeys**](AuthorizationServerApi.md#listAuthorizationServerKeys) | **GET** /api/v1/authorizationServers/{authServerId}/credentials/keys | List all Credential Keys
[**listAuthorizationServerPolicies**](AuthorizationServerApi.md#listAuthorizationServerPolicies) | **GET** /api/v1/authorizationServers/{authServerId}/policies | List all Policies
[**listAuthorizationServerPolicyRules**](AuthorizationServerApi.md#listAuthorizationServerPolicyRules) | **GET** /api/v1/authorizationServers/{authServerId}/policies/{policyId}/rules | List all Policy Rules
[**listAuthorizationServers**](AuthorizationServerApi.md#listAuthorizationServers) | **GET** /api/v1/authorizationServers | List all Authorization Servers
[**listOAuth2Claims**](AuthorizationServerApi.md#listOAuth2Claims) | **GET** /api/v1/authorizationServers/{authServerId}/claims | List all Custom Token Claims
[**listOAuth2ClientsForAuthorizationServer**](AuthorizationServerApi.md#listOAuth2ClientsForAuthorizationServer) | **GET** /api/v1/authorizationServers/{authServerId}/clients | List all Clients
[**listOAuth2Scopes**](AuthorizationServerApi.md#listOAuth2Scopes) | **GET** /api/v1/authorizationServers/{authServerId}/scopes | List all Custom Token Scopes
[**listRefreshTokensForAuthorizationServerAndClient**](AuthorizationServerApi.md#listRefreshTokensForAuthorizationServerAndClient) | **GET** /api/v1/authorizationServers/{authServerId}/clients/{clientId}/tokens | List all Refresh Tokens for a Client
[**revokeRefreshTokenForAuthorizationServerAndClient**](AuthorizationServerApi.md#revokeRefreshTokenForAuthorizationServerAndClient) | **DELETE** /api/v1/authorizationServers/{authServerId}/clients/{clientId}/tokens/{tokenId} | Revoke a Refresh Token for a Client
[**revokeRefreshTokensForAuthorizationServerAndClient**](AuthorizationServerApi.md#revokeRefreshTokensForAuthorizationServerAndClient) | **DELETE** /api/v1/authorizationServers/{authServerId}/clients/{clientId}/tokens | Revoke all Refresh Tokens for a Client
[**rotateAuthorizationServerKeys**](AuthorizationServerApi.md#rotateAuthorizationServerKeys) | **POST** /api/v1/authorizationServers/{authServerId}/credentials/lifecycle/keyRotate | Rotate all Credential Keys
[**updateAuthorizationServer**](AuthorizationServerApi.md#updateAuthorizationServer) | **PUT** /api/v1/authorizationServers/{authServerId} | Replace an Authorization Server
[**updateAuthorizationServerPolicy**](AuthorizationServerApi.md#updateAuthorizationServerPolicy) | **PUT** /api/v1/authorizationServers/{authServerId}/policies/{policyId} | Replace a Policy
[**updateAuthorizationServerPolicyRule**](AuthorizationServerApi.md#updateAuthorizationServerPolicyRule) | **PUT** /api/v1/authorizationServers/{authServerId}/policies/{policyId}/rules/{ruleId} | Replace a Policy Rule
[**updateOAuth2Claim**](AuthorizationServerApi.md#updateOAuth2Claim) | **PUT** /api/v1/authorizationServers/{authServerId}/claims/{claimId} | Replace a Custom Token Claim
[**updateOAuth2Scope**](AuthorizationServerApi.md#updateOAuth2Scope) | **PUT** /api/v1/authorizationServers/{authServerId}/scopes/{scopeId} | Replace a Custom Token Scope


# **activateAuthorizationServer**
> void activateAuthorizationServer()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiActivateAuthorizationServerRequest = {
  // string
  authServerId: "authServerId_example",
};

apiInstance.activateAuthorizationServer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authServerId** | [**string**] |  | defaults to undefined


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

# **activateAuthorizationServerPolicy**
> void activateAuthorizationServerPolicy()

Activate Authorization Server Policy

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiActivateAuthorizationServerPolicyRequest = {
  // string
  authServerId: "authServerId_example",
  // string
  policyId: "policyId_example",
};

apiInstance.activateAuthorizationServerPolicy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authServerId** | [**string**] |  | defaults to undefined
 **policyId** | [**string**] |  | defaults to undefined


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

# **activateAuthorizationServerPolicyRule**
> void activateAuthorizationServerPolicyRule()

Activate Authorization Server Policy Rule

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiActivateAuthorizationServerPolicyRuleRequest = {
  // string
  authServerId: "authServerId_example",
  // string
  policyId: "policyId_example",
  // string
  ruleId: "ruleId_example",
};

apiInstance.activateAuthorizationServerPolicyRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authServerId** | [**string**] |  | defaults to undefined
 **policyId** | [**string**] |  | defaults to undefined
 **ruleId** | [**string**] |  | defaults to undefined


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

# **createAuthorizationServer**
> AuthorizationServer createAuthorizationServer(authorizationServer)

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiCreateAuthorizationServerRequest = {
  // AuthorizationServer
  authorizationServer: {
    audiences: [
      "audiences_example",
    ],
    credentials: {
      signing: {
        kid: "kid_example",
        rotationMode: "AUTO",
        use: "sig",
      },
    },
    description: "description_example",
    issuer: "issuer_example",
    issuerMode: "CUSTOM_URL",
    name: "name_example",
    status: "ACTIVE",
  },
};

apiInstance.createAuthorizationServer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorizationServer** | **AuthorizationServer**|  |


### Return type

**AuthorizationServer**

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

# **createAuthorizationServerPolicy**
> AuthorizationServerPolicy createAuthorizationServerPolicy(policy)

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiCreateAuthorizationServerPolicyRequest = {
  // string
  authServerId: "authServerId_example",
  // AuthorizationServerPolicy
  policy: null,
};

apiInstance.createAuthorizationServerPolicy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy** | **AuthorizationServerPolicy**|  |
 **authServerId** | [**string**] |  | defaults to undefined


### Return type

**AuthorizationServerPolicy**

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

# **createAuthorizationServerPolicyRule**
> AuthorizationServerPolicyRule createAuthorizationServerPolicyRule(policyRule)

Creates a policy rule for the specified Custom Authorization Server and Policy.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiCreateAuthorizationServerPolicyRuleRequest = {
  // string
  policyId: "policyId_example",
  // string
  authServerId: "authServerId_example",
  // AuthorizationServerPolicyRule
  policyRule: null,
};

apiInstance.createAuthorizationServerPolicyRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policyRule** | **AuthorizationServerPolicyRule**|  |
 **policyId** | [**string**] |  | defaults to undefined
 **authServerId** | [**string**] |  | defaults to undefined


### Return type

**AuthorizationServerPolicyRule**

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

# **createOAuth2Claim**
> OAuth2Claim createOAuth2Claim(oAuth2Claim)

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiCreateOAuth2ClaimRequest = {
  // string
  authServerId: "authServerId_example",
  // OAuth2Claim
  oAuth2Claim: {
    alwaysIncludeInToken: true,
    claimType: "IDENTITY",
    conditions: {
      scopes: [
        "scopes_example",
      ],
    },
    group_filter_type: "CONTAINS",
    name: "name_example",
    status: "ACTIVE",
    system: true,
    value: "value_example",
    valueType: "EXPRESSION",
  },
};

apiInstance.createOAuth2Claim(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oAuth2Claim** | **OAuth2Claim**|  |
 **authServerId** | [**string**] |  | defaults to undefined


### Return type

**OAuth2Claim**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createOAuth2Scope**
> OAuth2Scope createOAuth2Scope(oAuth2Scope)

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiCreateOAuth2ScopeRequest = {
  // string
  authServerId: "authServerId_example",
  // OAuth2Scope
  oAuth2Scope: {
    consent: "ADMIN",
    _default: true,
    description: "description_example",
    displayName: "displayName_example",
    metadataPublish: "ALL_CLIENTS",
    name: "name_example",
    system: true,
  },
};

apiInstance.createOAuth2Scope(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oAuth2Scope** | **OAuth2Scope**|  |
 **authServerId** | [**string**] |  | defaults to undefined


### Return type

**OAuth2Scope**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deactivateAuthorizationServer**
> void deactivateAuthorizationServer()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiDeactivateAuthorizationServerRequest = {
  // string
  authServerId: "authServerId_example",
};

apiInstance.deactivateAuthorizationServer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authServerId** | [**string**] |  | defaults to undefined


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

# **deactivateAuthorizationServerPolicy**
> void deactivateAuthorizationServerPolicy()

Deactivate Authorization Server Policy

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiDeactivateAuthorizationServerPolicyRequest = {
  // string
  authServerId: "authServerId_example",
  // string
  policyId: "policyId_example",
};

apiInstance.deactivateAuthorizationServerPolicy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authServerId** | [**string**] |  | defaults to undefined
 **policyId** | [**string**] |  | defaults to undefined


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

# **deactivateAuthorizationServerPolicyRule**
> void deactivateAuthorizationServerPolicyRule()

Deactivate Authorization Server Policy Rule

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiDeactivateAuthorizationServerPolicyRuleRequest = {
  // string
  authServerId: "authServerId_example",
  // string
  policyId: "policyId_example",
  // string
  ruleId: "ruleId_example",
};

apiInstance.deactivateAuthorizationServerPolicyRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authServerId** | [**string**] |  | defaults to undefined
 **policyId** | [**string**] |  | defaults to undefined
 **ruleId** | [**string**] |  | defaults to undefined


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

# **deleteAuthorizationServer**
> void deleteAuthorizationServer()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiDeleteAuthorizationServerRequest = {
  // string
  authServerId: "authServerId_example",
};

apiInstance.deleteAuthorizationServer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authServerId** | [**string**] |  | defaults to undefined


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

# **deleteAuthorizationServerPolicy**
> void deleteAuthorizationServerPolicy()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiDeleteAuthorizationServerPolicyRequest = {
  // string
  authServerId: "authServerId_example",
  // string
  policyId: "policyId_example",
};

apiInstance.deleteAuthorizationServerPolicy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authServerId** | [**string**] |  | defaults to undefined
 **policyId** | [**string**] |  | defaults to undefined


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

# **deleteAuthorizationServerPolicyRule**
> void deleteAuthorizationServerPolicyRule()

Deletes a Policy Rule defined in the specified Custom Authorization Server and Policy.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiDeleteAuthorizationServerPolicyRuleRequest = {
  // string
  policyId: "policyId_example",
  // string
  authServerId: "authServerId_example",
  // string
  ruleId: "ruleId_example",
};

apiInstance.deleteAuthorizationServerPolicyRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policyId** | [**string**] |  | defaults to undefined
 **authServerId** | [**string**] |  | defaults to undefined
 **ruleId** | [**string**] |  | defaults to undefined


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

# **deleteOAuth2Claim**
> void deleteOAuth2Claim()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiDeleteOAuth2ClaimRequest = {
  // string
  authServerId: "authServerId_example",
  // string
  claimId: "claimId_example",
};

apiInstance.deleteOAuth2Claim(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authServerId** | [**string**] |  | defaults to undefined
 **claimId** | [**string**] |  | defaults to undefined


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

# **deleteOAuth2Scope**
> void deleteOAuth2Scope()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiDeleteOAuth2ScopeRequest = {
  // string
  authServerId: "authServerId_example",
  // string
  scopeId: "scopeId_example",
};

apiInstance.deleteOAuth2Scope(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authServerId** | [**string**] |  | defaults to undefined
 **scopeId** | [**string**] |  | defaults to undefined


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

# **getAuthorizationServer**
> AuthorizationServer getAuthorizationServer()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiGetAuthorizationServerRequest = {
  // string
  authServerId: "authServerId_example",
};

apiInstance.getAuthorizationServer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authServerId** | [**string**] |  | defaults to undefined


### Return type

**AuthorizationServer**

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

# **getAuthorizationServerPolicy**
> AuthorizationServerPolicy getAuthorizationServerPolicy()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiGetAuthorizationServerPolicyRequest = {
  // string
  authServerId: "authServerId_example",
  // string
  policyId: "policyId_example",
};

apiInstance.getAuthorizationServerPolicy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authServerId** | [**string**] |  | defaults to undefined
 **policyId** | [**string**] |  | defaults to undefined


### Return type

**AuthorizationServerPolicy**

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

# **getAuthorizationServerPolicyRule**
> AuthorizationServerPolicyRule getAuthorizationServerPolicyRule()

Returns a Policy Rule by ID that is defined in the specified Custom Authorization Server and Policy.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiGetAuthorizationServerPolicyRuleRequest = {
  // string
  policyId: "policyId_example",
  // string
  authServerId: "authServerId_example",
  // string
  ruleId: "ruleId_example",
};

apiInstance.getAuthorizationServerPolicyRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policyId** | [**string**] |  | defaults to undefined
 **authServerId** | [**string**] |  | defaults to undefined
 **ruleId** | [**string**] |  | defaults to undefined


### Return type

**AuthorizationServerPolicyRule**

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

# **getOAuth2Claim**
> OAuth2Claim getOAuth2Claim()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiGetOAuth2ClaimRequest = {
  // string
  authServerId: "authServerId_example",
  // string
  claimId: "claimId_example",
};

apiInstance.getOAuth2Claim(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authServerId** | [**string**] |  | defaults to undefined
 **claimId** | [**string**] |  | defaults to undefined


### Return type

**OAuth2Claim**

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

# **getOAuth2Scope**
> OAuth2Scope getOAuth2Scope()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiGetOAuth2ScopeRequest = {
  // string
  authServerId: "authServerId_example",
  // string
  scopeId: "scopeId_example",
};

apiInstance.getOAuth2Scope(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authServerId** | [**string**] |  | defaults to undefined
 **scopeId** | [**string**] |  | defaults to undefined


### Return type

**OAuth2Scope**

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

# **getRefreshTokenForAuthorizationServerAndClient**
> OAuth2RefreshToken getRefreshTokenForAuthorizationServerAndClient()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiGetRefreshTokenForAuthorizationServerAndClientRequest = {
  // string
  authServerId: "authServerId_example",
  // string
  clientId: "clientId_example",
  // string
  tokenId: "tokenId_example",
  // string (optional)
  expand: "expand_example",
};

apiInstance.getRefreshTokenForAuthorizationServerAndClient(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authServerId** | [**string**] |  | defaults to undefined
 **clientId** | [**string**] |  | defaults to undefined
 **tokenId** | [**string**] |  | defaults to undefined
 **expand** | [**string**] |  | (optional) defaults to undefined


### Return type

**OAuth2RefreshToken**

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

# **listAuthorizationServerKeys**
> Array<JsonWebKey> listAuthorizationServerKeys()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiListAuthorizationServerKeysRequest = {
  // string
  authServerId: "authServerId_example",
};

apiInstance.listAuthorizationServerKeys(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authServerId** | [**string**] |  | defaults to undefined


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

# **listAuthorizationServerPolicies**
> Array<AuthorizationServerPolicy> listAuthorizationServerPolicies()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiListAuthorizationServerPoliciesRequest = {
  // string
  authServerId: "authServerId_example",
};

apiInstance.listAuthorizationServerPolicies(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authServerId** | [**string**] |  | defaults to undefined


### Return type

**Array<AuthorizationServerPolicy>**

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

# **listAuthorizationServerPolicyRules**
> Array<AuthorizationServerPolicyRule> listAuthorizationServerPolicyRules()

Enumerates all policy rules for the specified Custom Authorization Server and Policy.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiListAuthorizationServerPolicyRulesRequest = {
  // string
  policyId: "policyId_example",
  // string
  authServerId: "authServerId_example",
};

apiInstance.listAuthorizationServerPolicyRules(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policyId** | [**string**] |  | defaults to undefined
 **authServerId** | [**string**] |  | defaults to undefined


### Return type

**Array<AuthorizationServerPolicyRule>**

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

# **listAuthorizationServers**
> Array<AuthorizationServer> listAuthorizationServers()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiListAuthorizationServersRequest = {
  // string (optional)
  q: "q_example",
  // number (optional)
  limit: 200,
  // string (optional)
  after: "after_example",
};

apiInstance.listAuthorizationServers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 200
 **after** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<AuthorizationServer>**

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

# **listOAuth2Claims**
> Array<OAuth2Claim> listOAuth2Claims()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiListOAuth2ClaimsRequest = {
  // string
  authServerId: "authServerId_example",
};

apiInstance.listOAuth2Claims(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authServerId** | [**string**] |  | defaults to undefined


### Return type

**Array<OAuth2Claim>**

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

# **listOAuth2ClientsForAuthorizationServer**
> Array<OAuth2Client> listOAuth2ClientsForAuthorizationServer()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiListOAuth2ClientsForAuthorizationServerRequest = {
  // string
  authServerId: "authServerId_example",
};

apiInstance.listOAuth2ClientsForAuthorizationServer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authServerId** | [**string**] |  | defaults to undefined


### Return type

**Array<OAuth2Client>**

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

# **listOAuth2Scopes**
> Array<OAuth2Scope> listOAuth2Scopes()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiListOAuth2ScopesRequest = {
  // string
  authServerId: "authServerId_example",
  // string (optional)
  q: "q_example",
  // string (optional)
  filter: "filter_example",
  // string (optional)
  cursor: "cursor_example",
  // number (optional)
  limit: -1,
};

apiInstance.listOAuth2Scopes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authServerId** | [**string**] |  | defaults to undefined
 **q** | [**string**] |  | (optional) defaults to undefined
 **filter** | [**string**] |  | (optional) defaults to undefined
 **cursor** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to -1


### Return type

**Array<OAuth2Scope>**

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

# **listRefreshTokensForAuthorizationServerAndClient**
> Array<OAuth2RefreshToken> listRefreshTokensForAuthorizationServerAndClient()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiListRefreshTokensForAuthorizationServerAndClientRequest = {
  // string
  authServerId: "authServerId_example",
  // string
  clientId: "clientId_example",
  // string (optional)
  expand: "expand_example",
  // string (optional)
  after: "after_example",
  // number (optional)
  limit: -1,
};

apiInstance.listRefreshTokensForAuthorizationServerAndClient(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authServerId** | [**string**] |  | defaults to undefined
 **clientId** | [**string**] |  | defaults to undefined
 **expand** | [**string**] |  | (optional) defaults to undefined
 **after** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to -1


### Return type

**Array<OAuth2RefreshToken>**

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

# **revokeRefreshTokenForAuthorizationServerAndClient**
> void revokeRefreshTokenForAuthorizationServerAndClient()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiRevokeRefreshTokenForAuthorizationServerAndClientRequest = {
  // string
  authServerId: "authServerId_example",
  // string
  clientId: "clientId_example",
  // string
  tokenId: "tokenId_example",
};

apiInstance.revokeRefreshTokenForAuthorizationServerAndClient(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authServerId** | [**string**] |  | defaults to undefined
 **clientId** | [**string**] |  | defaults to undefined
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

# **revokeRefreshTokensForAuthorizationServerAndClient**
> void revokeRefreshTokensForAuthorizationServerAndClient()

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiRevokeRefreshTokensForAuthorizationServerAndClientRequest = {
  // string
  authServerId: "authServerId_example",
  // string
  clientId: "clientId_example",
};

apiInstance.revokeRefreshTokensForAuthorizationServerAndClient(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authServerId** | [**string**] |  | defaults to undefined
 **clientId** | [**string**] |  | defaults to undefined


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

# **rotateAuthorizationServerKeys**
> Array<JsonWebKey> rotateAuthorizationServerKeys(use)

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiRotateAuthorizationServerKeysRequest = {
  // string
  authServerId: "authServerId_example",
  // JwkUse
  use: {
    use: "sig",
  },
};

apiInstance.rotateAuthorizationServerKeys(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **use** | **JwkUse**|  |
 **authServerId** | [**string**] |  | defaults to undefined


### Return type

**Array<JsonWebKey>**

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

# **updateAuthorizationServer**
> AuthorizationServer updateAuthorizationServer(authorizationServer)

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiUpdateAuthorizationServerRequest = {
  // string
  authServerId: "authServerId_example",
  // AuthorizationServer
  authorizationServer: {
    audiences: [
      "audiences_example",
    ],
    credentials: {
      signing: {
        kid: "kid_example",
        rotationMode: "AUTO",
        use: "sig",
      },
    },
    description: "description_example",
    issuer: "issuer_example",
    issuerMode: "CUSTOM_URL",
    name: "name_example",
    status: "ACTIVE",
  },
};

apiInstance.updateAuthorizationServer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorizationServer** | **AuthorizationServer**|  |
 **authServerId** | [**string**] |  | defaults to undefined


### Return type

**AuthorizationServer**

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

# **updateAuthorizationServerPolicy**
> AuthorizationServerPolicy updateAuthorizationServerPolicy(policy)

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiUpdateAuthorizationServerPolicyRequest = {
  // string
  authServerId: "authServerId_example",
  // string
  policyId: "policyId_example",
  // AuthorizationServerPolicy
  policy: null,
};

apiInstance.updateAuthorizationServerPolicy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy** | **AuthorizationServerPolicy**|  |
 **authServerId** | [**string**] |  | defaults to undefined
 **policyId** | [**string**] |  | defaults to undefined


### Return type

**AuthorizationServerPolicy**

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

# **updateAuthorizationServerPolicyRule**
> AuthorizationServerPolicyRule updateAuthorizationServerPolicyRule(policyRule)

Updates the configuration of the Policy Rule defined in the specified Custom Authorization Server and Policy.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiUpdateAuthorizationServerPolicyRuleRequest = {
  // string
  policyId: "policyId_example",
  // string
  authServerId: "authServerId_example",
  // string
  ruleId: "ruleId_example",
  // AuthorizationServerPolicyRule
  policyRule: null,
};

apiInstance.updateAuthorizationServerPolicyRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policyRule** | **AuthorizationServerPolicyRule**|  |
 **policyId** | [**string**] |  | defaults to undefined
 **authServerId** | [**string**] |  | defaults to undefined
 **ruleId** | [**string**] |  | defaults to undefined


### Return type

**AuthorizationServerPolicyRule**

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

# **updateOAuth2Claim**
> OAuth2Claim updateOAuth2Claim(oAuth2Claim)

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiUpdateOAuth2ClaimRequest = {
  // string
  authServerId: "authServerId_example",
  // string
  claimId: "claimId_example",
  // OAuth2Claim
  oAuth2Claim: {
    alwaysIncludeInToken: true,
    claimType: "IDENTITY",
    conditions: {
      scopes: [
        "scopes_example",
      ],
    },
    group_filter_type: "CONTAINS",
    name: "name_example",
    status: "ACTIVE",
    system: true,
    value: "value_example",
    valueType: "EXPRESSION",
  },
};

apiInstance.updateOAuth2Claim(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oAuth2Claim** | **OAuth2Claim**|  |
 **authServerId** | [**string**] |  | defaults to undefined
 **claimId** | [**string**] |  | defaults to undefined


### Return type

**OAuth2Claim**

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

# **updateOAuth2Scope**
> OAuth2Scope updateOAuth2Scope(oAuth2Scope)

Success

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AuthorizationServerApi(configuration);

let body:okta.AuthorizationServerApiUpdateOAuth2ScopeRequest = {
  // string
  authServerId: "authServerId_example",
  // string
  scopeId: "scopeId_example",
  // OAuth2Scope
  oAuth2Scope: {
    consent: "ADMIN",
    _default: true,
    description: "description_example",
    displayName: "displayName_example",
    metadataPublish: "ALL_CLIENTS",
    name: "name_example",
    system: true,
  },
};

apiInstance.updateOAuth2Scope(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oAuth2Scope** | **OAuth2Scope**|  |
 **authServerId** | [**string**] |  | defaults to undefined
 **scopeId** | [**string**] |  | defaults to undefined


### Return type

**OAuth2Scope**

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


