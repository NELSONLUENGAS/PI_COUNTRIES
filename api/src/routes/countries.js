const { Router } = require('express');
const router = Router();
const {Op} = require('sequelize');


const { getApiInfo, getDbInfo } = require('./utils');
const {Country, Activity} = require('../db');

router.get('/countries', async (req, res, next) => {
    const {name} = req.query;
    const allCountries = await getApiInfo();
    const dbCountriesLength = await Country.count();
    let dbCountriesInfo;
    if (dbCountriesLength === 0) {
        dbCountriesInfo = await Country.bulkCreate(allCountries);
    }
    dbCountriesInfo = await getDbInfo();
    try {
        if(name){
            const countryName = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                },
                include: {
                    model: Activity,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }
            })
            countryName.length 
            ? res.send(countryName)
            : res.status(404).send("Country doesn't exist");
        }else {
            res.send(dbCountriesInfo);
        }
    }catch (error) {
        next(error);
    }
})
router.get('/filterActivity', async (req, res, next) => {
    const {activity} =  req.query;
    try{
        const filter = await Country.findAll({
            include:{
                model: Activity,
                        attributes: ['name'],
                        through: {
                            attributes: []
                        },
                        where:{
                            name: activity || ''
                        }
            }
        })
        res.send(filter)
    }catch(error){
        next(error)
    }
})

router.get('/countries/:idPais', async (req, res, next) =>{
    const {idPais} = req.params;
    try {
        if(idPais){
            let countryId = await Country.findByPk(idPais,{
                include: {
                    model: Activity,
                    attribute: ['name','difficulty', 'duration','season'],
                    through: {
                        attributes: []
                    }
                }
            })
            !countryId
            ? res.status(404).send("Country ID doesn't exist")
            : res.send(countryId);
        }
    }catch(error){
        next(error)
    }
})

router.get('/countriesOrderBy', async (req, res, next)=> {
    const  {continents, id, area, population,order} = req.query;
    
    try {
    if(id){
        if(id && order){
            const orderById = await Country.findAll({
                order:[['id', 'DESC']]
            })
            res.send(orderById)
        }else{
            const orderById = await Country.findAll({
                order:[['id', 'ASC']]
            })
            res.send(orderById)
        }
    }else if(continents){
        if(continents && order){
            const orderByContinents = await Country.findAll({
                order:[['continents', 'DESC']]
            })
            res.send(orderByContinents);
        }else{
            const orderByContinents = await Country.findAll({
                order:[['continents', 'ASC']]
            })
            res.send(orderByContinents);
        }
    }else if(area){
        if(area && order){ 
            const orderByArea = await Country.findAll({
                order:[['area', 'DESC']]
            })
            res.send(orderByArea);
        }else{
            const orderByArea = await Country.findAll({
                order:[['area', 'ASC']]
            })
            res.send(orderByArea)
        }
    }else if(population){
        if(population && order){
            const orderByPopulation = await Country.findAll({
                order:[['population', 'DESC']]
            })
            res.send(orderByPopulation);
        }else{
            const orderByPopulation = await Country.findAll({
                order:[['population', 'ASC']]
            })
            res.send(orderByPopulation);
        }
    }
    
    }catch(error){
        next(error)
    }
})

// router.get('/countriesGroupBy', async (req, res, next)=> {
//     const {continents} = req.query;
//     try{
//         if(continents){
//             const groupByContinents = await Country.findAll({
//                 group: ['id','continents'],
//                 order:[['continents', 'ASC']]
//             })
//             console.log(groupByContinents)
//             res.send(groupByContinents)
//         }
//     }catch(error){
//         next(error);
//     }
// })

module.exports = router;

