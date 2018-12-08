// AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM
// AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ
// AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8
// AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA
// AIzaSyBkDYSVRVtQ6P2mf2Xrq0VBjps8GEcWsLU
// AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI
// AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y
// AIzaSyDSPDpkFznGgzzBSsYvTq_sj0T0QCHRgwM
// AIzaSyD4YFaT5DvwhhhqMpDP2pBInoG8BTzA9JY
// AIzaSyAbPC1F9pWeD70Ny8PHcjguPffSLhT-YF8

const axios = require('axios');

const getLugar = async (direccion) => {

    let encodedURL = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);

    if( resp.data.status === 'ZERO_RESULTS' ){
        throw new Error(`No hay resultados para ${direccion}`);
    }

    return {
        direccion: resp.data.results[0].formatted_address,
        lat: resp.data.results[0].geometry.location.lat,
        lng: resp.data.results[0].geometry.location.lng
    }

};


module.exports = {
    getLugar
};