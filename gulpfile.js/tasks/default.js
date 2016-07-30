// Require Plugins
var gulp = require('gulp');

// Default
gulp.task('default', ['clean'], function() {
    gulp.start('pot', 'sass', 'scripts', 'images');
});
