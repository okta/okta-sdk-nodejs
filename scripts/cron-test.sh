#!/bin/bash -vx

echo "Checking node version..."
node --version | grep v8
if [[ $? != 0 ]] ; then
    # Don't run the tests if node version < 8
    exit 0
fi

# Revert the cache-min setting, since the internal cache does not apply to
# these repos (and causes problems in lookups)
npm config set cache-min 10

# Use newer, faster npm
npm install -g npm@4.0.2

if ! npm install; then
  echo "npm install failed! Exiting..."
  exit ${FAILED_SETUP}
fi

npm install
npm test
