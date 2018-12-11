const mongoose = require('mongoose');
const validator = require('validator');

var User = mongoose.model('Users',{
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique:1,
        validate: {
            validator: (value)=>{
                return validator.isEmail(value);
            },
            message: '{VALUE} is not valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        access:{
            type: String,
            required: true,
        },
        token:{
            type: String,
            required: true,
        }
    }]
});

module.exports = {User};