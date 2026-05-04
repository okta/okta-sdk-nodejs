# Okta Node.js SDK — Migration Guide

This document covers upgrading between major and minor versions of `@okta/okta-sdk-nodejs`.

---

## From 8.0 to 8.1

Version 8.1.0 contains no breaking API changes. The following TypeScript type corrections may require minor updates in TypeScript codebases:

### 1. `IdentityProviderProtocol` discriminant `type` is now required

The `type` property on the five `IdentityProviderProtocol` subtypes (`ProtocolOidc`, `ProtocolSaml`, `ProtocolMtls`, `ProtocolOAuth`, `ProtocolIdVerification`) is now correctly marked as required (was incorrectly optional due to a code-generator bug). This matches the Okta API spec.

If your TypeScript code constructs a Protocol object without an explicit `type` field, add the appropriate discriminant literal:

```typescript
// Before (compiled without error in 8.0 even though 'type' was required by the API)
const protocol: ProtocolOidc = { /* no type field */ };

// After (8.1) — add the required discriminant
const protocol: ProtocolOidc = { type: 'OIDC', /* ... */ };
```

### 2. `ProfileMapping.properties` and `ProfileMappingRequest.properties` type corrected

The TypeScript type of the `properties` field has changed from `ProfileMappingProperty` (single object, incorrect) to `{ [key: string]: ProfileMappingProperty }` (map, correct). This was a bug fix — the old type caused all custom attribute keys to be silently dropped when serializing.

```typescript
// Before (8.0) — incorrect type caused silent data loss at runtime
const request: ProfileMappingRequest = {
  properties: { expression: 'user.login', pushStatus: 'PUSH' } as ProfileMappingProperty
};

// After (8.1) — correct map type, custom attributes are preserved
const request: ProfileMappingRequest = {
  properties: {
    login: { expression: 'user.login', pushStatus: 'PUSH' },
    email: { expression: 'user.email', pushStatus: 'PUSH' }
  }
};
```

---

## From 7.x to 8.0

### Breaking Changes

Version 8.0 includes several breaking changes due to updates in the Okta OpenAPI specification:

#### 1. Email Server API — Property Renamed

The `EmailTestAddresses` model has been updated with renamed properties:

**Old (v7.x):**
```javascript
await client.emailServerApi.testEmailServer({
  emailServerId: emailServer.id,
  emailTestAddresses: {
    _from: 'test@example.com',
    to: 'recipient@example.com'
  }
});
```

**New (v8.0):**
```javascript
await client.emailServerApi.testEmailServer({
  emailServerId: emailServer.id,
  emailTestAddresses: {
    fromAddress: 'test@example.com',  // Changed from '_from'
    to: 'recipient@example.com'
  }
});
```

#### 2. Custom Role API — Model Renamed

The `CustomRole` model has been renamed to `IamRole`:

**Old (v7.x):**
```javascript
import { CustomRole } from '@okta/okta-sdk-nodejs';

let customRole: CustomRole;
```

**New (v8.0):**
```javascript
import { IamRole } from '@okta/okta-sdk-nodejs';

let customRole: IamRole;  // Changed from CustomRole
```

#### 3. Role Assignment API — Model Renamed

The `AssignRoleRequest` model has been renamed to `StandardRoleAssignmentSchema`:

**Old (v7.x):**
```javascript
import { AssignRoleRequest } from '@okta/okta-sdk-nodejs';

const roleRequest: AssignRoleRequest = {
  type: 'USER_ADMIN'
};

await client.userApi.assignRoleToUser({
  userId: user.id,
  assignRoleRequest: roleRequest
});
```

**New (v8.0):**
```javascript
import { StandardRoleAssignmentSchema } from '@okta/okta-sdk-nodejs';

const roleRequest: StandardRoleAssignmentSchema = {  // Changed from AssignRoleRequest
  type: 'USER_ADMIN'
};

await client.userApi.assignRoleToUser({
  userId: user.id,
  assignRoleRequest: roleRequest
});
```

### New APIs Added in 8.0

- **AgentConnectionsApi** — Manage agent connections
- **AgentPotentialConnectionsApi** — Discover potential agent connections
- **AgentPublicKeyApi** — Manage agent public keys
- **AgentRegistrationApi** — Handle agent registration
- **ApplicationCrossAppAccessConnectionsApi** — Manage cross-app access connections
- **ApplicationInterclientTrustMappingsApi** — Configure interclient trust mappings
- **ApplicationSSOPublicKeysApi** — Manage application SSO public keys
- **AssociatedDomainCustomizationsApi** — Customize associated domains
- **CustomTelephonyProviderApi** — Configure custom telephony providers
- **GroupPushMappingApi** — Manage group push mappings
- **OAuth2ResourceServerCredentialsKeysApi** — Manage OAuth2 resource server credentials
- **OktaManagedUserAccountApi** — Manage Okta managed user accounts
- **OperationsIntegrationApi** — Handle operations integrations
- **UserAuthenticatorEnrollmentsApi** — Manage user authenticator enrollments

### API Enhancements in 8.0

- **ApplicationApi** — Enhanced with additional methods for improved application management
- **AuthenticatorApi** — Expanded authenticator management capabilities
- **IdentitySourceApi** — Significantly enhanced with extensive new methods for identity source operations
- **YourOinIntegrationsApi** — Enhanced integration management features

---

## From 6.x to 7.0

### Breaking changes

- Methods are invoked on scoped clients
- Method params are passed as a single object
- Models no longer have CRUD methods
- Methods which return `Collection` become async
- Enums are replaced with union types
- Model properties are optional

```diff
- await client.getUser('ausmvdt5xg8wRVI1d0g3')
+ await client.userApi.getUser({ userId: 'ausmvdt5xg8wRVI1d0g3' })
```

```diff
- await user.deactivate()
+ await client.userApi.deactivateUser({ userId: user.id })
```

---

## From 5.x to 6.0

### Breaking changes

Enum types from the spec are accounted for: respective JS models are converted to enum-like modules.

Following Client method signatures have changed:
- `listPolicies` returns `Promise<Policy>`
- `activateNetworkZone` returns `Promise<NetworkZone>`
- `deactivateNetworkZone` returns `Promise<NetworkZone>`
- `listGroups` no longer accepts `filter` parameter through `queryParameters`

---

## From 4.x to 5.0

The version 5.0 of this SDK dropped support for Node 10, which is EOL (End-of-Life) since 2021-04-30. Current supported minimal Node version is 12.0.0.

### Breaking changes

Following Client method signatures have changed:
- `createAuthorizationServerPolicy`: added `authorizationServerPolicy: AuthorizationServerPolicyOptions` parameter
- `listAuthorizationServerPolicies`: returns `Collection<AuthorizationServerPolicy>`
- `getAuthorizationServerPolicy`: returns `Promise<AuthorizationServerPolicy>`
- `updateAuthorizationServerPolicy`: second parameter type changed to `AuthorizationServerPolicyOptions`, returns `Promise<AuthorizationServerPolicy>`
- `listPolicies` returns `Promise<AuthorizationServerPolicy>`

Following models' method signatures have changed:
- `AuthorizationServer`

Change details are listed in [CHANGELOG.md](CHANGELOG.md#500).

All required method parameters in Client are now checked at runtime in JS code.

---

## From 3.x to 4.0

The version 4.0 of this SDK dropped support for Node 8, which is EOL (End-of-Life) since 2019-12-31. Current supported minimum Node version is 10.0.0.

This version 4.0 release also updated APIs to the latest `@okta/openapi` (v2.0.0) which includes added, changed and deprecated factories/models/client methods. Change details are listed in [CHANGELOG.md](CHANGELOG.md#400). For each change item:

- `Add` — newly added factories/models/client methods.
- `Change` (**breaking changes**) — renamed factories/models/client methods.
- `Remove` (**breaking changes**) — deprecated factories/models/client methods.

### Main breaking changes

- Renamed `Factor` related factories/models/client methods to `UserFactor`
- Renamed `client.sessionApi.endAllUserSessions` to `client.sessionApi.clearUserSessions`
- Model and Client methods change for `User` related operations
- Model and Client methods change for `Rule` related operations
