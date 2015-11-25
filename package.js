Package.describe({
    summary: 'Wrapper for NPM Thrift',
    version: "1.0.0",
    name: "cglace:thrift",
    git: "https://github.com/cglace/meteor-thrift"
});

Npm.depends({
   'thrift': '0.9.3'
});

Package.onUse(function(api) {
    api.addFiles([
       'lib/thrift.js'
    ], ['server']);
    api.export("Thrift");
});
