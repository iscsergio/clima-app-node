const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima.'
    }
}).argv;

let getInfo = async (direccion) => {

    try{
        let coors = await lugar.getLugar(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${direccion} es de ${temp} grados`;
    }
    catch (e) {
        return "No se pudo determinar el clima";
    }
}

getInfo(argv.direccion)
.then( mensaje => console.log(mensaje))
.catch(mensaje => console.log(mensaje));