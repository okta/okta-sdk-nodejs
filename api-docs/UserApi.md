# okta.UserApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateUser**](UserApi.md#activateUser) | **POST** /api/v1/users/{userId}/lifecycle/activate | Activate a User
[**changePassword**](UserApi.md#changePassword) | **POST** /api/v1/users/{userId}/credentials/change_password | Change Password
[**changeRecoveryQuestion**](UserApi.md#changeRecoveryQuestion) | **POST** /api/v1/users/{userId}/credentials/change_recovery_question | Change Recovery Question
[**clearUserSessions**](UserApi.md#clearUserSessions) | **DELETE** /api/v1/users/{userId}/sessions | Delete all User Sessions
[**createUser**](UserApi.md#createUser) | **POST** /api/v1/users | Create a User
[**deactivateOrDeleteUser**](UserApi.md#deactivateOrDeleteUser) | **DELETE** /api/v1/users/{userId} | Delete a User
[**deactivateUser**](UserApi.md#deactivateUser) | **POST** /api/v1/users/{userId}/lifecycle/deactivate | Deactivate a User
[**expirePassword**](UserApi.md#expirePassword) | **POST** /api/v1/users/{userId}/lifecycle/expire_password | Expire Password
[**expirePasswordAndGetTemporaryPassword**](UserApi.md#expirePasswordAndGetTemporaryPassword) | **POST** /api/v1/users/{userId}/lifecycle/expire_password_with_temp_password | Expire Password and Set Temporary Password
[**forgotPassword**](UserApi.md#forgotPassword) | **POST** /api/v1/users/{userId}/credentials/forgot_password | Initiate Forgot Password
[**forgotPasswordSetNewPassword**](UserApi.md#forgotPasswordSetNewPassword) | **POST** /api/v1/users/{userId}/credentials/forgot_password_recovery_question | Reset Password with Recovery Question
[**getLinkedObjectsForUser**](UserApi.md#getLinkedObjectsForUser) | **GET** /api/v1/users/{userId}/linkedObjects/{relationshipName} | List all Linked Objects
[**getRefreshTokenForUserAndClient**](UserApi.md#getRefreshTokenForUserAndClient) | **GET** /api/v1/users/{userId}/clients/{clientId}/tokens/{tokenId} | Retrieve a Refresh Token for a Client
[**getUser**](UserApi.md#getUser) | **GET** /api/v1/users/{userId} | Retrieve a User
[**getUserGrant**](UserApi.md#getUserGrant) | **GET** /api/v1/users/{userId}/grants/{grantId} | Retrieve a User Grant
[**listAppLinks**](UserApi.md#listAppLinks) | **GET** /api/v1/users/{userId}/appLinks | List all Assigned Application Links
[**listGrantsForUserAndClient**](UserApi.md#listGrantsForUserAndClient) | **GET** /api/v1/users/{userId}/clients/{clientId}/grants | List all Grants for a Client
[**listRefreshTokensForUserAndClient**](UserApi.md#listRefreshTokensForUserAndClient) | **GET** /api/v1/users/{userId}/clients/{clientId}/tokens | List all Refresh Tokens for a Client
[**listUserClients**](UserApi.md#listUserClients) | **GET** /api/v1/users/{userId}/clients | List all Clients
[**listUserGrants**](UserApi.md#listUserGrants) | **GET** /api/v1/users/{userId}/grants | List all User Grants
[**listUserGroups**](UserApi.md#listUserGroups) | **GET** /api/v1/users/{userId}/groups | List all Groups
[**listUserIdentityProviders**](UserApi.md#listUserIdentityProviders) | **GET** /api/v1/users/{userId}/idps | List all Identity Providers
[**listUsers**](UserApi.md#listUsers) | **GET** /api/v1/users | List all Users
[**partialUpdateUser**](UserApi.md#partialUpdateUser) | **POST** /api/v1/users/{userId} | Update a User
[**reactivateUser**](UserApi.md#reactivateUser) | **POST** /api/v1/users/{userId}/lifecycle/reactivate | Reactivate a User
[**removeLinkedObjectForUser**](UserApi.md#removeLinkedObjectForUser) | **DELETE** /api/v1/users/{userId}/linkedObjects/{relationshipName} | Delete a Linked Object
[**resetFactors**](UserApi.md#resetFactors) | **POST** /api/v1/users/{userId}/lifecycle/reset_factors | Reset all Factors
[**resetPassword**](UserApi.md#resetPassword) | **POST** /api/v1/users/{userId}/lifecycle/reset_password | Reset Password
[**revokeGrantsForUserAndClient**](UserApi.md#revokeGrantsForUserAndClient) | **DELETE** /api/v1/users/{userId}/clients/{clientId}/grants | Revoke all Grants for a Client
[**revokeTokenForUserAndClient**](UserApi.md#revokeTokenForUserAndClient) | **DELETE** /api/v1/users/{userId}/clients/{clientId}/tokens/{tokenId} | Revoke a Token for a Client
[**revokeTokensForUserAndClient**](UserApi.md#revokeTokensForUserAndClient) | **DELETE** /api/v1/users/{userId}/clients/{clientId}/tokens | Revoke all Refresh Tokens for a Client
[**revokeUserGrant**](UserApi.md#revokeUserGrant) | **DELETE** /api/v1/users/{userId}/grants/{grantId} | Revoke a User Grant
[**revokeUserGrants**](UserApi.md#revokeUserGrants) | **DELETE** /api/v1/users/{userId}/grants | Revoke all User Grants
[**setLinkedObjectForUser**](UserApi.md#setLinkedObjectForUser) | **PUT** /api/v1/users/{associatedUserId}/linkedObjects/{primaryRelationshipName}/{primaryUserId} | Create a Linked Object for two User
[**suspendUser**](UserApi.md#suspendUser) | **POST** /api/v1/users/{userId}/lifecycle/suspend | Suspend a User
[**unlockUser**](UserApi.md#unlockUser) | **POST** /api/v1/users/{userId}/lifecycle/unlock | Unlock a User
[**unsuspendUser**](UserApi.md#unsuspendUser) | **POST** /api/v1/users/{userId}/lifecycle/unsuspend | Unsuspend a User
[**updateUser**](UserApi.md#updateUser) | **PUT** /api/v1/users/{userId} | Replace a User


# **activateUser**
> UserActivationToken activateUser()

Activates a user.  This operation can only be performed on users with a `STAGED` status.  Activation of a user is an asynchronous operation. The user will have the `transitioningToStatus` property with a value of `ACTIVE` during activation to indicate that the user hasn't completed the asynchronous operation.  The user will have a status of `ACTIVE` when the activation process is complete.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiActivateUserRequest = {
  // string
  userId: "userId_example",
  // boolean | Sends an activation email to the user if true
  sendEmail: true,
};

apiInstance.activateUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **sendEmail** | [**boolean**] | Sends an activation email to the user if true | defaults to undefined


### Return type

**UserActivationToken**

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

# **changePassword**
> UserCredentials changePassword(changePasswordRequest)

Changes a user's password by validating the user's current password. This operation can only be performed on users in `STAGED`, `ACTIVE`, `PASSWORD_EXPIRED`, or `RECOVERY` status that have a valid password credential

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiChangePasswordRequest = {
  // string
  userId: "userId_example",
  // ChangePasswordRequest
  changePasswordRequest: {
    newPassword: {
      hash: {
        algorithm: "BCRYPT",
        salt: "salt_example",
        saltOrder: "saltOrder_example",
        value: "value_example",
        workFactor: 1,
      },
      hook: {
        type: "type_example",
      },
      value: "value_example",
    },
    oldPassword: {
      hash: {
        algorithm: "BCRYPT",
        salt: "salt_example",
        saltOrder: "saltOrder_example",
        value: "value_example",
        workFactor: 1,
      },
      hook: {
        type: "type_example",
      },
      value: "value_example",
    },
  },
  // boolean (optional)
  strict: true,
};

apiInstance.changePassword(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changePasswordRequest** | **ChangePasswordRequest**|  |
 **userId** | [**string**] |  | defaults to undefined
 **strict** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**UserCredentials**

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

# **changeRecoveryQuestion**
> UserCredentials changeRecoveryQuestion(userCredentials)

Changes a user's recovery question & answer credential by validating the user's current password.  This operation can only be performed on users in **STAGED**, **ACTIVE** or **RECOVERY** `status` that have a valid password credential

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiChangeRecoveryQuestionRequest = {
  // string
  userId: "userId_example",
  // UserCredentials
  userCredentials: {
    password: {
      hash: {
        algorithm: "BCRYPT",
        salt: "salt_example",
        saltOrder: "saltOrder_example",
        value: "value_example",
        workFactor: 1,
      },
      hook: {
        type: "type_example",
      },
      value: "value_example",
    },
    provider: {
      name: "name_example",
      type: "ACTIVE_DIRECTORY",
    },
    recovery_question: {
      answer: "answer_example",
      question: "question_example",
    },
  },
};

apiInstance.changeRecoveryQuestion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCredentials** | **UserCredentials**|  |
 **userId** | [**string**] |  | defaults to undefined


### Return type

**UserCredentials**

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

# **clearUserSessions**
> void clearUserSessions()

Removes all active identity provider sessions. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiClearUserSessionsRequest = {
  // string
  userId: "userId_example",
  // boolean | Revoke issued OpenID Connect and OAuth refresh and access tokens (optional)
  oauthTokens: false,
};

apiInstance.clearUserSessions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **oauthTokens** | [**boolean**] | Revoke issued OpenID Connect and OAuth refresh and access tokens | (optional) defaults to undefined


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

# **createUser**
> User createUser(body)

Creates a new user in your Okta organization with or without credentials.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiCreateUserRequest = {
  // CreateUserRequest
  body: {
    credentials: {
      password: {
        hash: {
          algorithm: "BCRYPT",
          salt: "salt_example",
          saltOrder: "saltOrder_example",
          value: "value_example",
          workFactor: 1,
        },
        hook: {
          type: "type_example",
        },
        value: "value_example",
      },
      provider: {
        name: "name_example",
        type: "ACTIVE_DIRECTORY",
      },
      recovery_question: {
        answer: "answer_example",
        question: "question_example",
      },
    },
    groupIds: [
      "groupIds_example",
    ],
    profile: {
      city: "city_example",
      costCenter: "costCenter_example",
      countryCode: "countryCode_example",
      department: "department_example",
      displayName: "displayName_example",
      division: "division_example",
      email: "email_example",
      employeeNumber: "employeeNumber_example",
      firstName: "firstName_example",
      honorificPrefix: "honorificPrefix_example",
      honorificSuffix: "honorificSuffix_example",
      lastName: "lastName_example",
      locale: "locale_example",
      login: "login_example",
      manager: "manager_example",
      managerId: "managerId_example",
      middleName: "middleName_example",
      mobilePhone: "mobilePhone_example",
      nickName: "nickName_example",
      organization: "organization_example",
      postalAddress: "postalAddress_example",
      preferredLanguage: "preferredLanguage_example",
      primaryPhone: "primaryPhone_example",
      profileUrl: "profileUrl_example",
      secondEmail: "secondEmail_example",
      state: "state_example",
      streetAddress: "streetAddress_example",
      timezone: "timezone_example",
      title: "title_example",
      userType: "userType_example",
      zipCode: "zipCode_example",
    },
    type: {
      description: "description_example",
      displayName: "displayName_example",
      id: "id_example",
      name: "name_example",
    },
  },
  // boolean | Executes activation lifecycle operation when creating the user (optional)
  activate: true,
  // boolean | Indicates whether to create a user with a specified authentication provider (optional)
  provider: false,
  // UserNextLogin | With activate=true, set nextLogin to \"changePassword\" to have the password be EXPIRED, so user must change it the next time they log in. (optional)
  nextLogin: "changePassword",
};

apiInstance.createUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateUserRequest**|  |
 **activate** | [**boolean**] | Executes activation lifecycle operation when creating the user | (optional) defaults to undefined
 **provider** | [**boolean**] | Indicates whether to create a user with a specified authentication provider | (optional) defaults to undefined
 **nextLogin** | **UserNextLogin** | With activate&#x3D;true, set nextLogin to \&quot;changePassword\&quot; to have the password be EXPIRED, so user must change it the next time they log in. | (optional) defaults to undefined


### Return type

**User**

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

# **deactivateOrDeleteUser**
> void deactivateOrDeleteUser()

Deletes a user permanently.  This operation can only be performed on users that have a `DEPROVISIONED` status.  **This action cannot be recovered!**

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiDeactivateOrDeleteUserRequest = {
  // string
  userId: "userId_example",
  // boolean (optional)
  sendEmail: false,
};

apiInstance.deactivateOrDeleteUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **sendEmail** | [**boolean**] |  | (optional) defaults to undefined


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
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deactivateUser**
> void deactivateUser()

Deactivates a user. This operation can only be performed on users that do not have a `DEPROVISIONED` status. While the asynchronous operation (triggered by HTTP header `Prefer: respond-async`) is proceeding the user's `transitioningToStatus` property is `DEPROVISIONED`. The user's status is `DEPROVISIONED` when the deactivation process is complete.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiDeactivateUserRequest = {
  // string
  userId: "userId_example",
  // boolean (optional)
  sendEmail: false,
};

apiInstance.deactivateUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **sendEmail** | [**boolean**] |  | (optional) defaults to undefined


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
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **expirePassword**
> User expirePassword()

This operation transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiExpirePasswordRequest = {
  // string
  userId: "userId_example",
};

apiInstance.expirePassword(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined


### Return type

**User**

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

# **expirePasswordAndGetTemporaryPassword**
> TempPassword expirePasswordAndGetTemporaryPassword()

This operation transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login, and also sets the user's password to a temporary password returned in the response.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiExpirePasswordAndGetTemporaryPasswordRequest = {
  // string
  userId: "userId_example",
};

apiInstance.expirePasswordAndGetTemporaryPassword(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined


### Return type

**TempPassword**

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

# **forgotPassword**
> ForgotPasswordResponse forgotPassword()

Initiate forgot password flow. Generates a one-time token (OTT) that can be used to reset a user's password.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiForgotPasswordRequest = {
  // string
  userId: "userId_example",
  // boolean (optional)
  sendEmail: true,
};

apiInstance.forgotPassword(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **sendEmail** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**ForgotPasswordResponse**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Reset url |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **forgotPasswordSetNewPassword**
> UserCredentials forgotPasswordSetNewPassword(userCredentials)

Resets the user's password to the specified password if the provided answer to the recovery question is correct.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiForgotPasswordSetNewPasswordRequest = {
  // string
  userId: "userId_example",
  // UserCredentials
  userCredentials: {
    password: {
      hash: {
        algorithm: "BCRYPT",
        salt: "salt_example",
        saltOrder: "saltOrder_example",
        value: "value_example",
        workFactor: 1,
      },
      hook: {
        type: "type_example",
      },
      value: "value_example",
    },
    provider: {
      name: "name_example",
      type: "ACTIVE_DIRECTORY",
    },
    recovery_question: {
      answer: "answer_example",
      question: "question_example",
    },
  },
  // boolean (optional)
  sendEmail: true,
};

apiInstance.forgotPasswordSetNewPassword(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCredentials** | **UserCredentials**|  |
 **userId** | [**string**] |  | defaults to undefined
 **sendEmail** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**UserCredentials**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Credentials |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getLinkedObjectsForUser**
> Array<any> getLinkedObjectsForUser()

Get linked objects for a user, relationshipName can be a primary or associated relationship name

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiGetLinkedObjectsForUserRequest = {
  // string
  userId: "userId_example",
  // string
  relationshipName: "relationshipName_example",
  // string (optional)
  after: "after_example",
  // number (optional)
  limit: -1,
};

apiInstance.getLinkedObjectsForUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **relationshipName** | [**string**] |  | defaults to undefined
 **after** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to -1


### Return type

**Array<any>**

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

# **getRefreshTokenForUserAndClient**
> OAuth2RefreshToken getRefreshTokenForUserAndClient()

Gets a refresh token issued for the specified User and Client.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiGetRefreshTokenForUserAndClientRequest = {
  // string
  userId: "userId_example",
  // string
  clientId: "clientId_example",
  // string
  tokenId: "tokenId_example",
  // string (optional)
  expand: "expand_example",
  // number (optional)
  limit: 20,
  // string (optional)
  after: "after_example",
};

apiInstance.getRefreshTokenForUserAndClient(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **clientId** | [**string**] |  | defaults to undefined
 **tokenId** | [**string**] |  | defaults to undefined
 **expand** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 20
 **after** | [**string**] |  | (optional) defaults to undefined


### Return type

**OAuth2RefreshToken**

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

# **getUser**
> User getUser()

Fetches a user from your Okta organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiGetUserRequest = {
  // string
  userId: "userId_example",
};

apiInstance.getUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined


### Return type

**User**

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

# **getUserGrant**
> OAuth2ScopeConsentGrant getUserGrant()

Gets a grant for the specified user

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiGetUserGrantRequest = {
  // string
  userId: "userId_example",
  // string
  grantId: "grantId_example",
  // string (optional)
  expand: "expand_example",
};

apiInstance.getUserGrant(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **grantId** | [**string**] |  | defaults to undefined
 **expand** | [**string**] |  | (optional) defaults to undefined


### Return type

**OAuth2ScopeConsentGrant**

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

# **listAppLinks**
> Array<AppLink> listAppLinks()

Fetches appLinks for all direct or indirect (via group membership) assigned applications.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiListAppLinksRequest = {
  // string
  userId: "userId_example",
};

apiInstance.listAppLinks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined


### Return type

**Array<AppLink>**

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

# **listGrantsForUserAndClient**
> Array<OAuth2ScopeConsentGrant> listGrantsForUserAndClient()

Lists all grants for a specified user and client

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiListGrantsForUserAndClientRequest = {
  // string
  userId: "userId_example",
  // string
  clientId: "clientId_example",
  // string (optional)
  expand: "expand_example",
  // string (optional)
  after: "after_example",
  // number (optional)
  limit: 20,
};

apiInstance.listGrantsForUserAndClient(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **clientId** | [**string**] |  | defaults to undefined
 **expand** | [**string**] |  | (optional) defaults to undefined
 **after** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 20


### Return type

**Array<OAuth2ScopeConsentGrant>**

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

# **listRefreshTokensForUserAndClient**
> Array<OAuth2RefreshToken> listRefreshTokensForUserAndClient()

Lists all refresh tokens issued for the specified User and Client.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiListRefreshTokensForUserAndClientRequest = {
  // string
  userId: "userId_example",
  // string
  clientId: "clientId_example",
  // string (optional)
  expand: "expand_example",
  // string (optional)
  after: "after_example",
  // number (optional)
  limit: 20,
};

apiInstance.listRefreshTokensForUserAndClient(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **clientId** | [**string**] |  | defaults to undefined
 **expand** | [**string**] |  | (optional) defaults to undefined
 **after** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 20


### Return type

**Array<OAuth2RefreshToken>**

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

# **listUserClients**
> Array<OAuth2Client> listUserClients()

Lists all client resources for which the specified user has grants or tokens.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiListUserClientsRequest = {
  // string
  userId: "userId_example",
};

apiInstance.listUserClients(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined


### Return type

**Array<OAuth2Client>**

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

# **listUserGrants**
> Array<OAuth2ScopeConsentGrant> listUserGrants()

Lists all grants for the specified user

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiListUserGrantsRequest = {
  // string
  userId: "userId_example",
  // string (optional)
  scopeId: "scopeId_example",
  // string (optional)
  expand: "expand_example",
  // string (optional)
  after: "after_example",
  // number (optional)
  limit: 20,
};

apiInstance.listUserGrants(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **scopeId** | [**string**] |  | (optional) defaults to undefined
 **expand** | [**string**] |  | (optional) defaults to undefined
 **after** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 20


### Return type

**Array<OAuth2ScopeConsentGrant>**

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

# **listUserGroups**
> Array<Group> listUserGroups()

Fetches the groups of which the user is a member.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiListUserGroupsRequest = {
  // string
  userId: "userId_example",
};

apiInstance.listUserGroups(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined


### Return type

**Array<Group>**

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

# **listUserIdentityProviders**
> Array<IdentityProvider> listUserIdentityProviders()

Lists the IdPs associated with the user.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiListUserIdentityProvidersRequest = {
  // string
  userId: "userId_example",
};

apiInstance.listUserIdentityProviders(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined


### Return type

**Array<IdentityProvider>**

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

# **listUsers**
> Array<User> listUsers()

Lists users in your organization with pagination in most cases.  A subset of users can be returned that match a supported filter expression or search criteria.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiListUsersRequest = {
  // string | Finds a user that matches firstName, lastName, and email properties (optional)
  q: "q_example",
  // string | The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the `Link` response header. See [Pagination](/#pagination) for more information. (optional)
  after: "after_example",
  // number | Specifies the number of results returned. Defaults to 10 if `q` is provided. (optional)
  limit: 200,
  // string | Filters users with a supported expression for a subset of properties (optional)
  filter: "filter_example",
  // string | Searches for users with a supported filtering expression for most properties. Okta recommends using this parameter for search for best performance. (optional)
  search: "search_example",
  // string (optional)
  sortBy: "sortBy_example",
  // string (optional)
  sortOrder: "sortOrder_example",
};

apiInstance.listUsers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] | Finds a user that matches firstName, lastName, and email properties | (optional) defaults to undefined
 **after** | [**string**] | The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](/#pagination) for more information. | (optional) defaults to undefined
 **limit** | [**number**] | Specifies the number of results returned. Defaults to 10 if &#x60;q&#x60; is provided. | (optional) defaults to 200
 **filter** | [**string**] | Filters users with a supported expression for a subset of properties | (optional) defaults to undefined
 **search** | [**string**] | Searches for users with a supported filtering expression for most properties. Okta recommends using this parameter for search for best performance. | (optional) defaults to undefined
 **sortBy** | [**string**] |  | (optional) defaults to undefined
 **sortOrder** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<User>**

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

# **partialUpdateUser**
> User partialUpdateUser(user)

Fetch a user by `id`, `login`, or `login shortname` if the short name is unambiguous.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiPartialUpdateUserRequest = {
  // string
  userId: "userId_example",
  // UpdateUserRequest
  user: {
    credentials: {
      password: {
        hash: {
          algorithm: "BCRYPT",
          salt: "salt_example",
          saltOrder: "saltOrder_example",
          value: "value_example",
          workFactor: 1,
        },
        hook: {
          type: "type_example",
        },
        value: "value_example",
      },
      provider: {
        name: "name_example",
        type: "ACTIVE_DIRECTORY",
      },
      recovery_question: {
        answer: "answer_example",
        question: "question_example",
      },
    },
    profile: {
      city: "city_example",
      costCenter: "costCenter_example",
      countryCode: "countryCode_example",
      department: "department_example",
      displayName: "displayName_example",
      division: "division_example",
      email: "email_example",
      employeeNumber: "employeeNumber_example",
      firstName: "firstName_example",
      honorificPrefix: "honorificPrefix_example",
      honorificSuffix: "honorificSuffix_example",
      lastName: "lastName_example",
      locale: "locale_example",
      login: "login_example",
      manager: "manager_example",
      managerId: "managerId_example",
      middleName: "middleName_example",
      mobilePhone: "mobilePhone_example",
      nickName: "nickName_example",
      organization: "organization_example",
      postalAddress: "postalAddress_example",
      preferredLanguage: "preferredLanguage_example",
      primaryPhone: "primaryPhone_example",
      profileUrl: "profileUrl_example",
      secondEmail: "secondEmail_example",
      state: "state_example",
      streetAddress: "streetAddress_example",
      timezone: "timezone_example",
      title: "title_example",
      userType: "userType_example",
      zipCode: "zipCode_example",
    },
  },
  // boolean (optional)
  strict: true,
};

apiInstance.partialUpdateUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **UpdateUserRequest**|  |
 **userId** | [**string**] |  | defaults to undefined
 **strict** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**User**

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

# **reactivateUser**
> UserActivationToken reactivateUser()

Reactivates a user.  This operation can only be performed on users with a `PROVISIONED` status.  This operation restarts the activation workflow if for some reason the user activation was not completed when using the activationToken from [Activate User](#activate-user).

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiReactivateUserRequest = {
  // string
  userId: "userId_example",
  // boolean | Sends an activation email to the user if true (optional)
  sendEmail: false,
};

apiInstance.reactivateUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **sendEmail** | [**boolean**] | Sends an activation email to the user if true | (optional) defaults to undefined


### Return type

**UserActivationToken**

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

# **removeLinkedObjectForUser**
> void removeLinkedObjectForUser()

Delete linked objects for a user, relationshipName can be ONLY a primary relationship name

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiRemoveLinkedObjectForUserRequest = {
  // string
  userId: "userId_example",
  // string
  relationshipName: "relationshipName_example",
};

apiInstance.removeLinkedObjectForUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **relationshipName** | [**string**] |  | defaults to undefined


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

# **resetFactors**
> void resetFactors()

This operation resets all factors for the specified user. All MFA factor enrollments returned to the unenrolled state. The user's status remains ACTIVE. This link is present only if the user is currently enrolled in one or more MFA factors.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiResetFactorsRequest = {
  // string
  userId: "userId_example",
};

apiInstance.resetFactors(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined


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
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **resetPassword**
> ResetPasswordToken resetPassword()

Generates a one-time token (OTT) that can be used to reset a user's password.  The OTT link can be automatically emailed to the user or returned to the API caller and distributed using a custom flow.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiResetPasswordRequest = {
  // string
  userId: "userId_example",
  // boolean
  sendEmail: true,
};

apiInstance.resetPassword(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **sendEmail** | [**boolean**] |  | defaults to undefined


### Return type

**ResetPasswordToken**

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

# **revokeGrantsForUserAndClient**
> void revokeGrantsForUserAndClient()

Revokes all grants for the specified user and client

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiRevokeGrantsForUserAndClientRequest = {
  // string
  userId: "userId_example",
  // string
  clientId: "clientId_example",
};

apiInstance.revokeGrantsForUserAndClient(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **clientId** | [**string**] |  | defaults to undefined


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

# **revokeTokenForUserAndClient**
> void revokeTokenForUserAndClient()

Revokes the specified refresh token.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiRevokeTokenForUserAndClientRequest = {
  // string
  userId: "userId_example",
  // string
  clientId: "clientId_example",
  // string
  tokenId: "tokenId_example",
};

apiInstance.revokeTokenForUserAndClient(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **clientId** | [**string**] |  | defaults to undefined
 **tokenId** | [**string**] |  | defaults to undefined


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

# **revokeTokensForUserAndClient**
> void revokeTokensForUserAndClient()

Revokes all refresh tokens issued for the specified User and Client.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiRevokeTokensForUserAndClientRequest = {
  // string
  userId: "userId_example",
  // string
  clientId: "clientId_example",
};

apiInstance.revokeTokensForUserAndClient(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **clientId** | [**string**] |  | defaults to undefined


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

# **revokeUserGrant**
> void revokeUserGrant()

Revokes one grant for a specified user

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiRevokeUserGrantRequest = {
  // string
  userId: "userId_example",
  // string
  grantId: "grantId_example",
};

apiInstance.revokeUserGrant(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **grantId** | [**string**] |  | defaults to undefined


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

# **revokeUserGrants**
> void revokeUserGrants()

Revokes all grants for a specified user

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiRevokeUserGrantsRequest = {
  // string
  userId: "userId_example",
};

apiInstance.revokeUserGrants(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined


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

# **setLinkedObjectForUser**
> void setLinkedObjectForUser()

Sets a linked object for two users.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiSetLinkedObjectForUserRequest = {
  // string
  associatedUserId: "associatedUserId_example",
  // string
  primaryRelationshipName: "primaryRelationshipName_example",
  // string
  primaryUserId: "primaryUserId_example",
};

apiInstance.setLinkedObjectForUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **associatedUserId** | [**string**] |  | defaults to undefined
 **primaryRelationshipName** | [**string**] |  | defaults to undefined
 **primaryUserId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **suspendUser**
> void suspendUser()

Suspends a user.  This operation can only be performed on users with an `ACTIVE` status.  The user will have a status of `SUSPENDED` when the process is complete.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiSuspendUserRequest = {
  // string
  userId: "userId_example",
};

apiInstance.suspendUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined


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
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **unlockUser**
> void unlockUser()

Unlocks a user with a `LOCKED_OUT` status and returns them to `ACTIVE` status.  Users will be able to login with their current password.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiUnlockUserRequest = {
  // string
  userId: "userId_example",
};

apiInstance.unlockUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined


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
**200** | Success |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **unsuspendUser**
> void unsuspendUser()

Unsuspends a user and returns them to the `ACTIVE` state.  This operation can only be performed on users that have a `SUSPENDED` status.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiUnsuspendUserRequest = {
  // string
  userId: "userId_example",
};

apiInstance.unsuspendUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined


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
**200** | Success |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateUser**
> User updateUser(user)

Update a user's profile and/or credentials using strict-update semantics.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.UserApi(configuration);

let body:okta.UserApiUpdateUserRequest = {
  // string
  userId: "userId_example",
  // UpdateUserRequest
  user: {
    credentials: {
      password: {
        hash: {
          algorithm: "BCRYPT",
          salt: "salt_example",
          saltOrder: "saltOrder_example",
          value: "value_example",
          workFactor: 1,
        },
        hook: {
          type: "type_example",
        },
        value: "value_example",
      },
      provider: {
        name: "name_example",
        type: "ACTIVE_DIRECTORY",
      },
      recovery_question: {
        answer: "answer_example",
        question: "question_example",
      },
    },
    profile: {
      city: "city_example",
      costCenter: "costCenter_example",
      countryCode: "countryCode_example",
      department: "department_example",
      displayName: "displayName_example",
      division: "division_example",
      email: "email_example",
      employeeNumber: "employeeNumber_example",
      firstName: "firstName_example",
      honorificPrefix: "honorificPrefix_example",
      honorificSuffix: "honorificSuffix_example",
      lastName: "lastName_example",
      locale: "locale_example",
      login: "login_example",
      manager: "manager_example",
      managerId: "managerId_example",
      middleName: "middleName_example",
      mobilePhone: "mobilePhone_example",
      nickName: "nickName_example",
      organization: "organization_example",
      postalAddress: "postalAddress_example",
      preferredLanguage: "preferredLanguage_example",
      primaryPhone: "primaryPhone_example",
      profileUrl: "profileUrl_example",
      secondEmail: "secondEmail_example",
      state: "state_example",
      streetAddress: "streetAddress_example",
      timezone: "timezone_example",
      title: "title_example",
      userType: "userType_example",
      zipCode: "zipCode_example",
    },
  },
  // boolean (optional)
  strict: true,
};

apiInstance.updateUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **UpdateUserRequest**|  |
 **userId** | [**string**] |  | defaults to undefined
 **strict** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**User**

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


