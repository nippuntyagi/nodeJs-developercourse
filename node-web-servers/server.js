const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

// add support for partials
hbs.registerPartials(__dirname+'/views/partials');
// add emplating engine
app.set('view engine', 'hbs');

// Add middleware
app.use((req, res, next)=>{
    var now = new Date().toString();
    var log = `${now}: ${req.method}, ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err)=>{
        if(err){
            console.log('Unable to append to the server.log.');
        }
    });
    next();
});

// app.use((req, res, next)=>{
//    res.render('maintenance.hbs');
// });

app.use(express.static(__dirname+'/public'));
// partials helpers
hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
});

app.get('/', (req, res)=>{
    // res.send('<h1>Hello Express!</h1>');
    res.render('home.hbs',{
        pageTitle: 'Home Page',
        welcomeMessage: 'Hi welcome to my page'
    });
});

app.get('/about', (req, res)=>{
    // res.send('<h1>Hello Express!</h1>');
    // res.send('about page');
    res.render('about.hbs',{
        pageTitle: 'About Page',
    });
});

app.get('/bad', (req, res)=>{
    // res.send('<h1>Hello Express!</h1>');
    res.send({
        errorMessage: 'Unable to handel request'
    });
});
app.listen(3000, ()=>{
    console.log('Server is up on server 3000');
});