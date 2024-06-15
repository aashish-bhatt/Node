const mongoose = require("mongoose");
const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ["spicy", "sweet", "sour", "bitter", "salty"],
    required: true,
  },
  is_Drink: {
    type: Boolean,
    default: false,
  },
  ingredients: {
    type: [String],
    default: [],
    required: true,
  },
  sales: {
    type: Number,
    default: 0,
  },
});
const menuItem = mongoose.model("menuItem", menuSchema);
module.exports = menuItem;
