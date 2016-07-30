// Require Plugins
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    config = require('../config');

// Images
gulp.task('images', () =>
    gulp.src(config.images.src + '/*')
        .pipe(imagemin())
        .pipe(gulp.dest(config.images.dest))
);
