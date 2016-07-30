// Require Plugins
var gulp = require('gulp'),
    del = require('del')
    config = require('../config');

// Clean
gulp.task('clean', function() {
    return del([config.root.dest]);
});
