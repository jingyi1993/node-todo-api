// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} =require('mongodb');

var obj = new ObjectID();




// console.log(obj);
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



        db.collection('Todos').findOneAndUpdate({
            _id: new ObjectID('5b7ec2d8fe0e7311c8b754fb')
        },{$set:{
            text: 'majingyi',
            }},{
            returnOriginal: false
        })
            .then((result)=>{
                console.log(result)
            });


        db.close();

    });