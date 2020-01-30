const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Food', foodSchema);