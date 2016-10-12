/**
 * Created by Administrator on 2016/10/10.
 */
(function() {
    'use strict';
    var list = {
        "list": [
            {
                "display": "1",
                "hasson": "1",
                "id": 1,
                "menuname": "全部菜单",
                "parentid": 0,
                "parentids": "0",
                "sort": 0
            },
            {
                "display": "1",
                "hasson": "1",
                "id": 2,
                "menuname": "首页",
                "parentid": 1,
                "parentids": "0,1",
                "sort": 200
            },
            {
                "display": "1",
                "hasson": "1",
                "id": 3,
                "menuname": "店铺管理",
                "parentid": 1,
                "parentids": "0,1",
                "sort": 300
            },
            {
                "display": "1",
                "hasson": "1",
                "id": 4,
                "menuname": "商品管理",
                "parentid": 1,
                "parentids": "0,1",
                "sort": 400
            },
            {
                "display": "1",
                "hasson": "1",
                "id": 5,
                "menuname": "订单管理",
                "parentid": 1,
                "parentids": "0,1",
                "sort": 500
            },
            {
                "display": "1",
                "hasson": "1",
                "id": 6,
                "menuname": "用户管理",
                "parentid": 1,
                "parentids": "0,1",
                "sort": 600
            },
            {
                "display": "1",
                "hasson": "1",
                "id": 7,
                "menuname": "售后服务",
                "parentid": 1,
                "parentids": "0,1",
                "sort": 700
            },
            {
                "display": "1",
                "hasson": "1",
                "id": 8,
                "menuname": "个人设置",
                "parentid": 1,
                "parentids": "0,1",
                "sort": 700
            },
            {
                "display": "1",
                "hasson": "1",
                "id": 9,
                "menuname": "系统设置",
                "parentid": 1,
                "parentids": "0,1",
                "sort": 800
            },
            {
                "display": "1",
                "hasson": "1",
                "id": 10,
                "menuname": "个人中心",
                "parentid": 1,
                "parentids": "0,1",
                "sort": 900
            },
            {
                "display": "1",
                "hasson": "0",
                "href": "/sys/index",
                "id": 201,
                "menuname": "今日提醒",
                "parentid": 2,
                "parentids": "0,1,2",
                "permission": "sys:index:view",
                "sort": 10
            },
            {
                "display": "1",
                "hasson": "0",
                "href": "/sys/index/count",
                "id": 202,
                "menuname": "今日统计",
                "parentid": 2,
                "parentids": "0,1,2",
                "permission": "sys:index:count",
                "sort": 20
            },
            {
                "display": "1",
                "hasson": "0",
                "href": "/sys/index/allcount",
                "id": 203,
                "menuname": "全部统计",
                "parentid": 2,
                "parentids": "0,1,2",
                "permission": "sys:index:allcount",
                "sort": 30
            },
            {
                "display": "1",
                "hasson": "0",
                "href": "/sys/store",
                "icon": "list",
                "id": 301,
                "menuname": "店铺列表",
                "parentid": 3,
                "parentids": "0,1,3",
                "permission": "sys:store:view",
                "sort": 10
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/store/add",
                "icon": "plus",
                "id": 302,
                "menuname": "开通店铺",
                "parentid": 3,
                "parentids": "0,1,3",
                "permission": "sys:store:add",
                "sort": 20
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/store/edit",
                "icon": "edit",
                "id": 303,
                "menuname": "审核店铺",
                "parentid": 302,
                "parentids": "0,1,3,302",
                "permission": "sys:store:edit",
                "sort": 30
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/store/disable",
                "icon": "remove",
                "id": 304,
                "menuname": "查封店铺",
                "parentid": 3,
                "parentids": "0,1,3",
                "permission": "sys:store:remove",
                "sort": 40
            },
            {
                "display": "1",
                "hasson": "0",
                "href": "/sys/product",
                "icon": "list",
                "id": 401,
                "menuname": "商品列表",
                "parentid": 4,
                "parentids": "0,1,4",
                "permission": "sys:product:view",
                "sort": 10
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/product/add",
                "icon": "plus",
                "id": 402,
                "menuname": "添加商品",
                "parentid": 4,
                "parentids": "0,1,4",
                "permission": "sys:product:add",
                "sort": 20
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/product/edit",
                "icon": "edit",
                "id": 403,
                "menuname": "修改商品",
                "parentid": 4,
                "parentids": "0,1,4",
                "permission": "sys:product:edit",
                "sort": 30
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/product/putdown",
                "icon": "remove-sign",
                "id": 404,
                "menuname": "商品下架",
                "parentid": 4,
                "parentids": "0,1,4",
                "permission": "sys:product:putdown",
                "sort": 40
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/product/putup",
                "icon": "check",
                "id": 405,
                "menuname": "商品上架",
                "parentid": 4,
                "parentids": "0,1,4",
                "permission": "sys:product:putup",
                "sort": 50
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/product/remove",
                "icon": "remove",
                "id": 406,
                "menuname": "删除商品",
                "parentid": 4,
                "parentids": "0,1,4",
                "permission": "sys:product:remove",
                "sort": 60
            },
            {
                "display": "1",
                "hasson": "0",
                "href": "/sys/category",
                "icon": "filter",
                "id": 407,
                "menuname": "类目管理",
                "parentid": 4,
                "parentids": "0,1,4",
                "permission": "sys:category:view",
                "sort": 70
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/category/add",
                "icon": "plus",
                "id": 408,
                "menuname": "添加类目",
                "parentid": 4,
                "parentids": "0,1,4",
                "permission": "sys:category:add",
                "sort": 80
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/category/edit",
                "icon": "edit",
                "id": 409,
                "menuname": "编辑类目",
                "parentid": 4,
                "parentids": "0,1,4",
                "permission": "sys:category:edit",
                "sort": 90
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/category/remove",
                "icon": "remove",
                "id": 410,
                "menuname": "删除类目",
                "parentid": 4,
                "parentids": "0,1,4",
                "permission": "sys:category:remove",
                "sort": 100
            },
            {
                "display": "1",
                "hasson": "0",
                "href": "/sys/order",
                "icon": "list",
                "id": 501,
                "menuname": "订单列表",
                "parentid": 5,
                "parentids": "0,1,5",
                "permission": "sys:order:view",
                "sort": 10
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/order/detail",
                "icon": "exclamation-sign",
                "id": 502,
                "menuname": "订单详情",
                "parentid": 5,
                "parentids": "0,1,5",
                "permission": "sys:order:detail",
                "sort": 20
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/order/cancel",
                "icon": "remove-sign",
                "id": 503,
                "menuname": "取消订单",
                "parentid": 5,
                "parentids": "0,1,5",
                "permission": "sys:order:cancel",
                "sort": 30
            },
            {
                "display": "1",
                "hasson": "0",
                "href": "/sys/member",
                "icon": "user",
                "id": 601,
                "menuname": "用户列表",
                "parentid": 6,
                "parentids": "0,1,6",
                "permission": "sys:member:view",
                "sort": 10
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/member/add",
                "icon": "plus",
                "id": 602,
                "menuname": "添加用户",
                "parentid": 6,
                "parentids": "0,1,6",
                "permission": "sys:member:add",
                "sort": 20
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/member/edit",
                "icon": "edit",
                "id": 603,
                "menuname": "编辑用户",
                "parentid": 6,
                "parentids": "0,1,6",
                "permission": "sys:member:edit",
                "sort": 30
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/member/reset",
                "icon": "repeat",
                "id": 604,
                "menuname": "重置密码",
                "parentid": 6,
                "parentids": "0,1,6",
                "permission": "sys:member:reset",
                "sort": 40
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/member/detail",
                "icon": "exclamation-sign",
                "id": 605,
                "menuname": "用户详情",
                "parentid": 6,
                "parentids": "0,1,6",
                "permission": "sys:member:detail",
                "sort": 50
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/member/address",
                "icon": "plane",
                "id": 606,
                "menuname": "收货地址",
                "parentid": 6,
                "parentids": "0,1,6",
                "permission": "sys:member:address",
                "sort": 60
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/member/enable",
                "icon": "eye-open",
                "id": 607,
                "menuname": "启用用户",
                "parentid": 6,
                "parentids": "0,1,6",
                "permission": "sys:member:enable",
                "sort": 70
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/member/disable",
                "icon": "eye-close",
                "id": 608,
                "menuname": "禁用用户",
                "parentid": 6,
                "parentids": "0,1,6",
                "permission": "sys:member:disable",
                "sort": 80
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/member/remove",
                "icon": "remove",
                "id": 609,
                "menuname": "删除用户",
                "parentid": 6,
                "parentids": "0,1,6",
                "permission": "sys:member:remove",
                "sort": 90
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/member/improve",
                "icon": "arrow-up",
                "id": 610,
                "menuname": "用户进步",
                "parentid": 6,
                "parentids": "0,1,6",
                "permission": "sys:member:improve",
                "sort": 100
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/member/asset",
                "icon": "gift",
                "id": 611,
                "menuname": "用户财富",
                "parentid": 6,
                "parentids": "0,1,6",
                "permission": "sys:member:asset",
                "sort": 110
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/member/sns",
                "icon": "fullscreen",
                "id": 612,
                "menuname": "用户社交",
                "parentid": 6,
                "parentids": "0,1,6",
                "permission": "sys:member:sns",
                "sort": 120
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/member/import",
                "icon": "download-alt",
                "id": 613,
                "menuname": "导入用户",
                "parentid": 6,
                "parentids": "0,1,6",
                "permission": "sys:member:import",
                "sort": 130
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/member/export",
                "icon": "share",
                "id": 614,
                "menuname": "导出用户",
                "parentid": 6,
                "parentids": "0,1,6",
                "permission": "sys:member:export",
                "sort": 140
            },
            {
                "display": "1",
                "hasson": "0",
                "href": "/sys/server",
                "icon": "th-large",
                "id": 701,
                "menuname": "服务列表",
                "parentid": 7,
                "parentids": "0,1,7",
                "permission": "sys:server:view",
                "sort": 10
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/server/add",
                "icon": "plus",
                "id": 702,
                "menuname": "添加服务",
                "parentid": 7,
                "parentids": "0,1,7",
                "permission": "sys:server:add",
                "sort": 20
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/server/edit",
                "icon": "edit",
                "id": 703,
                "menuname": "编辑服务",
                "parentid": 7,
                "parentids": "0,1,7",
                "permission": "sys:server:edit",
                "sort": 30
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/server/remove",
                "icon": "remove",
                "id": 704,
                "menuname": "删除服务",
                "parentid": 7,
                "parentids": "0,1,7",
                "permission": "sys:server:remove",
                "sort": 40
            },
            {
                "display": "1",
                "hasson": "0",
                "href": "/sys/level",
                "icon": "th",
                "id": 801,
                "menuname": "支付账户",
                "parentid": 8,
                "parentids": "0,1,8",
                "permission": "sys:level:view",
                "sort": 10
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/level/add",
                "icon": "plus",
                "id": 802,
                "menuname": "添加级别",
                "parentid": 8,
                "parentids": "0,1,8",
                "permission": "sys:level:add",
                "sort": 20
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/level/edit",
                "icon": "edit",
                "id": 803,
                "menuname": "编辑级别",
                "parentid": 8,
                "parentids": "0,1,8",
                "permission": "sys:level:edit",
                "sort": 30
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/level/remove",
                "icon": "remove",
                "id": 804,
                "menuname": "删除级别",
                "parentid": 8,
                "parentids": "0,1,8",
                "permission": "sys:level:remove",
                "sort": 40
            },
            {
                "display": "1",
                "hasson": "0",
                "href": "/sys/menu",
                "icon": "th",
                "id": 805,
                "menuname": "菜单管理",
                "parentid": 8,
                "parentids": "0,1,8",
                "permission": "sys:menu:view",
                "sort": 50
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/menu/add",
                "icon": "plus",
                "id": 806,
                "menuname": "添加菜单",
                "parentid": 8,
                "parentids": "0,1,8",
                "permission": "sys:menu:add",
                "sort": 60
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/menu/edit",
                "icon": "edit",
                "id": 807,
                "menuname": "编辑菜单",
                "parentid": 8,
                "parentids": "0,1,8",
                "permission": "sys:menu:edit",
                "sort": 70
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/menu/remove",
                "icon": "remove",
                "id": 808,
                "menuname": "删除菜单",
                "parentid": 8,
                "parentids": "0,1,8",
                "permission": "sys:menu:remove",
                "sort": 80
            },
            {
                "display": "1",
                "hasson": "0",
                "href": "/sys/role",
                "icon": "flag",
                "id": 809,
                "menuname": "角色管理",
                "parentid": 8,
                "parentids": "0,1,8",
                "permission": "sys:role:view",
                "sort": 90
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/role/add",
                "icon": "plus",
                "id": 810,
                "menuname": "添加角色",
                "parentid": 8,
                "parentids": "0,1,8",
                "permission": "sys:role:add",
                "sort": 100
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/role/edit",
                "icon": "edit",
                "id": 811,
                "menuname": "编辑角色",
                "parentid": 8,
                "parentids": "0,1,8",
                "permission": "sys:role:edit",
                "sort": 110
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/role/assign",
                "icon": "ok-circle",
                "id": 812,
                "menuname": "分配角色",
                "parentid": 8,
                "parentids": "0,1,8",
                "permission": "sys:role:assign",
                "sort": 120
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/role/remove",
                "icon": "remove",
                "id": 813,
                "menuname": "删除角色",
                "parentid": 8,
                "parentids": "0,1,8",
                "permission": "sys:role:remove",
                "sort": 130
            },
            {
                "display": "1",
                "hasson": "0",
                "href": "/sys/area",
                "icon": "list",
                "id": 814,
                "menuname": "区域列表",
                "parentid": 8,
                "parentids": "0,1,8",
                "permission": "sys:area:view",
                "sort": 140
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/area/add",
                "icon": "plus",
                "id": 815,
                "menuname": "添加区域",
                "parentid": 8,
                "parentids": "0,1,8",
                "permission": "sys:area:add",
                "sort": 150
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/area/edit",
                "icon": "edit",
                "id": 816,
                "menuname": "编辑区域",
                "parentid": 8,
                "parentids": "0,1,8",
                "permission": "sys:area:edit",
                "sort": 160
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/area/remove",
                "icon": "remove",
                "id": 817,
                "menuname": "删除区域",
                "parentid": 8,
                "parentids": "0,1,8",
                "permission": "sys:area:remove",
                "sort": 170
            },
            {
                "display": "1",
                "hasson": "0",
                "href": "/sys/dict",
                "icon": "book",
                "id": 818,
                "menuname": "字典管理",
                "parentid": 8,
                "parentids": "0,1,8",
                "permission": "sys:dict:view",
                "sort": 180
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/dict/add",
                "icon": "plus",
                "id": 819,
                "menuname": "添加字典",
                "parentid": 8,
                "parentids": "0,1,8",
                "permission": "sys:dict:add",
                "sort": 190
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/dict/edit",
                "icon": "edit",
                "id": 820,
                "menuname": "编辑字典",
                "parentid": 8,
                "parentids": "0,1,8",
                "permission": "sys:dict:edit",
                "sort": 200
            },
            {
                "display": "0",
                "hasson": "0",
                "href": "/sys/dict/remove",
                "icon": "remove",
                "id": 821,
                "menuname": "删除字典",
                "parentid": 8,
                "parentids": "0,1,8",
                "permission": "sys:dict:remove",
                "sort": 210
            },
            {
                "display": "1",
                "hasson": "0",
                "href": "/sys/log",
                "icon": "filter",
                "id": 822,
                "menuname": "日志查询",
                "parentid": 8,
                "parentids": "0,1,8",
                "permission": "sys:log:view",
                "sort": 220
            },
            {
                "display": "1",
                "hasson": "0",
                "href": "/sys/member/info",
                "icon": "user",
                "id": 901,
                "menuname": "个人信息",
                "parentid": 9,
                "parentids": "0,1,9",
                "sort": 10
            },
            {
                "display": "1",
                "hasson": "0",
                "href": "/sys/member/modpwd",
                "icon": "leaf",
                "id": 902,
                "menuname": "修改密码",
                "parentid": 9,
                "parentids": "0,1,9",
                "sort": 20
            },
            {
                "display": "1",
                "hasson": "0",
                "href": "/sys/member/resetpwd",
                "icon": "wrench",
                "id": 903,
                "menuname": "重置密码",
                "parentid": 9,
                "parentids": "0,1,9",
                "sort": 30
            }
        ]
    }


    var permissionList;
    angular
        .module('shopApp')
        .run(['permissions', function(permissions) {
            permissions.setPermissions(permissionList);
        }])
        .factory('permissions', ['$rootScope', function ($rootScope) {
            var permissionList;
            return {
                setPermissions: function(permissions) {
                    permissionList = permissions;
                    $rootScope.$broadcast('permissionsChanged')
                }
            };
        }])
        .run(['$rootScope', '$previousState', function($rootScope, $previousState) {
            //back button function called from back button's ng-click="back()"
            $rootScope.back = function(router) {//实现返回的函数
                // 如果这2个值为空，一定是当前页面刷新，需要手动返回上一页
                var state,params;
                if(_.isEmpty($previousState.get().name) && _.isEmpty($previousState.get().params)){
                    // 只设置状态，不设置参数给默认值为对象，防止路由跳转BUG
                    params = angular.extend({}, router.params);
                    state = router.name;
                }else{
                    state = $previousState.get().name;
                    params = undefined;
                }
                $previousState.go(state, params);
            };
        }])
        .run(['$rootScope', '$state', '$log', function($rootScope, $state, $log){
            $rootScope.accessControl = list;
            $rootScope.userPermissionList = permissionList;
            var competenceRouters = getCompetenceRouters($rootScope.userPermissionList.navConfig);
            $rootScope.$state = $state;
            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
                /*$log.debug('event',event);
                 $log.debug('toState',toState);
                 $log.debug('toParams',toParams);
                 $log.debug('fromState',fromState);
                 $log.debug('fromParams',fromParams);

                 $log.debug('competenceRouters',competenceRouters);*/
                if(angular.isArray(competenceRouters)){
                    var name;
                    if (toState.name.indexOf(".") > -1){
                        name = toState.name.slice(0, toState.name.indexOf("."))
                    }else{
                        name = toState.name;
                    }
                    if(angular.isUndefined(name)){
                        return $state.go('home');
                    }
                    if(_.indexOf(competenceRouters, name) < 0){
                        event.preventDefault();
                        return  _.isEmpty(fromState.name) ? $state.go('home') : false;
                    }
                }
            });
            /**
             * 获取路由权限，跳转权限
             * @param data        后台返回权限列表
             * @returns {Array}   返回可以跳转的路由
             */
            function getCompetenceRouters(data){
                var results = ['home'];
                angular.forEach(data, function(key){
                    angular.forEach(key.preference, function(key2){
                        results.push(key2);
                    });
                });
                return results;
            }

            $rootScope.$on('$stateNotFound', function(event, unfoundState){
                $log.error('请求页面未找到: ' + unfoundState);
            });
        }]);



    /**
     * 手动启动angular
     * 保证在Angular运行之前获取到permission的映射关系
     */
    angular.element(document).ready(function() {
        permissionList = {};
        angular.bootstrap(document, ['shopApp']);
    });

})();