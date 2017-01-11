/**
 * Created by abhaydoke on 10/01/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController",WebsiteListController);

    function WebsiteListController($routeParams,WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.userId;

        function init(){
            console.log(vm.userId);
            vm.websites = WebsiteService.findWebsitesForUserId($routeParams.userId);
        }

        init();

        
    }
})();