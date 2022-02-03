const mongoose = require('mongoose');

const { Schema } = mongoose;

// the group of products a customer wants to buy, can also help customer find products from a prior purchase
const orderSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    purchaseQuantity: {
        type: Array
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;