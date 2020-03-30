const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        text: true,
        required: true
    },
    foodTypeId: {
        type: Number,
        required: true
    }
});

foodSchema.index({name: "text"});

module.exports = mongoose.model('Food', foodSchema);