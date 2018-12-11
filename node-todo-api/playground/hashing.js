const {SHA256} = require('crypto-js');

var message = 'I am user no 3';
var hash = SHA256(message).toString();
const jwt = require('jsonwebtoken');

var data = {
    id: 10
}
var token = jwt.sign(data, '123abc');
console.log(token)
var decoded = jwt.verify(token, '123abc');
console.log(decoded);
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id:  4
// }

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data)+ 'somesecret').toString()
// }

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
// var resultHash = SHA256(JSON.stringify(token.data)+ 'somesecret').toString()

// if(resultHash === token.hash){
//     console.log('Data was not canged');
// } else{
//     console.log('Data was changed. Do not trust!'); 
// }