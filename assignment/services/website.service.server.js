/**
 * Created by abhaydoke on 11/01/17.
 */
module.exports = function(app){

    var websites = [
        { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
        { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
        { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
        { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
        { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
        { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
    ];



    app.get("/api/user/:userId/website",findAllWebsitesForUser);

    //app.get("/api/user/yo",findAllWebsitesForUser);



    function findAllWebsitesForUser(req,res){
        console.log("Yes");
        var userId = req.params.userId;
        var results = [];
        for(var i in websites){
            if(websites[i].developerId===userId){
                results.push(websites[i]);
            }
        }
        res.send(results);

    }

    function deleteUser(req,res){
        var id = req.params.userId;
        for(var i in users){
            if(users[i]._id===id){
                users.splice(i);
                res.send(200);
                return true;
            }
        }
        res.send(400);
    }

    function updateUser(req,res){
        var id = req.params.userId;
        var newUser = req.body;
        console.log(newUser);
        for(var i in users){
            if(users[i]._id===id){
                console.log(users[i].firstName);
                users[i].firstName = newUser.firstName;
                users[i].lastName = newUser.lastName;
                res.send(200);
                return;
            }
        }
        res.send(400);

    }


    function createUser(req,res){
        console.log("Inside user server");
        var user = req.body;
        user._id = (new Date()).getTime()+"";
        users.push(user);
        console.log(users);
        res.send(user);
    }



    function getUsers(req,res){
        var username = req.query.username;
        var password = req.query.password;
        console.log(username);
        console.log(password);
        if(username && password){
            findUserByCredentials(username,password,res);
        }
        else if(username ){
            findUserByUsername(username,res);
        }
        else{
            res.send(users);
        }

    }

    function findUserByCredentials(username,password,res){

        for(var i in users){
            if(users[i].username===username && users[i].password===password){
                res.send(users[i]);
                return;
            }
        }
        //res.send({});
    }

    function findUserByUsername(username,res){
        for(var i in users){
            if(users[i].username===username){
                res.send(users[i]);
                return;
            }
        }
        res.send({});
    }

    function findUserById(req,res){
        var id = req.params.userId;
        for(var i in users){
            if(users[i]._id===id){
                res.send(users[i]);
                return;
            }
        }
        res.send({});
    }


}