#!/bin/bash

export TEST_TYPE=it
export OKTA_CLIENT_AUTHORIZATIONMODE=SSWS
source .env &> /dev/null

DEFAULT_TEST="test/it/*.ts"
TEST="${1:-$DEFAULT_TEST}"

mocha $TEST
