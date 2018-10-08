const request = require('request');

const getWeather = (lat, lng, callback)=>{
    request({
        url:`https://api.darksky.net/forecast/9e7331178f53a208ebde068723246770/${lat},${lng}`,
        json: true
        }, (error, response, body)=>{
            if(error){
                callback('Unable to connect to forcast.io server.');
                // console.log('Unable to connect to forcast.io server.');
            } else if(response.statusCode === 400){
                callback('Unable to fetch weather')
                // console.log('Unable to fetch weather')
            } else if(response.statusCode === 200){
                callback(undefined, {
                    temperature: body.currently.temperature,
                    apparentTemperature: body.currently.apparentTemperature
                });
                // console.log(body.currently.temperature);
            }
            // if(!error && response.statusCode === 200){
            //     console.log(body.currently.temperature);
            // } else{
            //     console.log('Unable to fetch weather');
            // }
        }
    );
}

module.exports = {
    getWeather
}
