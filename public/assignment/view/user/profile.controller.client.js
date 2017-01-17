/**
 * Created by abhaydoke on 09/01/17.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController",ProfileController);


    function ProfileController($routeParams,UserService) {
         var vm = this;
         var id = $routeParams.id;


        function updateUser(newUser){
            console.log(newUser);
            if(UserService.updateUser(id, newUser)){
                console.log("profile was updated");
            }

            if(update){
                console.log("profile was updated");
                vm.updateMsg = "Profile was Updated!!";
            }
            else {
                console.log("profile was not updated");
                vm.updatMsg = "Not updated!";
            }
        }


        function init(){

            UserService
                .findUserById(id)
                .then(function(response){
                    vm.user = response.data;
                })

        }
        init();




    }
})();