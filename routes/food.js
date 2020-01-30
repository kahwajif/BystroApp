const express = require('express');
const router = express.Router();
const Food = require('../models/food');

// GET: /api/food?query=:query
router.get('/', paginate(Food), async (req, res) => {
    try {
        //const foods = await Food.find();
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
            results.results = await model.find().limit(limit).skip(startIndex).exec();
            res.paginate = results;
            next();
        } catch (e) {
            res.status(500).join({message: e.message});
        };
    };

}

module.exports = router;
