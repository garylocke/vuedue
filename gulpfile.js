var gulp = require('gulp');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var rollup = require('gulp-better-rollup');
var babel = require('rollup-plugin-babel');
var watch = require('gulp-watch')

gulp.task('watch', function(){
    watch('src/**/*.js', function(){
        gulp.start('default');
    });
});

gulp.task('default', function(){
  gulp.src('src/app.js')
    .pipe(sourcemaps.init())
    .pipe(rollup({plugins: [babel()]}, 'iife'))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('dist'))
});