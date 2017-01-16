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

        function createUser(newUser){
            users.push(newUser);
        }
        function deleteUser(userId){
            for(var i in users){
                if(users[i]._id===id){
                    users.splice(i);
                    return true;
                }
            }
            return false;
        }
        function updateUser(id, newUser){
            console.log(newUser);
            for(var i in users){
                if(users[i]._id===id){
                    console.log(users[i].firstName);
                    users[i].firstName = newUser.firstName;
                    users[i].lastName = newUser.lastName;
                    return true;
                }
            }
            return false;
        }

        function findUserByUsernameAndPassword(username,password){
            var url = "/api/user?username="+username+"&password="+password;
            console.log(url);
            return $http.get(url);
        }

        function findUserById(id){

            for(var i in users){
                if(users[i]._id===id){
                    return users[i];
                }
            }
            return null;
        }
    }
})();