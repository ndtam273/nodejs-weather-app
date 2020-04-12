const request = require('request')

 const url = 'http://api.weatherstack.com/current?access_key=b049f71c0a4efbe442d2b7d4b86e1640&query=21.717,105.350'

 request({ url: url }, (error, response) => {
      const data = JSON.parse(response.body)
      console.log(data.current)
 })