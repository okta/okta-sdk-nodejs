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

npm run test:unit
npm run test:integration
