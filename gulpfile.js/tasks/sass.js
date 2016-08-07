// Config
var config = require('../config');
if(!config.css) return

// Require Plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    ignore = require('gulp-ignore'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

// Styles
gulp.task('sass', function () {
 return gulp.src(config.css.src + '/style.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer(config.css.autoprefixer))
  .pipe(sourcemaps.write(config.root.base, config.css.sourcemaps))
  .pipe(gulp.dest(config.root.base))
  .pipe(notify({ message: 'Styles task complete.', onLast: true }))
});
