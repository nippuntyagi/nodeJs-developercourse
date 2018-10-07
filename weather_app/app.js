const request = require('request');
const yargs = require('yargs');
const key = require('./keys');

// Get url from user
const argV = yargs.options({
    a: {
        describe:'Address to fetch weather for',
        demand: 'true',
        alias:'Address',
        string: true
    }
}).help().alias('help', 'h').argv;
// encodeURIComponent();
// decodeURIComponent();
// console.log(argV);
const address= encodeURIComponent(argV.a);
request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&&key=${key.googleMapKey}`,
    json: true
}, (error, response, body)=>{
    // console.log(JSON.stringify(body,undefined,2));
    // console.log(error);
    // console.log(response);
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});