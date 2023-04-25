const gulp = require("gulp");
const concat = require("gulp-concat");
const miniify = require("gulp-uglify");
const csso = require("gulp-csso");
const browserSync = require("browser-sync").create();

const { src, parallel, dest, series } = require("gulp");

function server() {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
  });
}

function copyHtml() {
  return src("./src/*.html").pipe(gulp.dest("dist"));
}

function jsTask() {
  return src("./src/js/*.js")
    .pipe(concat("index.js"))
    .pipe(dest("src"))
    .pipe(miniify())
    .pipe(gulp.dest("dist"));
}

function cssTask() {
  return src("src/styles/*.css")
    .pipe(concat("style.css"))
    .pipe(dest("src"))
    .pipe(csso())
    .pipe(dest("dist"));
}

exports.copyHtml = copyHtml;
exports.jsTask = jsTask;
exports.cssTask = cssTask;
exports.server = server;
exports.default = series(parallel(copyHtml, jsTask, cssTask), server);
