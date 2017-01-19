module.exports = function(){

    var mongoose = require("mongoose");
    var UserSchema = require('./user.schema.server')();
    var NewUser = mongoose.model("User",UserSchema);
    var api = {
      createUser:createUser
    };
    return api;

    function createUser(user){
        console.log("createUser user.model.server");
        console.log(user);
        NewUser.create({username:'abhay',password:'abhay'});
    }
};