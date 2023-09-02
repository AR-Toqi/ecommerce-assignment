const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the User schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: String,
  phoneNumber: String,
});

// Hash the password before saving it to the database
userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }

    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(this.password, salt);

    // Replace the plain text password with the hashed password
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Order',
    },
  ]
});

// Set up middleware to remove associated orders when a user is deleted
userSchema.pre('remove', async function (next) {
  try {
    await Order.deleteMany({ _id: { $in: this.orders } });
    next();
  } catch (error) {
    next(error);
  }
});


// Create the User model
const UserOrderRelationalModel = mongoose.model('User', userSchema);

module.exports = UserOrderRelationalModel;
