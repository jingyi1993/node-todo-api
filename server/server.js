var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID}=require('mongodb');

var {mongoose} =require('./db/mogoose');

var {Todo} =require('./models/Todo');

var {User} =require('./models/User');


var app = express();
app.use(bodyParser.json());

app.post('/todos',(req, res)=>{
    // console.log(req.body);
    var todo = new Todo({
        text: req.body.text,
    });

    todo.save().then((r)=>{
console.log('done',JSON.stringify(r, undefined, 2));
        res.send(r);
    },(e)=>{
        res.status(400).send(e);
    })
});


app.get('/todos',(req, res)=>{
    Todo.find().then((r)=>{
        console.log(r);
        res.send({r});
    },(e)=>{
        res.status(400).send(e)
    })
});

//GET /todos/12345

app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.state(404).send();
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
       res.states(404).send();

    })
});

app.listen(3000, ()=>{
    console.log('start 3000!!!')
});
