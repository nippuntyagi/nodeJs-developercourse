const request = require('request');

const key = require('./../keys');

const geoCodeAddress = (geoAddress, callback)=>{
    const address = encodeURIComponent(geoAddress);
request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&&key=${key.googleMapKey}`,
    json: true
    }, (error, response, body)=>{
        // console.log(JSON.stringify(body,undefined,2));
        // console.log(error);
        // console.log(response);
        if(error){
            callback('Unable to connect to Google Servers.');
            // console.log('Unable to connect to Google Servers.')
        } else if(body.status === 'ZERO_RESULTS'){
            callback('Unable to find that adderss');
            // console.log('Unable to find that adderss');
        } else if(body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                Latitude:body.results[0].geometry.location.lat,
                Longitude: body.results[0].geometry.location.lng
            });
            // console.log(`Address: ${body.results[0].formatted_address}`);
            // console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
            // console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
        }
    });
};

module.exports = {
    geoCodeAddress
}