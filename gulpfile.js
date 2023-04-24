const gulp = require("gulp");
const concat = require("gulp-concat");
const miniify = require("gulp-uglify");
const concatCss = require("gulp-concat-css");
const csso = require("gulp-csso");

const { src, parallel, dest, watch } = require("gulp");

function copyHtml() {
  return src("./src/*.html").pipe(gulp.dest("dist"));
}

function jsTask() {
  return src("./src/components/*.js")
    .pipe(concat("all.js"))
    .pipe(miniify())
    .pipe(gulp.dest("dist/js"));
}

function cssTask() {
  return src("./src/styles/*.css")
    .pipe(concat("style.css"))
    .pipe(csso())
    .pipe(gulp.dest("dist/css"));
}

exports.copyHtml = copyHtml;
exports.jsTask = jsTask;
exports.cssTask = cssTask;
exports.default = parallel(copyHtml, jsTask, cssTask);
