const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: [4, 'More than 4 characters needed'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },

    img: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
