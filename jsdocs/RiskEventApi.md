# okta.RiskEventApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendRiskEvents**](RiskEventApi.md#sendRiskEvents) | **POST** /api/v1/risk/events/ip | Send multiple Risk Events


# **sendRiskEvents**
> void sendRiskEvents(instance)

A Risk Provider can send Risk Events to Okta using this API. This API has a rate limit of 30 requests per minute. The caller should include multiple Risk Events (up to a maximum of 20 events) in a single payload to reduce the number of API calls. If a client has more risk signals to send than what the API supports, we recommend prioritizing posting high risk signals.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.RiskEventApi(configuration);

let body:okta.RiskEventApiSendRiskEventsRequest = {
  // Array<RiskEvent>
  instance: [
    {
      expiresAt: new Date('1970-01-01T00:00:00.00Z'),
      subjects: [
        {
          ip: "ip_example",
          message: "-",
          riskLevel: "HIGH",
        },
      ],
      timestamp: new Date('1970-01-01T00:00:00.00Z'),
    },
  ],
};

apiInstance.sendRiskEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance** | **Array<RiskEvent>**|  |


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
**202** | Accepted |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


