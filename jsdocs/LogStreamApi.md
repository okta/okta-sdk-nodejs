# okta.LogStreamApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateLogStream**](LogStreamApi.md#activateLogStream) | **POST** /api/v1/logStreams/{logStreamId}/lifecycle/activate | Activate a Log Stream
[**createLogStream**](LogStreamApi.md#createLogStream) | **POST** /api/v1/logStreams | Create a Log Stream
[**deactivateLogStream**](LogStreamApi.md#deactivateLogStream) | **POST** /api/v1/logStreams/{logStreamId}/lifecycle/deactivate | Deactivate a Log Stream
[**deleteLogStream**](LogStreamApi.md#deleteLogStream) | **DELETE** /api/v1/logStreams/{logStreamId} | Delete a Log Stream
[**getLogStream**](LogStreamApi.md#getLogStream) | **GET** /api/v1/logStreams/{logStreamId} | Retrieve a Log Stream
[**listLogStreams**](LogStreamApi.md#listLogStreams) | **GET** /api/v1/logStreams | List all Log Streams
[**replaceLogStream**](LogStreamApi.md#replaceLogStream) | **PUT** /api/v1/logStreams/{logStreamId} | Replace a Log Stream


# **activateLogStream**
> LogStream activateLogStream()

Activates a log stream by `logStreamId`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.LogStreamApi(configuration);

let body:okta.LogStreamApiActivateLogStreamRequest = {
  // string | id of the log stream
  logStreamId: "abcd1234",
};

apiInstance.activateLogStream(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logStreamId** | [**string**] | id of the log stream | defaults to undefined


### Return type

**LogStream**

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

# **createLogStream**
> LogStream createLogStream(instance)

Creates a new log stream

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.LogStreamApi(configuration);

let body:okta.LogStreamApiCreateLogStreamRequest = {
  // LogStream
  instance: {},
};

apiInstance.createLogStream(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance** | **LogStream**|  |


### Return type

**LogStream**

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

# **deactivateLogStream**
> LogStream deactivateLogStream()

Deactivates a log stream by `logStreamId`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.LogStreamApi(configuration);

let body:okta.LogStreamApiDeactivateLogStreamRequest = {
  // string | id of the log stream
  logStreamId: "abcd1234",
};

apiInstance.deactivateLogStream(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logStreamId** | [**string**] | id of the log stream | defaults to undefined


### Return type

**LogStream**

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

# **deleteLogStream**
> void deleteLogStream()

Deletes a log stream by `logStreamId`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.LogStreamApi(configuration);

let body:okta.LogStreamApiDeleteLogStreamRequest = {
  // string | id of the log stream
  logStreamId: "abcd1234",
};

apiInstance.deleteLogStream(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logStreamId** | [**string**] | id of the log stream | defaults to undefined


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

# **getLogStream**
> LogStream getLogStream()

Retrieve a log stream by `logStreamId`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.LogStreamApi(configuration);

let body:okta.LogStreamApiGetLogStreamRequest = {
  // string | id of the log stream
  logStreamId: "abcd1234",
};

apiInstance.getLogStream(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logStreamId** | [**string**] | id of the log stream | defaults to undefined


### Return type

**LogStream**

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

# **listLogStreams**
> Array<LogStream> listLogStreams()

Lists all log streams. You can request a paginated list or a subset of Log Streams that match a supported filter expression.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.LogStreamApi(configuration);

let body:okta.LogStreamApiListLogStreamsRequest = {
  // string | The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the `Link` response header. See [Pagination](/#pagination) for more information. (optional)
  after: "after_example",
  // number | A limit on the number of objects to return. (optional)
  limit: 20,
  // string | SCIM filter expression that filters the results. This expression only supports the `eq` operator on either the `status` or `type`. (optional)
  filter: "type eq "aws_eventbridge"",
};

apiInstance.listLogStreams(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **after** | [**string**] | The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information. | (optional) defaults to undefined
 **limit** | [**number**] | A limit on the number of objects to return. | (optional) defaults to 20
 **filter** | [**string**] | SCIM filter expression that filters the results. This expression only supports the &#x60;eq&#x60; operator on either the &#x60;status&#x60; or &#x60;type&#x60;. | (optional) defaults to undefined


### Return type

**Array<LogStream>**

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

# **replaceLogStream**
> LogStream replaceLogStream(instance)

Replaces a log stream by `logStreamId`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.LogStreamApi(configuration);

let body:okta.LogStreamApiReplaceLogStreamRequest = {
  // string | id of the log stream
  logStreamId: "abcd1234",
  // LogStream
  instance: {},
};

apiInstance.replaceLogStream(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance** | **LogStream**|  |
 **logStreamId** | [**string**] | id of the log stream | defaults to undefined


### Return type

**LogStream**

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


