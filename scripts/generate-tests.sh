#!/bin/bash
set -e

# Generates API test files from the OpenAPI spec into a temp subdirectory,
# copies only the .test.js files to src/generated/tests/, then cleans up.

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TMP_SUBDIR="tmp_test_gen"

rm -rf "$PROJECT_ROOT/$TMP_SUBDIR"
mkdir -p "$PROJECT_ROOT/$TMP_SUBDIR"

echo "Generating test files..."
docker run --rm \
  -v "${PROJECT_ROOT}:/local" \
  -e JAVA_OPTS="-Dlog.level=warn -DmaxYamlCodePoints=99999999 -Dsnakeyaml.codepoint.limit=99999999" \
  openapitools/openapi-generator-cli:v7.13.0 generate \
  -i /local/spec/management.yaml \
  -g typescript \
  -c /local/templates/swagger-codegen-tests-config.json \
  -o /local/${TMP_SUBDIR} \
  -t /local/templates/openapi-generator \
  --global-property apiTests=true \
  --model-name-mappings User_type=UserTypeInline

mkdir -p "$PROJECT_ROOT/src/generated/tests"

if [ -d "$PROJECT_ROOT/$TMP_SUBDIR/tests" ]; then
  cp "$PROJECT_ROOT/$TMP_SUBDIR/tests/"*.test.js "$PROJECT_ROOT/src/generated/tests/"
  echo "Test files written to src/generated/tests/"
else
  echo "Warning: no tests/ directory found in generator output"
  ls "$PROJECT_ROOT/$TMP_SUBDIR"
fi

rm -rf "$PROJECT_ROOT/$TMP_SUBDIR"
echo "Done."
