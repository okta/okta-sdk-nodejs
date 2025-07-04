# Contributing

### Code Generation

Some of this SDK is auto-generated from our API Spec, defined as an Open API Schema file.  Files that are auto-generated have a banner at the top which indicate this.  As such, modifying the SDK may require you to edit one of the templates in the `templates/` directory.

Please put the latest version of Okta Open API spec into `spec/management.yaml` and `spec/oauth.yaml`

First run

```sh
yarn build:validateGenerated
```

This util will show you breaking and possibly breaking changes like API class / method renames, parameter renames, changes to return type.

It will show you instructions on keeping changes non-breaking like editing files in `scripts/mappings` to keep old names for backward compatibility.

If you sure you want to use breaking chnages please keep objects in `scripts/mappings/*.cjs` empty before building.

To re-build the auto generated files, use this command in a cloned copy of this repo (after ensuring the dev dependencies have been installed):

```sh
yarn build
```

If there are modifications to the auto-generated files, please include those changes in your pull request.

To see the list of new APIs please run

```sh
yarn build:validateGenerated
```

If there are new APIs added to the spec and missing in current client, please add it to `src/client.js` and `src/types/client.d.ts` and add corresponding integration tests in `test/it`.



### Running The Tests

By default the test harness will execute an integration test against a live Okta Org.  As such the following environment variables must be required for the test process to use:

```bash
OKTA_CLIENT_ORGURL=https://{yourOktaDomain}.com/
OKTA_CLIENT_TOKEN=xxxx_api_token
```

Then run the tests:

```bash
yarn test
```
