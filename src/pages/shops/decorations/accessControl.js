/**
 * Created by Administrator on 2016/10/11.
 */
(function() {
    'use strict';
    /**
     * 权限控制， 传递栏目id，如果id不存在就删除这个dom
     */
    angular
        .module('shopApp')
        .directive("cbAccessControl",cbAccessControl);

    /** @ngInject */
    function cbAccessControl($rootScope){
        return {
            restrict: 'A',
            scope: {},
            link: function(scope, iElement, iAttrs){
                var iEle = angular.element(iElement),
                    // 获取权限列表
                    accessList = $rootScope.accessControl,
                    // 获取当前权限id
                    permission = scope.$eval(iAttrs.cbAccessControl),
                    index = _.findIndex(accessList.list, {"id": permission});
                index < 0 && iEle.remove();
            }
        };
    }
})();