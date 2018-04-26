#!/bin/bash -vx

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
npm run test:unit

# Don't run integration tests if node version < 8
# Due to async/await being used in ITs, we can't run ITs on node version < 8
echo "Checking node version..."
node --version | grep v8
if [[ $? != 0 ]] ; then
    exit 0
fi

npm run test:integration
