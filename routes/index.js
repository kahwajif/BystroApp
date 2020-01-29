var router = require('express').Router();	

var foodRoutes = require('./food');
var ingredientRoutes = require('./ingredient');

router.use('/api/food', foodRoutes);	
router.use('/api/ingredient', ingredientRoutes);	

module.exports = router;