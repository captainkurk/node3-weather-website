const request = require('request')

const forecast = (latitude, longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c22ea1eedec13d89ef68784a804325ef&query=' + latitude + ',' + longitude + '&units=f'
    request({url, json: true}, (error,{body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
            }
        else if (body.error) {
            callback('Unable to find location.',undefined)
            }
        else {
            callback(undefined,{
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                weatherDescription: body.current.weather_descriptions[0],
                humidity: body.current.humidity,
                pressure: body.current.pressure
            })
        }
    })

}




module.exports = forecast