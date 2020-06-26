require('dotenv').config()

module.exports = {
  city: 'London',
  openWeather: {
    apiKey: process.env.OPENWEATHER_API_KEY,
    URI: 'https://api.openweathermap.org/data/2.5/weather',
  }
}
