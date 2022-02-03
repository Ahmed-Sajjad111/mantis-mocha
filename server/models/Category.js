const mongoose = require('mongoose');

const { Schema } = mongoose;

// categories help shoppers sort though products
const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;