const router = require('express').Router();	

const foodRoutes = require('./food');
const ingredientRoutes = require('./ingredient');
const recipeRoutes = require('./recipe');

router.use('/api/food', foodRoutes);	
router.use('/api/ingredient', ingredientRoutes);	
router.use('/api/recipe', recipeRoutes);

module.exports = router;