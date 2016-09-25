/// <binding BeforeBuild='default' />
"use strict";

var _ = require("lodash"),
    gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    cssmin = require("gulp-cssmin"),
    rename = require("gulp-rename");

var js = [
    "./node_modules/core-js/client/shim.min.js",
    "./node_modules/zone.js/dist/zone.js",
    "./node_modules/reflect-metadata/Reflect.js",
    "./node_modules/systemjs/dist/system.src.js",
    "./systemjs.config.js"
];

var app = [
    "./app/**/*.js"
];

var css = [
    "./styles.css"
];

var fonts = [];

gulp.task("copy-js", function () {
    _.forEach(js, function (file, _) {
        gulp.src(file).pipe(gulp.dest("./wwwroot/js"));
    });
    _.forEach(app, function (file, _) {
        gulp.src(file).pipe(gulp.dest("./wwwroot/app"));
    });
});

gulp.task("copy-css", function () {
    _.forEach(css, function (file, _) {
        gulp.src(file).pipe(gulp.dest("./wwwroot/css"));
    });
    _.forEach(fonts, function (file, _) {
        gulp.src(file).pipe(gulp.dest("./wwwroot/fonts"));
    });
});

gulp.task("default", ["copy-js", "copy-css"]);