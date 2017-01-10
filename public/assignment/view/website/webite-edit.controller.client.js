/**
 * Created by abhaydoke on 10/01/17.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController",EditWebsiteController);

        function EditWebsiteController($routeParams,$location,WebsiteService){
            var vm = this;
            vm.userId = $routeParams.userId;
            vm.websiteId = $routeParams.websiteId;
            vm.deleteWebsite = deleteWebsite;

            function deleteWebsite(websiteId){
                var result = WebsiteService.deleteWebsite(websiteId);
                if(result)
                {
                    $location.url("/user/{{vm.userId}}/website");
                }
                else{
                     vm.error = "Unable to delete website";
                }
            }
        }
})();