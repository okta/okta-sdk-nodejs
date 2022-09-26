# okta.OrgSettingApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkRemoveEmailAddressBounces**](OrgSettingApi.md#bulkRemoveEmailAddressBounces) | **POST** /api/v1/org/email/bounces/remove-list | Remove Emails from Email Provider Bounce List
[**extendOktaSupport**](OrgSettingApi.md#extendOktaSupport) | **POST** /api/v1/org/privacy/oktaSupport/extend | Extend Okta Support Access
[**getOktaCommunicationSettings**](OrgSettingApi.md#getOktaCommunicationSettings) | **GET** /api/v1/org/privacy/oktaCommunication | Retreive the Okta Communication Settings
[**getOrgContactTypes**](OrgSettingApi.md#getOrgContactTypes) | **GET** /api/v1/org/contacts | Retrieve the Org Contact Types
[**getOrgContactUser**](OrgSettingApi.md#getOrgContactUser) | **GET** /api/v1/org/contacts/{contactType} | Retrieve the User of the Contact Type
[**getOrgOktaSupportSettings**](OrgSettingApi.md#getOrgOktaSupportSettings) | **GET** /api/v1/org/privacy/oktaSupport | Retrieve the Okta Support Settings
[**getOrgPreferences**](OrgSettingApi.md#getOrgPreferences) | **GET** /api/v1/org/preferences | Retrieve the Org Preferences
[**getOrgSettings**](OrgSettingApi.md#getOrgSettings) | **GET** /api/v1/org | Retrieve the Org Settings
[**grantOktaSupport**](OrgSettingApi.md#grantOktaSupport) | **POST** /api/v1/org/privacy/oktaSupport/grant | Grant Okta Support Access to your Org
[**hideOktaUIFooter**](OrgSettingApi.md#hideOktaUIFooter) | **POST** /api/v1/org/preferences/hideEndUserFooter | Update the Preference to Hide the Okta Dashboard Footer
[**optInUsersToOktaCommunicationEmails**](OrgSettingApi.md#optInUsersToOktaCommunicationEmails) | **POST** /api/v1/org/privacy/oktaCommunication/optIn | Opt in all Users to Okta Communication emails
[**optOutUsersFromOktaCommunicationEmails**](OrgSettingApi.md#optOutUsersFromOktaCommunicationEmails) | **POST** /api/v1/org/privacy/oktaCommunication/optOut | Opt out all Users from Okta Communication emails
[**partialUpdateOrgSetting**](OrgSettingApi.md#partialUpdateOrgSetting) | **POST** /api/v1/org | Update the Org Settings
[**revokeOktaSupport**](OrgSettingApi.md#revokeOktaSupport) | **POST** /api/v1/org/privacy/oktaSupport/revoke | Revoke Okta Support Access
[**showOktaUIFooter**](OrgSettingApi.md#showOktaUIFooter) | **POST** /api/v1/org/preferences/showEndUserFooter | Update the Preference to Show the Okta Dashboard Footer
[**updateOrgContactUser**](OrgSettingApi.md#updateOrgContactUser) | **PUT** /api/v1/org/contacts/{contactType} | Replace the User of the Contact Type
[**updateOrgLogo**](OrgSettingApi.md#updateOrgLogo) | **POST** /api/v1/org/logo | Upload the Org Logo
[**updateOrgSetting**](OrgSettingApi.md#updateOrgSetting) | **PUT** /api/v1/org | Replace the Org Settings
[**wellknownOrgMetadata**](OrgSettingApi.md#wellknownOrgMetadata) | **GET** /.well-known/okta-organization | Retrieve the Well-Known Org Metadata


# **bulkRemoveEmailAddressBounces**
> BouncesRemoveListResult bulkRemoveEmailAddressBounces()

A list of email addresses to be removed from the set of email addresses that are bounced.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.OrgSettingApi(configuration);

let body:okta.OrgSettingApiBulkRemoveEmailAddressBouncesRequest = {
  // BouncesRemoveListObj (optional)
  BouncesRemoveListObj: {
    emailAddresses: [
      "emailAddresses_example",
    ],
  },
};

apiInstance.bulkRemoveEmailAddressBounces(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **BouncesRemoveListObj** | **BouncesRemoveListObj**|  |


### Return type

**BouncesRemoveListResult**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Removes the provided list of emails from the set of email addresses that are bounced so that the provider resumes sending emails to those addresses. |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **extendOktaSupport**
> OrgOktaSupportSettingsObj extendOktaSupport()

Extends the length of time that Okta Support can access your org by 24 hours. This means that 24 hours are added to the remaining access time.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.OrgSettingApi(configuration);

let body:any = {};

apiInstance.extendOktaSupport(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**OrgOktaSupportSettingsObj**

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

# **getOktaCommunicationSettings**
> OrgOktaCommunicationSetting getOktaCommunicationSettings()

Gets Okta Communication Settings of your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.OrgSettingApi(configuration);

let body:any = {};

apiInstance.getOktaCommunicationSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**OrgOktaCommunicationSetting**

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

# **getOrgContactTypes**
> Array<OrgContactTypeObj> getOrgContactTypes()

Gets Contact Types of your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.OrgSettingApi(configuration);

let body:any = {};

apiInstance.getOrgContactTypes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<OrgContactTypeObj>**

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

# **getOrgContactUser**
> OrgContactUser getOrgContactUser()

Retrieves the URL of the User associated with the specified Contact Type.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.OrgSettingApi(configuration);

let body:okta.OrgSettingApiGetOrgContactUserRequest = {
  // string
  contactType: "contactType_example",
};

apiInstance.getOrgContactUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactType** | [**string**] |  | defaults to undefined


### Return type

**OrgContactUser**

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

# **getOrgOktaSupportSettings**
> OrgOktaSupportSettingsObj getOrgOktaSupportSettings()

Gets Okta Support Settings of your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.OrgSettingApi(configuration);

let body:any = {};

apiInstance.getOrgOktaSupportSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**OrgOktaSupportSettingsObj**

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

# **getOrgPreferences**
> OrgPreferences getOrgPreferences()

Gets preferences of your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.OrgSettingApi(configuration);

let body:any = {};

apiInstance.getOrgPreferences(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**OrgPreferences**

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

# **getOrgSettings**
> OrgSetting getOrgSettings()

Get settings of your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.OrgSettingApi(configuration);

let body:any = {};

apiInstance.getOrgSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**OrgSetting**

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

# **grantOktaSupport**
> OrgOktaSupportSettingsObj grantOktaSupport()

Enables you to temporarily allow Okta Support to access your org as an administrator for eight hours.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.OrgSettingApi(configuration);

let body:any = {};

apiInstance.grantOktaSupport(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**OrgOktaSupportSettingsObj**

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

# **hideOktaUIFooter**
> OrgPreferences hideOktaUIFooter()

Hide the Okta UI footer for all end users of your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.OrgSettingApi(configuration);

let body:any = {};

apiInstance.hideOktaUIFooter(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**OrgPreferences**

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

# **optInUsersToOktaCommunicationEmails**
> OrgOktaCommunicationSetting optInUsersToOktaCommunicationEmails()

Opts in all users of this org to Okta Communication emails.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.OrgSettingApi(configuration);

let body:any = {};

apiInstance.optInUsersToOktaCommunicationEmails(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**OrgOktaCommunicationSetting**

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

# **optOutUsersFromOktaCommunicationEmails**
> OrgOktaCommunicationSetting optOutUsersFromOktaCommunicationEmails()

Opts out all users of this org from Okta Communication emails.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.OrgSettingApi(configuration);

let body:any = {};

apiInstance.optOutUsersFromOktaCommunicationEmails(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**OrgOktaCommunicationSetting**

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

# **partialUpdateOrgSetting**
> OrgSetting partialUpdateOrgSetting()

Partial update settings of your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.OrgSettingApi(configuration);

let body:okta.OrgSettingApiPartialUpdateOrgSettingRequest = {
  // OrgSetting (optional)
  OrgSetting: {
    address1: "address1_example",
    address2: "address2_example",
    city: "city_example",
    companyName: "companyName_example",
    country: "country_example",
    endUserSupportHelpURL: "endUserSupportHelpURL_example",
    phoneNumber: "phoneNumber_example",
    postalCode: "postalCode_example",
    state: "state_example",
    supportPhoneNumber: "supportPhoneNumber_example",
    website: "website_example",
    _links: {
      "key": {},
    },
  },
};

apiInstance.partialUpdateOrgSetting(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **OrgSetting** | **OrgSetting**|  |


### Return type

**OrgSetting**

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

# **revokeOktaSupport**
> OrgOktaSupportSettingsObj revokeOktaSupport()

Revokes Okta Support access to your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.OrgSettingApi(configuration);

let body:any = {};

apiInstance.revokeOktaSupport(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**OrgOktaSupportSettingsObj**

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

# **showOktaUIFooter**
> OrgPreferences showOktaUIFooter()

Makes the Okta UI footer visible for all end users of your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.OrgSettingApi(configuration);

let body:any = {};

apiInstance.showOktaUIFooter(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**OrgPreferences**

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

# **updateOrgContactUser**
> OrgContactUser updateOrgContactUser(orgContactUser)

Updates the User associated with the specified Contact Type.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.OrgSettingApi(configuration);

let body:okta.OrgSettingApiUpdateOrgContactUserRequest = {
  // string
  contactType: "contactType_example",
  // OrgContactUser
  orgContactUser: {
    userId: "userId_example",
  },
};

apiInstance.updateOrgContactUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgContactUser** | **OrgContactUser**|  |
 **contactType** | [**string**] |  | defaults to undefined


### Return type

**OrgContactUser**

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

# **updateOrgLogo**
> void updateOrgLogo()

Updates the logo for your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.OrgSettingApi(configuration);

let body:okta.OrgSettingApiUpdateOrgLogoRequest = {
  // HttpFile
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.updateOrgLogo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**HttpFile**] |  | defaults to undefined


### Return type

**void**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateOrgSetting**
> OrgSetting updateOrgSetting(orgSetting)

Update settings of your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.OrgSettingApi(configuration);

let body:okta.OrgSettingApiUpdateOrgSettingRequest = {
  // OrgSetting
  orgSetting: {
    address1: "address1_example",
    address2: "address2_example",
    city: "city_example",
    companyName: "companyName_example",
    country: "country_example",
    endUserSupportHelpURL: "endUserSupportHelpURL_example",
    phoneNumber: "phoneNumber_example",
    postalCode: "postalCode_example",
    state: "state_example",
    supportPhoneNumber: "supportPhoneNumber_example",
    website: "website_example",
    _links: {
      "key": {},
    },
  },
};

apiInstance.updateOrgSetting(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgSetting** | **OrgSetting**|  |


### Return type

**OrgSetting**

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

# **wellknownOrgMetadata**
> WellKnownOrgMetadata wellknownOrgMetadata()

Retrieves the well-known org metadata, which includes the id, configured custom domains, authentication pipeline, and various other org settings.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.OrgSettingApi(configuration);

let body:any = {};

apiInstance.wellknownOrgMetadata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**WellKnownOrgMetadata**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


