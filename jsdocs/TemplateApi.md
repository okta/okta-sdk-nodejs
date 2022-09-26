# okta.TemplateApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSmsTemplate**](TemplateApi.md#createSmsTemplate) | **POST** /api/v1/templates/sms | Create an SMS Template
[**deleteSmsTemplate**](TemplateApi.md#deleteSmsTemplate) | **DELETE** /api/v1/templates/sms/{templateId} | Delete an SMS Template
[**getSmsTemplate**](TemplateApi.md#getSmsTemplate) | **GET** /api/v1/templates/sms/{templateId} | Retrieve an SMS Template
[**listSmsTemplates**](TemplateApi.md#listSmsTemplates) | **GET** /api/v1/templates/sms | List all SMS Templates
[**partialUpdateSmsTemplate**](TemplateApi.md#partialUpdateSmsTemplate) | **POST** /api/v1/templates/sms/{templateId} | Update an SMS Template
[**updateSmsTemplate**](TemplateApi.md#updateSmsTemplate) | **PUT** /api/v1/templates/sms/{templateId} | Replace an SMS Template


# **createSmsTemplate**
> SmsTemplate createSmsTemplate(smsTemplate)

Adds a new custom SMS template to your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.TemplateApi(configuration);

let body:okta.TemplateApiCreateSmsTemplateRequest = {
  // SmsTemplate
  smsTemplate: {
    name: "name_example",
    template: "template_example",
    translations: {},
    type: "SMS_VERIFY_CODE",
  },
};

apiInstance.createSmsTemplate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smsTemplate** | **SmsTemplate**|  |


### Return type

**SmsTemplate**

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

# **deleteSmsTemplate**
> void deleteSmsTemplate()

Removes an SMS template.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.TemplateApi(configuration);

let body:okta.TemplateApiDeleteSmsTemplateRequest = {
  // string
  templateId: "templateId_example",
};

apiInstance.deleteSmsTemplate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] |  | defaults to undefined


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

# **getSmsTemplate**
> SmsTemplate getSmsTemplate()

Fetches a specific template by `id`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.TemplateApi(configuration);

let body:okta.TemplateApiGetSmsTemplateRequest = {
  // string
  templateId: "templateId_example",
};

apiInstance.getSmsTemplate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] |  | defaults to undefined


### Return type

**SmsTemplate**

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

# **listSmsTemplates**
> Array<SmsTemplate> listSmsTemplates()

Enumerates custom SMS templates in your organization. A subset of templates can be returned that match a template type.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.TemplateApi(configuration);

let body:okta.TemplateApiListSmsTemplatesRequest = {
  // SmsTemplateType (optional)
  templateType: "SMS_VERIFY_CODE",
};

apiInstance.listSmsTemplates(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateType** | **SmsTemplateType** |  | (optional) defaults to undefined


### Return type

**Array<SmsTemplate>**

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

# **partialUpdateSmsTemplate**
> SmsTemplate partialUpdateSmsTemplate(smsTemplate)

Updates only some of the SMS template properties:

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.TemplateApi(configuration);

let body:okta.TemplateApiPartialUpdateSmsTemplateRequest = {
  // string
  templateId: "templateId_example",
  // SmsTemplate
  smsTemplate: {
    name: "name_example",
    template: "template_example",
    translations: {},
    type: "SMS_VERIFY_CODE",
  },
};

apiInstance.partialUpdateSmsTemplate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smsTemplate** | **SmsTemplate**|  |
 **templateId** | [**string**] |  | defaults to undefined


### Return type

**SmsTemplate**

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

# **updateSmsTemplate**
> SmsTemplate updateSmsTemplate(smsTemplate)

Updates the SMS template.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.TemplateApi(configuration);

let body:okta.TemplateApiUpdateSmsTemplateRequest = {
  // string
  templateId: "templateId_example",
  // SmsTemplate
  smsTemplate: {
    name: "name_example",
    template: "template_example",
    translations: {},
    type: "SMS_VERIFY_CODE",
  },
};

apiInstance.updateSmsTemplate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smsTemplate** | **SmsTemplate**|  |
 **templateId** | [**string**] |  | defaults to undefined


### Return type

**SmsTemplate**

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


