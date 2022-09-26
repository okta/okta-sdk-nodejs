# okta.IdentityProviderApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateIdentityProvider**](IdentityProviderApi.md#activateIdentityProvider) | **POST** /api/v1/idps/{idpId}/lifecycle/activate | Activate an Identity Provider
[**cloneIdentityProviderKey**](IdentityProviderApi.md#cloneIdentityProviderKey) | **POST** /api/v1/idps/{idpId}/credentials/keys/{keyId}/clone | Clone a Signing Credential Key
[**createIdentityProvider**](IdentityProviderApi.md#createIdentityProvider) | **POST** /api/v1/idps | Create an Identity Provider
[**createIdentityProviderKey**](IdentityProviderApi.md#createIdentityProviderKey) | **POST** /api/v1/idps/credentials/keys | Create an X.509 Certificate Public Key
[**deactivateIdentityProvider**](IdentityProviderApi.md#deactivateIdentityProvider) | **POST** /api/v1/idps/{idpId}/lifecycle/deactivate | Deactivate an Identity Provider
[**deleteIdentityProvider**](IdentityProviderApi.md#deleteIdentityProvider) | **DELETE** /api/v1/idps/{idpId} | Delete an Identity Provider
[**deleteIdentityProviderKey**](IdentityProviderApi.md#deleteIdentityProviderKey) | **DELETE** /api/v1/idps/credentials/keys/{keyId} | Delete a Signing Credential Key
[**generateCsrForIdentityProvider**](IdentityProviderApi.md#generateCsrForIdentityProvider) | **POST** /api/v1/idps/{idpId}/credentials/csrs | Generate a Certificate Signing Request
[**generateIdentityProviderSigningKey**](IdentityProviderApi.md#generateIdentityProviderSigningKey) | **POST** /api/v1/idps/{idpId}/credentials/keys/generate | Generate a new Signing Credential Key
[**getCsrForIdentityProvider**](IdentityProviderApi.md#getCsrForIdentityProvider) | **GET** /api/v1/idps/{idpId}/credentials/csrs/{csrId} | Retrieve a Certificate Signing Request
[**getIdentityProvider**](IdentityProviderApi.md#getIdentityProvider) | **GET** /api/v1/idps/{idpId} | Retrieve an Identity Provider
[**getIdentityProviderApplicationUser**](IdentityProviderApi.md#getIdentityProviderApplicationUser) | **GET** /api/v1/idps/{idpId}/users/{userId} | Retrieve a User
[**getIdentityProviderKey**](IdentityProviderApi.md#getIdentityProviderKey) | **GET** /api/v1/idps/credentials/keys/{keyId} | Retrieve an Credential Key
[**getIdentityProviderSigningKey**](IdentityProviderApi.md#getIdentityProviderSigningKey) | **GET** /api/v1/idps/{idpId}/credentials/keys/{keyId} | Retrieve a Signing Credential Key
[**linkUserToIdentityProvider**](IdentityProviderApi.md#linkUserToIdentityProvider) | **POST** /api/v1/idps/{idpId}/users/{userId} | Link a User to a Social IdP
[**listCsrsForIdentityProvider**](IdentityProviderApi.md#listCsrsForIdentityProvider) | **GET** /api/v1/idps/{idpId}/credentials/csrs | List all Certificate Signing Requests
[**listIdentityProviderApplicationUsers**](IdentityProviderApi.md#listIdentityProviderApplicationUsers) | **GET** /api/v1/idps/{idpId}/users | List all Users
[**listIdentityProviderKeys**](IdentityProviderApi.md#listIdentityProviderKeys) | **GET** /api/v1/idps/credentials/keys | List all Credential Keys
[**listIdentityProviderSigningKeys**](IdentityProviderApi.md#listIdentityProviderSigningKeys) | **GET** /api/v1/idps/{idpId}/credentials/keys | List all Signing Credential Keys
[**listIdentityProviders**](IdentityProviderApi.md#listIdentityProviders) | **GET** /api/v1/idps | List all Identity Providers
[**listSocialAuthTokens**](IdentityProviderApi.md#listSocialAuthTokens) | **GET** /api/v1/idps/{idpId}/users/{userId}/credentials/tokens | List all Tokens from a OIDC Identity Provider
[**publishCsrForIdentityProvider**](IdentityProviderApi.md#publishCsrForIdentityProvider) | **POST** /api/v1/idps/{idpId}/credentials/csrs/{csrId}/lifecycle/publish | Publish a Certificate Signing Request
[**revokeCsrForIdentityProvider**](IdentityProviderApi.md#revokeCsrForIdentityProvider) | **DELETE** /api/v1/idps/{idpId}/credentials/csrs/{csrId} | Revoke a Certificate Signing Request
[**unlinkUserFromIdentityProvider**](IdentityProviderApi.md#unlinkUserFromIdentityProvider) | **DELETE** /api/v1/idps/{idpId}/users/{userId} | Unlink a User from IdP
[**updateIdentityProvider**](IdentityProviderApi.md#updateIdentityProvider) | **PUT** /api/v1/idps/{idpId} | Replace an Identity Provider


# **activateIdentityProvider**
> IdentityProvider activateIdentityProvider()

Activates an inactive IdP.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiActivateIdentityProviderRequest = {
  // string
  idpId: "idpId_example",
};

apiInstance.activateIdentityProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idpId** | [**string**] |  | defaults to undefined


### Return type

**IdentityProvider**

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

# **cloneIdentityProviderKey**
> JsonWebKey cloneIdentityProviderKey()

Clones a X.509 certificate for an IdP signing key credential from a source IdP to target IdP

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiCloneIdentityProviderKeyRequest = {
  // string
  idpId: "idpId_example",
  // string
  keyId: "keyId_example",
  // string
  targetIdpId: "targetIdpId_example",
};

apiInstance.cloneIdentityProviderKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idpId** | [**string**] |  | defaults to undefined
 **keyId** | [**string**] |  | defaults to undefined
 **targetIdpId** | [**string**] |  | defaults to undefined


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

# **createIdentityProvider**
> IdentityProvider createIdentityProvider(identityProvider)

Adds a new IdP to your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiCreateIdentityProviderRequest = {
  // IdentityProvider
  identityProvider: {
    issuerMode: "CUSTOM_URL",
    name: "name_example",
    policy: null,
    protocol: {
      algorithms: {
        request: {
          signature: {
            algorithm: "algorithm_example",
            scope: "ANY",
          },
        },
        response: {
          signature: {
            algorithm: "algorithm_example",
            scope: "ANY",
          },
        },
      },
      credentials: {
        client: {
          client_id: "client_id_example",
          client_secret: "client_secret_example",
        },
        signing: {
          kid: "kid_example",
        },
        trust: {
          audience: "audience_example",
          issuer: "issuer_example",
          kid: "kid_example",
          revocation: "CRL",
          revocationCacheLifetime: 1,
        },
      },
      endpoints: {
        acs: {
          binding: "HTTP-POST",
          destination: "destination_example",
          type: "INSTANCE",
          url: "url_example",
        },
        authorization: {
          binding: "HTTP-POST",
          destination: "destination_example",
          type: "INSTANCE",
          url: "url_example",
        },
        jwks: {
          binding: "HTTP-POST",
          destination: "destination_example",
          type: "INSTANCE",
          url: "url_example",
        },
        metadata: {
          binding: "HTTP-POST",
          destination: "destination_example",
          type: "INSTANCE",
          url: "url_example",
        },
        slo: {
          binding: "HTTP-POST",
          destination: "destination_example",
          type: "INSTANCE",
          url: "url_example",
        },
        sso: {
          binding: "HTTP-POST",
          destination: "destination_example",
          type: "INSTANCE",
          url: "url_example",
        },
        token: {
          binding: "HTTP-POST",
          destination: "destination_example",
          type: "INSTANCE",
          url: "url_example",
        },
        userInfo: {
          binding: "HTTP-POST",
          destination: "destination_example",
          type: "INSTANCE",
          url: "url_example",
        },
      },
      issuer: {
        binding: "HTTP-POST",
        destination: "destination_example",
        type: "INSTANCE",
        url: "url_example",
      },
      relayState: {
        format: "FROM_URL",
      },
      scopes: [
        "scopes_example",
      ],
      settings: {
        nameFormat: "nameFormat_example",
      },
      type: "MTLS",
    },
    status: "ACTIVE",
    type: "AgentlessDSSO",
  },
};

apiInstance.createIdentityProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityProvider** | **IdentityProvider**|  |


### Return type

**IdentityProvider**

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

# **createIdentityProviderKey**
> JsonWebKey createIdentityProviderKey(jsonWebKey)

Adds a new X.509 certificate credential to the IdP key store.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiCreateIdentityProviderKeyRequest = {
  // JsonWebKey
  jsonWebKey: {
    alg: "alg_example",
    created: new Date('1970-01-01T00:00:00.00Z'),
    e: "e_example",
    expiresAt: new Date('1970-01-01T00:00:00.00Z'),
    key_ops: [
      "key_ops_example",
    ],
    kid: "kid_example",
    kty: "kty_example",
    lastUpdated: new Date('1970-01-01T00:00:00.00Z'),
    n: "n_example",
    status: "status_example",
    use: "use_example",
    x5c: [
      "x5c_example",
    ],
    x5t: "x5t_example",
    x5tS256: "x5tS256_example",
    x5u: "x5u_example",
  },
};

apiInstance.createIdentityProviderKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jsonWebKey** | **JsonWebKey**|  |


### Return type

**JsonWebKey**

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

# **deactivateIdentityProvider**
> IdentityProvider deactivateIdentityProvider()

Deactivates an active IdP.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiDeactivateIdentityProviderRequest = {
  // string
  idpId: "idpId_example",
};

apiInstance.deactivateIdentityProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idpId** | [**string**] |  | defaults to undefined


### Return type

**IdentityProvider**

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

# **deleteIdentityProvider**
> void deleteIdentityProvider()

Removes an IdP from your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiDeleteIdentityProviderRequest = {
  // string
  idpId: "idpId_example",
};

apiInstance.deleteIdentityProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idpId** | [**string**] |  | defaults to undefined


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

# **deleteIdentityProviderKey**
> void deleteIdentityProviderKey()

Deletes a specific IdP Key Credential by `kid` if it is not currently being used by an Active or Inactive IdP.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiDeleteIdentityProviderKeyRequest = {
  // string
  keyId: "keyId_example",
};

apiInstance.deleteIdentityProviderKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyId** | [**string**] |  | defaults to undefined


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

# **generateCsrForIdentityProvider**
> Csr generateCsrForIdentityProvider(metadata)

Generates a new key pair and returns a Certificate Signing Request for it.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiGenerateCsrForIdentityProviderRequest = {
  // string
  idpId: "idpId_example",
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

apiInstance.generateCsrForIdentityProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metadata** | **CsrMetadata**|  |
 **idpId** | [**string**] |  | defaults to undefined


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

# **generateIdentityProviderSigningKey**
> JsonWebKey generateIdentityProviderSigningKey()

Generates a new X.509 certificate for an IdP signing key credential to be used for signing assertions sent to the IdP

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiGenerateIdentityProviderSigningKeyRequest = {
  // string
  idpId: "idpId_example",
  // number | expiry of the IdP Key Credential
  validityYears: 1,
};

apiInstance.generateIdentityProviderSigningKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idpId** | [**string**] |  | defaults to undefined
 **validityYears** | [**number**] | expiry of the IdP Key Credential | defaults to undefined


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

# **getCsrForIdentityProvider**
> Csr getCsrForIdentityProvider()

Gets a specific Certificate Signing Request model by id

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiGetCsrForIdentityProviderRequest = {
  // string
  idpId: "idpId_example",
  // string
  csrId: "csrId_example",
};

apiInstance.getCsrForIdentityProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idpId** | [**string**] |  | defaults to undefined
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

# **getIdentityProvider**
> IdentityProvider getIdentityProvider()

Fetches an IdP by `id`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiGetIdentityProviderRequest = {
  // string
  idpId: "idpId_example",
};

apiInstance.getIdentityProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idpId** | [**string**] |  | defaults to undefined


### Return type

**IdentityProvider**

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

# **getIdentityProviderApplicationUser**
> IdentityProviderApplicationUser getIdentityProviderApplicationUser()

Fetches a linked IdP user by ID

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiGetIdentityProviderApplicationUserRequest = {
  // string
  idpId: "idpId_example",
  // string
  userId: "userId_example",
};

apiInstance.getIdentityProviderApplicationUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idpId** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined


### Return type

**IdentityProviderApplicationUser**

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

# **getIdentityProviderKey**
> JsonWebKey getIdentityProviderKey()

Gets a specific IdP Key Credential by `kid`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiGetIdentityProviderKeyRequest = {
  // string
  keyId: "keyId_example",
};

apiInstance.getIdentityProviderKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **getIdentityProviderSigningKey**
> JsonWebKey getIdentityProviderSigningKey()

Gets a specific IdP Key Credential by `kid`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiGetIdentityProviderSigningKeyRequest = {
  // string
  idpId: "idpId_example",
  // string
  keyId: "keyId_example",
};

apiInstance.getIdentityProviderSigningKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idpId** | [**string**] |  | defaults to undefined
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

# **linkUserToIdentityProvider**
> IdentityProviderApplicationUser linkUserToIdentityProvider(userIdentityProviderLinkRequest)

Links an Okta user to an existing Social Identity Provider. This does not support the SAML2 Identity Provider Type

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiLinkUserToIdentityProviderRequest = {
  // string
  idpId: "idpId_example",
  // string
  userId: "userId_example",
  // UserIdentityProviderLinkRequest
  userIdentityProviderLinkRequest: {
    externalId: "externalId_example",
  },
};

apiInstance.linkUserToIdentityProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userIdentityProviderLinkRequest** | **UserIdentityProviderLinkRequest**|  |
 **idpId** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined


### Return type

**IdentityProviderApplicationUser**

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

# **listCsrsForIdentityProvider**
> Array<Csr> listCsrsForIdentityProvider()

Enumerates Certificate Signing Requests for an IdP

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiListCsrsForIdentityProviderRequest = {
  // string
  idpId: "idpId_example",
};

apiInstance.listCsrsForIdentityProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idpId** | [**string**] |  | defaults to undefined


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

# **listIdentityProviderApplicationUsers**
> Array<IdentityProviderApplicationUser> listIdentityProviderApplicationUsers()

Find all the users linked to an identity provider

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiListIdentityProviderApplicationUsersRequest = {
  // string
  idpId: "idpId_example",
};

apiInstance.listIdentityProviderApplicationUsers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idpId** | [**string**] |  | defaults to undefined


### Return type

**Array<IdentityProviderApplicationUser>**

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

# **listIdentityProviderKeys**
> Array<JsonWebKey> listIdentityProviderKeys()

Enumerates IdP key credentials.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiListIdentityProviderKeysRequest = {
  // string | Specifies the pagination cursor for the next page of keys (optional)
  after: "after_example",
  // number | Specifies the number of key results in a page (optional)
  limit: 20,
};

apiInstance.listIdentityProviderKeys(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **after** | [**string**] | Specifies the pagination cursor for the next page of keys | (optional) defaults to undefined
 **limit** | [**number**] | Specifies the number of key results in a page | (optional) defaults to 20


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
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listIdentityProviderSigningKeys**
> Array<JsonWebKey> listIdentityProviderSigningKeys()

Enumerates signing key credentials for an IdP

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiListIdentityProviderSigningKeysRequest = {
  // string
  idpId: "idpId_example",
};

apiInstance.listIdentityProviderSigningKeys(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idpId** | [**string**] |  | defaults to undefined


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

# **listIdentityProviders**
> Array<IdentityProvider> listIdentityProviders()

Enumerates IdPs in your organization with pagination. A subset of IdPs can be returned that match a supported filter expression or query.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiListIdentityProvidersRequest = {
  // string | Searches the name property of IdPs for matching value (optional)
  q: "q_example",
  // string | Specifies the pagination cursor for the next page of IdPs (optional)
  after: "after_example",
  // number | Specifies the number of IdP results in a page (optional)
  limit: 20,
  // string | Filters IdPs by type (optional)
  type: "type_example",
};

apiInstance.listIdentityProviders(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] | Searches the name property of IdPs for matching value | (optional) defaults to undefined
 **after** | [**string**] | Specifies the pagination cursor for the next page of IdPs | (optional) defaults to undefined
 **limit** | [**number**] | Specifies the number of IdP results in a page | (optional) defaults to 20
 **type** | [**string**] | Filters IdPs by type | (optional) defaults to undefined


### Return type

**Array<IdentityProvider>**

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

# **listSocialAuthTokens**
> Array<SocialAuthToken> listSocialAuthTokens()

Fetches the tokens minted by the Social Authentication Provider when the user authenticates with Okta via Social Auth.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiListSocialAuthTokensRequest = {
  // string
  idpId: "idpId_example",
  // string
  userId: "userId_example",
};

apiInstance.listSocialAuthTokens(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idpId** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined


### Return type

**Array<SocialAuthToken>**

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

# **publishCsrForIdentityProvider**
> JsonWebKey publishCsrForIdentityProvider(body)

Update the Certificate Signing Request with a signed X.509 certificate and add it into the signing key credentials for the IdP.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiPublishCsrForIdentityProviderRequest = {
  // string
  idpId: "idpId_example",
  // string
  csrId: "csrId_example",
  // HttpFile
  body: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.publishCsrForIdentityProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **HttpFile**|  |
 **idpId** | [**string**] |  | defaults to undefined
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

# **revokeCsrForIdentityProvider**
> void revokeCsrForIdentityProvider()

Revoke a Certificate Signing Request and delete the key pair from the IdP

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiRevokeCsrForIdentityProviderRequest = {
  // string
  idpId: "idpId_example",
  // string
  csrId: "csrId_example",
};

apiInstance.revokeCsrForIdentityProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idpId** | [**string**] |  | defaults to undefined
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

# **unlinkUserFromIdentityProvider**
> void unlinkUserFromIdentityProvider()

Removes the link between the Okta user and the IdP user.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiUnlinkUserFromIdentityProviderRequest = {
  // string
  idpId: "idpId_example",
  // string
  userId: "userId_example",
};

apiInstance.unlinkUserFromIdentityProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idpId** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined


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

# **updateIdentityProvider**
> IdentityProvider updateIdentityProvider(identityProvider)

Updates the configuration for an IdP.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.IdentityProviderApi(configuration);

let body:okta.IdentityProviderApiUpdateIdentityProviderRequest = {
  // string
  idpId: "idpId_example",
  // IdentityProvider
  identityProvider: {
    issuerMode: "CUSTOM_URL",
    name: "name_example",
    policy: null,
    protocol: {
      algorithms: {
        request: {
          signature: {
            algorithm: "algorithm_example",
            scope: "ANY",
          },
        },
        response: {
          signature: {
            algorithm: "algorithm_example",
            scope: "ANY",
          },
        },
      },
      credentials: {
        client: {
          client_id: "client_id_example",
          client_secret: "client_secret_example",
        },
        signing: {
          kid: "kid_example",
        },
        trust: {
          audience: "audience_example",
          issuer: "issuer_example",
          kid: "kid_example",
          revocation: "CRL",
          revocationCacheLifetime: 1,
        },
      },
      endpoints: {
        acs: {
          binding: "HTTP-POST",
          destination: "destination_example",
          type: "INSTANCE",
          url: "url_example",
        },
        authorization: {
          binding: "HTTP-POST",
          destination: "destination_example",
          type: "INSTANCE",
          url: "url_example",
        },
        jwks: {
          binding: "HTTP-POST",
          destination: "destination_example",
          type: "INSTANCE",
          url: "url_example",
        },
        metadata: {
          binding: "HTTP-POST",
          destination: "destination_example",
          type: "INSTANCE",
          url: "url_example",
        },
        slo: {
          binding: "HTTP-POST",
          destination: "destination_example",
          type: "INSTANCE",
          url: "url_example",
        },
        sso: {
          binding: "HTTP-POST",
          destination: "destination_example",
          type: "INSTANCE",
          url: "url_example",
        },
        token: {
          binding: "HTTP-POST",
          destination: "destination_example",
          type: "INSTANCE",
          url: "url_example",
        },
        userInfo: {
          binding: "HTTP-POST",
          destination: "destination_example",
          type: "INSTANCE",
          url: "url_example",
        },
      },
      issuer: {
        binding: "HTTP-POST",
        destination: "destination_example",
        type: "INSTANCE",
        url: "url_example",
      },
      relayState: {
        format: "FROM_URL",
      },
      scopes: [
        "scopes_example",
      ],
      settings: {
        nameFormat: "nameFormat_example",
      },
      type: "MTLS",
    },
    status: "ACTIVE",
    type: "AgentlessDSSO",
  },
};

apiInstance.updateIdentityProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityProvider** | **IdentityProvider**|  |
 **idpId** | [**string**] |  | defaults to undefined


### Return type

**IdentityProvider**

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


