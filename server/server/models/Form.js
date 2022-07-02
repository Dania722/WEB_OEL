const mongoose = require("mongoose");

const UserSchema=new mongoose.Schema({
    carname:{
        type: String,
        required:true,
    },
    color:{
        type: String,
        required:true,
    },
    model:{
        type: String,
        required:true,
    },
    numberplate:{
        type: String,
        required:true,
    },
})

const UserModel= mongoose.model('user', UserSchema)

module.exports = UserModel;