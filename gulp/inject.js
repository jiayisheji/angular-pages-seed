/**
 * Created by Administrator on 2016/10/9.
 */
'use strict';

const path = require('path');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
var fileinclude  = require('gulp-file-include');
/**
 * 导入配置
 */
const config = require('./config');
const assetsFile = require('./../assetsFile');
const wiredep = require('wiredep').stream;
const _ = require('lodash');

const browserSync = require('browser-sync');

gulp.task('inject-reload', ['inject'], function() {
    browserSync.reload();
});

gulp.task('inject', function () {
    function injectOptions(starttag){
        return {
            ignorePath: [config.paths.src, path.join(config.paths.tmp, '/serve')],
            addRootSlash: false,
            starttag: starttag
        };
    }
    var injectAngular = gulp.src([
        path.join(config.paths.src, '/shops/**/*.module.js'),
        path.join(config.paths.src, '/shops/**/*.js')
    ]).pipe($.angularFilesort()).on('error', config.errorHandler('AngularFilesort'));
    assetsFile.data.forEach(function(file){
        var fileApp = [];
        file.appjs.length && file.appjs.forEach(function (name) {
            fileApp.push(path.join(config.paths.src, name))
        });
        file.appcss.length && file.appcss.forEach(function (name) {
            fileApp.push(path.join(path.join(config.paths.tmp, '/serve'), name))
        });
        var sourcesApp = gulp.src(fileApp, {read: false} , {relative: true});

        var dist  = file.file.substring(0, file.file.lastIndexOf('/')+1);
        if(file.name === "index"){
            gulp.src(config.paths.src +"/"+ file.file)
                .pipe(fileinclude({
                    prefix: '@@',
                    basepath: '@file'
                }))
                .pipe($.inject(sourcesApp, injectOptions('<!-- inject:app:{{ext}} -->') ))
                .pipe(gulp.dest(path.join(config.paths.tmp, '/serve/' + dist)));
        }else if(file.name === "shops") {
            gulp.src(config.paths.src +"/"+ file.file)
                .pipe(fileinclude({
                    prefix: '@@',
                    basepath: '@file'
                }))
                .pipe($.inject(sourcesApp, injectOptions('<!-- inject:app:{{ext}} -->') ))
                .pipe($.inject(injectAngular, injectOptions(undefined)))
                .pipe($.replace('"pages/'+file.name+"/", '"'))
                .pipe($.replace('"pages/common/', '"../common/'))
                .pipe(gulp.dest(path.join(config.paths.tmp, '/serve/' + dist)));
        }else{
            gulp.src(config.paths.src +"/"+ file.file)
                .pipe(fileinclude({
                    prefix: '@@',
                    basepath: '@file'
                }))
                .pipe($.inject(sourcesApp, injectOptions('<!-- inject:app:{{ext}} -->') ))
                .pipe($.replace('"pages/'+file.name+"/", '"'))
                .pipe($.replace('"pages/common/', '"../common/'))
                .pipe(gulp.dest(path.join(config.paths.tmp, '/serve/' + dist)));
        }
    });
    browserSync.reload();
});