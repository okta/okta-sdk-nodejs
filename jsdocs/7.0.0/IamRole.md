# okta.IamRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **Date** | Timestamp when the role was created | [optional] [readonly] [default to undefined]
**description** | **string** | Description of the role | [default to undefined]
**id** | **string** | Unique key for the role | [optional] [readonly] [default to undefined]
**label** | **string** | Unique label for the role | [default to undefined]
**lastUpdated** | **Date** | Timestamp when the role was last updated | [optional] [readonly] [default to undefined]
**permissions** | [**Array&lt;RolePermissionType&gt;**](RolePermissionType.md) | Array of permissions that the role will grant. See [Permission Types](https://developer.okta.com/docs/concepts/role-assignment/#permission-types). | [default to undefined]
**_links** | [**IamRoleLinks**](IamRoleLinks.md) |  | [optional] [default to undefined]

