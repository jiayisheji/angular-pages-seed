/**
 * Created by Administrator on 2016/10/9.
 */
'use strict';

const fs = require('fs');
const gulp = require('gulp');

gulp.task('test', function () {
    console.log('test');
});

/**
 *  This will load all js or coffee files in the gulp directory
 *  加载所有的gulp tasks
 */
fs.readdirSync('./gulp').filter(function(file) {
    return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
    require('./gulp/' + file);
});


/**
 *  默认task 清除临时目录 启动
 *  开启生成任务
 */
gulp.task('default', ['clear'], function () {
    gulp.start('build');
});

