const axios = require('axios')


let getClima = async (lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=fb30165c696cfeefe3810bfabf324c1d`);

    return  resp.data.main.temp;

};

module.exports= {
    getClima
};