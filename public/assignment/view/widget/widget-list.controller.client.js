/**
 * Created by abhaydoke on 10/01/17.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetListController",WidgetListController);

        function WidgetListController($sce, $routeParams, WidgetService){
            var vm = this;
            vm.pageId = $routeParams.pageId;
            vm.getSafeHtml = getSafeHtml;
            vm.getSafeUrl = getSafeUrl;
            vm.userId = $routeParams.userId;
            vm.websiteId = $routeParams.websiteId;

            function init(){
                 WidgetService
                    .findWidgetsForPageId(vm.pageId)
                    .then(function(response){
                        console.log(response);
                        vm.widgets = response.data;
                        $(".container")
                            .sortable({
                                axis:"y"
                            });
                    });
                console.log("printing all the widgets");
                console.log(vm.widgets);
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