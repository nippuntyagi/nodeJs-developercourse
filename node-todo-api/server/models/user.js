const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');

const _ = require('lodash'); 

var UserSchema = new mongoose.Schema({
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

UserSchema.methods.toJSON = function(){
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);
}
UserSchema.methods.generateAuthToken = function(){
    var user = this;  //instance method is called with individual document
    var access = 'auth';
    var token = jwt.sign({_id:user._id.toHexString(), access}, 'abc123').toString();
    user.tokens.push({access, token});

    return user.save().then(()=>{
        return token;
    })
    // .then((token)=>{

    // })
}
UserSchema.statics.findByToken = function(token){
    var User = this; //modal method is called with modal as this binding
    var decoded;
    try{
        decoded = jwt.verify(token, 'abc123');
    } catch(e){
        return Promise.reject();
    }

    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
}

var User = mongoose.model('Users', UserSchema);

module.exports = {User};