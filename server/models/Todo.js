var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text:{
        type:String,
        //validation
        required: true,
        minlength: 1,
        //trim： 把所有的空格移除
        trim: true,
    },
    completed:{
        type: Boolean,
        default: false,
    },
    completedAt:{
        type: Number,
        default:null,
    },

});
module.exports= {Todo};