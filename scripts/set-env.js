const path = require('path');
const fs = require('fs');

const scriptArguments = process.argv.splice(2);
const { [0]: envArgument } = scriptArguments;

const envConfigFile = path.resolve(__dirname, `../env/env.${envArgument}.js`);
const envConfigMainFile = path.resolve(__dirname, `../env/index.js`);

const envTsConfigFile = path.resolve(__dirname, `../env/tsconfig.${envArgument}.json`);
const envTsConfigMainFile = path.resolve(__dirname, `../tsconfig.json`);

fs.copyFileSync(envConfigFile, envConfigMainFile);
fs.copyFileSync(envTsConfigFile, envTsConfigMainFile);

