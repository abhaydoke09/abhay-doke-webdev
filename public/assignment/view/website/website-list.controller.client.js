/**
 * Created by abhaydoke on 10/01/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController",WebsiteListController);

    function WebsiteListController($routeParams,WebsiteService) {
        var vm = this;

        function init(){

            vm.websites = WebsiteService.findWebsitesForUserId($routeParams.userId);
        }

        init();

        
    }
})();