/**
 * Created by Administrator on 2016/10/9.
 */

/**
 * Created by Administrator on 2016/10/9.
 */
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
/**
 * 处理angular依赖问题
 */
gulp.task('partials', function () {
    return gulp.src([
        path.join(config.paths.src, '/pages/shops/app/**/*.html'),
        path.join(config.paths.src, '/pages/shops/decorations/**/*.html'),
        path.join(config.paths.src, '/pages/shops/components/**/*.html')
    ])
        .pipe($.htmlmin({
            removeEmptyAttributes: true,
            removeAttributeQuotes: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true
        }))
        .pipe($.angularTemplatecache('templateCacheHtml.js', {
            module: 'shopApp',
            root: 'app'
        }))
        .pipe(gulp.dest(config.paths.tmp + '/serve/partials/'));
});


gulp.task('indexhtml', function () {
    var htmlFilter = $.filter('**/*.html', { restore: true });
    var jsFilter = $.filter('**/*.js', { restore: true });
    var cssFilter = $.filter('**/*.css', { restore: true });
    return gulp.src(path.join(config.paths.tmp, '/serve/index.html'))
        .pipe($.useref())
        .pipe(jsFilter)
        //.pipe($.sourcemaps.init())
        .pipe($.ngAnnotate())
        .pipe($.uglify({preserveComments: $.uglifySaveLicense})).on('error', config.errorHandler('Uglify'))
        .pipe($.rev())
        //.pipe($.sourcemaps.write('maps'))
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        //.pipe($.sourcemaps.init())
        .pipe($.replace('../../font-awesome/fonts', '../fonts'))
        .pipe($.cssnano())
        .pipe($.rev())
        //.pipe($.sourcemaps.write('maps'))
        .pipe(cssFilter.restore)
        .pipe($.revReplace())
        .pipe(htmlFilter)
        .pipe($.htmlmin({
            removeEmptyAttributes: true,
            removeAttributeQuotes: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true
        }))
        .pipe(htmlFilter.restore)
        .pipe(gulp.dest(path.join(config.paths.dist, "/")))
        .pipe($.size({title: path.join(config.paths.dist, "/"), showFiles: true}));
});

gulp.task('shopshtml',['partials'], function () {
    var htmlFilter = $.filter('**/*.html', { restore: true });
    var jsFilter = $.filter('**/*.js', { restore: true });
    var cssFilter = $.filter('**/*.css', { restore: true });
    return gulp.src(path.join(config.paths.tmp, '/serve/pages/shops/index.html'))
        .pipe($.inject(gulp.src(path.join(config.paths.tmp, '/partials/templateCacheHtml.js'), { read: false }), {
            ignorePath: path.join(config.paths.src, '/partials'),
            addRootSlash: false,
            starttag: '<!-- inject:partials -->'
        } ))
        .pipe($.replace('../../bower_components', '../bower_components'))
        .pipe($.replace('public/', 'pages/shops/public/'))
        .pipe($.replace('../common/', 'pages/common/'))
        .pipe($.replace('"configs/', '"pages/shops/configs/'))
        .pipe($.replace('"filters/', '"pages/shops/filters/'))
        .pipe($.replace('"components/', '"pages/shops/components/'))
        .pipe($.replace('"services/', '"pages/shops/services/'))
        .pipe($.replace('"constants/', '"pages/shops/constants/'))
        .pipe($.replace('"app/', '"pages/shops/app/'))
        .pipe($.replace('"module/', '"pages/shops/module/'))
        .pipe($.replace('".tmp', '"../.tmp'))
        .pipe($.replace('"index.css', '"pages/shops/index.css'))
        .pipe($.useref())
        .pipe(jsFilter)
        .pipe($.sourcemaps.init())
        .pipe($.ngAnnotate())
        .pipe($.uglify({ preserveComments: $.uglifySaveLicense })).on('error', config.errorHandler('Uglify'))
        .pipe($.rev())
        .pipe($.sourcemaps.write('maps'))
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        //.pipe($.sourcemaps.init())
        //.pipe($.replace('../../bootstrap-sass/assets/fonts/bootstrap/', '../fonts/'))
        .pipe($.replace('../../font-awesome/fonts', '../fonts'))
        .pipe($.cssnano())
        .pipe($.rev())
        //.pipe($.sourcemaps.write('maps'))
        .pipe(cssFilter.restore)
        .pipe($.revReplace())
        .pipe(htmlFilter)
        .pipe($.htmlmin({
            removeEmptyAttributes: true,
            removeAttributeQuotes: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true
        }))
        .pipe(htmlFilter.restore)
        .pipe(gulp.dest(path.join(config.paths.dist, '/pages/shops')))
        .pipe($.size({ title: path.join(config.paths.dist, '/pages/shops'), showFiles: true }));
});

gulp.task('signinHtml', function () {
    var htmlFilter = $.filter('**/*.html', { restore: true });
    var jsFilter = $.filter('**/*.js', { restore: true });
    var cssFilter = $.filter('**/*.css', { restore: true });
    return gulp.src(path.join(config.paths.tmp, '/serve/pages/signin/index.html'))
        .pipe($.replace('../../bower_components', '../bower_components'))
        .pipe($.replace('public/', 'pages/signin/public/'))
        .pipe($.replace('../common/', 'pages/common/'))
        .pipe($.replace('"index.css', '"pages/signin/index.css'))
        .pipe($.useref())
        .pipe(jsFilter)
        .pipe($.sourcemaps.init())
        .pipe($.ngAnnotate())
        .pipe($.uglify({ preserveComments: $.uglifySaveLicense })).on('error', config.errorHandler('Uglify'))
        .pipe($.rev())
        .pipe($.sourcemaps.write('maps'))
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        //.pipe($.sourcemaps.init())
        //.pipe($.replace('../../bootstrap-sass/assets/fonts/bootstrap/', '../fonts/'))
       .pipe($.replace('../../font-awesome/fonts', '../fonts'))
        .pipe($.cssnano())
        .pipe($.rev())
        //.pipe($.sourcemaps.write('maps'))
        .pipe(cssFilter.restore)
        .pipe($.revReplace())
        .pipe(htmlFilter)
        .pipe($.htmlmin({
            removeEmptyAttributes: true,
            removeAttributeQuotes: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true
        }))
        .pipe(htmlFilter.restore)
        .pipe(gulp.dest(path.join(config.paths.dist, '/pages/signin')))
        .pipe($.size({ title: path.join(config.paths.dist, '/pages/signin'), showFiles: true }));
});

gulp.task('signupHtml', function () {
    var htmlFilter = $.filter('**/*.html', { restore: true });
    var jsFilter = $.filter('**/*.js', { restore: true });
    var cssFilter = $.filter('**/*.css', { restore: true });
    return gulp.src(path.join(config.paths.tmp, '/serve/pages/signup/index.html'))
        .pipe($.replace('../../bower_components', '../bower_components'))
        .pipe($.replace('public/', 'pages/signun/public/'))
        .pipe($.replace('../common/', 'pages/common/'))
        .pipe($.replace('"index.css', '"pages/signup/index.css'))
        .pipe($.useref())
        .pipe(jsFilter)
        .pipe($.sourcemaps.init())
        .pipe($.ngAnnotate())
        .pipe($.uglify({ preserveComments: $.uglifySaveLicense })).on('error', config.errorHandler('Uglify'))
        .pipe($.rev())
        .pipe($.sourcemaps.write('maps'))
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        //.pipe($.sourcemaps.init())
        //.pipe($.replace('../../bootstrap-sass/assets/fonts/bootstrap/', '../fonts/'))
        .pipe($.replace('../../font-awesome/fonts', '../fonts'))
        .pipe($.cssnano())
        .pipe($.rev())
        //.pipe($.sourcemaps.write('maps'))
        .pipe(cssFilter.restore)
        .pipe($.revReplace())
        .pipe(htmlFilter)
        .pipe($.htmlmin({
            removeEmptyAttributes: true,
            removeAttributeQuotes: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true
        }))
        .pipe(htmlFilter.restore)
        .pipe(gulp.dest(path.join(config.paths.dist, '/pages/signup')))
        .pipe($.size({ title: path.join(config.paths.dist, '/pages/signup'), showFiles: true }));
});

gulp.task('shopauthHtml', function () {
    var htmlFilter = $.filter('**/*.html', { restore: true });
    var jsFilter = $.filter('**/*.js', { restore: true });
    var cssFilter = $.filter('**/*.css', { restore: true });
    return gulp.src(path.join(config.paths.tmp, '/serve/pages/shopauth/index.html'))
        .pipe($.replace('../../bower_components', '../bower_components'))
        .pipe($.replace('public/', 'pages/shopauth/public/'))
        .pipe($.replace('../common/', 'pages/common/'))
        .pipe($.replace('"index.css', '"pages/shopauth/index.css'))
        .pipe($.useref())
        .pipe(jsFilter)
        .pipe($.sourcemaps.init())
        .pipe($.ngAnnotate())
        .pipe($.uglify({ preserveComments: $.uglifySaveLicense })).on('error', config.errorHandler('Uglify'))
        .pipe($.rev())
        .pipe($.sourcemaps.write('maps'))
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        //.pipe($.sourcemaps.init())
        //.pipe($.replace('../../bootstrap-sass/assets/fonts/bootstrap/', '../fonts/'))
        .pipe($.replace('../../font-awesome/fonts', '../fonts'))
        .pipe($.cssnano())
        .pipe($.rev())
        //.pipe($.sourcemaps.write('maps'))
        .pipe(cssFilter.restore)
        .pipe($.revReplace())
        .pipe(htmlFilter)
        .pipe($.htmlmin({
            removeEmptyAttributes: true,
            removeAttributeQuotes: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true
        }))
        .pipe(htmlFilter.restore)
        .pipe(gulp.dest(path.join(config.paths.dist, '/pages/shopauth')))
        .pipe($.size({ title: path.join(config.paths.dist, '/pages/shopauth'), showFiles: true }));
});

gulp.task('unsupportedbrowserHtml', function () {
    var htmlFilter = $.filter('**/*.html', { restore: true });
    var jsFilter = $.filter('**/*.js', { restore: true });
    var cssFilter = $.filter('**/*.css', { restore: true });
    return gulp.src(path.join(config.paths.tmp, '/serve/pages/unsupportedbrowser/index.html'))
        .pipe($.replace('../../bower_components', '../bower_components'))
        .pipe($.replace('public/', 'pages/unsupportedbrowser/public/'))
        .pipe($.replace('../common/', 'pages/common/'))
        .pipe($.replace('"index.css', '"pages/unsupportedbrowser/index.css'))
        .pipe($.useref())
        .pipe(jsFilter)
        .pipe($.sourcemaps.init())
        .pipe($.ngAnnotate())
        .pipe($.uglify({ preserveComments: $.uglifySaveLicense })).on('error', config.errorHandler('Uglify'))
        .pipe($.rev())
        .pipe($.sourcemaps.write('maps'))
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        //.pipe($.sourcemaps.init())
        //.pipe($.replace('../../bootstrap-sass/assets/fonts/bootstrap/', '../fonts/'))
        .pipe($.replace('../../font-awesome/fonts', '../fonts'))
        .pipe($.cssnano())
        .pipe($.rev())
        //.pipe($.sourcemaps.write('maps'))
        .pipe(cssFilter.restore)
        .pipe($.revReplace())
        .pipe(htmlFilter)
        .pipe($.htmlmin({
            removeEmptyAttributes: true,
            removeAttributeQuotes: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true
        }))
        .pipe(htmlFilter.restore)
        .pipe(gulp.dest(path.join(config.paths.dist, '/pages/unsupportedbrowser')))
        .pipe($.size({ title: path.join(config.paths.dist, '/pages/unsupportedbrowser'), showFiles: true }));
});



/**
 * 处理字体
 */
gulp.task('fonts', function () {
    return gulp.src($.mainBowerFiles())
        .pipe($.filter('**/*.{eot,otf,svg,ttf,woff,woff2}'))
        .pipe($.flatten())
        .pipe(gulp.dest(path.join(config.paths.dist, '/fonts/')));
});


/**
 * 处理静态资源
 */
gulp.task('assets', function () {
    var fileFilter = $.filter(function (file) {
        return file.stat.isFile();
    });

    return gulp.src([
        path.join(config.paths.src, '/assets/**/*'),
        path.join('!' + config.paths.src, '/**/*.md')
    ])
        .pipe(fileFilter)
        .pipe(gulp.dest(path.join(config.paths.dist, '/')));
});

/**
 * 处理本地数据
 */
gulp.task('data', function () {
    var fileFilter = $.filter(function (file) {
        return file.stat.isFile();
    });

    return gulp.src([
        path.join(config.paths.src, '/data/'),
        path.join("!"+config.paths.src, '/data/**/*.md')
    ])
        .pipe(fileFilter)
        .pipe(gulp.dest(path.join(config.paths.dist, '/')));
});

/**
 * 清除发布目录dist和临时目录tmp
 */
gulp.task('clear', function () {
    return $.del([path.join(config.paths.dist, '/'), path.join(config.paths.tmp, '/')]);
});

/**
 * 打包任务
 */
gulp.task('build', ['indexhtml','shopshtml', 'assets']);