const {lugar} = require('./axios/axios');
const {getClima} = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc:'Aplicacion para ver el clima en una ciudad',
        demand: true
    }
}).argv;
//lugar(argv.direccion).then(resp => console.log(resp)).catch(err=> console.log(err));


// getClima(40.750000, -74.000000).then(resp => console.log(resp)).catch(err => console.log(err))

const getInfo = (direc) => {
   
  lugar(direc)
    .then(resp => { 
       getClima(resp[0].lat, resp[0].lon)
        .then(respC => console.log(`El clima en la ciudad de ${resp[0].name} es: ${respC}`))
        .catch(err => console.log(`No se pudo determinar el clima en la ciudad de ${resp[0].name}${err}`))
    }).catch(err => `No se encontro la ciudad${err}`);   
    
}
getInfo(argv.direccion)