const {mongoose} =require('../server/db/mongoose');

const {Todo}= require('../server/models/Todo');
const {User}= require('../server/models/User');


const id ='5b69de2b849db2c072e3f1b7';


Todo.find({
    _id: id,
}).then((r)=>{
    console.log("Todos", r)
});


Todo.findOne({
    _id: id,
}).then((res)=>{
    console.log("Todo", res)
});

Todo.findById(id).then((r)=>{
    if(!r){
        return console.log("Id not found")
    }
    console.log("Id", r)
});

User.findById(id).then((user)=>{
    if(!user){
        return console.log('not found');

    }
    console.log(user)
    },(e)=>{
    console.log(e);
})