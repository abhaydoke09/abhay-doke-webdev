/**
 * Created by abhaydoke on 16/01/17.
 */

(function(){
    angular
        .module("WebAppMaker")
        .controller("RegisterController",RegisterController);

    function RegisterController($location,UserService){
        var vm =this;

        vm.register = register;

        function register(username,password,password2){

            UserService
                .createUser(username,password)
                .then(function(response){
                    var user = response.data;
                    console.log(user);
                    if(user){
                        console.log(user);
                        $location.url("/user/"+user._id);
                    }
                })
        }

    }
})();