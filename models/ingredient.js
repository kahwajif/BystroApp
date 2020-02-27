const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    _id: Schema.Types.ObjectId,
    sourceId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    food: {
        type: Schema.Types.ObjectId,
        ref: 'Food'
    },
    unit: {
        type: String,
        required: false
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Ingredient', ingredientSchema);