const {mongoose} =require('../server/db/mongoose');

const {Todo}= require('../server/models/Todo');
const {User}= require('../server/models/User');

// Todo.remove({}).then((r)=>{
// console.log(r)});

//Todo.findOneAndRemove({}).then(...);

Todo.findByIdAndRemove('5b69f559bdc959c45d39717c').then((r)=>{
    console.log(r);
});


