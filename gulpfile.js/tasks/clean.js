// Config
var config = require('../config');

// Require Plugins
var gulp = require('gulp'),
    del = require('del');

// Clean
gulp.task('clean', function() {
    return del([config.root.dest]);
});
