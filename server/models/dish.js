// server/models/Dish.js
const mongoose = require('mongoose');

const DishSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String },
});

module.exports = mongoose.model('Dish', DishSchema);
