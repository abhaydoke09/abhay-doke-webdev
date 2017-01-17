/**
 * Created by abhaydoke on 09/01/17.
 */

(function(){
    angular
        .module("WebAppMaker")
        .factory("UserService",UserService);




    function UserService($http){
        var api = {
            findUserByUsernameAndPassword : findUserByUsernameAndPassword,
            findUserById: findUserById,
            findUserByUsername:findUserByUsername,
            createUser : createUser,
            updateUser : updateUser,
            deleteUser : deleteUser
        };
        return api;

        function findUserByUsername(username){
            for(var i in users){
                if(users[i].username===username){
                    return users[i];
                }
            }
            return null;
        }

        function createUser(username,password){
            //users.push(newUser);

            var user = {
                username:username,
                password:password
            };


            return $http.post("/api/user",user);
        }
        function deleteUser(userId){
            var url = "/api/user/"+userId;
            return $http.delete(url);

        }
        function updateUser(id, newUser){
            console.log("Inside update user");
            var url = "/api/user/"+id;
            return $http.put(url, newUser);

        }

        function findUserByUsernameAndPassword(username,password){
            var url = "/api/user?username="+username+"&password="+password;
            console.log(url);
            return $http.get(url);
        }

        function findUserById(id){
            var url = "/api/user/"+id;
            return $http.get(url);
        }
    }
})();