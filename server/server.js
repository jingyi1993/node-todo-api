var express = require('express');
var bodyParser = require('body-parser');

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
        res.send(e);
    })
})

app.listen(3000, ()=>{
    console.log('start 3000!!!')
});
