const axios = require('axios');
const {Country, Activity} = require('../db');

const getApiInfo = async () => {
    const apiUrl = await axios.get('https://restcountries.com/v3/all');
    const apiInfo = await apiUrl.data.map(el => {
        return {
            id: el.cca3,
            name: el.name.common,
            image: el.flags[0],
            continents: el.continents[0],
            capital: el.capital || ['Has no Capital'],
            subregion: el.subregion || 'Has no Subregion',
            area: Number(el.area),
            population: Number(el.population)
        }
    })
    return apiInfo;
}


const getDbInfo = async () => {
    return await Country.findAll({
        include: {
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season'],
            through: {
                attributes: []
            }
        }
    })
}
const getDbActivities = async () => {
    return await Activity.findAll({
            attributes:['name'],
            group:['name']
        // distinct: true
    })
}

module.exports = {
    getApiInfo,
    getDbInfo,
    getDbActivities
}