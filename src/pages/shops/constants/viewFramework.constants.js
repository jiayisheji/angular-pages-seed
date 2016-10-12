/**
 * Created by Administrator on 2016/10/11.
 */
(function() {
    'use strict';

    angular
        .module('shopApp')
        .constant('viewFrameworkConfigData', {
            TOPBAR_DEFAULT_CONS: {
                "navLinks": {
                    "help": {
                        "id": "help",
                        "links": [
                            {
                                "href": "http://help.aliyun.com",
                                "id": "help",
                                "target": "_blank",
                                "text": "帮助与文档"
                            },
                            {
                                "href": "http://bbs.aliyun.com",
                                "id": "bbs",
                                "target": "_blank",
                                "text": "论坛"
                            },
                            {
                                "href": "http://yq.aliyun.com/articles/?&sort=top",
                                "id": "blog",
                                "target": "_blank",
                                "text": "博客"
                            }
                        ],
                        "show": false,
                        "text": "帮助与文档"
                    },
                    "logo": {
                        "href": "http://www.baidu.com",
                        "icon": "icon-logo1 icon-logo-new",
                        "show": true,
                        "target": "_blank"
                    },
                    "message": {
                        "blankText": "您暂时没有公告消息",
                        "href": "https://msc.console.aliyun.com/#/innerMsg/unread/0",
                        "messageUrl": "https://msc.console.aliyun.com/#/innerMsg/allDetail/",
                        "show": true,
                        "subscribeLink": "https://notifications.console.aliyun.com/#/subscribeMsg",
                        "subscribeTitle": "消息接收管理",
                        "text": "查看更多",
                        "title": "站内消息通知"
                    },
                    "qrcode": {
                        "href": "http://www.aliyun.com/app",
                        "icon": "icon-qrcode",
                        "image": "https://img.alicdn.com/tps/TB1ArlALpXXXXXhXXXXXXXXXXXX-100-100.png",
                        "show": false,
                        "text": "手机版",
                        "title": "扫码下载手机阿里云"
                    },
                    "requestUrl": {
                        "updateMessageInfo": "//home.console.aliyun.com/center/updateMessageInfo.js"
                    },
                    "search": {
                        "href": "http://www.aliyun.com/s?k=",
                        "placeholder": "搜索",
                        "show": false,
                        "text": "搜索"
                    },

                    "user": {
                        "account": {},
                        "show": true,
                        "links": [
                            {
                                "href": "https://account.aliyun.com/logout/logout.htm?oauth_callback=",
                                "target": "_self",
                                "text": "退出"
                            }
                        ]
                    }
                }
            },
            SIDEBAR_DEFAULT_CONS: {
                navConfig: [
                    {
                        category: {
                            categoryId:"store",
                            title: "店铺管理",
                            customize: false,
                            customizeTitle: "自定义店铺管理",
                            folded: false,
                            show: true,
                            showManageButton: true
                        },
                        items: [
                            {
                                icon: "icon-account-2",
                                productId: "basic",
                                name: "店铺信息管理",
                                link: "basic",
                                openStatus: true
                            }
                        ],
                        preference: ["basic"]
                    },
                    {
                        category: {
                            categoryId:"product",
                            title: "产品管理",
                            customize: false,
                            customizeTitle: "自定义产品管理",
                            folded: false,
                            show: true,
                            showManageButton: true
                        },
                        items: [
                            {
                                icon: "icon-account-2",
                                productId: "commodity",
                                name: "商品管理",
                                link: "commodity",
                                openStatus: true
                            },
                            {
                                icon: "icon-account-2",
                                productId: "serviceProject",
                                name: "服务项目管理",
                                link: "serviceProject",
                                openStatus: true
                            },
                            {
                                icon: "icon-account-2",
                                productId: "package",
                                name: "套餐管理",
                                link: "package",
                                openStatus: true
                            }
                        ],
                        preference: ["commodity", "serviceProject", "package"]
                    },
                    {
                        category: {
                            categoryId:"sales",
                            title: "销售管理",
                            customize: false,
                            customizeTitle: "自定义销售管理",
                            folded: false,
                            show: true,
                            showManageButton: true
                        },
                        items:[
                            {
                                icon: "icon-account-2",
                                productId: "serviceOrder",
                                name: "服务订单管理",
                                link: "serviceOrder",
                                openStatus: true
                            },
                            {
                                icon: "icon-account-2",
                                productId: "goodsOrders",
                                name: "商品订单管理",
                                link: "goodsOrders",
                                openStatus: true
                            }
                        ],
                        preference: ["serviceOrder", "goodsOrders"]
                    },
                    {
                        category: {
                            categoryId:"finance",
                            title: "财务管理",
                            customize: false,
                            customizeTitle: "自定义财务管理",
                            folded: false,
                            show: true,
                            showManageButton: true
                        },
                        items:[
                            {
                                icon: "icon-account-2",
                                productId: "financeAccounts",
                                name: "账户管理",
                                link: "financeAccounts",
                                openStatus: true
                            },
                            {
                                icon: "icon-account-2",
                                productId: "receivable",
                                name: "收款管理",
                                link: "receivable",
                                openStatus: true
                            },
                            {
                                icon: "icon-account-2",
                                productId: "refundable",
                                name: "退款管理",
                                link: "refundable",
                                openStatus: true
                            },
                            {
                                icon: "icon-account-2",
                                productId: "financeChart",
                                name: "财务报表",
                                link: "financeChart",
                                openStatus: true
                            }
                        ],
                        preference: ["financeAccounts", "receivable", "refundable", "financeChart"]
                    },
                    {
                        category: {
                            categoryId:"member",
                            title: "会员管理",
                            customize: false,
                            customizeTitle: "自定义会员管理",
                            folded: false,
                            show: true,
                            showManageButton: true
                        },
                        items: [
                            {
                                icon: "icon-account-2",
                                productId: "userManages",
                                name: "会员管理",
                                link: "userManages",
                                openStatus: true
                            }
                        ],
                        preference: ["userManages"]
                    },
                    {
                        category: {
                            categoryId:"supply",
                            title: "货源中心",
                            customize: false,
                            customizeTitle: "自定义会员管理",
                            folded: false,
                            show: true,
                            showManageButton: true
                        },
                        items: [
                            {
                                icon: "icon-account-2",
                                productId: "hardwareInstallOutbound",
                                name: "硬件出库安装",
                                link: "hardwareInstallOutbound",
                                openStatus: true
                            }
                        ],
                        preference: ["hardwareInstallOutbound"]
                    },
                    {
                        category: {
                            categoryId:"staffs",
                            title: "员工管理",
                            customize: false,
                            customizeTitle: "自定义员工管理",
                            folded: false,
                            show: true,
                            showManageButton: true
                        },
                        items: [
                            {
                                icon: "icon-account-2",
                                productId: "staffManages",
                                name: "员工管理",
                                link: "staffManages",
                                openStatus: true
                            },
                            {
                                icon: "icon-account-2",
                                productId: "roleManages",
                                name: "角色管理",
                                link: "roleManages",
                                openStatus: true
                            }
                        ],
                        preference: ["staffManages", "roleManages"]
                    },
                    {
                        category: {
                            categoryId:"system",
                            title: "系统管理",
                            customize: false,
                            customizeTitle: "自定义系统管理",
                            folded: false,
                            show: true,
                            showManageButton: true
                        },
                        items: [
                            {
                                icon: "icon-account-2",
                                productId: "changePassword",
                                name: "修改密码",
                                link: "changePassword",
                                openStatus: true
                            }
                        ],
                        preference: ["changePassword"]
                    }
                ],
                requestUrl: {setUserPreference: ""} //设置自定义菜单地址
            },
            SIDEBAR_FOLD_COOKIENAME: "sidebar-type",
            SIDEBAR_FOLD_COOKIEDOMAIN: "http://localhost:3000/"
        })
        .factory('viewFrameworkHelper', viewFrameworkHelper)
        .factory('roleManagesAPI', ['$http', function($http){   //业主 get获取资料 post修改资料
            var doRequest = function(method, url,data){
                return $http({
                    method : method,
                    url : url,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    data: data
                })
            };
            return {
                get : function(){return doRequest('get','user/info/get')}
            }
        }]);

    function viewFrameworkHelper($cookieStore, viewFrameworkConfigData){
        var version, sidebar;

        /**
         * 初始化
         * @param e
         */
        function init(config) {
            var sidebarType;
            if(config){
                version = config.version;
                sidebar = config.sidebar;
                sidebarType = pullCookie();
                if(sidebarType){
                    config.sidebar = sidebarType;
                    sidebar = sidebarType;
                }
            }
        }

        /**
         * 获取当前侧边栏的状态
         */
        function getSidebarType() {
            var type = pullCookie() || sidebar;
            return type !== "mini" && type !== "full" && (type = "full"), type
        }

        /**
         * 返回侧边栏状态是否展开
         * @returns {boolean}
         */
        function isSidebarFold() {
            return getSidebarType() === "mini";
        }

        /**
         * 获取Cookie值 sidebar-type
         * @returns {*}
         */
        function pullCookie() {
            return $cookieStore.get(viewFrameworkConfigData.SIDEBAR_FOLD_COOKIENAME)
        }

        return {
            init: init,
            getCookie: $cookieStore.get,
            setCookie: $cookieStore.put,
            getSidebarType: getSidebarType,
            isSidebarFold: isSidebarFold
        }
    }
})();
