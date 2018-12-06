'use strict';

var gulp = require('gulp'),
    pug  = require('gulp-pug'),
    sass = require('gulp-sass'),
    // cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
    browserSync.watch('build',browserSync.reload);
});

gulp.task('pug', function() {
    return gulp.src('src/pug/pages/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'))
        .on('end', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src('src/static/sass/**/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .on("error", notify.onError({
            title: "style error"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/styles'))
        .pipe(browserSync.reload({
            stream:true
        }));
});

gulp.task('watch', function() {
    gulp.watch('src/pug/pages/**/*.pug', gulp.series('pug'));
    gulp.watch('src/static/sass/**/*.sass', gulp.series('sass'));
});

gulp.task('default', gulp.series(
    gulp.parallel('pug', 'sass'),
    gulp.parallel('watch', 'serve')
));