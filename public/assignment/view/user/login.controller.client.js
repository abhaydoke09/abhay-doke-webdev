/**
 * Created by abhaydoke on 09/01/17.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("LoginController",LoginController);

    function LoginController($location, UserService){
     var vm = this;

     vm.login = login;
     function login(username,password){
         console.log("Inside login");
         UserService
             .findUserByUsernameAndPassword(username,password)
             .then(function(response){
                 console.log(response);
             var user = response.data;
             if(user){
                 console.log("Inside if user found");
                 $location.url("/user/"+user._id);
             }
             else{
                 vm.error = "User not found!";
             }


         })
         // if(user){
         //
         //     $location.url("/user/"+user._id);
         // }
         // else{
         //     vm.error = "User not found!";
         // }

     }
    }
})();