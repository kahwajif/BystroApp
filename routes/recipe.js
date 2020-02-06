const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');

// POST: /api/recipe
router.post('/getbyfoodids', async (req, res) => {
    try { //do logic here...
        const foodIds = req.body.foodIds; //getting food ids from req
        const recipes = await Recipe
            .find({
                ingredients: foodIds
            })
            .limit(10)
            .exec()
        res.json(recipes)
    } catch (err) {
        res.status(400).json({ message: err.message });
    };
});

function paginate(model){
    return async (req,res,next) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

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
            results.results = await model.find().limit(limit).skip(startIndex).exec();
            res.paginate = results;
            next();
        } catch (e) {
            res.status(500).join({message: e.message});
        };
    };

}

module.exports = router;
