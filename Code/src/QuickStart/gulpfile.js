// TODO Rename root app to 'angular' or 'appSource' or 'jsSource'.
/// <binding BeforeBuild="default" />
/// <reference path="~/scripts/system.src.js" />
"use strict";

var _ = require("lodash");
var gulp = require("gulp");

var sysJs = [
    "./node_modules/core-js/client/shim.min.js",
    "./node_modules/zone.js/dist/zone.js",
    "./node_modules/reflect-metadata/Reflect.js",
    "./node_modules/systemjs/dist/system.src.js",
    "./systemjs.config.js"
];

gulp.task("default", function () {
    _.forEach(sysJs, function (file, _) {
        gulp.src(file).pipe(gulp.dest("./wwwroot/js"));
    });
});