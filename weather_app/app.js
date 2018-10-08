const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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
geocode.geoCodeAddress(argV.Address, (errorMessage, results)=>{
    if(errorMessage){
        console.log(errorMessage);
    } else{
        // console.log(JSON.stringify(results, undefined, 2));
        console.log(results.address);
        // lat, long, callback
        weather.getWeather(results.Latitude,results.Longitude, (errorMessage, weatherResults)=>{
            if(errorMessage){
                console.log(errorMessage);
            } else{
                // console.log(JSON.stringify(weatherResults, undefined, 2));
                console.log(`It's is currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`)
            }
        });
    }
});