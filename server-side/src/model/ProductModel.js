const mongoose = require('mongoose');

// Define the Product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
    min: 0.01, // Ensures that the price is a positive value
  },
  stock: {
    type: Number,
    required: true,
    min: 0, // Ensures that the stock is a non-negative integer
  },
  category: {
    type: String,
    required: true,
  },
  imageURL: String,
});

// Create the Product model
const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
