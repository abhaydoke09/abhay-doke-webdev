/**
 * Created by abhaydoke on 11/01/17.
 */

(function(){
    angular
        .module("WebAppMaker")
        .controller("EditPageController",EditPageController);

    function EditPageController($routeParams,PageService,$location){
        var vm = this;



        vm.updatePage = updatePage;
        vm.deletePage = deletePage;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        vm.pageId = $routeParams.pageId;

        function init(){

            var pageResult = PageService.findPageById(vm.pageId);
            if(pageResult){
                console.log(pageResult);
                vm.name = pageResult.name;
                vm.title = pageResult.description;
            }
            else{
                console.log("user:"+vm.userId);
                $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page");
            }

        }
        init();
       function updatePage(name,title){
            var result = PageService.updatePage(name,title);

            if(result){
                console.log("user:"+vm.userId);
                $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page");
            }
            else{
                vm.error = "Unable to edit page!!";
            }
       }

       function deletePage(pageId){
           console.log(pageId);
            var result = PageService.deletePage(pageId);

           if(result){
               console.log(vm.userId);
               $location.url("#/user/{{vm.userId}}/website/{{vm.websiteId}}/page");
           }
           else{
               vm.error = "Unable to edit page!!";
           }
       }


    }
})();