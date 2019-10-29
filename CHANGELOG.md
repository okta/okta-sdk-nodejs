# Okta Node SDK Changelog

## 3.1.0

- Updates the Okta Openapi to 1.11
- Adds functionality for Okta Sign In Policy
- Adds functionality for Password Policy
- Adds U2F Factor
- Provides options array to many models

## 3.0.0

- Dropping node.js version support for anything less than 8.15

## 2.1.1

- [#109](https://github.com/okta/okta-sdk-nodejs/pull/109) Moves openapi to devdeps; fixes test lint
- [#108](https://github.com/okta/okta-sdk-nodejs/pull/108) Fixes app creation test failures
- [#102](https://github.com/okta/okta-sdk-nodejs/pull/102) Fixes for Application hyperlinks in jsdocs
- [#100](https://github.com/okta/okta-sdk-nodejs/pull/100) Some jsdocs fixes
- [#112](https://github.com/okta/okta-sdk-nodejs/pull/112) Upgrade lodash to 4.17.14

## 2.0.0
- Drop support for Node 4
- New behavior for `expirationPoll` option on MemoryStore. The expiration poll feature is now opt-in. By default there will be *no* memory scan to proactively remove key values. Passing a number or null for `expirationPoll` will behave as before. Passing a value of `true` will use a default of 15000ms.
- The [DefaultRequestExecutor] is now used by default, if no request executor is provided.
- Enable async iteration on any Collection (#93)
- Set node support to 6.9.0 (#95)
- Enable cache expiration polling only if a truthy value is specified (#89)
- Fixes failing client create test (#80)

## 1.2.0

- Adds a default request executor that will retry requests when rate limit exceptions have occurred.  Please see the [README](README.md) for full documentation.  This executor is opt-in for now, but will be used by default in the 2.0 release.

## 1.1.0

- Add an HTTP cache for simple resources fetched by GET.
- Add support for the System Log API, including a subscription interface on collections.
- Fix: client.listUsers().each() executes once for query that returns an empty list (#12).

## ~~1.0.0~~

* Where's 1.0.0?? Due to a nuance of our CD system, this one was skipped :)

## 0.4.0

- Add support for Application and Session APIs

## 0.3.0

- Internal update for package.json

## 0.2.0

- Add support for Factors API

## 0.1.0

- First release with support for User and Group APIs

[DefaultRequestExecutor]: src/default-request-executor.js
