
const mongoose = require('mongoose');
const validator = require('validator');

// {
//     emial: '472382917@qq.com,
//token:[{
 //   access:''
//}]
// }
//use email validator;

var Users= mongoose.model('Users', {


    email: {
        require: false,
        trim: true,
        type: String,
        minlength: 1,
        unique: true,
        validate: {
            // true or false
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email!'
        }
    },
    password: {
        type: String,
        require: false,
        minlength: 6,

    },
    tokens: [{
        access: {
            type: String,
            require: false,
        },
        token: {
            type: String,
            require: false,
        }


    }],



})


module.exports={Users};