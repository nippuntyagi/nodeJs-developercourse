// var square = (x)=>{
//     var result = x*x;
//     return result;
// }
// Expression Syntex
var square = (x)=> x*x;

console.log(square(9));

var user = {
    name: 'Nippun',
    // Do not get attribute and this binding in arrow function
    sayHi: ()=>{
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}` );
    },
    sayHiAlt(){
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
}
user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);