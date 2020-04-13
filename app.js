const request = require('request')

 const url = 'http://api.weatherstack.com/current?access_key=b049f71c0a4efbe442d2b7d4b86e1640&query=21.717,105.350&units=f'

 request({ url: url, json: true }, (error, response) => {
      const currentTemp = response.body.current.temperature
      const feelLike = response.body.current.feelslike
      const weatherDes = response.body.current.weather_descriptions[0]
     console.log(weatherDes + '. It is currently ' + currentTemp + ' degrees out' + '. It feels like ' + feelLike + ' degrees out')
 })

const geocodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Da%20Nang.json?access_token=pk.eyJ1Ijoia2ludGFtYTUxMCIsImEiOiJjazh5YzRqNmwwYTVvM2hydWpobjMyOWQ2In0.d_yMLmDHXAQfFdEX42b-pg&limit=1'

request({ url: geocodingUrl, json: true }, (error, response) => {
     
     const lat = response.body.features[0].center[1]
     const long =response.body.features[0].center[0]
     console.log(lat,long)
})