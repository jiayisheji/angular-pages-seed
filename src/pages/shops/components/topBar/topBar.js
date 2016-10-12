/**
 * Created by Administrator on 2016/10/11.
 */
(function() {
    'use strict';

    angular
        .module('shopApp')
        .directive('cbShopTopbar', cbShopTopbar)
        .directive('cbShopTopbarSearch', cbShopTopbarSearch);

    /** @ngInject */
    function topBar() {
        var directive = {
            restrict: 'AE',
            replace: true,
            templateUrl: 'components/topBar/topBar.html',
            scope: {
                creationDate: '='
            },
            controller: topbarController,
            controllerAs: 'tb',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function topbarController() {
            var vm = this;
            vm.logout = function(){
                alert(1)
            }
            vm.list = [
                {
                    "_id": 1,
                    "title": "您有新的服务订单。",
                    "date": new Date()
                },
                {
                    "_id": 2,
                    "title": "XXXX订单已完成，待收款。",
                    "date": new Date()
                },
                {
                    "_id": 3,
                    "title": "XXXX订单已完成，待收款。",
                    "date": new Date()
                }
            ]
        }
    }

    /** @ngInject */
    function cbShopTopbar($timeout, $http, $rootScope, $sce, viewFrameworkSetting, viewFrameworkConfigData){
        /**
         * 默认数据
         * @type {any}
         */
        var DEFAULT_DATA = viewFrameworkConfigData;

        /**
         * 请求数据
         * @param scope 绑定视图
         */
        function requestData(scope) {
            $http({
                method: "get",
                url: "components/topbar/topbar_data.json"
            }).then(function (t) {
                t.status == "200" && callback(t.data, scope)
            }, function (t) {
                c(DEFAULT_DATA.TOPBAR_DEFAULT_CONS, scope)
            })
        }

        /**
         * 请求数据回调函数
         * @param data  返回的数据
         * @param scope 绑定视图
         */
        function callback(data, scope) {
            $timeout(function () {
                scope.navLinks = navLinks(data.navLinks, scope, data.account);
                scope.messages = data.messages || null;
                scope.account = data.account || {};
                scope.requestUrl = scope.navLinks && scope.navLinks.requestUrl || DEFAULT_DATA.requestUrl;
            }, 0);
        }

        /**
         * 截取字符串长度
         * @param str   字符串
         * @param len   截取长度
         * @returns {string}  截取后的字符串
         */
        function ellipsis(str, len) {
            return str && str.length > len ? str.substring(0, len - 1) + "..." : str
        }

        function navLinks(e, t, n) { // navLinks scope account
            t.topbarNavLinks && jQuery.extend(true, e, t.topbarNavLinks);
            if (!e){
                return {};
            }
            angular.forEach(e, function (e, n) {
                e && (e.navRedirect && (e.href = d(e.href, t)),
                e.links && angular.isArray(e.links) && angular.forEach(e.links, function (e, n) {
                    e && e.navRedirect && (e.href = d(e.href, t))
                }));
            });
            var r = e.user;
            r && (r.links && (angular.forEach(r.links, function (e, t) {
                var n = e.href;
                angular.isString(n) && /oauth_callback=$/.test(n) && (e.href = v(n), a = t, f = n)
            }),
            r.linkMap && f && n && n.currentStructure && r.links.splice(a, 1),
            viewFrameworkSetting && viewFrameworkSetting.config && viewFrameworkSetting.config.ramTag && r.links.unshift({
                href: r.tagLink ? r.tagLink : "",
                target: "_self",
                text: "TAG: " + ellipsis(viewFrameworkSetting.config.ramTag, 20)
            })),
            r.linkMap && r.linkMap.signout && (r.linkMap.signout.href = v(r.linkMap.signout.href)));
            var i = e.qrcode;
            i && (i.text = $sce.trustAsHtml(i.text),
                i.title = $sce.trustAsHtml(i.title));
            var l = e.help;
            l && (l.show = !1);
            return e;
        }

        function d(e, t) {
            return e + "&productId=" + t.productId
        }

        function v(e) {
            return e + encodeURIComponent(window.location.href)
        }

        function b(n) {
            $http({
                method: "jsonp",
                url: n.requestUrl.updateMessageInfo,
                params: {callback: "JSON_CALLBACK", timestamp: (new Date).getTime()}
            }).then(function (t) {
                var r = t.data;
                r && r.code == "200" && r.data && e(function () {
                    n.messageInfo = r.data
                }, 0)
            })
        }

        var a, f;
        return {
            restrict: "A",
            replace: true,
            scope: {
                workorderId: "=",
                productId: "=",
                topbarNavLinks: "="
            },
            templateUrl: "components/topBar/topBar.html",
            link: function(scope, iElement, iAttrs) {
                //requestData(scope);
                scope.navLinks = viewFrameworkConfigData.TOPBAR_DEFAULT_CONS.navLinks;
                scope.navLinks.user.account = $rootScope.userPermissionList.account;
                scope.messages = {
                    "messageList": [
                        {
                            "className": "订单服务",
                            "formatCreatedTime": "2016-06-14 17:07",
                            "msgId": 3600937450,
                            "title": "您有新的服务订单"
                        },
                        {
                            "className": "收款消息",
                            "formatCreatedTime": "2016-06-14 13:30",
                            "msgId": 3600936862,
                            "title": "XXXX订单已完成，待收款"
                        },
                        {
                            "className": "系统消息",
                            "formatCreatedTime": "2016-06-09 12:18",
                            "msgId": 3600921888,
                            "title": "修改密码成功，妥善保管"
                        }
                    ],
                    "total": 3
                };
                $rootScope.$on("topbarUpdateMessageInfo", function () {
                    b(scope);
                });
                $rootScope.$on("$stateChangeSuccess", function (n, r, i, s, o) {
                    $timeout(function () {
                        if (!scope.navLinks) {
                            return ;
                        }
                        var e = scope.navLinks.userLink;
                        if (e && e.links && a != undefined && f != undefined) {
                            var n = e.links[a];
                            n && (n.href = v(f))
                        }
                        e && e.linkMap && e.linkMap.signout && (e.linkMap.signout.href = v(f))
                    }, 0);
                });
                scope.readMessage = function () {
                    $timeout(function () {
                        b(scope);
                    }, 2000);
                };
            }
        }
    }

    /** @ngInject */
    function cbShopTopbarSearch($timeout){
        return {
            restrict: "A",
            scope: {
                searchLink: "="
            },
            templateUrl: "components/topBar/topBarSearch.html",
            transclude: false,
            link: function (scope, iElement, iAttrs) {
                var iEle = angular.element(iElement),
                    doc = angular.element(document);
                // 点击document关闭输入框
                function close(obj) {
                    angular.element(obj.target).closest(".m-topbar-search").length == 0 && $timeout(function () {
                        scope.dropdownOpen = false;
                    })
                }
                scope.model = {askInput: ""};
                iAttrs.$observe("searchUrl", function (e) {
                    e && (scope.searchUrl = e)
                });
                iEle.on("keypress", ".topbar-search-ask", function (e) {
                    e.keyCode == 13 && window.open(scope.searchUrl + scope.model.askInput, "_blank");
                });
                scope.isActive = false;
                scope.activeInput = function () {
                    scope.isActive = true;
                };
                scope.inactiveInput = function () {
                    $timeout(function () {
                        scope.isActive = false;
                    }, 150);
                };
                scope.searchClick = function (e) {
                    scope.isActive || (scope.isActive = true, iEle.find(".topbar-search-ask").focus(), e.preventDefault())
                };
                scope.dropdownOpen = false;
                scope.toggleDropdownStatus = function (e) {
                    e.preventDefault();
                    scope.dropdownOpen = !scope.dropdownOpen;
                    scope.dropdownOpen || doc.off("click", close);
                };
                doc.on("click", close);
                scope.$on("$destroy", function () {
                    doc.off("click", close)
                })
            }
        }
    }
})();