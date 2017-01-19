/**
 * Created by abhaydoke on 11/01/17.
 */
module.exports = function(app,models){

    var userModel = models.userModel;
    var users = [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ];


    app.post("/api/user",createUser);
    //app.get("/api/user",getUsers);
    //app.get("/api/user/yo/:userId",findAllWebsitesForUser);
    app.get("/api/user/:userId",findUserById);
    app.get("/api/user/:username/:password",findUserByCredentials);
    app.get("/api/user/:username",findUserByUsername);
    app.put("/api/user/:userId",updateUser);
    app.delete("/api/user/:userId",deleteUser);

    //app.get("/api/user/yo",findAllWebsitesForUser);



    // function findAllWebsitesForUser(req,res){
    //     console.log("Yes");
    //     var userId = req.params.userId;
    //     var results = [];
    //     for(var i in websites){
    //         if(websites[i].developerId===userId){
    //             results.push(websites[i]);
    //         }
    //     }
    //     res.send(websites);
    //
    // }

    function deleteUser(req,res){
        var id = req.params.userId;
        userModel
            .deleteUser(id)
            .then(function(stats){
                console.log(stats);
                res.send(200);
            },
            function(error){
                res.statusCode(404).send(error);
            });
        // for(var i in users){
        //     if(users[i]._id===id){
        //         users.splice(i);
        //         res.send(200);
        //         return true;
        //     }
        // }
        // res.send(400);
    }

    function updateUser(req,res){
        var id = req.params.userId;
        var newUser = req.body;
        console.log(newUser);
        userModel
            .updateUser(id,newUser)
            .then(function(stats){
                console.log(stats);
                res.send(200);
            },
            function(error){
                res.statusCode(404).send(error);
            });
        // for(var i in users){
        //     if(users[i]._id===id){
        //         console.log(users[i].firstName);
        //         users[i].firstName = newUser.firstName;
        //         users[i].lastName = newUser.lastName;
        //         res.send(200);
        //         return;
        //     }
        // }
        // res.send(400);

    }


    function createUser(req,res){
        //console.log("Inside user server");
        var user = req.body;
        //user._id = (new Date()).getTime()+"";

        userModel
            .createUser(user)
            .then(
                function(user){
                    console.log(user);
                    res.json(user);
                },
                function(error){
                    res.statusCode(400).send(error);
                }
            );
        //
        //console.log(users);
        //res.send(user);
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

    // function findUserByCredentials(username,password,res){
    //     console.log("Inside find user by credentials");
    //     console.log(username);
    //     console.log(password);
    //     for(var i in users){
    //         if(users[i].username===username && users[i].password===password){
    //             res.send(users[i]);
    //             return;
    //         }
    //     }
    //     res.send(400);
    // }

    function findUserByCredentials(req,res){
        console.log("Inside find user by credentials");

        var username = req.params.username;
        var password = req.params.password;
        console.log(username);
        console.log(password);

        userModel
            .findUserByCredentials(username,password)
            .then(
                function(user){
                    res.json(user);
                },
                function(error){
                    res.statusCode(400).send(error);
                }
            )
        // for(var i in users){
        //     if(users[i].username===username && users[i].password===password){
        //         console.log(users[i]);
        //         res.send(users[i]);
        //         return;
        //     }
        // }
        // res.send(400);
    }

    function findUserByUsername(username,res){
        for(var i in users){
            if(users[i].username===username){
                res.send(users[i]);
                return;
            }
        }
        res.send(400);
    }

   function findUserById(req,res){
        var id = req.params.userId;

        userModel
            .findUserById(id)
            .then(function(user){
                res.send(user);
            },function(error){
                console.log("User not found");
                res.statusCode(404).send(error);
            });
        // for(var i in users){
        //     if(users[i]._id===id){
        //         res.send(users[i]);
        //         return;
        //     }
        // }
        // res.send({});
    }


}