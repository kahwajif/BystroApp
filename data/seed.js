const router = require('express').Router;
const path = require('path');
const _ = require('lodash');
const fs = require('fs');

const mongoose = require('mongoose');
const Ingredient = require('../models/ingredient');
const Recipe = require('../models/recipe');
const Food = require('../models/food');

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

        await seedFile(path.resolve('data/raw/spoonacular001.json'));

    }
}

const seedFile = async (fileName) => {
    console.log(`Seeding file: ${fileName}`);
    const data = fileContentsToJson(fileName);
    
    for(let i = 0; i < data.recipes.length; i++) {
        const recipe = data.recipes[i];
        getOrSeedRecipe(recipe);
    }

    // show all inserted records
    Recipe.count({}, (count) => console.log( `Successfully seeded ${count} recipes...`));
    Ingredient.count({}, (count) => console.log( `Successfully seeded ${count} ingredients...`));
    Food.count({}, (count) => console.log( `Successfully seeded ${count} foods...`));
}

const fileContentsToJson = (fileName) => {
    let fileContent = fs.readFileSync(fileName);
    let setting = JSON.parse(fileContent);
    return setting;
}

const getOrSeedIngredient = (sourceIngredient) => {
    return new Promise((resolve, reject) => {
        const cachedIngredient = _.find(ingredientCache, { sourceId: sourceIngredient.id });
        if(cachedIngredient){
            console.warn(`skipping ${sourceIngredient.name}, already in ingredients database`)
            return cachedRecipe;
        }
    
        const ingredient = new Ingredient({
            _id: new mongoose.Types.ObjectId(),
            sourceId: sourceIngredient.id,
            name: sourceIngredient.original,
            unit: sourceIngredient.unit,
            quantity: sourceIngredient.amount,
        });
    
        getOrSeedFood(sourceIngredient.name)
            .then(food => {
                ingredient.food = food;
                console.log(`adding ${ingredient.name} to ingredients`);
                ingredient.save()
                    .then((i) => {
                        Ingredient.findOne(i._id, (err, data) => {
                            resolve(data);
                        })
                    });
            });
    });

}

const getOrSeedRecipe = (sourceRecipe) => {
    return new Promise((resolve, reject) => {
        const cachedRecipe = _.find(recipeCache, { sourceId: sourceRecipe.id });
        if(cachedRecipe){
            console.warn(`skipping ${sourceRecipe.name}, already in recipes database`)
            return cachedRecipe;
        }
    
        const recipe = new Recipe({
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

        let promises = sourceRecipe.extendedIngredients.map(r => getOrSeedIngredient(r));
        Promise
            .all(promises)
            .then((ingredients) => {
                recipe.ingredients.push(...ingredients);
                console.log(`adding ${recipe.name} to recipes`);
                recipe.save()
                    .then((r) => {
                        Recipe.findOne(r._id, (err, data) => {
                            resolve(data);
                        })
                    })
            });
    })
}

const getOrSeedFood = (name) => {
    return new Promise((resolve, reject) => {
        const cachedFood = _.find(foodCache, { name: name });
        if(cachedFood){
            console.warn(`skipping ${name}, already in food database`)
            return cachedFood;
        }
    
        const food = new Food({
            _id: new mongoose.Types.ObjectId(),
            name: name
        });
    
        console.log(`adding ${name} to foods`);
        food.save()
            .then((f) => {
                Food.findOne(f._id, (err, data) => {
                    resolve(data);
                })
            });
    });
}

