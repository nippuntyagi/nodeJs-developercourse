var asyncAdd = (a,b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve (a + b);
            } else{
                reject('Arguments must be numbers');
            }    
        }, 1500);
    });
}

// asyncAdd(5,7).then((res)=>{
//     console.log('Result: ', res);
//     return asyncAdd(res, 33);
// }, (errorMessage)=>{
//     console.log(errorMessage);
// }).then((result)=>{
//     console.log('Result should be 45: ', result);
// }, (errorMessages)=>{
//     console.log(errorMessages);
// })
asyncAdd(5,'7').then((res)=>{
    console.log('Result: ', res);
    return asyncAdd(res, 33);
}).then((result)=>{
    console.log('Result should be 45: ', result);
}).catch((errorMessage)=>{
    console.log(errorMessage);
});
// var somePromise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         // resolve('Hey. It Worked');
//         reject('Unable to fulfill promise');
//     }, 2500);
// });

// somePromise.then((message)=>{
//     console.log('Success: ', message);
// },(errorMessage)=>{
//     console.log('Error: ', errorMessage);
// });