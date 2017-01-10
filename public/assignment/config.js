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
            .when("/login",{
                templateUrl:"view/user/login.view.client.html",
                controller:"LoginController",
                controllerAs:"model"
            })
            .when("/register",{
                templateUrl:"view/user/register.view.client.html"
            })
            .when("/profile/:id",{
                templateUrl:"view/user/profile.view.client.html",
                controller:"ProfileController",
                controllerAs:"model"
            })
            .when("/website-list",{
                templateUrl:"view/website/website-list.view.client.html"
            })
            .when("/website-edit",{
                templateUrl:"view/website/website-edit.view.client.html"
            })
            .when("/website-new",{
                templateUrl:"view/website/website-new.view.client.html"
            })
            .when("/widget-chooser",{
                templateUrl:"view/widget/widget-chooser.view.client.html"
            })
            .when("/widget-heading",{
                templateUrl:"view/widget/widget-heading.view.client.html"
            })
            .when("/widget-image",{
                templateUrl:"view/widget/widget-image.view.client.html"
            })
            .when("/widget-list",{
                templateUrl:"view/widget/widget-list.view.client.html"
            })
            .when("/widget-youtube",{
                templateUrl:"view/widget/widget-youtube.view.client.html"
            })
            .otherwise({
                redirectTo:"/login"
            });


    }
})();

