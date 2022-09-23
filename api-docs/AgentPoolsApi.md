# okta.AgentPoolsApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateAgentPoolsUpdate**](AgentPoolsApi.md#activateAgentPoolsUpdate) | **POST** /api/v1/agentPools/{poolId}/updates/{updateId}/activate | Activate an Agent Pool update
[**createAgentPoolsUpdate**](AgentPoolsApi.md#createAgentPoolsUpdate) | **POST** /api/v1/agentPools/{poolId}/updates | Create an Agent Pool update
[**deactivateAgentPoolsUpdate**](AgentPoolsApi.md#deactivateAgentPoolsUpdate) | **POST** /api/v1/agentPools/{poolId}/updates/{updateId}/deactivate | Deactivate an Agent Pool update
[**deleteAgentPoolsUpdate**](AgentPoolsApi.md#deleteAgentPoolsUpdate) | **DELETE** /api/v1/agentPools/{poolId}/updates/{updateId} | Delete an Agent Pool update
[**getAgentPools**](AgentPoolsApi.md#getAgentPools) | **GET** /api/v1/agentPools | List all Agent Pools
[**getAgentPoolsUpdateInstance**](AgentPoolsApi.md#getAgentPoolsUpdateInstance) | **GET** /api/v1/agentPools/{poolId}/updates/{updateId} | Retrieve an Agent Pool update by id
[**getAgentPoolsUpdateSettings**](AgentPoolsApi.md#getAgentPoolsUpdateSettings) | **GET** /api/v1/agentPools/{poolId}/updates/settings | Retrieve an Agent Pool update&#39;s settings
[**getAgentPoolsUpdates**](AgentPoolsApi.md#getAgentPoolsUpdates) | **GET** /api/v1/agentPools/{poolId}/updates | List all Agent Pool updates
[**pauseAgentPoolsUpdate**](AgentPoolsApi.md#pauseAgentPoolsUpdate) | **POST** /api/v1/agentPools/{poolId}/updates/{updateId}/pause | Pause an Agent Pool update
[**resumeAgentPoolsUpdate**](AgentPoolsApi.md#resumeAgentPoolsUpdate) | **POST** /api/v1/agentPools/{poolId}/updates/{updateId}/resume | Resume an Agent Pool update
[**retryAgentPoolsUpdate**](AgentPoolsApi.md#retryAgentPoolsUpdate) | **POST** /api/v1/agentPools/{poolId}/updates/{updateId}/retry | Retry an Agent Pool update
[**setAgentPoolsUpdateSettings**](AgentPoolsApi.md#setAgentPoolsUpdateSettings) | **POST** /api/v1/agentPools/{poolId}/updates/settings | Update an Agent pool update settings
[**stopAgentPoolsUpdate**](AgentPoolsApi.md#stopAgentPoolsUpdate) | **POST** /api/v1/agentPools/{poolId}/updates/{updateId}/stop | Stop an Agent Pool update
[**updateAgentPoolsUpdate**](AgentPoolsApi.md#updateAgentPoolsUpdate) | **POST** /api/v1/agentPools/{poolId}/updates/{updateId} | Update an Agent Pool update by id


# **activateAgentPoolsUpdate**
> AgentPoolUpdate activateAgentPoolsUpdate()

Activates scheduled Agent pool update

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AgentPoolsApi(configuration);

let body:okta.AgentPoolsApiActivateAgentPoolsUpdateRequest = {
  // string | Id of the agent pool for which the settings will apply
  poolId: "poolId_example",
  // string | Id of the update
  updateId: "updateId_example",
};

apiInstance.activateAgentPoolsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poolId** | [**string**] | Id of the agent pool for which the settings will apply | defaults to undefined
 **updateId** | [**string**] | Id of the update | defaults to undefined


### Return type

**AgentPoolUpdate**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Activated |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createAgentPoolsUpdate**
> AgentPoolUpdate createAgentPoolsUpdate(AgentPoolUpdate)

Creates an Agent pool update \\n For user flow 2 manual update, starts the update immediately. \\n For user flow 3, schedules the update based on the configured update window and delay.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AgentPoolsApi(configuration);

let body:okta.AgentPoolsApiCreateAgentPoolsUpdateRequest = {
  // string | Id of the agent pool for which the settings will apply
  poolId: "poolId_example",
  // AgentPoolUpdate
  AgentPoolUpdate: {
    agents: [
      {
        isHidden: true,
        isLatestGAedVersion: true,
        lastConnection: new Date('1970-01-01T00:00:00.00Z'),
        name: "name_example",
        operationalStatus: "DEGRADED",
        poolId: "poolId_example",
        type: "AD",
        updateMessage: "updateMessage_example",
        updateStatus: "Cancelled",
        version: "version_example",
        _links: {
          hints: {
            allow: [
              "DELETE",
            ],
          },
          href: "href_example",
          name: "name_example",
          type: "type_example",
        },
      },
    ],
    agentType: "AD",
    enabled: true,
    name: "name_example",
    notifyAdmin: true,
    reason: "reason_example",
    schedule: {
      cron: "cron_example",
      delay: 1,
      duration: 1,
      lastUpdated: new Date('1970-01-01T00:00:00.00Z'),
      timezone: "timezone_example",
    },
    sortOrder: 1,
    status: "Cancelled",
    targetVersion: "targetVersion_example",
    _links: {
      hints: {
        allow: [
          "DELETE",
        ],
      },
      href: "href_example",
      name: "name_example",
      type: "type_example",
    },
  },
};

apiInstance.createAgentPoolsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AgentPoolUpdate** | **AgentPoolUpdate**|  |
 **poolId** | [**string**] | Id of the agent pool for which the settings will apply | defaults to undefined


### Return type

**AgentPoolUpdate**

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

# **deactivateAgentPoolsUpdate**
> AgentPoolUpdate deactivateAgentPoolsUpdate()

Deactivates scheduled Agent pool update

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AgentPoolsApi(configuration);

let body:okta.AgentPoolsApiDeactivateAgentPoolsUpdateRequest = {
  // string | Id of the agent pool for which the settings will apply
  poolId: "poolId_example",
  // string | Id of the update
  updateId: "updateId_example",
};

apiInstance.deactivateAgentPoolsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poolId** | [**string**] | Id of the agent pool for which the settings will apply | defaults to undefined
 **updateId** | [**string**] | Id of the update | defaults to undefined


### Return type

**AgentPoolUpdate**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Deactivated |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAgentPoolsUpdate**
> void deleteAgentPoolsUpdate()

Deletes Agent pool update

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AgentPoolsApi(configuration);

let body:okta.AgentPoolsApiDeleteAgentPoolsUpdateRequest = {
  // string | Id of the agent pool for which the settings will apply
  poolId: "poolId_example",
  // string | Id of the update
  updateId: "updateId_example",
};

apiInstance.deleteAgentPoolsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poolId** | [**string**] | Id of the agent pool for which the settings will apply | defaults to undefined
 **updateId** | [**string**] | Id of the update | defaults to undefined


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
**204** | Deleted |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAgentPools**
> Array<AgentPool> getAgentPools()

Fetches AgentPools based on request parameters for a given org

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AgentPoolsApi(configuration);

let body:okta.AgentPoolsApiGetAgentPoolsRequest = {
  // number | Maximum number of AgentPools being returned (optional)
  limitPerPoolType: 5,
  // AgentType | Agent type to search for (optional)
  poolType: "AD",
  // string | The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the `Link` response header. See [Pagination](/#pagination) for more information. (optional)
  after: "after_example",
};

apiInstance.getAgentPools(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limitPerPoolType** | [**number**] | Maximum number of AgentPools being returned | (optional) defaults to 5
 **poolType** | **AgentType** | Agent type to search for | (optional) defaults to undefined
 **after** | [**string**] | The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information. | (optional) defaults to undefined


### Return type

**Array<AgentPool>**

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

# **getAgentPoolsUpdateInstance**
> AgentPoolUpdate getAgentPoolsUpdateInstance()

Gets Agent pool update from updateId

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AgentPoolsApi(configuration);

let body:okta.AgentPoolsApiGetAgentPoolsUpdateInstanceRequest = {
  // string | Id of the agent pool for which the settings will apply
  poolId: "poolId_example",
  // string | Id of the update
  updateId: "updateId_example",
};

apiInstance.getAgentPoolsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poolId** | [**string**] | Id of the agent pool for which the settings will apply | defaults to undefined
 **updateId** | [**string**] | Id of the update | defaults to undefined


### Return type

**AgentPoolUpdate**

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

# **getAgentPoolsUpdateSettings**
> AgentPoolUpdateSetting getAgentPoolsUpdateSettings()

Gets the current state of the agent pool update instance settings

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AgentPoolsApi(configuration);

let body:okta.AgentPoolsApiGetAgentPoolsUpdateSettingsRequest = {
  // string | Id of the agent pool for which the settings will apply
  poolId: "poolId_example",
};

apiInstance.getAgentPoolsUpdateSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poolId** | [**string**] | Id of the agent pool for which the settings will apply | defaults to undefined


### Return type

**AgentPoolUpdateSetting**

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

# **getAgentPoolsUpdates**
> Array<AgentPoolUpdate> getAgentPoolsUpdates()

Gets List of Agent pool updates

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AgentPoolsApi(configuration);

let body:okta.AgentPoolsApiGetAgentPoolsUpdatesRequest = {
  // string | Id of the agent pool for which the settings will apply
  poolId: "poolId_example",
  // boolean | Scope the list only to scheduled or ad-hoc updates. If the parameter is not provided we will return the whole list of updates. (optional)
  scheduled: true,
};

apiInstance.getAgentPoolsUpdates(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poolId** | [**string**] | Id of the agent pool for which the settings will apply | defaults to undefined
 **scheduled** | [**boolean**] | Scope the list only to scheduled or ad-hoc updates. If the parameter is not provided we will return the whole list of updates. | (optional) defaults to undefined


### Return type

**Array<AgentPoolUpdate>**

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

# **pauseAgentPoolsUpdate**
> AgentPoolUpdate pauseAgentPoolsUpdate()

Pauses running or queued Agent pool update

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AgentPoolsApi(configuration);

let body:okta.AgentPoolsApiPauseAgentPoolsUpdateRequest = {
  // string | Id of the agent pool for which the settings will apply
  poolId: "poolId_example",
  // string | Id of the update
  updateId: "updateId_example",
};

apiInstance.pauseAgentPoolsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poolId** | [**string**] | Id of the agent pool for which the settings will apply | defaults to undefined
 **updateId** | [**string**] | Id of the update | defaults to undefined


### Return type

**AgentPoolUpdate**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Paused |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **resumeAgentPoolsUpdate**
> AgentPoolUpdate resumeAgentPoolsUpdate()

Resumes running or queued Agent pool update

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AgentPoolsApi(configuration);

let body:okta.AgentPoolsApiResumeAgentPoolsUpdateRequest = {
  // string | Id of the agent pool for which the settings will apply
  poolId: "poolId_example",
  // string | Id of the update
  updateId: "updateId_example",
};

apiInstance.resumeAgentPoolsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poolId** | [**string**] | Id of the agent pool for which the settings will apply | defaults to undefined
 **updateId** | [**string**] | Id of the update | defaults to undefined


### Return type

**AgentPoolUpdate**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Resumed |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retryAgentPoolsUpdate**
> AgentPoolUpdate retryAgentPoolsUpdate()

Retries Agent pool update

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AgentPoolsApi(configuration);

let body:okta.AgentPoolsApiRetryAgentPoolsUpdateRequest = {
  // string | Id of the agent pool for which the settings will apply
  poolId: "poolId_example",
  // string | Id of the update
  updateId: "updateId_example",
};

apiInstance.retryAgentPoolsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poolId** | [**string**] | Id of the agent pool for which the settings will apply | defaults to undefined
 **updateId** | [**string**] | Id of the update | defaults to undefined


### Return type

**AgentPoolUpdate**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Retried |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setAgentPoolsUpdateSettings**
> AgentPoolUpdateSetting setAgentPoolsUpdateSettings(AgentPoolUpdateSetting)

Updates Agent pool update settings

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AgentPoolsApi(configuration);

let body:okta.AgentPoolsApiSetAgentPoolsUpdateSettingsRequest = {
  // string | Id of the agent pool for which the settings will apply
  poolId: "poolId_example",
  // AgentPoolUpdateSetting
  AgentPoolUpdateSetting: {
    agentType: "AD",
    continueOnError: true,
    latestVersion: "latestVersion_example",
    minimalSupportedVersion: "minimalSupportedVersion_example",
    poolName: "poolName_example",
    releaseChannel: "BETA",
  },
};

apiInstance.setAgentPoolsUpdateSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AgentPoolUpdateSetting** | **AgentPoolUpdateSetting**|  |
 **poolId** | [**string**] | Id of the agent pool for which the settings will apply | defaults to undefined


### Return type

**AgentPoolUpdateSetting**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Updated |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **stopAgentPoolsUpdate**
> AgentPoolUpdate stopAgentPoolsUpdate()

Stops Agent pool update

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AgentPoolsApi(configuration);

let body:okta.AgentPoolsApiStopAgentPoolsUpdateRequest = {
  // string | Id of the agent pool for which the settings will apply
  poolId: "poolId_example",
  // string | Id of the update
  updateId: "updateId_example",
};

apiInstance.stopAgentPoolsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poolId** | [**string**] | Id of the agent pool for which the settings will apply | defaults to undefined
 **updateId** | [**string**] | Id of the update | defaults to undefined


### Return type

**AgentPoolUpdate**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Stopped |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAgentPoolsUpdate**
> AgentPoolUpdate updateAgentPoolsUpdate(AgentPoolUpdate)

Updates Agent pool update and return latest agent pool update

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.AgentPoolsApi(configuration);

let body:okta.AgentPoolsApiUpdateAgentPoolsUpdateRequest = {
  // string | Id of the agent pool for which the settings will apply
  poolId: "poolId_example",
  // string | Id of the update
  updateId: "updateId_example",
  // AgentPoolUpdate
  AgentPoolUpdate: {
    agents: [
      {
        isHidden: true,
        isLatestGAedVersion: true,
        lastConnection: new Date('1970-01-01T00:00:00.00Z'),
        name: "name_example",
        operationalStatus: "DEGRADED",
        poolId: "poolId_example",
        type: "AD",
        updateMessage: "updateMessage_example",
        updateStatus: "Cancelled",
        version: "version_example",
        _links: {
          hints: {
            allow: [
              "DELETE",
            ],
          },
          href: "href_example",
          name: "name_example",
          type: "type_example",
        },
      },
    ],
    agentType: "AD",
    enabled: true,
    name: "name_example",
    notifyAdmin: true,
    reason: "reason_example",
    schedule: {
      cron: "cron_example",
      delay: 1,
      duration: 1,
      lastUpdated: new Date('1970-01-01T00:00:00.00Z'),
      timezone: "timezone_example",
    },
    sortOrder: 1,
    status: "Cancelled",
    targetVersion: "targetVersion_example",
    _links: {
      hints: {
        allow: [
          "DELETE",
        ],
      },
      href: "href_example",
      name: "name_example",
      type: "type_example",
    },
  },
};

apiInstance.updateAgentPoolsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AgentPoolUpdate** | **AgentPoolUpdate**|  |
 **poolId** | [**string**] | Id of the agent pool for which the settings will apply | defaults to undefined
 **updateId** | [**string**] | Id of the update | defaults to undefined


### Return type

**AgentPoolUpdate**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Updated |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


