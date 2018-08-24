// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} =require('mongodb');

var obj = new ObjectID();




console.log(obj);
//ES6 destructure!!!
// var user = {name:'jingyi', age:25};
// //{name} = {name:'jingyi', age:25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',

    (e,db)=>{
    if(e){
        return console.log('unable to connect to Mongodb');
    }
    console.log('connect to Mongodb');

    db.collection('Todos').insertOne({
        text:'sth to do'
    },(e,result)=>{
        if(e){
            return console.log('unable to connect',e);
        }

        console.log(JSON.stringify(result.ops, undefined, 2))

    });
    //     db.collection('Users').insertOne({
    //         id:'123',
    //         name:'Jingyi',
    //         age: 25,
    //         location:'Ottawa'
    //     },(e,r)=>{
    //         if(e){
    //             return console.log('unable to connect Mongodb',e)
    //         }
    //         console.log(JSON.stringify(r.ops[0]._id.getTimestamp(), undefined, 2))
    //     });

    db.close();

});