var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

// create a mongoose todo modal

var Todo = mongoose.model('Todos',{
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default: null
    }
})

// creating a todo document
var newTodo = new Todo({
    text: 'Something to do'
});

// newTodo.save().then((doc)=>{
//     console.log('Save todo', doc);
// }, (e)=>{
//     console.log('Unable to save todo')
// });

var otherTodo = new Todo({
    text: 'Feed the cat',
    completed: false,
    completedAt: 123
});

// otherTodo.save().then((doc)=>{
//     console.log('Save todo', JSON.stringify(doc, undefined, 2));
// }, (e)=>{
//     console.log('Unable to save todo')
// });

var user = mongoose.model('Users',{
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
})

var newUser = new user({
    email:"Nippun@example.com"
});

newUser.save().then((doc)=>{
    console.log('Save User', JSON.stringify(doc, undefined, 2));
}, (e)=>{
    console.log('Unable to save user')
});