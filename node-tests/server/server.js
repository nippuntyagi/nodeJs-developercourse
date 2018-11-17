const express = require('express');

var app = express();

app.get('/',(req, res)=>{
    // res.send('Hello World!');
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo app v1.0'
    })
});

app.get('/user',(req, res)=>{
    // res.send('Hello World!');
    res.send([
        {
            name: 'nippun',
            age:23
        },
        {
            name: 'nipun',
            age:26
        },
        {
            name: 'nippunt',
            age:25
        }
    ]);
});
app.listen(3000);
module.exports.app = app;

// supertest for testing express app