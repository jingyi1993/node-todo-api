var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID}=require('mongodb');

var {mongoose} =require('./db/mongoose');

var {Todo} =require('./models/Todo');

var {Users} =require('./models/User');
const _ =require('lodash');

const port = process.env.PORT || 3000;


var app = express();


app.use(bodyParser.json());

// app.post('/todo',(req, res)=>{
//     console.log(req.body);
//     //create an instance!
//     var todo = new Todo({
//         text: req.body.text,
//     });
//
//     todo.save().then((r)=>{
// console.log('done',JSON.stringify(r, undefined, 2));
//         res.send(r);
//     },(e)=>{
//         res.send(e);
//     })
// });
app.post('/todos', (req, res) => {

    var hi = new Todo({
        text: req.body.text
    });


    hi.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.post('/users', (req, res) => {

    var hii = new Users({
        email: req.body.text
    });

    hii.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});


app.get('/todos',(req, res)=>{
    Users.find().then((r)=>{
        console.log(r);
        res.send({r});
    },(e)=>{
        res.status(400).send(e)
    })
});

// //GET /todos/12345
//
app.get('/todos/:id',(req,res)=>{
    // res.send(req.params.id);
    var id = req.params.id;
    //
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    //valid id using isValid
     //404 -send back empty send

    //findById
      //success
      //error
         //400 -send empty body back
    Todo.findById(id).then((r)=>{
        if(!r){
            return res.status(404).send();
        }
        res.send({
            r
        });
        console.log(r)
    },(e)=>{
       res.states(400).send();

    })
});

// app.delete('/todos/:id',(req,res)=>{
//    //get the id;
//    id = req.params.id;
//    //validate id
//     if(!ObjectID.isValid(id)){
//         return res.state(404).send();
//     }
//
//    Todo.findByIdAndRemove(id).then((r)=>{
//        if(!r){
//            res.status(404).send();
//        }
//        res.send(r)
//    },(e)=>{
//        res.send(e);
//    })
// });
//
// app.patch('/todos/:id',(req, res)=>{
//     var id =req.params.id;
//     var body = _.pick(req.body,['text','completed']);
//
//
//     if(!ObjectID.isValid(id)){
//         return res.state(404).send();
//     }

    // {
    //     "r": {
    //     "completed": false,
    //      "text": "hihihi",
    //
    // }
    // }

    // if(_.isBoolean(body.completed) && body.completed ){
    //     //
    //     body.completedAt = new Date().getTime();
    // }else{
    //     //
    //     body.completed = false;
    //     body.completedAt = null;
    // }


//     Todo.findByIdAndUpdate(id, {$set: body}).then((r)=>{
//         if(!r){
//             return res.status(404).send()
//         }
//         res.send({r})
//
//     }).catch((e)=>{
//         res.status(400).send()
//     })
//
//
// });

// app.post('/hah', (req,res)=>{
//     var body = _.pick(req.body, ['email', 'password']);
// //{email:..., password:...}
//     var user =new Users(body);
//
//     user.save().then((user)=>{
//         res.send(user);
//     }).catch(
//         (e)=>{
//             res.status(400).send();
//         }
//     )
// });

app.listen(port, ()=>{
    console.log(`start up at port: ${port}`);
});
