/**
 * Created by abhaydoke on 11/01/17.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("PageListController",PageListController);


    function PageListController($routeParams,PageService) {
        var vm = this;
        vm.websiteId = $routeParams.websiteId;
        vm.userId = $routeParams.userId;
        function init(){
            console.log(vm.websiteId);
            vm.pages = PageService.findPageByWebsiteId($routeParams.websiteId);
            console.log(vm.pages);
        }

        init();


    }
})();