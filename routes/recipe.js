const _ = require('lodash');
const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');
const Ingredient = require('../models/ingredient');
const ObjectId = require('mongoose').Types.ObjectId
const RecipeDto = require('../models/dto/recipeDto');

// POST: /api/recipe
router.post('/', paginate(Recipe), async (req, res) => {
    try { 
        //do logic here...
        res.json(res.paginate)
    } catch (err) {
        res.status(400).json({ message: err.message });
    };
});

//GET:/api/recipe/:id
router.get('/:id', async (req, res) => {
    try {
        //pagination not necessary. Showing only 1 recipe
        let r = await Recipe.findById(req.params.id).exec();

        let foodObjectIds = r.ingredients.map(i => ObjectId(i));
        let ingredients = await Ingredient
            .find({
                '_id': { $in: foodObjectIds }
            })
            .populate('food')
            .exec();

        const recipeDtos = new RecipeDto(r._id,r.sourceId, r.name,r.author,r.recipeUrl,r.imageUrl,r.cookTimeMinutes,
            r.preparationTimeMinutes,r.servings,r.mainIngredient,ingredients,r.foods,r.instructions);
       
        res.json(recipeDtos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

function paginate(model){
    return async (req,res,next) => {

        const page = parseInt(req.body.page);
        const limit = parseInt(req.body.limit);

        const startIndex = (page -1) * limit;
        const endIndex = page * limit;

        const results = {};

        if (endIndex < await model.countDocuments().exec()){
            results.next ={
                page: page + 1,
                limit: limit              
            };
        };
        
        if (startIndex > 0){
            results.previous = {
                page: page - 1,
                limit: limit
            };
        };
        try{
            const foodIds = req.body.foodIds
            const foodObjectIds = foodIds.map(id => ObjectId(id))

            //DTO not need as the information returned is already specifically selected in $group
            const matchingRecipes = await Recipe
                .aggregate([
                    { $match: { "foods": { $in: foodObjectIds } } },
                    { $unwind: "$foods" },
                    { $match: { foods: { $in: foodObjectIds } } },
                    { $group: { 
                        "_id": "$_id", 
                        "noOfMatches": { $sum: 1 } }
                    },
                    { $sort: { noOfMatches: -1 } },
                ])
                .limit(limit)
                .exec();

            let recipes = await Recipe
                .find({ "_id": { $in: matchingRecipes.map(r => r._id) } })
                .exec();

            // convert recipes to list of json objects
            recipes = recipes.map(r => r.toObject());

            // calculate the percentage match
            for(let i = 0; i < recipes.length; i++) {
                let recipe = recipes[i];

                var queryFoodIds = foodObjectIds.map(foi => foi.toString());
                var resultFoodIds = recipe.foods.map(f => f.toString());
                let commonFoodIds = _.intersection(queryFoodIds, resultFoodIds);

                recipes[i].percentageMatch = commonFoodIds.length / recipe.foods.length;
            }

            let recipesDto = recipes.map(r => {
                return new RecipeDto(
                    r._id,
                    r.sourceId,
                    r.name,
                    r.author,
                    r.recipeUrl,
                    r.imageUrl,
                    r.cookTimeMinutes,
                    r.preparationTimeMinutes,
                    r.servings,
                    r.mainIngredient,
                    r.ingredients,
                    r.foods,
                    r.instructions
                );
            });

            results.results = recipesDto;
            res.paginate = results;

            next();
        } catch (e) {
            console.error(e);
            res.status(500).json({message: e.message});
        };
    };

}

module.exports = router;
