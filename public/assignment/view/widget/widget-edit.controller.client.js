/**
 * Created by abhaydoke on 17/01/17.
 */

(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController",WidgetEditController);
    console.log("WidgetEditController");

    function WidgetEditController(WidgetService,$routeParams,$location){
        console.log("WidgetEditController");
        var vm =this;

        var widgetId = $routeParams.widgetId;
        //"/user/:userId/website/:websiteId/page/:pageId/widget/new"


       function init(){
           WidgetService
               .findWidgetById(widgetId)
               .then(function(response){
                   vm.widget = response.data;
               });
       }
       init();
    }
})();