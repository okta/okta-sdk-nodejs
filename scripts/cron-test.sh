#!/bin/bash -vx

# Due to async/await being used in tests, we can't run node version < 8
echo "Checking node version..."
node --version | grep v8
if [[ $? != 0 ]] ; then
    exit 0
fi

# Revert the cache-min setting, since the internal cache does not apply to
# these repos (and causes problems in lookups)
npm config set cache-min 10
npm install -g npm@4.0.2

if ! npm install; then
  echo "npm install failed! Exiting..."
  exit ${FAILED_SETUP}
fi

npm run test:unit
npm run test:integration
