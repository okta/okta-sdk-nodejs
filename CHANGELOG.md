# Okta Node SDK Changelog

## 2.0.0
- Drop support for Node 4
- New behavior for `expirationPoll` option on MemoryStore. The expiration poll feature is now opt-in. By default there will be *no* memory scan to proactively remove key values. Passing a number or null for `expirationPoll` will behave as before. Passing a value of `true` will use a default of 15000ms.
- The [DefaultRequestExecutor] is now used by default, if no request executor is provided.

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
