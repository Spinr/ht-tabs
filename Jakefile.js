(function() {
    "use strict";

    var semver = require("semver");

    desc("Default build");
    task("default", ["version"], function(){
        console.log("BUILD OK!!!");
    });

    desc("Check node version");
    task("version",function(){
        console.log("Checking Node version: ...");
        var packageJson = require ("./package.json");
        var expectedVersion = "v" + packageJson.engines.node;

        var actualVersion = process.version;
        if (semver.neq(expectedVersion, actualVersion)) {
            fail("Incorrect Node version: expected " + expectedVersion + " but was " +  actualVersion);

        }


    });

}())
