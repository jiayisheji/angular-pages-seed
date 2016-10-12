# angular-pages-seed
这是一个angular结合多页的应用，用户中心用的单页应用其他页面是多页应用

## 演示

## 安装

#### 安装Gulp
```sh
$ npm install gulp -g
```
#### 安装Bower
```sh
$ npm install bower -g
```
#### 安装npm包
```sh
$ npm install
```


## 支持浏览器

* Chrome
* Firefox
* IE8+
* Opera
* Safari

   
## 技术栈

 1. angular v1.2.29
 1.1 angular-cookies v1.2.29
 1.2 angular-animate v1.2.29
 1.3 angular-sanitize v1.2.29
 1.4 angular-ui-router v0.2.15
 2. jquery v1.11.3
 3. gulp 
 4. bower
 5. nodejs
        
    

## 目录结构说明

```
chebian/
 ├──.tmp/                      * 开发临时目录
 ├──gulp/                      * gulp task集合
 |   ├──.eslintrc              * js语法检查
 |   ├──config.js              * gulp配置
 |   ├──build.js               * 打包发布
 |   ├──inject.js              * 注入处理
 │   ├──service.js             * 开启本地服务器
 │   ├──watch.js               * 监听文件处理
 │   ├──styles.js              * 样式处理
 │   └──scripts.js             * 脚本处理
 │
 ├──src/                       * 开发目录
 |   ├──main.browser.ts        * our entry file for our browser environment
 │   │
 |   ├──index.html             * 网站首页
 │   │
 │   ├──data/                  * 开发临时数据
 │   │
 |   ├──vendor.ts              * our vendor file
 │   │
 │   ├──pages/                  * 网站其他页面
 │   │   ├──about/              * 关于我们
 │   │   ├──download/           * app下载
 │   │   ├──error/              * 异常页面
 │   │       ├──404.html          * 404错误
 │   │       ├──500.html          * 500错误
 │   │   ├──help/               * 帮助中心
 │   │   ├──unsupportedBrowser/ * 不支持浏览器提示
 │   │   ├──shopAuth/           * 商家入驻认证
 │   │   ├──signUp/             * 注册
 │   │       ├──index.html          * 注册页面
 │   │       ├──index.js            * 注册脚本
 │   │       ├──index.css           * 注册样式
 │   │   ├──signIn/             * 登录
 │   │       ├──index.html          * 登录页面
 │   │       ├──index.js            * 登录脚本
 │   │       ├──index.css           * 登录样式
 │   │   ├──shops/              * 商家
 │   │       ├──components/         * 组件型指令
 │   │       ├──decorations/        * 装饰器型指令
 │   │       ├──filters/            * 过滤器
 │   │       ├──constants/          * 常量
 │   │       ├──services/           * 服务
 │   │       ├──configs/            * 配置
 │   │          ├──config.js            * config阶段配置
 │   │          ├──router.js            * 路由配置
 │   │          ├──run.js               * run阶段配置
 │   │       ├──app/              * 详细页面
 │   │       ├──index.html          * 商家页面
 │   │       ├──index.css           * 商家样式
 │   │
 │   │
 │   └──assets/                * 静态资源
 │       ├──images/            * 网站图片
 │
 │
 ├──package.json               * NPM用于管理其依赖关系
 ├──assetsFile.json            * 打包资源依赖关系
 ├──.eslintrc                  * js语法检查
 ├──.bowerrc                   * bower配置文件
 ├──bower.json                 * bower用于管理其依赖关系
 ├──.gitignore                 * git不提交的文件
 └──gulpfile.js                * gulp配置文件

```

## 资源管理
assetsFile.json文件说明
```
{
  "name": "index",                               * 文件夹名字  
  "file": "/index.html",                         * 入口html页面
  "scss": "pages/index/index.scss",              * 入口scss页面
  "appjs": ["pages/index/*.js"],                 * 当前页面引入的js文件依赖，自动注入到页面
  "appcss": ["pages/index/*.css"]                * 当前页面引入的css文件依赖，自动注入到页面
}
```

## 其他说明




