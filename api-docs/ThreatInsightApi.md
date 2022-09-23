# okta.ThreatInsightApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCurrentConfiguration**](ThreatInsightApi.md#getCurrentConfiguration) | **GET** /api/v1/threats/configuration | Retrieve the ThreatInsight Configuration
[**updateConfiguration**](ThreatInsightApi.md#updateConfiguration) | **POST** /api/v1/threats/configuration | Update the ThreatInsight Configuration


# **getCurrentConfiguration**
> ThreatInsightConfiguration getCurrentConfiguration()

Gets current ThreatInsight configuration

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ThreatInsightApi(configuration);

let body:any = {};

apiInstance.getCurrentConfiguration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ThreatInsightConfiguration**

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

# **updateConfiguration**
> ThreatInsightConfiguration updateConfiguration(threatInsightConfiguration)

Updates ThreatInsight configuration

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.ThreatInsightApi(configuration);

let body:okta.ThreatInsightApiUpdateConfigurationRequest = {
  // ThreatInsightConfiguration
  threatInsightConfiguration: {
    action: "action_example",
    excludeZones: [
      "excludeZones_example",
    ],
  },
};

apiInstance.updateConfiguration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threatInsightConfiguration** | **ThreatInsightConfiguration**|  |


### Return type

**ThreatInsightConfiguration**

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


