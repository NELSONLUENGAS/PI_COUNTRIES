const { Router } = require('express');
const router = Router();
const countriesRoute = require('./countries');
const activitiesRoute = require('./activities');


router.use('/', countriesRoute);
router.use('/', activitiesRoute);



module.exports = router;
