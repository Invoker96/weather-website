const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=60670ababa4a8c68e0fbcd0351a53b7e&query='+ latitude + ',' + longitude;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out with visibility of ' + body.current.visibility + ' km. There is a ' + body.current.precip + '% chance of rain and cloud cover is ' + body.current.cloudcover + '. The Humidity is '+ body.current.humidity + ' and the atmospheric pressure is '+ body.current.pressure + ' atm.')
        }
    })
}

module.exports = forecast