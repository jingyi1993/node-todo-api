
var mongoose = require('mongoose');
const validator = require('validator');

// {
//     emial: '472382917@qq.com,
//token:[{
 //   access:''
//}]
// }
//use email validator;

var Users= mongoose.model('Uses',{
    User:{
        type: String,
    },
    email:{
        require: true,
        trim: true,
        type: String,
        minlength: 1,
        unique: true,
        validate:{
            // true or false
            validator: validator.isEmail,
            message:'{VALUE} is not a valid email!'
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6,

    },
    tokens: [{
        access: {
            type: String,
            require: true,
        },
        token:{
            type: String,
            require: true,
        }


    }]
});

module.exports={Users};