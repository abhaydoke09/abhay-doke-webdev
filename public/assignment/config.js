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
            .when("/profile",{
                templateUrl:"view/user/profile.view.client.html"
            })
            .when("/website-list",{
                templateUrl:"view/website/website-list.view.client.html"
            })
            .otherwise({
                redirectTo:"/login"
            });


    }
})();

