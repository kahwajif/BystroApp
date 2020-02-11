const express = require('express');
const router = express.Router();
const Food = require('../models/food');
const FoodDto = require('../models/dto/foodDto');

// GET: /api/food?query=:query
router.get('/', paginate(Food), async (req, res) => {
    try {
        
        
        res.json(res.paginate);
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
            const foods = await model
                .find({$text: {$search: req.query.name}}) //{ name: { $regex: `.*${req.query.name}.*`}}
                .limit(limit)
                .skip(startIndex)
                .exec();//domain
            console.log(req.query)
            const foodDto = foods.map(f => new FoodDto(f.id,f.name));
            console.log(foodDto);
            results.results = foodDto;
            res.paginate = results;

            next();
        } catch (e) {
            res.status(500).json({message: e.message});
        };
    };

}

module.exports = router;