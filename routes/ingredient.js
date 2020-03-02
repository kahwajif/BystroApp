const express = require('express');
const router = express.Router();
const Ingredient = require('../models/ingredient');
const IngredientDto = require('../models/dto/ingredientDto')

// POST: /api/ingredient/filter
router.post('/filter', async (req, res) => {
    return res.status(501);
});

//GET:/api/ingredient/:id
router.get('/:id', async (req, res) => {
    try {
        //pagination not necessary. Showing only 1 recipe
        const i = await Ingredient.findById(req.params.id).exec()
        const ingredientDto = new IngredientDto(i._id,i.sourceId, i.name,i.food,i.unit,i.quantity);
       
        res.json(ingredientDto);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
