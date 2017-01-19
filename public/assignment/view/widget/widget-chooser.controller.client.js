/**
 * Created by abhaydoke on 17/01/17.
 */

(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetChooserController",WidgetChooserController);
    console.log("WidgetChooserController");

    function WidgetChooserController(WidgetService,$routeParams,$location){
        console.log("WidgetChooserController");
        var vm =this;
        vm.createWidget = createWidget;

        //"/user/:userId/website/:websiteId/page/:pageId/widget/new"
        vm.userId = $routeParams.userId;
        vm.pageId = $routeParams.pageId;


        function createWidget(widgetType){
            console.log("createWidget controller");
            WidgetService
                .createWidget(vm.userId,vm.pageId,widgetType)
                .then(function(response){
                    console.log(response);
                    if(response){
                        $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget");
                    }
                    else{
                        vm.error("Unable to create widget");
                    }

                })
        }
    }
})();