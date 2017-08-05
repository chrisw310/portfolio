/* File: gulpfile.js */
// grab our gulp packages

var sass = ['*.sass']

var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    path = require('path'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    server = require('tiny-lr')
    
gulp.task('sass', function() {
  return gulp.src(path.join('*.sass', '*.scss'))
    .pipe(sass({ style: 'expanded', sourceComments: 'map', errorLogToConsole: true}))
    .pipe(autoprefixer('last 2 version', "> 1%", 'ie 8', 'ie 9'))
    .pipe(gulp.dest('css'))
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    port: 2345,
    root: [__dirname],
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch(path.join('*.sass', '**/*.scss'), ['sass']);
});

gulp.task('default',['sass','connect','watch'], function() {
  
});