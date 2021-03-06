/**
 * Created by abhaydoke on 09/01/17.
 */
(function(){
    angular
        .module("WebAppMaker")
        .config(config);

    function config($routeProvider){
        $routeProvider
            .when("/",{
                templateUrl:"view/home.html"
            })
            .when("/flickr",{
                templateUrl:"view/widget/widget-flickr-search.view.client.html",
                controller:"FlickrImageSearchController",
                controllerAs:"model"
            })
            .when("/login",{
                templateUrl:"view/user/login.view.client.html",
                controller:"LoginController",
                controllerAs:"model"
            })
            .when("/register",{
                templateUrl:"view/user/register.view.client.html",
                controller:"RegisterController",
                controllerAs:"model"
            })
            .when("/user/:id",{
                templateUrl:"view/user/profile.view.client.html",
                controller:"ProfileController",
                controllerAs:"model"
            })
            .when("/user/:userId/website/:websiteId/page/new",{
                templateUrl:"view/page/page-new.view.client.html",
                controller:"NewPageController",
                controllerAs:"model"
            })
            .when("/user/:userId/website/new",{
                templateUrl:"view/website/website-new.view.client.html",
                controller:"NewWebsiteController",
                controllerAs:"model"
            })
            .when("/user/:userId/website/:websiteId/page/:pageId",{
            templateUrl:"view/page/page-edit.view.client.html",
            controller:"EditPageController",
            controllerAs:"model"
            })
            .when("/user/:userId/website/:websiteId/page",{
                templateUrl:"view/page/page-list.view.client.html",
                controller:"PageListController",
                controllerAs:"model"
            })

            .when("/user/:userId/website",{
                templateUrl:"view/website/website-list.view.client.html",
                controller:"WebsiteListController",
                controllerAs:"model"
            })
            .when("/user/:userId/website/:websiteId",{
                templateUrl:"view/website/website-edit.view.client.html",
                controller:"EditWebsiteController",
                controllerAs:"model"
            })
            .when("/user/:userId/website/:websiteId/page/:pageId/widget/new", {
                templateUrl: "view/widget/widget-chooser.view.client.html",
                controller:"WidgetChooserController",
                controllerAs:"model"
            })
            .when("/widget-chooser",{
                templateUrl:"view/widget/widget-chooser.view.client.html",
                controller:"WidgetChooserController",
                controllerAs:"model"
            })
            .when("/widget-heading",{
                templateUrl:"view/widget/widget-heading.view.client.html"
            })
            .when("/widget-image",{
                templateUrl:"view/widget/widget-image.view.client.html"
            })
            .when("/widget-youtube",{
                templateUrl:"view/widget/widget-youtube.view.client.html"
            })
            .when("/user/:userId/website/:websiteId/page/:pageId/widget/:widgetId", {
                templateUrl: "view/widget/widget-edit.view.client.html",
                controller:"WidgetEditController",
                controllerAs:"model"
            })
            .when("/user/:userId/website/:websiteId/page/:pageId/widget", {
                templateUrl: "view/widget/widget-list.view.client.html",
                controller:"WidgetListController",
                controllerAs:"model"
            })

            .otherwise({
                redirectTo:"/login"
            });


    }
})();

