#!/bin/bash -x

source ${OKTA_HOME}/${REPO}/scripts/setup.sh

aws s3 --quiet --region us-east-1 cp s3://ci-secret-stash/prod/okta-sdk-nodejs/privateKey.pem ${OKTA_HOME}/${REPO}/scripts/privateKey.pem

export OKTA_CLIENT_ORGURL=https://node-sdk.okta.com
export OKTA_CLIENT_TOKEN="$(aws s3 --quiet --region us-east-1 cp s3://ci-secret-stash/prod/okta-sdk-nodejs/apiKey /dev/stdout)"
export OKTA_CLIENT_CLIENTID=0oa1jnkiuz6FCTchz4x7
export OKTA_CLIENT_PRIVATEKEY=$(cat ${OKTA_HOME}/${REPO}/scripts/privateKey.pem)

export TEST_SUITE_TYPE="junit"
export TEST_RESULT_FILE_DIR="${REPO}/test-reports"

# Runs unit and jest tests
if ! yarn test:unit; then
  echo "Unit tests failed! Exiting..."
  exit $PUBLISH_TYPE_AND_RESULT_DIR_BUT_ALWAYS_FAIL
fi

if ! yarn jest; then
  echo "jest tests failed! Exiting..."
  exit $PUBLISH_TYPE_AND_RESULT_DIR_BUT_ALWAYS_FAIL
fi

echo ${TEST_SUITE_TYPE} > ${TEST_SUITE_TYPE_FILE}
echo ${TEST_RESULT_FILE_DIR} > ${TEST_RESULT_FILE_DIR_FILE}
exit ${PUBLISH_TYPE_AND_RESULT_DIR}
