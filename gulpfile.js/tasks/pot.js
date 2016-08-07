// Config
var config = require('../config');

// Require Plugins
var gulp = require('gulp'),
    sort = require('gulp-sort'),
    wpPot = require('gulp-wp-pot');

// pot file
gulp.task('pot', function () {
  return gulp.src('*.php')
    .pipe(sort())
    .pipe(wpPot( {
      domain: config.theme.domain,
      destFile: config.theme.destFile,
      package: config.theme.package,
      bugReport: config.theme.bugReport,
      lastTranslator: config.theme.lastTranslator,
      team: config.theme.team
    } ))
    .pipe(gulp.dest(config.theme.destDir));
});
