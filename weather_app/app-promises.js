const yargs = require('yargs');
const axios = require('axios');

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

const address = encodeURIComponent(argV.Address);
console.log(address);
var geocodeAddress = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&&key=${key.googleMapKey}`;

axios.get(geocodeAddress).then((response)=>{
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that adderss');
    }
    var lat=response.data.results[0].geometry.location.lat;
    var lng=response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/${key.foreCastKey}/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl).then((response)=>{
        var temperature = response.data.currently.temperature;
        var apparentTemperature= response.data.currently.apparentTemperature;
        console.log(`It's is currently ${temperature}. It feels like ${apparentTemperature}`)
    });
}).catch((e)=>{
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API Servers');
    } else{
        console.log(e.message);
    }
});