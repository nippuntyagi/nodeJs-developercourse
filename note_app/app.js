console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require ('lodash');
const notes = require('./notes');
// var res = notes.addNote();
// var sum = notes.add(2,3);
// console.log(res, sum);
// const user = os.userInfo();
// For v6 engine
// fs.appendFile('Greetings.txt', 'Hello World!');

// For later engine
// Option 1
// fs.appendFile('Greetings.txt', 'Hello World',function(err){
//     if(err){
//         console.log('Unable to write to file');
//     }
// });
// Option 2
// fs.appendFileSync('Greetings.txt', 'Hello '+user.username+'!')
// For es6 we can use templating
// fs.appendFileSync('Greetings.txt', `Hello ${user.username}! You are ${notes.age}`)

// Using lodash
console.log(_.isString('Nippun'), _.isString(true));
console.log(_.uniq([1,2,4,3,4,4,2]));