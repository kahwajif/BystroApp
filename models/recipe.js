const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    sourceId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: false
    },
    recipeUrl: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: false
    },
    cookTimeMinutes: {
        type: Number,
        required: false
    },
    preparationTimeMinutes: {
        type: Number,
        required: false
    },
    servings: {
        type: Number,
        required: true
    },
    mainIngredient: {
        type: Schema.Types.ObjectId,
        ref: 'Ingredient'
    },
    ingredients: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Ingredient'
        }
    ],
    foods: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Food'
        }
    ]
});

module.exports = mongoose.model('Recipe', recipeSchema);