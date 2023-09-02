const mongoose = require('mongoose');

// Define the Order schema
const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserOrderRelationalModel', // Reference to the User model
    required: true,
  },
  items: [
    {
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
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
    min: 0.01, // Ensures that the totalAmount is a positive value
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: 'Pending',
  },
});

// Create the Order model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
