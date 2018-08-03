var gulp = require('gulp'),
  rename = require('gulp-rename'),
  cleanCss = require('gulp-clean-css');

var stylus = require('gulp-stylus');
var postcss = require('gulp-postcss');

var cssnext = require('postcss-cssnext');
var precss = require('precss');
var processors = [cssnext, precss];

gulp.task('miniCss', function () {
  gulp.src('../src/theme-default/index.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(postcss(processors))
    .pipe(cleanCss({
      keepSpecialComments: 0
    }))
    .pipe(rename('nwd.css'))
    .pipe(gulp.dest('../dist/style'))
});

gulp.task('default', ['miniCss', ]);
