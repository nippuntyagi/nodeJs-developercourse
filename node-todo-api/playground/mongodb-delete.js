// const MongoClient = require('mongodb').MongoClient;
// destructuring the object from es6
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client)=>{
    if(err){
        return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to MongoDB server');
    var db = client.db('TodoApp');
    // delete One
    // db.collection('Todos').deleteOne({text: 'eat one'}).then((result)=>{
    //     console.log(result);
    // }, (err)=>{
    //     console.log('Unable to delete todos', err);
    // });
    // delete Many
    // db.collection('Todos').deleteMany({text: 'eating lunch'}).then((result)=>{
    //     console.log(result);
    // }, (err)=>{
    //     console.log('Unable to delete todos', err);
    // });
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //     console.log(result);
    // }, (err)=>{
    //     console.log('Unable to delete todos', err);
    // });
    db.collection('Users').deleteMany({name: 'nippun'}).then((result)=>{
        console.log(result);
    }, (err)=>{
        console.log('Unable to delete todos', err);
    });
    findOneAndDelete
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5bf05b3c48a9ad3818b8b1d2')}).then((result)=>{
        console.log(result);
    }, (err)=>{
        console.log('Unable to delete todos', err);
    });
    // client.close();
});