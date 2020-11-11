#!/bin/bash

# Add yarn to the $PATH so npm cli commands do not fail
export PATH="${PATH}:$(yarn global bin)"

if ! yarn install --frozen-lockfile; then
  echo "yarn install failed! Exiting..."
  exit ${FAILED_SETUP}
fi

yarn eslint
yarn test:unit
