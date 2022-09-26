# okta.GroupApi

All URIs are relative to *https://subdomain.okta.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateGroupRule**](GroupApi.md#activateGroupRule) | **POST** /api/v1/groups/rules/{ruleId}/lifecycle/activate | Activate a Group Rule
[**addGroupOwner**](GroupApi.md#addGroupOwner) | **POST** /api/v1/groups/{groupId}/owners | Assign a Group Owner
[**addUserToGroup**](GroupApi.md#addUserToGroup) | **PUT** /api/v1/groups/{groupId}/users/{userId} | Assign a User
[**createGroup**](GroupApi.md#createGroup) | **POST** /api/v1/groups | Create a Group
[**createGroupRule**](GroupApi.md#createGroupRule) | **POST** /api/v1/groups/rules | Create a Group Rule
[**deactivateGroupRule**](GroupApi.md#deactivateGroupRule) | **POST** /api/v1/groups/rules/{ruleId}/lifecycle/deactivate | Deactivate a Group Rule
[**deleteGroup**](GroupApi.md#deleteGroup) | **DELETE** /api/v1/groups/{groupId} | Delete a Group
[**deleteGroupOwner**](GroupApi.md#deleteGroupOwner) | **DELETE** /api/v1/groups/{groupId}/owners/{ownerId} | Delete a Group Owner
[**deleteGroupRule**](GroupApi.md#deleteGroupRule) | **DELETE** /api/v1/groups/rules/{ruleId} | Delete a group Rule
[**getGroup**](GroupApi.md#getGroup) | **GET** /api/v1/groups/{groupId} | List all Group Rules
[**getGroupOwners**](GroupApi.md#getGroupOwners) | **GET** /api/v1/groups/{groupId}/owners | List all Owners
[**getGroupRule**](GroupApi.md#getGroupRule) | **GET** /api/v1/groups/rules/{ruleId} | Retrieve a Group Rule
[**listAssignedApplicationsForGroup**](GroupApi.md#listAssignedApplicationsForGroup) | **GET** /api/v1/groups/{groupId}/apps | List all Assigned Applications
[**listGroupRules**](GroupApi.md#listGroupRules) | **GET** /api/v1/groups/rules | List all Group Rules
[**listGroupUsers**](GroupApi.md#listGroupUsers) | **GET** /api/v1/groups/{groupId}/users | List all Member Users
[**listGroups**](GroupApi.md#listGroups) | **GET** /api/v1/groups | List all Groups
[**removeUserFromGroup**](GroupApi.md#removeUserFromGroup) | **DELETE** /api/v1/groups/{groupId}/users/{userId} | Unassign a User
[**updateGroup**](GroupApi.md#updateGroup) | **PUT** /api/v1/groups/{groupId} | Replace a Group
[**updateGroupRule**](GroupApi.md#updateGroupRule) | **PUT** /api/v1/groups/rules/{ruleId} | Replace a Group Rule


# **activateGroupRule**
> void activateGroupRule()

Activates a specific group rule by id from your organization

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.GroupApi(configuration);

let body:okta.GroupApiActivateGroupRuleRequest = {
  // string
  ruleId: "ruleId_example",
};

apiInstance.activateGroupRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleId** | [**string**] |  | defaults to undefined


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

# **addGroupOwner**
> GroupOwner addGroupOwner(GroupOwner)

Assigns a group owner for a specific group.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.GroupApi(configuration);

let body:okta.GroupApiAddGroupOwnerRequest = {
  // string
  groupId: "groupId_example",
  // GroupOwner
  GroupOwner: {
    originId: "originId_example",
    originType: "APPLICATION",
    resolved: true,
    type: "GROUP",
  },
};

apiInstance.addGroupOwner(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **GroupOwner** | **GroupOwner**|  |
 **groupId** | [**string**] |  | defaults to undefined


### Return type

**GroupOwner**

### Authorization

[API_Token](README.md#API_Token), [OAuth_2.0](README.md#OAuth_2.0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addUserToGroup**
> void addUserToGroup()

Adds a user to a group with 'OKTA_GROUP' type.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.GroupApi(configuration);

let body:okta.GroupApiAddUserToGroupRequest = {
  // string
  groupId: "groupId_example",
  // string
  userId: "userId_example",
};

apiInstance.addUserToGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
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

# **createGroup**
> Group createGroup(group)

Adds a new group with `OKTA_GROUP` type to your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.GroupApi(configuration);

let body:okta.GroupApiCreateGroupRequest = {
  // Group
  group: {
    profile: {
      description: "description_example",
      name: "name_example",
    },
    type: "APP_GROUP",
  },
};

apiInstance.createGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **Group**|  |


### Return type

**Group**

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

# **createGroupRule**
> GroupRule createGroupRule(groupRule)

Creates a group rule to dynamically add users to the specified group if they match the condition

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.GroupApi(configuration);

let body:okta.GroupApiCreateGroupRuleRequest = {
  // GroupRule
  groupRule: {
    actions: {
      assignUserToGroups: {
        groupIds: [
          "groupIds_example",
        ],
      },
    },
    conditions: {
      expression: {
        type: "type_example",
        value: "value_example",
      },
      people: {
        groups: {
          exclude: [
            "exclude_example",
          ],
          include: [
            "include_example",
          ],
        },
        users: {
          exclude: [
            "exclude_example",
          ],
          include: [
            "include_example",
          ],
        },
      },
    },
    name: "name_example",
    status: "ACTIVE",
    type: "type_example",
  },
};

apiInstance.createGroupRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupRule** | **GroupRule**|  |


### Return type

**GroupRule**

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

# **deactivateGroupRule**
> void deactivateGroupRule()

Deactivates a specific group rule by id from your organization

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.GroupApi(configuration);

let body:okta.GroupApiDeactivateGroupRuleRequest = {
  // string
  ruleId: "ruleId_example",
};

apiInstance.deactivateGroupRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleId** | [**string**] |  | defaults to undefined


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

# **deleteGroup**
> void deleteGroup()

Removes a group with `OKTA_GROUP` type from your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.GroupApi(configuration);

let body:okta.GroupApiDeleteGroupRequest = {
  // string
  groupId: "groupId_example",
};

apiInstance.deleteGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined


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

# **deleteGroupOwner**
> void deleteGroupOwner()

Delete a group owner from a specific group.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.GroupApi(configuration);

let body:okta.GroupApiDeleteGroupOwnerRequest = {
  // string
  groupId: "groupId_example",
  // string
  ownerId: "ownerId_example",
};

apiInstance.deleteGroupOwner(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
 **ownerId** | [**string**] |  | defaults to undefined


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

# **deleteGroupRule**
> void deleteGroupRule()

Removes a specific group rule by id from your organization

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.GroupApi(configuration);

let body:okta.GroupApiDeleteGroupRuleRequest = {
  // string
  ruleId: "ruleId_example",
  // boolean | Indicates whether to keep or remove users from groups assigned by this rule. (optional)
  removeUsers: true,
};

apiInstance.deleteGroupRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleId** | [**string**] |  | defaults to undefined
 **removeUsers** | [**boolean**] | Indicates whether to keep or remove users from groups assigned by this rule. | (optional) defaults to undefined


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
**202** | Accepted |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getGroup**
> Group getGroup()

Fetches a group from your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.GroupApi(configuration);

let body:okta.GroupApiGetGroupRequest = {
  // string
  groupId: "groupId_example",
};

apiInstance.getGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined


### Return type

**Group**

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

# **getGroupOwners**
> Array<GroupOwner> getGroupOwners()

List all owners for a specific group.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.GroupApi(configuration);

let body:okta.GroupApiGetGroupOwnersRequest = {
  // string
  groupId: "groupId_example",
  // string | SCIM Filter expression for group owners. Allows to filter owners by type. (optional)
  filter: "filter_example",
  // string | Specifies the pagination cursor for the next page of owners (optional)
  after: "after_example",
  // number | Specifies the number of owner results in a page (optional)
  limit: 1000,
};

apiInstance.getGroupOwners(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
 **filter** | [**string**] | SCIM Filter expression for group owners. Allows to filter owners by type. | (optional) defaults to undefined
 **after** | [**string**] | Specifies the pagination cursor for the next page of owners | (optional) defaults to undefined
 **limit** | [**number**] | Specifies the number of owner results in a page | (optional) defaults to 1000


### Return type

**Array<GroupOwner>**

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

# **getGroupRule**
> GroupRule getGroupRule()

Fetches a specific group rule by id from your organization

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.GroupApi(configuration);

let body:okta.GroupApiGetGroupRuleRequest = {
  // string
  ruleId: "ruleId_example",
  // string (optional)
  expand: "expand_example",
};

apiInstance.getGroupRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleId** | [**string**] |  | defaults to undefined
 **expand** | [**string**] |  | (optional) defaults to undefined


### Return type

**GroupRule**

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

# **listAssignedApplicationsForGroup**
> Array<Application> listAssignedApplicationsForGroup()

Enumerates all applications that are assigned to a group.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.GroupApi(configuration);

let body:okta.GroupApiListAssignedApplicationsForGroupRequest = {
  // string
  groupId: "groupId_example",
  // string | Specifies the pagination cursor for the next page of apps (optional)
  after: "after_example",
  // number | Specifies the number of app results for a page (optional)
  limit: 20,
};

apiInstance.listAssignedApplicationsForGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
 **after** | [**string**] | Specifies the pagination cursor for the next page of apps | (optional) defaults to undefined
 **limit** | [**number**] | Specifies the number of app results for a page | (optional) defaults to 20


### Return type

**Array<Application>**

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

# **listGroupRules**
> Array<GroupRule> listGroupRules()

Lists all group rules for your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.GroupApi(configuration);

let body:okta.GroupApiListGroupRulesRequest = {
  // number | Specifies the number of rule results in a page (optional)
  limit: 50,
  // string | Specifies the pagination cursor for the next page of rules (optional)
  after: "after_example",
  // string | Specifies the keyword to search fules for (optional)
  search: "search_example",
  // string | If specified as `groupIdToGroupNameMap`, then show group names (optional)
  expand: "expand_example",
};

apiInstance.listGroupRules(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Specifies the number of rule results in a page | (optional) defaults to 50
 **after** | [**string**] | Specifies the pagination cursor for the next page of rules | (optional) defaults to undefined
 **search** | [**string**] | Specifies the keyword to search fules for | (optional) defaults to undefined
 **expand** | [**string**] | If specified as &#x60;groupIdToGroupNameMap&#x60;, then show group names | (optional) defaults to undefined


### Return type

**Array<GroupRule>**

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

# **listGroupUsers**
> Array<User> listGroupUsers()

Enumerates all users that are a member of a group.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.GroupApi(configuration);

let body:okta.GroupApiListGroupUsersRequest = {
  // string
  groupId: "groupId_example",
  // string | Specifies the pagination cursor for the next page of users (optional)
  after: "after_example",
  // number | Specifies the number of user results in a page (optional)
  limit: 1000,
};

apiInstance.listGroupUsers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
 **after** | [**string**] | Specifies the pagination cursor for the next page of users | (optional) defaults to undefined
 **limit** | [**number**] | Specifies the number of user results in a page | (optional) defaults to 1000


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
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listGroups**
> Array<Group> listGroups()

Enumerates groups in your organization with pagination. A subset of groups can be returned that match a supported filter expression or query.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.GroupApi(configuration);

let body:okta.GroupApiListGroupsRequest = {
  // string | Searches the name property of groups for matching value (optional)
  q: "q_example",
  // string | Filter expression for groups (optional)
  filter: "filter_example",
  // string | Specifies the pagination cursor for the next page of groups (optional)
  after: "after_example",
  // number | Specifies the number of group results in a page (optional)
  limit: 10000,
  // string | If specified, it causes additional metadata to be included in the response. (optional)
  expand: "expand_example",
  // string | Searches for groups with a supported filtering expression for all attributes except for _embedded, _links, and objectClass (optional)
  search: "search_example",
};

apiInstance.listGroups(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] | Searches the name property of groups for matching value | (optional) defaults to undefined
 **filter** | [**string**] | Filter expression for groups | (optional) defaults to undefined
 **after** | [**string**] | Specifies the pagination cursor for the next page of groups | (optional) defaults to undefined
 **limit** | [**number**] | Specifies the number of group results in a page | (optional) defaults to 10000
 **expand** | [**string**] | If specified, it causes additional metadata to be included in the response. | (optional) defaults to undefined
 **search** | [**string**] | Searches for groups with a supported filtering expression for all attributes except for _embedded, _links, and objectClass | (optional) defaults to undefined


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
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeUserFromGroup**
> void removeUserFromGroup()

Removes a user from a group with 'OKTA_GROUP' type.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.GroupApi(configuration);

let body:okta.GroupApiRemoveUserFromGroupRequest = {
  // string
  groupId: "groupId_example",
  // string
  userId: "userId_example",
};

apiInstance.removeUserFromGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
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

# **updateGroup**
> Group updateGroup(group)

Updates the profile for a group with `OKTA_GROUP` type from your organization.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.GroupApi(configuration);

let body:okta.GroupApiUpdateGroupRequest = {
  // string
  groupId: "groupId_example",
  // Group
  group: {
    profile: {
      description: "description_example",
      name: "name_example",
    },
    type: "APP_GROUP",
  },
};

apiInstance.updateGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **Group**|  |
 **groupId** | [**string**] |  | defaults to undefined


### Return type

**Group**

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

# **updateGroupRule**
> GroupRule updateGroupRule(groupRule)

Updates a group rule. Only `INACTIVE` rules can be updated.

### Example


```typescript
import { okta } from '@okta/okta-sdk-nodejs';
import * as fs from 'fs';

const configuration = okta.createConfiguration();
const apiInstance = new okta.GroupApi(configuration);

let body:okta.GroupApiUpdateGroupRuleRequest = {
  // string
  ruleId: "ruleId_example",
  // GroupRule
  groupRule: {
    actions: {
      assignUserToGroups: {
        groupIds: [
          "groupIds_example",
        ],
      },
    },
    conditions: {
      expression: {
        type: "type_example",
        value: "value_example",
      },
      people: {
        groups: {
          exclude: [
            "exclude_example",
          ],
          include: [
            "include_example",
          ],
        },
        users: {
          exclude: [
            "exclude_example",
          ],
          include: [
            "include_example",
          ],
        },
      },
    },
    name: "name_example",
    status: "ACTIVE",
    type: "type_example",
  },
};

apiInstance.updateGroupRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupRule** | **GroupRule**|  |
 **ruleId** | [**string**] |  | defaults to undefined


### Return type

**GroupRule**

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


