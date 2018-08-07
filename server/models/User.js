
var mongoose = require('mongoose');

var Users= mongoose.model('Uses',{
    User:{
        type: String,
    },
    email:{
        require: true,
        trim: true,
        type: String,
        minlength: 1,
    }
});

module.exports={Users};