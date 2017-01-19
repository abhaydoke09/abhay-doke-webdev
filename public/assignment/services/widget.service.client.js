/**
 * Created by abhaydoke on 10/01/17.
 */

(function(){
    angular
        .module("WebAppMaker")
        .factory("WidgetService",WidgetService);


    function WidgetService($http){
        var api = {
            findWidgetsForPageId:findWidgetsForPageId,
            createWidget:createWidget,
            findWidgetById:findWidgetById
        }
        return api;

        function findWidgetsForPageId(pageId){
            var resultSet = [];
            console.log("find widgets for pageid");
            var url = "/api/page/"+pageId+"/widget";
            console.log(url);
            return $http.get(url);
            // for(var i in widgets){
            //     if(widgets.pageId===pageId){
            //         resultSet.push(widgets[i]);
            //     }
            // }
            // //return resultSet;
            // return widgets;
        }

        function createWidget(userId,pageId,widgetType){
            console.log(widgetType);
            var newWidget={
                widgetType:widgetType,
                pageId:pageId
            }
            return $http.post("/api/page/"+pageId+"/widget",newWidget);
        }

        function findWidgetById(widgetId){
            var url = "/api/widget/"+widgetId;
            console.log(url);
            return $http.get(url);
        }

    }

})();