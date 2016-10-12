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
const assetsFile = require('./../assetsFile');

var browserSync = require('browser-sync');


var wiredep = require('wiredep').stream;
var _ = require('lodash');

gulp.task('styles-reload', ['styles'], function() {
    return browserSync.stream();
});

gulp.task('styles', function() {
    return buildStyles();
});

gulp.task('fonts-serve', function () {
    return gulp.src($.mainBowerFiles())
        .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
        .pipe($.flatten())
        .pipe(gulp.dest(path.join(config.paths.tmp, '/serve/assets/fonts/')));
});

var buildStyles = function() {
    var sassOptions = {
        outputStyle: 'expanded',
        precision: 10
    };
    var injectFiles = gulp.src([
        path.join(config.paths.src, '/pages/**/*.scss')
    ], { read: false });

    var injectOptions = {
        transform: function(filePath) {
            filePath = filePath.replace(config.paths.src + '/pages/', '');
            return '@import "' + filePath + '";';
        },
        starttag: '// injector',
        endtag: '// endinjector',
        addRootSlash: false
    };
    assetsFile.data.forEach(function(file){
        var dist  = file.scss.substring(0, file.scss.lastIndexOf('/')+1);
        console.log(config.paths.src +"/"+ file.scss)
        gulp.src(config.paths.src +"/"+ file.scss)
            .pipe($.inject(injectFiles, injectOptions))
            .pipe($.sourcemaps.init())
            .pipe($.replace('../../font-awesome/fonts', '../fonts'))       //替换字体图标的路径 目标路径 assets/fonts/下
            .pipe($.sass(sassOptions)).on('error', config.errorHandler('Sass'))
            .pipe($.autoprefixer()).on('error', config.errorHandler('Autoprefixer'))
            .pipe($.sourcemaps.write())
            .pipe(gulp.dest(path.join(config.paths.tmp, '/serve/'+ dist )));
    });
    browserSync.reload();
};
