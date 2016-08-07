// Require Plugins
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    notify = require('gulp-notify'),
    changed = require('gulp-changed'),
    config = require('../config');

// Images
gulp.task('images', function() {
  return gulp.src(config.images.src + '/**/*')
    .pipe(changed(config.images.dest)) // Ignore unchanged files
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest(config.images.dest))
    .pipe(notify({ message: 'Images task complete', onLast: true }));
});
