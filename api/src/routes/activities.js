const { Router } = require('express');
const router = Router();
const {Activity, Country} = require('../db');
const {getDbActivities} = require('./utils')
router.get('/allActivities', async (req, res, next)=> {
    try{
        const activities = await getDbActivities()
        res.send(activities)
    }catch(error){
        next(error)
    }
})
router.get('/activity/:id', async (req, res, next) => {
    const {id} = req.params;
    try{
        if(id){
            const activity = await Activity.findByPk(id)
            res.send(activity)
        }
    }catch(error){
        next(error);
    }
})
router.post('/activity', async (req , res, next) => {
    const {country, name, image, difficulty, duration, season} = req.body;
    try {
        let [activity, created] = await Activity.findOrCreate({
            where: {
                name,
                image,
                difficulty,
                duration,
                season
            }
        })
        console.log(created);
        if(country){
            let countryMatch = await Country.findAll({
                where: {
                    name: country
                }
            })
            await activity.addCountry(countryMatch);
        }
        res.send(activity);
    }catch(error) {
        next(error);
    }
})

router.put('/activityUpdate/:id', async(req, res, next)=>{
    const {id} = req.params;
    const {country, name, difficulty, duration, season, image} = req.body;
    try{
        if(id){
            const activityLength = await Activity.count();
            if(activityLength){
                const activity = await Activity.findByPk(id)
                if(activity){
                    await Activity.update({
                        country,
                        name,
                        image,
                        difficulty, 
                        duration,
                        season
                    }, {
                        where: {
                            id: id
                        }
                    })
                    const update = await Activity.findAll();
                    res.send(update);
                }else {
                    res.send("Activity ID  dosen't exist");
                }
            }else{
                res.send('Activity is empty');
            }
        }else {
            res.send('Activity ID required');
        }
    }catch(error){
        next(error);
    }
})

router.delete('/activityDelete/:id', async(req, res, next) => {
    const {id} = req.params;
    try{
        if(id){
            const activityLength = await Activity.count();
            if(activityLength){
                const activity = await Activity.findByPk(id)
                if(activity){
                    await Activity.destroy({
                        where: {
                            id: id
                        }
                    })
                    const update = await Activity.findAll();
                    res.status(200).send(update);
                }else{
                    res.send( "Activity ID doesn't exist");
                }
            }else {
                res.status(404).send('Activity is empty');
            }
        }else {
            res.send('Activity ID required');
        }
    }catch(error){
        next(error);
    }
})

module.exports = router;