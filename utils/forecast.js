const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b049f71c0a4efbe442d2b7d4b86e1640&query=' + lat + ',' + long + '&units=f'
    request({url: url, json: true}, (error, response) => {
         if (error) {
              callback('Unable to connect to weather service', undefined)
         } else if (response.body.error) {
              callback('Unable to find the location', undefined)
         } else {
                const currentTemp = response.body.current.temperature
                const feelLike = response.body.current.feelslike
                const weatherDes = response.body.current.weather_descriptions[0] 
                callback(undefined, { Forecast : weatherDes + '. It is currently ' + currentTemp + ' degrees out' + '. It feels like ' + feelLike + ' degrees out' })
         }
    })
 }

 module.exports = forecast

