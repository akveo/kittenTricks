#!/usr/bin/env bash
MANIFEST_DIR='android/app/src/main'
MANIFEST_FILE='AndroidManifest.xml'
MANIFEST_PATH=$MANIFEST_DIR/$MANIFEST_FILE
VERSION_CODE=`grep versionCode $MANIFEST_PATH | sed 's/.*versionCode="//;s/".*//'`
PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')

NEW_CODE=$(($VERSION_CODE+1))
NEW_NAME=$PACKAGE_VERSION
echo "Updating Android build information. New version code: $NEW_CODE - New version name: $NEW_NAME";

sed -i.bak 's/android:versionName="."/android:versionName="'${NEW_NAME}'"/g' $MANIFEST_PATH
sed -i.bak 's/android:versionCode="."/android:versionCode="'${NEW_CODE}'"/g' $MANIFEST_PATH

git add "${MANIFEST_PATH}"