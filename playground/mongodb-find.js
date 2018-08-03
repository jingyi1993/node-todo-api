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
        // db.collection('Todos').find({_id: new ObjectID('5b6478869805144e7849f0dc')})
        //     .toArray()
        //     .then((r)=>{
        //     console.log('Todos');
        //     console.log(JSON.stringify(r, undefined, 2))
        // })
        //     .catch((e)=>{
        //         console.log('Unable!!!')
        //     });

        db.collection('Todos').find()
            .count()
            .then((count)=>{
                console.log(`Todos ${count}`);

            })
            .catch((e)=>{
                console.log('Unable!!!')
            });


        db.close();

    });