# okta.CustomizationApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBrand**](CustomizationApi.md#createBrand) | **POST** /api/v1/brands | Create a Brand
[**createEmailCustomization**](CustomizationApi.md#createEmailCustomization) | **POST** /api/v1/brands/{brandId}/templates/email/{templateName}/customizations | Create an Email Customization
[**deleteAllCustomizations**](CustomizationApi.md#deleteAllCustomizations) | **DELETE** /api/v1/brands/{brandId}/templates/email/{templateName}/customizations | Delete all Email Customizations
[**deleteBrand**](CustomizationApi.md#deleteBrand) | **DELETE** /api/v1/brands/{brandId} | Delete a brand
[**deleteBrandThemeBackgroundImage**](CustomizationApi.md#deleteBrandThemeBackgroundImage) | **DELETE** /api/v1/brands/{brandId}/themes/{themeId}/background-image | Delete the Background Image
[**deleteBrandThemeFavicon**](CustomizationApi.md#deleteBrandThemeFavicon) | **DELETE** /api/v1/brands/{brandId}/themes/{themeId}/favicon | Delete the Favicon
[**deleteBrandThemeLogo**](CustomizationApi.md#deleteBrandThemeLogo) | **DELETE** /api/v1/brands/{brandId}/themes/{themeId}/logo | Delete the Logo
[**deleteEmailCustomization**](CustomizationApi.md#deleteEmailCustomization) | **DELETE** /api/v1/brands/{brandId}/templates/email/{templateName}/customizations/{customizationId} | Delete an Email Customization
[**getBrand**](CustomizationApi.md#getBrand) | **GET** /api/v1/brands/{brandId} | Retrieve a Brand
[**getBrandDomains**](CustomizationApi.md#getBrandDomains) | **GET** /api/v1/brands/{brandId}/domains | List all Domains associated with a Brand
[**getBrandTheme**](CustomizationApi.md#getBrandTheme) | **GET** /api/v1/brands/{brandId}/themes/{themeId} | Retrieve a Theme
[**getCustomizationPreview**](CustomizationApi.md#getCustomizationPreview) | **GET** /api/v1/brands/{brandId}/templates/email/{templateName}/customizations/{customizationId}/preview | Preview an Email Customization
[**getEmailCustomization**](CustomizationApi.md#getEmailCustomization) | **GET** /api/v1/brands/{brandId}/templates/email/{templateName}/customizations/{customizationId} | Retrieve an Email Customization
[**getEmailDefaultContent**](CustomizationApi.md#getEmailDefaultContent) | **GET** /api/v1/brands/{brandId}/templates/email/{templateName}/default-content | Retrieve an Email Template Default Content
[**getEmailDefaultPreview**](CustomizationApi.md#getEmailDefaultPreview) | **GET** /api/v1/brands/{brandId}/templates/email/{templateName}/default-content/preview | Preview the Email Template Default Content
[**getEmailSettings**](CustomizationApi.md#getEmailSettings) | **GET** /api/v1/brands/{brandId}/templates/email/{templateName}/settings | Retrieve the Email Template Settings
[**getEmailTemplate**](CustomizationApi.md#getEmailTemplate) | **GET** /api/v1/brands/{brandId}/templates/email/{templateName} | Retrieve an Email Template
[**linkBrandDomain**](CustomizationApi.md#linkBrandDomain) | **POST** /api/v1/brands/{brandId}/domains | Link a Brand to a Domain
[**listAllSignInWidgetVersions**](CustomizationApi.md#listAllSignInWidgetVersions) | **GET** /api/v1/brands/{brandId}/pages/sign-in/widget-versions | List all Sign-in Widget Versions
[**listBrandThemes**](CustomizationApi.md#listBrandThemes) | **GET** /api/v1/brands/{brandId}/themes | List all Themes
[**listBrands**](CustomizationApi.md#listBrands) | **GET** /api/v1/brands | List all Brands
[**listEmailCustomizations**](CustomizationApi.md#listEmailCustomizations) | **GET** /api/v1/brands/{brandId}/templates/email/{templateName}/customizations | List all Email Customizations
[**listEmailTemplates**](CustomizationApi.md#listEmailTemplates) | **GET** /api/v1/brands/{brandId}/templates/email | List all Email Templates
[**previewErrorPage**](CustomizationApi.md#previewErrorPage) | **POST** /api/v1/brands/{brandId}/pages/error/preview | Preview the Error Page
[**replaceErrorPage**](CustomizationApi.md#replaceErrorPage) | **PUT** /api/v1/brands/{brandId}/pages/error | Replace the Error Page
[**replaceSignInPage**](CustomizationApi.md#replaceSignInPage) | **PUT** /api/v1/brands/{brandId}/pages/sign-in | Replace the Sign-in Page
[**replaceSignInPagePreview**](CustomizationApi.md#replaceSignInPagePreview) | **PUT** /api/v1/brands/{brandId}/pages/sign-in/preview | Replace the Sign-in Page Preview
[**replaceSignOutPageSettings**](CustomizationApi.md#replaceSignOutPageSettings) | **PUT** /api/v1/brands/{brandId}/pages/sign-out | Replace the Sign-out Page Settings
[**resetErrorPage**](CustomizationApi.md#resetErrorPage) | **DELETE** /api/v1/brands/{brandId}/pages/error | Reset the Error Page
[**resetSignInPage**](CustomizationApi.md#resetSignInPage) | **DELETE** /api/v1/brands/{brandId}/pages/sign-in | Reset the Sign-in Page
[**retrieveErrorPage**](CustomizationApi.md#retrieveErrorPage) | **GET** /api/v1/brands/{brandId}/pages/error | Retrieve the Error Page
[**retrieveSignInPage**](CustomizationApi.md#retrieveSignInPage) | **GET** /api/v1/brands/{brandId}/pages/sign-in | Retrieve the Sign-in Page
[**retrieveSignOutPageSettings**](CustomizationApi.md#retrieveSignOutPageSettings) | **GET** /api/v1/brands/{brandId}/pages/sign-out | Retrieve the Sign-out Page Settings
[**sendTestEmail**](CustomizationApi.md#sendTestEmail) | **POST** /api/v1/brands/{brandId}/templates/email/{templateName}/test | Send a Test Email
[**unlinkBrandDomain**](CustomizationApi.md#unlinkBrandDomain) | **DELETE** /api/v1/brands/{brandId}/domains/{domainId} | Unlink a Brand from a Domain
[**updateBrand**](CustomizationApi.md#updateBrand) | **PUT** /api/v1/brands/{brandId} | Replace a Brand
[**updateBrandTheme**](CustomizationApi.md#updateBrandTheme) | **PUT** /api/v1/brands/{brandId}/themes/{themeId} | Replace a Theme
[**updateEmailCustomization**](CustomizationApi.md#updateEmailCustomization) | **PUT** /api/v1/brands/{brandId}/templates/email/{templateName}/customizations/{customizationId} | Replace an Email Customization
[**updateEmailSettings**](CustomizationApi.md#updateEmailSettings) | **PUT** /api/v1/brands/{brandId}/templates/email/{templateName}/settings | Replace the Email Template Settings
[**uploadBrandThemeBackgroundImage**](CustomizationApi.md#uploadBrandThemeBackgroundImage) | **POST** /api/v1/brands/{brandId}/themes/{themeId}/background-image | Upload the Background Image
[**uploadBrandThemeFavicon**](CustomizationApi.md#uploadBrandThemeFavicon) | **POST** /api/v1/brands/{brandId}/themes/{themeId}/favicon | Upload the Favicon
[**uploadBrandThemeLogo**](CustomizationApi.md#uploadBrandThemeLogo) | **POST** /api/v1/brands/{brandId}/themes/{themeId}/logo | Upload the Logo


# **createBrand**
> Brand createBrand()

Create new brand in your org

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiCreateBrandRequest = {
  // CreateBrandRequest (optional)
  CreateBrandRequest: {
    name: "name_example",
  },
};

apiInstance.createBrand(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateBrandRequest** | **CreateBrandRequest**|  |


### Return type

**Brand**

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
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createEmailCustomization**
> EmailCustomization createEmailCustomization()

Creates a new email customization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiCreateEmailCustomizationRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // string | The name of the email template.
  templateName: "templateName_example",
  // EmailCustomization (optional)
  instance: null,
};

apiInstance.createEmailCustomization(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance** | **EmailCustomization**|  |
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined
 **templateName** | [**string**] | The name of the email template. | defaults to undefined


### Return type

**EmailCustomization**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successfully created the email customization. |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Could not create the email customization because it conflicts with an existing email customization. |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAllCustomizations**
> void deleteAllCustomizations()

Deletes all customizations for an email template.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiDeleteAllCustomizationsRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // string | The name of the email template.
  templateName: "templateName_example",
};

apiInstance.deleteAllCustomizations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined
 **templateName** | [**string**] | The name of the email template. | defaults to undefined


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
**204** | Successfully deleted all customizations for the email template. |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteBrand**
> void deleteBrand()

Deletes a brand by its unique identifier.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiDeleteBrandRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
};

apiInstance.deleteBrand(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined


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
**204** | Successfully deleted the brand. |  -  |
**403** | Forbidden |  -  |
**409** | Conflict |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteBrandThemeBackgroundImage**
> void deleteBrandThemeBackgroundImage()

Deletes a Theme background image.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiDeleteBrandThemeBackgroundImageRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // string | The ID of the theme.
  themeId: "themeId_example",
};

apiInstance.deleteBrandThemeBackgroundImage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined
 **themeId** | [**string**] | The ID of the theme. | defaults to undefined


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

# **deleteBrandThemeFavicon**
> void deleteBrandThemeFavicon()

Deletes a Theme favicon. The theme will use the default Okta favicon.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiDeleteBrandThemeFaviconRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // string | The ID of the theme.
  themeId: "themeId_example",
};

apiInstance.deleteBrandThemeFavicon(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined
 **themeId** | [**string**] | The ID of the theme. | defaults to undefined


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

# **deleteBrandThemeLogo**
> void deleteBrandThemeLogo()

Deletes a Theme logo. The theme will use the default Okta logo.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiDeleteBrandThemeLogoRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // string | The ID of the theme.
  themeId: "themeId_example",
};

apiInstance.deleteBrandThemeLogo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined
 **themeId** | [**string**] | The ID of the theme. | defaults to undefined


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

# **deleteEmailCustomization**
> void deleteEmailCustomization()

Deletes an email customization by its unique identifier.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiDeleteEmailCustomizationRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // string | The name of the email template.
  templateName: "templateName_example",
  // string | The ID of the email customization.
  customizationId: "customizationId_example",
};

apiInstance.deleteEmailCustomization(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined
 **templateName** | [**string**] | The name of the email template. | defaults to undefined
 **customizationId** | [**string**] | The ID of the email customization. | defaults to undefined


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
**204** | Successfully deleted the email customization. |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Could not delete the email customization deleted because it is the default email customization. |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBrand**
> Brand getBrand()

Fetches a brand by `brandId`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiGetBrandRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
};

apiInstance.getBrand(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined


### Return type

**Brand**

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

# **getBrandDomains**
> Array<DomainResponse> getBrandDomains()

List all domains associated with a brand by `brandId`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiGetBrandDomainsRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
};

apiInstance.getBrandDomains(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined


### Return type

**Array<DomainResponse>**

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

# **getBrandTheme**
> ThemeResponse getBrandTheme()

Fetches a theme for a brand

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiGetBrandThemeRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // string | The ID of the theme.
  themeId: "themeId_example",
};

apiInstance.getBrandTheme(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined
 **themeId** | [**string**] | The ID of the theme. | defaults to undefined


### Return type

**ThemeResponse**

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

# **getCustomizationPreview**
> EmailPreview getCustomizationPreview()

Generates a preview of an email customization. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiGetCustomizationPreviewRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // string | The name of the email template.
  templateName: "templateName_example",
  // string | The ID of the email customization.
  customizationId: "customizationId_example",
};

apiInstance.getCustomizationPreview(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined
 **templateName** | [**string**] | The name of the email template. | defaults to undefined
 **customizationId** | [**string**] | The ID of the email customization. | defaults to undefined


### Return type

**EmailPreview**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully generated a preview of the email customization. |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEmailCustomization**
> EmailCustomization getEmailCustomization()

Gets an email customization by its unique identifier.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiGetEmailCustomizationRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // string | The name of the email template.
  templateName: "templateName_example",
  // string | The ID of the email customization.
  customizationId: "customizationId_example",
};

apiInstance.getEmailCustomization(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined
 **templateName** | [**string**] | The name of the email template. | defaults to undefined
 **customizationId** | [**string**] | The ID of the email customization. | defaults to undefined


### Return type

**EmailCustomization**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the email customization. |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEmailDefaultContent**
> EmailDefaultContent getEmailDefaultContent()

Gets an email template's default content.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiGetEmailDefaultContentRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // string | The name of the email template.
  templateName: "templateName_example",
  // string | The language to use for the email. Defaults to the current user's language if unspecified. (optional)
  language: "language_example",
};

apiInstance.getEmailDefaultContent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined
 **templateName** | [**string**] | The name of the email template. | defaults to undefined
 **language** | [**string**] | The language to use for the email. Defaults to the current user&#39;s language if unspecified. | (optional) defaults to undefined


### Return type

**EmailDefaultContent**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the email template&#39;s default content. |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEmailDefaultPreview**
> EmailPreview getEmailDefaultPreview()

Generates a preview of an email template's default content. All variable references (e.g., `${user.profile.firstName}`) are populated using the current user's context.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiGetEmailDefaultPreviewRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // string | The name of the email template.
  templateName: "templateName_example",
  // string | The language to use for the email. Defaults to the current user's language if unspecified. (optional)
  language: "language_example",
};

apiInstance.getEmailDefaultPreview(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined
 **templateName** | [**string**] | The name of the email template. | defaults to undefined
 **language** | [**string**] | The language to use for the email. Defaults to the current user&#39;s language if unspecified. | (optional) defaults to undefined


### Return type

**EmailPreview**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully generated a preview of the email template&#39;s default content. |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEmailSettings**
> EmailSettings getEmailSettings()

Gets an email template's settings.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiGetEmailSettingsRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // string | The name of the email template.
  templateName: "templateName_example",
};

apiInstance.getEmailSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined
 **templateName** | [**string**] | The name of the email template. | defaults to undefined


### Return type

**EmailSettings**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the email template&#39;s settings. |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEmailTemplate**
> EmailTemplate getEmailTemplate()

Gets the details of an email template by name.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiGetEmailTemplateRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // string | The name of the email template.
  templateName: "templateName_example",
  // Array<'settings' | 'customizationCount'> | Specifies additional metadata to be included in the response. (optional)
  expand: [
    "settings",
  ],
};

apiInstance.getEmailTemplate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined
 **templateName** | [**string**] | The name of the email template. | defaults to undefined
 **expand** | **Array<&#39;settings&#39; &#124; &#39;customizationCount&#39;>** | Specifies additional metadata to be included in the response. | (optional) defaults to undefined


### Return type

**EmailTemplate**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the email template. |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **linkBrandDomain**
> BrandDomain linkBrandDomain()

Link a Brand to a Domain by `domainId`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiLinkBrandDomainRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // CreateBrandDomainRequest (optional)
  CreateBrandDomainRequest: {
    domainId: "domainId_example",
  },
};

apiInstance.linkBrandDomain(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateBrandDomainRequest** | **CreateBrandDomainRequest**|  |
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined


### Return type

**BrandDomain**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**403** | Forbidden |  -  |
**409** | Conflict |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAllSignInWidgetVersions**
> Array<string> listAllSignInWidgetVersions()

List all sign-in widget versions.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiListAllSignInWidgetVersionsRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
};

apiInstance.listAllSignInWidgetVersions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined


### Return type

**Array<string>**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully listed the sign-in widget versions. |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listBrandThemes**
> Array<ThemeResponse> listBrandThemes()

List all the themes in your brand

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiListBrandThemesRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
};

apiInstance.listBrandThemes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined


### Return type

**Array<ThemeResponse>**

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

# **listBrands**
> Array<Brand> listBrands()

List all the brands in your org.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:any = {};

apiInstance.listBrands(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Brand>**

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

# **listEmailCustomizations**
> Array<EmailCustomization> listEmailCustomizations()

Lists all customizations of an email template.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiListEmailCustomizationsRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // string | The name of the email template.
  templateName: "templateName_example",
  // string | The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the `Link` response header. See [Pagination](/#pagination) for more information. (optional)
  after: "after_example",
  // number | A limit on the number of objects to return. (optional)
  limit: 20,
};

apiInstance.listEmailCustomizations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined
 **templateName** | [**string**] | The name of the email template. | defaults to undefined
 **after** | [**string**] | The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information. | (optional) defaults to undefined
 **limit** | [**number**] | A limit on the number of objects to return. | (optional) defaults to 20


### Return type

**Array<EmailCustomization>**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved all email customizations for the specified email template. |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listEmailTemplates**
> Array<EmailTemplate> listEmailTemplates()

Lists all email templates.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiListEmailTemplatesRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // string | The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the `Link` response header. See [Pagination](/#pagination) for more information. (optional)
  after: "after_example",
  // number | A limit on the number of objects to return. (optional)
  limit: 20,
  // Array<'settings' | 'customizationCount'> | Specifies additional metadata to be included in the response. (optional)
  expand: [
    "settings",
  ],
};

apiInstance.listEmailTemplates(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined
 **after** | [**string**] | The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information. | (optional) defaults to undefined
 **limit** | [**number**] | A limit on the number of objects to return. | (optional) defaults to 20
 **expand** | **Array<&#39;settings&#39; &#124; &#39;customizationCount&#39;>** | Specifies additional metadata to be included in the response. | (optional) defaults to undefined


### Return type

**Array<EmailTemplate>**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully returned the list of email templates. |  * Link - The pagination header containing links to the current and next page of results. See [Pagination](/#pagination) for more information. <br>  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **previewErrorPage**
> string previewErrorPage(CustomizablePage)

Previews the error page.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiPreviewErrorPageRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // CustomizablePage
  CustomizablePage: {
    pageContent: "pageContent_example",
  },
};

apiInstance.previewErrorPage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CustomizablePage** | **CustomizablePage**|  |
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined


### Return type

**string**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/html, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully previewed the error page. |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **replaceErrorPage**
> CustomizablePage replaceErrorPage(CustomizablePage)

Replaces the error page.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiReplaceErrorPageRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // CustomizablePage
  CustomizablePage: {
    pageContent: "pageContent_example",
  },
};

apiInstance.replaceErrorPage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CustomizablePage** | **CustomizablePage**|  |
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined


### Return type

**CustomizablePage**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully replaced the error page. |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **replaceSignInPage**
> SignInPage replaceSignInPage(SignInPage)

Replaces the sign-in page.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiReplaceSignInPageRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // SignInPage
  SignInPage: null,
};

apiInstance.replaceSignInPage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SignInPage** | **SignInPage**|  |
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined


### Return type

**SignInPage**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully replaced the sign-in page. |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **replaceSignInPagePreview**
> replaceSignInPagePreview(SignInPage)

Replace the sign-in page preview.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiReplaceSignInPagePreviewRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // SignInPage
  SignInPage: null,
};

apiInstance.replaceSignInPagePreview(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SignInPage** | **SignInPage**|  |
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined


### Return type

void (empty response body)

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**303** | Successfully replaced the sign-in page preview. |  * Location -  <br>  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **replaceSignOutPageSettings**
> HostedPage replaceSignOutPageSettings(HostedPage)

Replaces the sign-out page settings.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiReplaceSignOutPageSettingsRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // HostedPage
  HostedPage: {
    type: "EXTERNALLY_HOSTED",
    url: "url_example",
  },
};

apiInstance.replaceSignOutPageSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HostedPage** | **HostedPage**|  |
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined


### Return type

**HostedPage**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully replaced the sign-out page settings. |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **resetErrorPage**
> void resetErrorPage()

Resets the error page.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiResetErrorPageRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
};

apiInstance.resetErrorPage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined


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
**204** | Successfully reset the error page. |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **resetSignInPage**
> void resetSignInPage()

Reset the sign-in page.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiResetSignInPageRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
};

apiInstance.resetSignInPage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined


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
**204** | Successfully reset the sign-in page. |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveErrorPage**
> CustomizablePage retrieveErrorPage()

Retrieves the error page.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiRetrieveErrorPageRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
};

apiInstance.retrieveErrorPage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined


### Return type

**CustomizablePage**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the error page. |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveSignInPage**
> SignInPage retrieveSignInPage()

Retrieves the sign-in page.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiRetrieveSignInPageRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
};

apiInstance.retrieveSignInPage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined


### Return type

**SignInPage**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the sign-in page. |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveSignOutPageSettings**
> HostedPage retrieveSignOutPageSettings()

Retrieves the sign-out page settings.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiRetrieveSignOutPageSettingsRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
};

apiInstance.retrieveSignOutPageSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined


### Return type

**HostedPage**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the sign-out page settings. |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sendTestEmail**
> void sendTestEmail()

Sends a test email to the current user’s primary and secondary email addresses. The email content is selected based on the following priority: 1. The email customization for the language specified in the `language` query parameter. 2. The email template's default customization. 3. The email template’s default content, translated to the current user's language.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiSendTestEmailRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // string | The name of the email template.
  templateName: "templateName_example",
  // string | The language to use for the email. Defaults to the current user's language if unspecified. (optional)
  language: "language_example",
};

apiInstance.sendTestEmail(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined
 **templateName** | [**string**] | The name of the email template. | defaults to undefined
 **language** | [**string**] | The language to use for the email. Defaults to the current user&#39;s language if unspecified. | (optional) defaults to undefined


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
**204** | Successfully sent a test email. |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **unlinkBrandDomain**
> void unlinkBrandDomain()

Unlink brand and domain by its unique identifier

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiUnlinkBrandDomainRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // string | The ID of the domain.
  domainId: "domainId_example",
};

apiInstance.unlinkBrandDomain(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined
 **domainId** | [**string**] | The ID of the domain. | defaults to undefined


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
**204** | Successfully unlinked the domain from the brand |  -  |
**403** | Forbidden |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateBrand**
> Brand updateBrand(brand)

Updates a brand by `brandId`

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiUpdateBrandRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // BrandRequest
  brand: {
    agreeToCustomPrivacyPolicy: true,
    customPrivacyPolicyUrl: "customPrivacyPolicyUrl_example",
    name: "name_example",
    removePoweredByOkta: true,
  },
};

apiInstance.updateBrand(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brand** | **BrandRequest**|  |
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined


### Return type

**Brand**

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

# **updateBrandTheme**
> ThemeResponse updateBrandTheme(theme)

Updates a theme for a brand

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiUpdateBrandThemeRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // string | The ID of the theme.
  themeId: "themeId_example",
  // Theme
  theme: {
    emailTemplateTouchPointVariant: "FULL_THEME",
    endUserDashboardTouchPointVariant: "FULL_THEME",
    errorPageTouchPointVariant: "BACKGROUND_IMAGE",
    primaryColorContrastHex: "primaryColorContrastHex_example",
    primaryColorHex: "primaryColorHex_example",
    secondaryColorContrastHex: "secondaryColorContrastHex_example",
    secondaryColorHex: "secondaryColorHex_example",
    signInPageTouchPointVariant: "BACKGROUND_IMAGE",
  },
};

apiInstance.updateBrandTheme(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **theme** | **Theme**|  |
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined
 **themeId** | [**string**] | The ID of the theme. | defaults to undefined


### Return type

**ThemeResponse**

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

# **updateEmailCustomization**
> EmailCustomization updateEmailCustomization()

Updates an existing email customization using the property values provided.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiUpdateEmailCustomizationRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // string | The name of the email template.
  templateName: "templateName_example",
  // string | The ID of the email customization.
  customizationId: "customizationId_example",
  // EmailCustomization | Request (optional)
  instance: null,
};

apiInstance.updateEmailCustomization(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance** | **EmailCustomization**| Request |
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined
 **templateName** | [**string**] | The name of the email template. | defaults to undefined
 **customizationId** | [**string**] | The ID of the email customization. | defaults to undefined


### Return type

**EmailCustomization**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the email customization. |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Could not update the email customization because the update would cause a conflict with an existing email customization. |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateEmailSettings**
> void updateEmailSettings()

Updates an email template's settings.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiUpdateEmailSettingsRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // string | The name of the email template.
  templateName: "templateName_example",
  // EmailSettings (optional)
  EmailSettings: {
    recipients: "ALL_USERS",
  },
};

apiInstance.updateEmailSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EmailSettings** | **EmailSettings**|  |
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined
 **templateName** | [**string**] | The name of the email template. | defaults to undefined


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
**204** | Successfully updated the email template&#39;s settings. |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Could not update the email template&#39;s settings due to an invalid setting value. |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **uploadBrandThemeBackgroundImage**
> ImageUploadResponse uploadBrandThemeBackgroundImage()

Updates the background image for your Theme

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiUploadBrandThemeBackgroundImageRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // string | The ID of the theme.
  themeId: "themeId_example",
  // HttpFile
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.uploadBrandThemeBackgroundImage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined
 **themeId** | [**string**] | The ID of the theme. | defaults to undefined
 **file** | [**HttpFile**] |  | defaults to undefined


### Return type

**ImageUploadResponse**

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
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **uploadBrandThemeFavicon**
> ImageUploadResponse uploadBrandThemeFavicon()

Updates the favicon for your theme

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiUploadBrandThemeFaviconRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // string | The ID of the theme.
  themeId: "themeId_example",
  // HttpFile
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.uploadBrandThemeFavicon(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined
 **themeId** | [**string**] | The ID of the theme. | defaults to undefined
 **file** | [**HttpFile**] |  | defaults to undefined


### Return type

**ImageUploadResponse**

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
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **uploadBrandThemeLogo**
> ImageUploadResponse uploadBrandThemeLogo()

Updates the logo for your Theme

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.CustomizationApi(configuration);

let body:okta.CustomizationApiUploadBrandThemeLogoRequest = {
  // string | The ID of the brand.
  brandId: "brandId_example",
  // string | The ID of the theme.
  themeId: "themeId_example",
  // HttpFile
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.uploadBrandThemeLogo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] | The ID of the brand. | defaults to undefined
 **themeId** | [**string**] | The ID of the theme. | defaults to undefined
 **file** | [**HttpFile**] |  | defaults to undefined


### Return type

**ImageUploadResponse**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: multipart/form-data
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


