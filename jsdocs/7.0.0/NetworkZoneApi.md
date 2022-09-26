# okta.NetworkZoneApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateNetworkZone**](NetworkZoneApi.md#activateNetworkZone) | **POST** /api/v1/zones/{zoneId}/lifecycle/activate | Activate a Network Zone
[**createNetworkZone**](NetworkZoneApi.md#createNetworkZone) | **POST** /api/v1/zones | Create a Network Zone
[**deactivateNetworkZone**](NetworkZoneApi.md#deactivateNetworkZone) | **POST** /api/v1/zones/{zoneId}/lifecycle/deactivate | Deactivate a Network Zone
[**deleteNetworkZone**](NetworkZoneApi.md#deleteNetworkZone) | **DELETE** /api/v1/zones/{zoneId} | Delete a Network Zone
[**getNetworkZone**](NetworkZoneApi.md#getNetworkZone) | **GET** /api/v1/zones/{zoneId} | Retrieve a Network Zone
[**listNetworkZones**](NetworkZoneApi.md#listNetworkZones) | **GET** /api/v1/zones | List all Network Zones
[**updateNetworkZone**](NetworkZoneApi.md#updateNetworkZone) | **PUT** /api/v1/zones/{zoneId} | Replace a Network Zone


# **activateNetworkZone**
> NetworkZone activateNetworkZone()

Activate Network Zone

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.NetworkZoneApi(configuration);

let body:okta.NetworkZoneApiActivateNetworkZoneRequest = {
  // string
  zoneId: "zoneId_example",
};

apiInstance.activateNetworkZone(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zoneId** | [**string**] |  | defaults to undefined


### Return type

**NetworkZone**

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

# **createNetworkZone**
> NetworkZone createNetworkZone(zone)

Adds a new network zone to your Okta organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.NetworkZoneApi(configuration);

let body:okta.NetworkZoneApiCreateNetworkZoneRequest = {
  // NetworkZone
  zone: {
    asns: [
      "asns_example",
    ],
    gateways: [
      {
        type: "CIDR",
        value: "value_example",
      },
    ],
    locations: [
      {
        country: "country_example",
        region: "region_example",
      },
    ],
    name: "name_example",
    proxies: [
      {
        type: "CIDR",
        value: "value_example",
      },
    ],
    proxyType: "proxyType_example",
    status: "ACTIVE",
    system: true,
    type: "DYNAMIC",
    usage: "BLOCKLIST",
  },
};

apiInstance.createNetworkZone(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zone** | **NetworkZone**|  |


### Return type

**NetworkZone**

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

# **deactivateNetworkZone**
> NetworkZone deactivateNetworkZone()

Deactivates a network zone.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.NetworkZoneApi(configuration);

let body:okta.NetworkZoneApiDeactivateNetworkZoneRequest = {
  // string
  zoneId: "zoneId_example",
};

apiInstance.deactivateNetworkZone(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zoneId** | [**string**] |  | defaults to undefined


### Return type

**NetworkZone**

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

# **deleteNetworkZone**
> void deleteNetworkZone()

Removes network zone.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.NetworkZoneApi(configuration);

let body:okta.NetworkZoneApiDeleteNetworkZoneRequest = {
  // string
  zoneId: "zoneId_example",
};

apiInstance.deleteNetworkZone(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zoneId** | [**string**] |  | defaults to undefined


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

# **getNetworkZone**
> NetworkZone getNetworkZone()

Fetches a network zone from your Okta organization by `id`.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.NetworkZoneApi(configuration);

let body:okta.NetworkZoneApiGetNetworkZoneRequest = {
  // string
  zoneId: "zoneId_example",
};

apiInstance.getNetworkZone(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zoneId** | [**string**] |  | defaults to undefined


### Return type

**NetworkZone**

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

# **listNetworkZones**
> Array<NetworkZone> listNetworkZones()

Enumerates network zones added to your organization with pagination. A subset of zones can be returned that match a supported filter expression or query.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.NetworkZoneApi(configuration);

let body:okta.NetworkZoneApiListNetworkZonesRequest = {
  // string | Specifies the pagination cursor for the next page of network zones (optional)
  after: "after_example",
  // number | Specifies the number of results for a page (optional)
  limit: -1,
  // string | Filters zones by usage or id expression (optional)
  filter: "filter_example",
};

apiInstance.listNetworkZones(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **after** | [**string**] | Specifies the pagination cursor for the next page of network zones | (optional) defaults to undefined
 **limit** | [**number**] | Specifies the number of results for a page | (optional) defaults to -1
 **filter** | [**string**] | Filters zones by usage or id expression | (optional) defaults to undefined


### Return type

**Array<NetworkZone>**

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

# **updateNetworkZone**
> NetworkZone updateNetworkZone(zone)

Updates a network zone in your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.NetworkZoneApi(configuration);

let body:okta.NetworkZoneApiUpdateNetworkZoneRequest = {
  // string
  zoneId: "zoneId_example",
  // NetworkZone
  zone: {
    asns: [
      "asns_example",
    ],
    gateways: [
      {
        type: "CIDR",
        value: "value_example",
      },
    ],
    locations: [
      {
        country: "country_example",
        region: "region_example",
      },
    ],
    name: "name_example",
    proxies: [
      {
        type: "CIDR",
        value: "value_example",
      },
    ],
    proxyType: "proxyType_example",
    status: "ACTIVE",
    system: true,
    type: "DYNAMIC",
    usage: "BLOCKLIST",
  },
};

apiInstance.updateNetworkZone(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zone** | **NetworkZone**|  |
 **zoneId** | [**string**] |  | defaults to undefined


### Return type

**NetworkZone**

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


