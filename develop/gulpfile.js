const gulp = require("gulp");
const concat = require('gulp-concat')
gulp.task("build", function () {
  return gulp.src("src/*.js", { sourcemaps: true })
    .pipe(concat("lib.js"))
    .pipe(gulp.dest("../web/src", { sourcemaps: "./maps" }))
})