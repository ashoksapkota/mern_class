const mongoose = require('mongoose');
const { use } = require('../routes/userRoutes');

const userSchema =  new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        require: true,
    },
    email: {
        type : String,
        require: true,
    },
    password:{
        type : String,
        require: true,
    }
})

const User = mongoose.model('users',userSchema);


//export
module.exports = User;