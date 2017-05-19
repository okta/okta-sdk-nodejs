# Contributing

Some of this SDK is auto-generated from our API Spec, defined as an Open API JSON Schema file.  Files that are auto-generated have a banner at top which indicate this.  As such, modifying the SDK may require you to edit one of the templates in the `templates/` directory.

To re-build the auto generated files, use this command in a cloned copy of this repor (after insuring the dev dependencies have been installed):

```sh
npm run build
```

If there are modifications to the auto-generated files, please include those changes in your pull request.

The JSON schema is brought in through the `@okta/openapi` dependency, so please ensure that this module has been installed at its latest version.
