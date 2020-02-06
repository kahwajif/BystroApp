const router = require('express').Router();	
const path = require('path');	

const foodRoutes = require('./food');
const ingredientRoutes = require('./ingredient');
const recipeRoutes = require('./recipe');

router.use('/api/food', foodRoutes);	
router.use('/api/ingredient', ingredientRoutes);	
router.use('/api/recipe', recipeRoutes);

// by default, serve the angular app
router.get('*', function (request, response) {
    response.sendFile(path.resolve('dist/index.html'));
});

module.exports = router;