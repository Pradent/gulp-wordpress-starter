// Config
var config = require('../config');

// Require Plugins
var gulp = require('gulp');

// Watch
gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch(config.css.src + '/**/*.scss', ['sass']);

    // Watch .js files
    gulp.watch(config.js.src + '/**/*.js', ['scripts']);

    // Watch Images
    gulp.watch(config.images.src + '/**/*', ['images']);

});
