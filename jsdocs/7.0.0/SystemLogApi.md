# okta.SystemLogApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLogs**](SystemLogApi.md#getLogs) | **GET** /api/v1/logs | List all System Log Events


# **getLogs**
> Array<LogEvent> getLogs()

The Okta System Log API provides read access to your organization’s system log. This API provides more functionality than the Events API

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.SystemLogApi(configuration);

let body:okta.SystemLogApiGetLogsRequest = {
  // Date (optional)
  since: new Date('1970-01-01T00:00:00.00Z'),
  // Date (optional)
  until: new Date('1970-01-01T00:00:00.00Z'),
  // string (optional)
  filter: "filter_example",
  // string (optional)
  q: "q_example",
  // number (optional)
  limit: 100,
  // string (optional)
  sortOrder: "ASCENDING",
  // string (optional)
  after: "after_example",
};

apiInstance.getLogs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **since** | [**Date**] |  | (optional) defaults to undefined
 **until** | [**Date**] |  | (optional) defaults to undefined
 **filter** | [**string**] |  | (optional) defaults to undefined
 **q** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 100
 **sortOrder** | [**string**] |  | (optional) defaults to 'ASCENDING'
 **after** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<LogEvent>**

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


