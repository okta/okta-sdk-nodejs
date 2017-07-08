#!/bin/bash
set -e

SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"
CURRENT_VERSION=$(cat package.json | grep version | head -1 | awk -F= "{ print $2 }" | sed 's/[version:,\",]//g' | tr -d '[[:space:]]')

function formatDocs {
    # I bet there is a cleaner solution for this
    cd jsdocs/
    mkdir jsdocs/
    mkdir -p jsdocs/${CURRENT_VERSION}/
    cd \@okta/okta-sdk-nodejs/${CURRENT_VERSION}/
    cp -r . ../../../../jsdoc/jsdocs/
    cp -r . ../../../../jsdoc/jsdocs/${CURRENT_VERSION}
    cd ../../../
    rm -rf \@okta
    cd ..
}

function buildDocs {
    echo "==== Building Docs ===="
    npm run docs
}

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy; just doing a build."
    buildDocs
    exit 0
fi

# Save useful information
REPO=`git config remote.origin.url`
echo ${REPO}
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
echo "Stored: REPO=${REPO}"

# Clone the existing gh-pages for this repo into jsdoc/
rm -rf jsdoc
git clone $REPO jsdoc
cd jsdoc
git checkout $TARGET_BRANCH
cd ..

# Remove existing contents
echo "==== Removing existing contents ===="
rm -rf jsdoc/* || exit 0
ls jsdoc/

# Run compile script
buildDocs

# Format docs
formatDocs


# If there are no changes to the compiled out (e.g. this is a README update) then just bail.
if git diff --quiet; then
    echo "No changes to the output on this push; exiting."
    exit 0
fi

# Commit the "changes", i.e. the new version.
# The delta will show diffs between new and old versions.
cd jsdoc/
BRANCH=`git branch | grep \* | cut -d ' ' -f2`
echo "Current Branch: ${BRANCH}"
git add -A .
git commit -m ":arrow_up: Release jsdocs for version: ${CURRENT_VERSION}"

# Now that we're all set up, we can push.
git push $SSH_REPO $TARGET_BRANCH
