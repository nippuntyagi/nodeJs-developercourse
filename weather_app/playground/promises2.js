const request = require('request');
const key = require('./../keys');
var geocodeAddress = (geoAddress)=>{
    return new Promise((resolve, reject)=>{
        const address = encodeURIComponent(geoAddress);
        request({
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&&key=${key.googleMapKey}`,
            json: true
        }, (error, response, body)=>{
            if(error){
                reject('Unable to connect to Google Servers.');
            } else if(body.status === 'ZERO_RESULTS'){
                reject('Unable to find that adderss');
            } else if(body.status === 'OK'){
                resolve({
                    address: body.results[0].formatted_address,
                    Latitude:body.results[0].geometry.location.lat,
                    Longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
}

geocodeAddress('19146').then((location)=>{
    console.log(JSON.stringify(location, undefined, 2));
}).catch((errorMessage)=>{
    console.log(errorMessage);
});