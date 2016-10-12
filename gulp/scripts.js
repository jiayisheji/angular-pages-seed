/**
 * Created by Administrator on 2016/10/9.
 */
'use strict';

const path = require('path');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
/**
 * 导入配置
 */
const config = require('./config');

const browserSync = require('browser-sync');



gulp.task('scripts-reload', function() {
    return browserSync.stream();
});

gulp.task('scripts', function() {
    return buildScripts();
});

function buildScripts() {
    return gulp.src(path.join(config.paths.src, '/**/*.js'))
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.size())
};