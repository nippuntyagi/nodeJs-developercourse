// const MongoClient = require('mongodb').MongoClient;
// destructuring the object from es6
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client)=>{
    if(err){
        return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to MongoDB server');
    var db = client.db('TodoApp');
    // db.collection('Todos').findOneAndUpdate({
    //         _id:new ObjectID('5bf06608db36950e2c18d2e0')
    // },{
    //     $set :{
    //         text: 'Eat lunch',
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });
    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID('5bf05b3c48a9ad3818b8b1d2')
    },{
        $set :{
            name: 'Nippun Tyagi',

        },
        $inc:{
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });
    // client.close();
});