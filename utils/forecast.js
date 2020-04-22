const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b049f71c0a4efbe442d2b7d4b86e1640&query=' + lat + ',' + long + '&units=f'
    request({ url, json: true }, (error, { body }) => {
         if (error) {
              callback('Unable to connect to weather service', undefined)
         } else if (body.error) {
              callback('Unable to find the location', undefined)
         } else {
                const currentTemp = body.current.temperature
                const feelLike = body.current.feelslike
                const weatherDes = body.current.weather_descriptions[0] 
                callback(undefined, { Forecast : weatherDes + '. It is currently ' + currentTemp + ' degrees out' + '. It feels like ' + feelLike + ' degrees out' })
         }
    })
 }

 module.exports = forecast

