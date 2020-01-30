const router = require('express').Router();	

const foodRoutes = require('./food');
const ingredientRoutes = require('./ingredient');

router.use('/api/food', foodRoutes);	
router.use('/api/ingredient', ingredientRoutes);	

module.exports = router;