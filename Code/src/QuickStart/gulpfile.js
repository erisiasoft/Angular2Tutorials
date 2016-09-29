/// <binding BeforeBuild='default' />
/// <reference path="~/wwwroot/js/system.src.js" />
"use strict";

var requirejs = require("requirejs");
var ts = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var _ = require("lodash"),
    gulp = require("gulp");

var sysJs = [
    "./node_modules/core-js/client/shim.min.js",
    "./node_modules/zone.js/dist/zone.js",
    "./node_modules/reflect-metadata/Reflect.js",
    "./node_modules/systemjs/dist/system.src.js",
    "./systemjs.config.js"
];

gulp.task("copy-js", function () {
    _.forEach(sysJs, function (file, _) {
        gulp.src(file).pipe(gulp.dest("./wwwroot/js"));
    });
    _.forEach(["./app/*.js"], function (comp) {
        gulp.src(comp).pipe(gulp.dest("./wwwroot/app"));
    });
    _.forEach(["./app/*.map"], function (map, _) {
        gulp.src(map).pipe(gulp.dest("./wwwroot/app"));
    });
});

gulp.task("default", ["copy-js"]);