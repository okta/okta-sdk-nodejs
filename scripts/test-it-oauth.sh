#!/bin/bash

export TEST_TYPE=it
export OKTA_CLIENT_AUTHORIZATIONMODE=PrivateKey
source .env &> /dev/null

DEFAULT_TEST="test/it/dpop-authentication.ts"
TEST="${1:-$DEFAULT_TEST}"

mocha $TEST
