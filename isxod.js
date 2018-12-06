'use strict';

var gulp = require('gulp'),
    gp   = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
    // browserSync.watch('build',browserSync.reload);
});

gulp.task('pug', function() {
    return gulp.src('src/pug/pages/*.pug')
        .pipe(gp.pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'))
        .on('end',browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src('src/static/sass/**/*.sass')
        .pipe(gp.sourcemaps.init())
        .pipe(gp.sass({}))
        .pipe(gp.autoprefixer({
            browsers: ['last 2 versions']
        }))
        .on("error", gp.notify.onError({
            title: "style error"
        }))
        .pipe(gp.sourcemaps.write())
        .pipe(gulp.dest('build/styles/'))
        .pipe(browserSync.reload({
            stream:true
        }));
});

gulp.task('watch', function() {
    gulp.watch('src/pug/pages/**/*.pug', gulp.series('pug'));
    gulp.watch('src/static/sass/**/*.sass', gulp.series('sass'))
});

gulp.task('default', gulp.series(
    gulp.parallel('pug', 'sass'),
    gulp.parallel('watch', 'serve')
));