#!/bin/bash

export TEST_TYPE=clean
export OKTA_CLIENT_AUTHORIZATIONMODE=SSWS
source .env &> /dev/null

TEST="test/delete-resources.ts"
mocha $TEST
