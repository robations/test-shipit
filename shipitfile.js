"use strict";

module.exports = function (shipit) {
    require("shipit-deploy")(shipit);

    shipit.initConfig({
        default: {
            workspace: "workspace",
            deployTo: "/tmp",
            repositoryUrl: "git@github.com:robations/test-shipit.git",
            keepReleases: 2,
            branch: "master"
        },
        testing: {
            servers: "username@localhost"
        }
    });
};
