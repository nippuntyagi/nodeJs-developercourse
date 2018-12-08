const {ObjectID} = require('mongodb');

const {mongoose} =require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c0c00342492862568da556011';
// if(!ObjectID.isvalid(id)){
//     console.log('Id not Valid');
// }

// Todo.find({_id: id}).then((todos)=>{
//     console.log('Todos', todos)
// });

// Todo.findOne({_id: id}).then((todo)=>{
//     console.log('Todo', todo)
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo)
// }).catch((e)=> console.log(e));

const userId = '5bf16d2cf06635279c53807c'
User.findById(userId).then((todo)=>{
    if(!todo){
        return console.log('User not found');
    }
    console.log('User by id', todo)
}).catch((e)=> console.log(e));