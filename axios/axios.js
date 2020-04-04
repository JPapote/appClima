const axios = require('axios');

const lugar = async(direc) => {
let dir = direc
const value = [];
const instance = axios.create({
    baseURL:`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${dir}`,
    headers:{'x-rapidapi-key': '8d8ea45baamsh1ef19e790b6e115p139aebjsn677c2a8b3d8f'}
})

 const resul = instance.get()
.then(resp => {
    const {name, lon, lat} = resp.data.Results[0]
        // console.log(resp.data.Results[0].name)
        // console.log(resp.data.Results[0].lon)
        // console.log(resp.data.Results[0].lat)
        value.push({name, lon, lat})
        return value;
}).catch(err =>  {
    return err
   })
    return resul
}
module.exports = {
    lugar
}