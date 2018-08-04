const getConfig = require('metro-bundler-config-yarn-workspaces')
const path =require("path");

// changes to export from https://youtu.be/iM4NRM2diPc?t=6m8s
module.exports = getConfig(__dirname, {
    nodeModules: path.join(__dirname, "./node_modules")
})