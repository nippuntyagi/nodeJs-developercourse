const express = require('express');
const hbs = require('hbs');

var app = express();

// add support for partials
hbs.registerPartials(__dirname+'/views/partials');
// add emplating engine
app.set('view engine', 'hbs');

// Add middleware
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