# 开发目录

## 资源依赖说明

### vendor文件依赖bower

直接在页面里面引入依赖文件

因为首页在一级目录，为了方便管理，其他页面在三级目录各自文件夹下，所以引入资源文件路径有区别

#### 首页引入
../bower_components/

#### page页面引入
../../bower_components/

### 单页面文件放在本文件夹里面
单页面的js, scss, html

### pages/common/  
存放公共的js和scss供其他页面使用