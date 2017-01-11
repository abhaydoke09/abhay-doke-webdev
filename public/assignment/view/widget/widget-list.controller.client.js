/**
 * Created by abhaydoke on 10/01/17.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetListController",WidgetListController);

        function WidgetListController($sce, $routeParams, WidgetService){
            var vm = this;
            var pageId = $routeParams.pageId;
            vm.getSafeHtml = getSafeHtml;
            vm.getSafeUrl = getSafeUrl;
            vm.userId = $routeParams.userId;
            vm.websiteId = $routeParams.websiteId;

            function init(){
                vm.widgets = WidgetService.findWidgetsForPageId(pageId);
            }
            init();

            function getSafeHtml(widget) {
                return $sce.trustAsHtml(widget.text);
            }

            function getSafeUrl(widget){
                var urlParts = widget.url.split("/");
                var id = urlParts[urlParts.length-1];
                var url = "https://youtube.com/embed/"+id;
                console.log(url);
                return $sce.trustAsResourceUrl(url);
            }

        }
})();