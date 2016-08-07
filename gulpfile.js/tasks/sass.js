// Require Plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    ignore = require('gulp-ignore'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    config = require('../config');

// Styles
gulp.task('sass', () =>
    sass(config.css.src + '/style.scss', {sourcemap: true})
        .on('error', sass.logError)
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(sourcemaps.write(config.root.base,  {
          includeContent: false,
          sourceRoot: 'source'
        }))
        .pipe(gulp.dest(config.root.base))
        .pipe(ignore.exclude('*.map'))
        .pipe(cleanCSS({ sourceMap: false }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(config.root.base))
        .pipe(notify({ message: 'Styles task complete.', onLast: true }))
);
