/**
 * Created by Administrator on 2016/10/9.
 */
'use strict';
var gutil = require('gulp-util');
/**
 *  项目的主要路径处理
 */

exports.paths = {
    src: 'src',    // 开发目录
    dist: 'dist',  // 发布目录
    tmp: '.tmp'    // 临时目录
};

/**
 *  Wiredep is the lib which inject bower dependencies in your project
 *  Mainly used to inject script tags in the index.html but also used
 *  to inject css preprocessor deps and js files in karma
 */
exports.wiredep = {
    exclude: [/\/bootstrap\.js$/, /\/bootstrap-sass\/.*\.js/, /\/bootstrap\.css/],
    directory: 'bower_components'
};

exports.errorHandler = function(title) {
    'use strict';

    return function (err) {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };

}