const axios = require('axios');

const getClima = async (lat,lon) => {
 let valores = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4ed01c0a3f990547cd9c8fda439c887c&units=metric`)

return valores.data.main.temp
}

module.exports = {
    getClima
}