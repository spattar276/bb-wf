var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var del = require('del');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var useref = require('gulp-useref');
var templateCache = require('gulp-angular-templatecache');


gulp.task('useref', function(){
    return gulp.src('app/*.html')
        .pipe(useref())
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('build'));
});


gulp.task('createTemplateCache',function () {
    return gulp.src('*.html')
        .pipe(templateCache('templates.js', { module: 'weatherReportApp'}))
        .pipe(gulp.dest('build'));
});

gulp.task('default',['build']);

gulp.task('clean', function() {
    return del.sync('build');
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    });
});

gulp.task('watch', ['browserSync'], function (){
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
    gulp.watch('app/*.css', browserSync.reload);
});

gulp.task('build', function (callback){
    runSequence('clean', 'useref', callback);
});