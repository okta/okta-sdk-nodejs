#!/bin/bash

# Add yarn to the $PATH so npm cli commands do not fail
export PATH="${PATH}:$(yarn global bin)"
export TEST_FAILURE=false

if ! npm install; then
  echo "npm install failed! Exiting..."
  exit ${FAILED_SETUP}
fi

npm run test:unit
if [ $? -ne 0 ]; then
  TEST_FAILURE=true
  echo "------- [ERROR] Unit tests failed  -------"
fi

npm run test:integration
if [ $? -ne 0 ]; then
  TEST_FAILURE=true
  echo "------- [ERROR] Integration tests failed  -------"
fi

if ${TEST_FAILURE}
then
   exit 1
fi
