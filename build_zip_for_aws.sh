#!/bin/bash
# Build zip package to be used with AWS elastic beanstalk

# Create dir for builds if not exist
mkdir -p ./builds

# Drop directory with build if exists
rm -r ./dist

# Transpile Typescript to Javascript
# Will create js files in ./dist dir
tsc

# Copy package.json to the dist dir
cp ./package.json ./dist/

# Install node dependencies in ./dist dir
cd ./dist && npm install --production

# Zip files
TIMESTAMP=$(date +%s)
zip -r ../builds/build.zip *
