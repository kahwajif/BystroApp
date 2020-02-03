const express = require('express');
const router = express.Router();
const Food = require('../models/food');
const FoodDto = require('../models/dto/foodDto')

// GET: /api/food?query=:query
router.get('/', paginate(Food), async (req, res) => {
    try {
        //const foods = await Food.find();

        res.json(res.results);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const food = new Food({
        name: req.body.name
    });
    try {
        const newFood = await food.save();
        res.status(201).json(newFood);
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
            const food = await model
                .find(req.params.name) //{ name: req.params.name} use postman to test
                .limit(limit)
                .skip(startIndex)
                .exec();//domain
            const foodDto = new FoodDto(food.id,food.name);
            results.results = foodDto;
            res.results = results;
            next();
        } catch (e) {
            res.status(500).join({message: e.message});
        };
    };

}

module.exports = router;
