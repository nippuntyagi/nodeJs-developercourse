var env = process.env.NODE_ENV || 'development';

if(env === 'development'){
    process.env.PORT =  3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if(env === 'test'){
    process.env.PORT =  3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
} 
const _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc)=>{
        res.send(doc);
    }).catch((e)=>{
        res.status(400).send(e);
    })
});

app.get('/todos', (req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        res.status(404).send();
    }

    Todo.findById(id).then((todo)=>{
        if(todo){
            res.send({todo});
        } else{
            res.status(404).send();
        }
    }).catch((e)=>{
        res.status(400).send();
    });
});

app.delete('/todos/:id', (req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo)=>{
        if(!todo){
            res.status(404).send();
        }
        res.send({todo});
    }).catch((e)=>{
        res.status(400).send();
    });
});

app.patch('/todos/:id',(req, res)=>{
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);
    
    if(!ObjectID.isValid(id)){
        res.status(404).send();
    };

    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    } else{
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findOneAndUpdate(id , {$set:body}, {new: true}).then((todo)=>{
        if(!todo){
            res.status(404).send();
        }
        res.send({todo});
    }).catch((e)=>{
        res.status(400).send();
    })
});

app.post('/users', (req, res)=>{
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    user.save().then((user)=>{
        return user.generateAuthToken();
    }).then((token)=>{
        res.header('x-auth', token).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
})

app.get('/users/me', authenticate, (req, res)=>{
    res.send(req.user);
});


var port = process.env.PORT;

app.listen(port, ()=>{
    console.log('Started at port 3000');   
})

module.exports = {app};