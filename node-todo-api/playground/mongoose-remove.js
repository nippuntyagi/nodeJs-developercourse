const {ObjectID} = require('mongodb');

const {mongoose} =require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// delete multiple records
// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

Todo.findByIdAndRemove('5c0cd6aede9f6b18745ae67b').then((todo)=>{
    console.log(todo);
});

// Todo.findOneAndRemove({}).then((todo)=>{
    
// }) 