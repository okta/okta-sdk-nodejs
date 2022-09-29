# okta.PolicyApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activatePolicy**](PolicyApi.md#activatepolicy) | **POST** /api/v1/policies/{policyId}/lifecycle/activate | Activate a Policy
[**activatePolicyRule**](PolicyApi.md#activatepolicyrule) | **POST** /api/v1/policies/{policyId}/rules/{ruleId}/lifecycle/activate | Activate a Policy Rule
[**clonePolicy**](PolicyApi.md#clonepolicy) | **POST** /api/v1/policies/{policyId}/clone | Clone an existing policy
[**createPolicy**](PolicyApi.md#createpolicy) | **POST** /api/v1/policies | Create a Policy
[**createPolicyRule**](PolicyApi.md#createpolicyrule) | **POST** /api/v1/policies/{policyId}/rules | Create a Policy Rule
[**deactivatePolicy**](PolicyApi.md#deactivatepolicy) | **POST** /api/v1/policies/{policyId}/lifecycle/deactivate | Deactivate a Policy
[**deactivatePolicyRule**](PolicyApi.md#deactivatepolicyrule) | **POST** /api/v1/policies/{policyId}/rules/{ruleId}/lifecycle/deactivate | Deactivate a Policy Rule
[**deletePolicy**](PolicyApi.md#deletepolicy) | **DELETE** /api/v1/policies/{policyId} | Delete a Policy
[**deletePolicyRule**](PolicyApi.md#deletepolicyrule) | **DELETE** /api/v1/policies/{policyId}/rules/{ruleId} | Delete a Policy Rule
[**getPolicy**](PolicyApi.md#getpolicy) | **GET** /api/v1/policies/{policyId} | Retrieve a Policy
[**getPolicyRule**](PolicyApi.md#getpolicyrule) | **GET** /api/v1/policies/{policyId}/rules/{ruleId} | Retrieve a Policy Rule
[**listPolicies**](PolicyApi.md#listpolicies) | **GET** /api/v1/policies | List all Policies
[**listPolicyRules**](PolicyApi.md#listpolicyrules) | **GET** /api/v1/policies/{policyId}/rules | List all Policy Rules
[**updatePolicy**](PolicyApi.md#updatepolicy) | **PUT** /api/v1/policies/{policyId} | Replace a Policy
[**updatePolicyRule**](PolicyApi.md#updatepolicyrule) | **PUT** /api/v1/policies/{policyId}/rules/{ruleId} | Replace a Policy Rule


# **activatePolicy**
> void activatePolicy()

Activates a policy.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PolicyApi(configuration);

let body:okta.PolicyApiActivatePolicyRequest = {
  // string
  policyId: "policyId_example",
};

apiInstance.activatePolicy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**policyId** | **string** |  | defaults to undefined


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

# **activatePolicyRule**
> void activatePolicyRule()

Activates a policy rule.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PolicyApi(configuration);

let body:okta.PolicyApiActivatePolicyRuleRequest = {
  // string
  policyId: "policyId_example",
  // string
  ruleId: "ruleId_example",
};

apiInstance.activatePolicyRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**policyId** | **string** |  | defaults to undefined
**ruleId** | **string** |  | defaults to undefined


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

# **clonePolicy**
> Policy clonePolicy()

Clones an existing policy.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PolicyApi(configuration);

let body:okta.PolicyApiClonePolicyRequest = {
  // string
  policyId: "policyId_example",
};

apiInstance.clonePolicy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**policyId** | **string** |  | defaults to undefined


### Return type

**[Policy](Policy.md)**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
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

# **createPolicy**
> Policy createPolicy(policy)

Creates a policy.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PolicyApi(configuration);

let body:okta.PolicyApiCreatePolicyRequest = {
  // Policy
  policy: {},
  // boolean (optional)
  activate: true,
};

apiInstance.createPolicy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy** | **[Policy](Policy.md)** |  | 
**activate** | **boolean** |  | (optional) defaults to undefined


### Return type

**[Policy](Policy.md)**

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

# **createPolicyRule**
> PolicyRule createPolicyRule(policyRule)

Creates a policy rule.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PolicyApi(configuration);

let body:okta.PolicyApiCreatePolicyRuleRequest = {
  // string
  policyId: "policyId_example",
  // PolicyRule
  policyRule: {},
};

apiInstance.createPolicyRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policyRule** | **[PolicyRule](PolicyRule.md)** |  | 
**policyId** | **string** |  | defaults to undefined


### Return type

**[PolicyRule](PolicyRule.md)**

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

# **deactivatePolicy**
> void deactivatePolicy()

Deactivates a policy.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PolicyApi(configuration);

let body:okta.PolicyApiDeactivatePolicyRequest = {
  // string
  policyId: "policyId_example",
};

apiInstance.deactivatePolicy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**policyId** | **string** |  | defaults to undefined


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

# **deactivatePolicyRule**
> void deactivatePolicyRule()

Deactivates a policy rule.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PolicyApi(configuration);

let body:okta.PolicyApiDeactivatePolicyRuleRequest = {
  // string
  policyId: "policyId_example",
  // string
  ruleId: "ruleId_example",
};

apiInstance.deactivatePolicyRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**policyId** | **string** |  | defaults to undefined
**ruleId** | **string** |  | defaults to undefined


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

# **deletePolicy**
> void deletePolicy()

Removes a policy.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PolicyApi(configuration);

let body:okta.PolicyApiDeletePolicyRequest = {
  // string
  policyId: "policyId_example",
};

apiInstance.deletePolicy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**policyId** | **string** |  | defaults to undefined


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

# **deletePolicyRule**
> void deletePolicyRule()

Removes a policy rule.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PolicyApi(configuration);

let body:okta.PolicyApiDeletePolicyRuleRequest = {
  // string
  policyId: "policyId_example",
  // string
  ruleId: "ruleId_example",
};

apiInstance.deletePolicyRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**policyId** | **string** |  | defaults to undefined
**ruleId** | **string** |  | defaults to undefined


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

# **getPolicy**
> Policy getPolicy()

Gets a policy.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PolicyApi(configuration);

let body:okta.PolicyApiGetPolicyRequest = {
  // string
  policyId: "policyId_example",
  // string (optional)
  expand: "",
};

apiInstance.getPolicy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**policyId** | **string** |  | defaults to undefined
**expand** | **string** |  | (optional) defaults to ''


### Return type

**[Policy](Policy.md)**

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

# **getPolicyRule**
> PolicyRule getPolicyRule()

Gets a policy rule.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PolicyApi(configuration);

let body:okta.PolicyApiGetPolicyRuleRequest = {
  // string
  policyId: "policyId_example",
  // string
  ruleId: "ruleId_example",
};

apiInstance.getPolicyRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**policyId** | **string** |  | defaults to undefined
**ruleId** | **string** |  | defaults to undefined


### Return type

**[PolicyRule](PolicyRule.md)**

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

# **listPolicies**
> Array<Policy> listPolicies()

Gets all policies with the specified type.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PolicyApi(configuration);

let body:okta.PolicyApiListPoliciesRequest = {
  // string
  type: "type_example",
  // string (optional)
  status: "status_example",
  // string (optional)
  expand: "",
};

apiInstance.listPolicies(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**type** | **string** |  | defaults to undefined
**status** | **string** |  | (optional) defaults to undefined
**expand** | **string** |  | (optional) defaults to ''


### Return type

**[Array&lt;Policy&gt;](Policy.md)**

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

# **listPolicyRules**
> Array<PolicyRule> listPolicyRules()

Enumerates all policy rules.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PolicyApi(configuration);

let body:okta.PolicyApiListPolicyRulesRequest = {
  // string
  policyId: "policyId_example",
};

apiInstance.listPolicyRules(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**policyId** | **string** |  | defaults to undefined


### Return type

**[Array&lt;PolicyRule&gt;](PolicyRule.md)**

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

# **updatePolicy**
> Policy updatePolicy(policy)

Updates a policy.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PolicyApi(configuration);

let body:okta.PolicyApiUpdatePolicyRequest = {
  // string
  policyId: "policyId_example",
  // Policy
  policy: {},
};

apiInstance.updatePolicy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy** | **[Policy](Policy.md)** |  | 
**policyId** | **string** |  | defaults to undefined


### Return type

**[Policy](Policy.md)**

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

# **updatePolicyRule**
> PolicyRule updatePolicyRule(policyRule)

Updates a policy rule.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.PolicyApi(configuration);

let body:okta.PolicyApiUpdatePolicyRuleRequest = {
  // string
  policyId: "policyId_example",
  // string
  ruleId: "ruleId_example",
  // PolicyRule
  policyRule: {},
};

apiInstance.updatePolicyRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policyRule** | **[PolicyRule](PolicyRule.md)** |  | 
**policyId** | **string** |  | defaults to undefined
**ruleId** | **string** |  | defaults to undefined


### Return type

**[PolicyRule](PolicyRule.md)**

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


