/**
 * Created by Administrator on 2016/10/9.
 */
'use strict';

const path = require('path');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});
/**
 * 导入配置
 */
const config = require('./config');
const browserSync = require('browser-sync');

function isOnlyChange(event) {
    return event.type === 'changed';
}

gulp.task('watch', ['inject', 'fonts-serve'], function () {

    gulp.watch([path.join(config.paths.src, '/**/*.html'), 'bower.json'], ['inject-reload'], function(event) {
        browserSync.reload(event.path);
    });

    gulp.watch([
        path.join(config.paths.src, '/pages/**/*.css'),
        path.join(config.paths.src, '/pages/**/*.scss'),
        path.join(config.paths.src, '/assets/**/*.css')
    ], function(event) {
        if(isOnlyChange(event)) {
            gulp.start('styles-reload');
        } else {
            gulp.start('inject-reload');
        }
    });

    gulp.watch([path.join(config.paths.src, '/pages/**/*.js'),
        path.join(config.paths.src, '/assets/**/*.js')], function(event) {
            console.log(1)
        if(isOnlyChange(event)) {
            gulp.start('scripts-reload');
        } else {
            gulp.start('inject-reload');
        }
    });

});