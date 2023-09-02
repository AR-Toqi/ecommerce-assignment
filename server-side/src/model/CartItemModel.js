const mongoose = require('mongoose');

// Define the CartItem schema
const cartItemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserCartRelationalModel', // Reference to the User model
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductModel', // Reference to the Product model
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1, // Ensures that the quantity is a positive integer
  },
});

// Create the CartItem model
const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;
