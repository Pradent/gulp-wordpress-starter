// Require Plugins
var gulp = require('gulp'),
    config = require('../config');

// Watch
gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch(config.css.src + '/**/*.scss', ['sass']);

    // Watch .js files
    gulp.watch(config.js.src + '/**/*.js', ['scripts']);

});
