// Require Plugins
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify')
    config = require('../config');

// Scripts
gulp.task('scripts', function() {
  return gulp.src([config.js.src + '/**/*.js'])
    .pipe(concat('functions.js'))
    .pipe(gulp.dest(config.js.dest))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest(config.js.dest))
    .pipe(notify({ message: 'Scripts task complete', onLast: true  }));
});
