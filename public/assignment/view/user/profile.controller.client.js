/**
 * Created by abhaydoke on 09/01/17.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController",ProfileController);


    function ProfileController($location, $routeParams,UserService) {
         var vm = this;
         var id = $routeParams.id;

        vm.updateUser = updateUser;
        vm.unregister = unregister;

        function unregister(){
            UserService
                .deleteUser(id)
                .then(
                    function(){
                        $location.url("/login")
                    },
                    function(){
                        vm.error = "unable to remove user";
                    }
                );

        }

        function updateUser(newUser){

            UserService
                .updateUser(id, newUser)
                .then(

                    function(response){
                        console.log(response);
                        vm.success = "User information updated successfully!!";
                    },
                    function(error) {
                        vm.error = "Unable to update user information.";
                    }
                );

        }


        function init(){
            console.log("Inside init");
            UserService
                .findUserById(id)
                .then(function(response){
                    vm.user = response.data;
                })

        }
        init();




    }
})();