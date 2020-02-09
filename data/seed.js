const router = require('express').Router;
const path = require('path');
const _ = require('lodash');
const fs = require('fs');

const mongoose = require('mongoose');
const Ingredient = require('../models/ingredient');
const Recipe = require('../models/recipe');
const Food = require('../models/food');

const FILE_LIMIT = 10;

let ingredientCache = [];
let recipeCache = [];
let foodCache = [];

let promise = Promise.resolve();

module.exports = {
    async run() {
        const ingredient = await Ingredient.find().limit(1);
        const recipe = await Recipe.find().limit(1);
        const food = await Food.find().limit(1);

        if(ingredient.length || recipe.length || food.length) {
            console.log('Records found in database. Skipping seed method...')
            return;
        }

        for(let i = 1; i <= FILE_LIMIT; i++){
            let fileNumber = String(i).padStart(3, '0');
            await seedFile(path.resolve(`data/raw/spoonacular${fileNumber}.json`));
        }

    }
}

const seedFile = async (fileName) => {
    console.log(`Seeding file: ${fileName}`);
    const data = fileContentsToJson(fileName);
    
    for(let i = 0; i < data.recipes.length; i++) {
        const sourceRecipe = data.recipes[i];
        await getOrSeedRecipe(sourceRecipe);
    }

    // show all inserted records
    Recipe.countDocuments({}, (err, count) => console.log( `Successfully seeded ${count} recipes...`));
    Ingredient.countDocuments({}, (err, count) => console.log( `Successfully seeded ${count} ingredients...`));
    Food.countDocuments({}, (err, count) => console.log( `Successfully seeded ${count} foods...`));
    return;
}

const fileContentsToJson = (fileName) => {
    let fileContent = fs.readFileSync(fileName);
    let setting = JSON.parse(fileContent);
    return setting;
}

const getOrSeedIngredient = (sourceIngredient) => {
    return new Promise(async (resolve, reject) => {
        // const ingredient = await Ingredient.findOne({ sourceId: sourceIngredient.id });
        // if(ingredient){
        //     console.warn(`skipping ${sourceIngredient.original}, already in ingredients database`)
        //     return resolve(ingredient);
        // }
    
        try {
            const newIngredient = new Ingredient({
                _id: new mongoose.Types.ObjectId(),
                sourceId: sourceIngredient.id ? sourceIngredient.id : 0,
                name: sourceIngredient.original,
                unit: sourceIngredient.unit,
                quantity: sourceIngredient.amount,
            });
        
            var food = await getOrSeedFood(sourceIngredient.name);
            newIngredient.food = food;
            
            var createdIngredient = await newIngredient.save();
            console.log(`added ${createdIngredient.name} to ingredients`);
            return resolve(createdIngredient);
        } catch {
            console.error('could not save new ingredient', sourceIngredient)
            resolve(null);
        }
    });

}

const getOrSeedRecipe = (sourceRecipe) => {
    return new Promise(async (resolve, reject) => {
        const recipe = await Recipe.findOne({ sourceId: sourceRecipe.id });
        if(recipe){
            console.warn(`skipping ${sourceRecipe.name}, already in recipes database`)
            return resolve(recipe);
        }
    
        const newRecipe = new Recipe({
            _id: new mongoose.Types.ObjectId(),
            sourceId: sourceRecipe.id,
            name: sourceRecipe.title,
            author: sourceRecipe.creditsText,
            imageUrl: sourceRecipe.image,
            recipeUrl: sourceRecipe.sourceUrl,
            cookTimeMinutes: sourceRecipe.cookingMinutes,
            preparationTimeMinutes: sourceRecipe.preparationMinutes,
            servings: sourceRecipe.servings
        });

        for(let i = 0; i < sourceRecipe.extendedIngredients.length; i++) {
            var sourceIngredient = sourceRecipe.extendedIngredients[i];
            var ingredient = await getOrSeedIngredient(sourceIngredient);
            if(ingredient) {
                newRecipe.ingredients.push(ingredient);

                if(!_.find(newRecipe.foods, { _id: ingredient.food._id })){
                    newRecipe.foods.push(ingredient.food);
                }
            }
        }

        var createdRecipe = await newRecipe.save();
        console.log(`added ${createdRecipe.name} to recipes`);
        return resolve(createdRecipe);
    })
}

const getOrSeedFood = (name) => {
    return new Promise(async (resolve, reject) => {
        const food = await Food.findOne({ name: name });
        if(food){
            console.warn(`skipping ${name}, already in food database`)
            return resolve(food);
        }
    
        const newFood = new Food({
            _id: new mongoose.Types.ObjectId(),
            name: name
        });
    
        console.log(`adding ${name} to foods`);
        var createdFood = await newFood.save();
        return resolve(createdFood);
    });
}

