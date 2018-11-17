// const MongoClient = require('mongodb').MongoClient;
// destructuring the object from es6
const {MongoClient, ObjectID} = require('mongodb');

// use `{ useNewUrlParser: true }` to remove deprecationWarning `current URL string parser is deprecated, and will be removed in a future version.`
// if given only the url
// In version 2.x of the MongoDB native NodeJS driver you would get the database object as an argument to the connect callback:
// MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, db)=>{
// for 3.0 you now get a client object containing the database object instead: & The close() method has also been moved to the client.
MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client)=>{
    if(err){
        return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to MongoDB server');
    var db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed:'false'
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('Users').insertOne({
    //     name:'Nippun',
    //     age:25,
    //     location:'India'
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert User', err)
    //     }
    //     // console.log(JSON.stringify(result.ops, undefined, 2));
    //     // console.log(result.ops[0]._id.getTimestamp());  // To get time stemp from the object id
    // })
    client.close();
});