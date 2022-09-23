# okta.ResourceSetApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMembersToBinding**](ResourceSetApi.md#addMembersToBinding) | **PATCH** /api/v1/iam/resource-sets/{resourceSetId}/bindings/{roleIdOrLabel}/members | Add more members to a Binding
[**createResourceSet**](ResourceSetApi.md#createResourceSet) | **POST** /api/v1/iam/resource-sets | Create a Resource Set
[**createResourceSetBinding**](ResourceSetApi.md#createResourceSetBinding) | **POST** /api/v1/iam/resource-sets/{resourceSetId}/bindings | Create a Resource Set Binding
[**deleteBinding**](ResourceSetApi.md#deleteBinding) | **DELETE** /api/v1/iam/resource-sets/{resourceSetId}/bindings/{roleIdOrLabel} | Delete a Binding
[**deleteResourceSet**](ResourceSetApi.md#deleteResourceSet) | **DELETE** /api/v1/iam/resource-sets/{resourceSetId} | Delete a Resource Set
[**getBinding**](ResourceSetApi.md#getBinding) | **GET** /api/v1/iam/resource-sets/{resourceSetId}/bindings/{roleIdOrLabel} | Retrieve a Binding
[**getResourceSet**](ResourceSetApi.md#getResourceSet) | **GET** /api/v1/iam/resource-sets/{resourceSetId} | Retrieve a Resource Set
[**listBindings**](ResourceSetApi.md#listBindings) | **GET** /api/v1/iam/resource-sets/{resourceSetId}/bindings | List all Bindings
[**listMembersOfBinding**](ResourceSetApi.md#listMembersOfBinding) | **GET** /api/v1/iam/resource-sets/{resourceSetId}/bindings/{roleIdOrLabel}/members | List all members of a Binding
[**listResourceSets**](ResourceSetApi.md#listResourceSets) | **GET** /api/v1/iam/resource-sets | List all Resource Sets
[**replaceResourceSet**](ResourceSetApi.md#replaceResourceSet) | **PUT** /api/v1/iam/resource-sets/{resourceSetId} | Replace a Resource Set


# **addMembersToBinding**
> ResourceSetBindingResponse addMembersToBinding(instance)

Adds more members to a resource set binding

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ResourceSetApi(configuration);

let body:okta.ResourceSetApiAddMembersToBindingRequest = {
  // string | `id` of a resource set
  resourceSetId: "iamoJDFKaJxGIr0oamd9g",
  // string | `id` or `label` of the role
  roleIdOrLabel: "cr0Yq6IJxGIr0ouum0g3",
  // ResourceSetBindingAddMembersRequest
  instance: {
    additions: [
      "additions_example",
    ],
  },
};

apiInstance.addMembersToBinding(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance** | **ResourceSetBindingAddMembersRequest**|  |
 **resourceSetId** | [**string**] | &#x60;id&#x60; of a resource set | defaults to undefined
 **roleIdOrLabel** | [**string**] | &#x60;id&#x60; or &#x60;label&#x60; of the role | defaults to undefined


### Return type

**ResourceSetBindingResponse**

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

# **createResourceSet**
> ResourceSet createResourceSet(instance)

Creates a new resource set

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ResourceSetApi(configuration);

let body:okta.ResourceSetApiCreateResourceSetRequest = {
  // ResourceSet
  instance: {
    description: "description_example",
    label: "label_example",
  },
};

apiInstance.createResourceSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance** | **ResourceSet**|  |


### Return type

**ResourceSet**

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

# **createResourceSetBinding**
> ResourceSetBindingResponse createResourceSetBinding(instance)

Creates a new resource set binding

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ResourceSetApi(configuration);

let body:okta.ResourceSetApiCreateResourceSetBindingRequest = {
  // string | `id` of a resource set
  resourceSetId: "iamoJDFKaJxGIr0oamd9g",
  // ResourceSetBindingCreateRequest
  instance: {
    members: [
      "members_example",
    ],
    role: "role_example",
  },
};

apiInstance.createResourceSetBinding(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance** | **ResourceSetBindingCreateRequest**|  |
 **resourceSetId** | [**string**] | &#x60;id&#x60; of a resource set | defaults to undefined


### Return type

**ResourceSetBindingResponse**

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

# **deleteBinding**
> void deleteBinding()

Deletes a resource set binding by `resourceSetId` and `roleIdOrLabel`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ResourceSetApi(configuration);

let body:okta.ResourceSetApiDeleteBindingRequest = {
  // string | `id` of a resource set
  resourceSetId: "iamoJDFKaJxGIr0oamd9g",
  // string | `id` or `label` of the role
  roleIdOrLabel: "cr0Yq6IJxGIr0ouum0g3",
};

apiInstance.deleteBinding(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceSetId** | [**string**] | &#x60;id&#x60; of a resource set | defaults to undefined
 **roleIdOrLabel** | [**string**] | &#x60;id&#x60; or &#x60;label&#x60; of the role | defaults to undefined


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

# **deleteResourceSet**
> void deleteResourceSet()

Deletes a role by `resourceSetId`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ResourceSetApi(configuration);

let body:okta.ResourceSetApiDeleteResourceSetRequest = {
  // string | `id` of a resource set
  resourceSetId: "iamoJDFKaJxGIr0oamd9g",
};

apiInstance.deleteResourceSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceSetId** | [**string**] | &#x60;id&#x60; of a resource set | defaults to undefined


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

# **getBinding**
> ResourceSetBindingResponse getBinding()

Retrieves a resource set binding by `resourceSetId` and `roleIdOrLabel`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ResourceSetApi(configuration);

let body:okta.ResourceSetApiGetBindingRequest = {
  // string | `id` of a resource set
  resourceSetId: "iamoJDFKaJxGIr0oamd9g",
  // string | `id` or `label` of the role
  roleIdOrLabel: "cr0Yq6IJxGIr0ouum0g3",
};

apiInstance.getBinding(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceSetId** | [**string**] | &#x60;id&#x60; of a resource set | defaults to undefined
 **roleIdOrLabel** | [**string**] | &#x60;id&#x60; or &#x60;label&#x60; of the role | defaults to undefined


### Return type

**ResourceSetBindingResponse**

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

# **getResourceSet**
> ResourceSet getResourceSet()

Retrieve a resource set by `resourceSetId`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ResourceSetApi(configuration);

let body:okta.ResourceSetApiGetResourceSetRequest = {
  // string | `id` of a resource set
  resourceSetId: "iamoJDFKaJxGIr0oamd9g",
};

apiInstance.getResourceSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceSetId** | [**string**] | &#x60;id&#x60; of a resource set | defaults to undefined


### Return type

**ResourceSet**

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

# **listBindings**
> ResourceSetBindings listBindings()

Lists all resource set bindings with pagination support

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ResourceSetApi(configuration);

let body:okta.ResourceSetApiListBindingsRequest = {
  // string | `id` of a resource set
  resourceSetId: "iamoJDFKaJxGIr0oamd9g",
  // string | The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the `Link` response header. See [Pagination](/#pagination) for more information. (optional)
  after: "after_example",
};

apiInstance.listBindings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceSetId** | [**string**] | &#x60;id&#x60; of a resource set | defaults to undefined
 **after** | [**string**] | The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information. | (optional) defaults to undefined


### Return type

**ResourceSetBindings**

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

# **listMembersOfBinding**
> ResourceSetBindingMembers listMembersOfBinding()

Lists all members of a resource set binding with pagination support

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ResourceSetApi(configuration);

let body:okta.ResourceSetApiListMembersOfBindingRequest = {
  // string | `id` of a resource set
  resourceSetId: "iamoJDFKaJxGIr0oamd9g",
  // string | `id` or `label` of the role
  roleIdOrLabel: "cr0Yq6IJxGIr0ouum0g3",
  // string | The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the `Link` response header. See [Pagination](/#pagination) for more information. (optional)
  after: "after_example",
};

apiInstance.listMembersOfBinding(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceSetId** | [**string**] | &#x60;id&#x60; of a resource set | defaults to undefined
 **roleIdOrLabel** | [**string**] | &#x60;id&#x60; or &#x60;label&#x60; of the role | defaults to undefined
 **after** | [**string**] | The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information. | (optional) defaults to undefined


### Return type

**ResourceSetBindingMembers**

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

# **listResourceSets**
> ResourceSets listResourceSets()

Lists all resource sets with pagination support

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ResourceSetApi(configuration);

let body:okta.ResourceSetApiListResourceSetsRequest = {
  // string | The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the `Link` response header. See [Pagination](/#pagination) for more information. (optional)
  after: "after_example",
};

apiInstance.listResourceSets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **after** | [**string**] | The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information. | (optional) defaults to undefined


### Return type

**ResourceSets**

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

# **replaceResourceSet**
> ResourceSet replaceResourceSet(instance)

Replaces a resource set by `resourceSetId`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ResourceSetApi(configuration);

let body:okta.ResourceSetApiReplaceResourceSetRequest = {
  // string | `id` of a resource set
  resourceSetId: "iamoJDFKaJxGIr0oamd9g",
  // ResourceSet
  instance: {
    description: "description_example",
    label: "label_example",
  },
};

apiInstance.replaceResourceSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance** | **ResourceSet**|  |
 **resourceSetId** | [**string**] | &#x60;id&#x60; of a resource set | defaults to undefined


### Return type

**ResourceSet**

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


