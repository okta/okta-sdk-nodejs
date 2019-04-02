#!/bin/bash

# Due to async/await being used in tests, we can't run node version < 8
echo "Checking node version..."
node --version | grep v8
RETURN_CODE=$?

if [ "${RETURN_CODE}" -ne "0" ]; then
    exit 0
fi

# Add yarn to the $PATH so npm cli commands do not fail
export PATH="${PATH}:$(yarn global bin)"

if ! npm install; then
  echo "npm install failed! Exiting..."
  exit ${FAILED_SETUP}
fi

if [[ $TRAVIS_EVENT_TYPE = 'push' ]]; then
  npm run test:integration
elif [[ $TRAVIS_EVENT_TYPE = 'pull_request' ]]; then
  # external contributors don't have access to travis env vars. We run only unit tests
  npm run test:unit
else # for cron jobs, run both tests
  npm run test:integration
  npm run test:unit
fi
