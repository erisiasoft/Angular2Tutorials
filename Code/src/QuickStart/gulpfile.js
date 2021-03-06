﻿/// <binding BeforeBuild='clean-ts, default' />
/// <reference path="~/wwwroot/js/system.src.js" />
"use strict";

var requirejs = require('requirejs');
var _ = require("lodash"),
    gulp = require("gulp");

var sysJs = [
    "./node_modules/core-js/client/shim.min.js",
    "./node_modules/zone.js/dist/zone.js",
    "./node_modules/reflect-metadata/Reflect.js",
    "./node_modules/systemjs/dist/system.src.js",
    "./systemjs.config.js"
];

var appJs = [
    "./app/js/*.js"
];

var maps = [
    "./app/js/*.map"
];

gulp.task("copy-js", function () {
    _.forEach(sysJs, function (file, _) {
        gulp.src(file).pipe(gulp.dest("./wwwroot/js"));
    });
    _.forEach(appJs, function (comp, _) {
        gulp.src(comp).pipe(gulp.dest("./wwwroot/app"));
    });
    _.forEach(maps, function (map, _) {
        gulp.src(map).pipe(gulp.dest("./wwwroot/app"));
    });
});

gulp.task('clean-ts', function() {
    del("./app/**/*.js");
    del(".wwwroot/app");
});

gulp.task("default", ["copy-js"]);