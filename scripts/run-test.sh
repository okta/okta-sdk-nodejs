#!/bin/bash

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
