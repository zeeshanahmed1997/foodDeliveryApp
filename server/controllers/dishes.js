// server/controllers/dishes.js
const Dish = require('../models/dish');

exports.getDishes = async (req, res) => {
    try {
        const dishes = await Dish.find();
        console.log('Dishes found:', dishes);
        res.json(dishes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createDish = async (req, res) => {
    const newDish = new Dish({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
    });

    try {
        const savedDish = await newDish.save();
        res.status(201).json(savedDish);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getDish = async (req, res) => {
    try {
        const dish = await Dish.findById(req.params.id);
        if (!dish) return res.status(404).json({ message: 'Dish not found' });
        res.json(dish);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateDish = async (req, res) => {
    try {
        const updatedDish = await Dish.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedDish) return res.status(404).json({ message: 'Dish not found' });
        res.json(updatedDish);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteDish = async (req, res) => {
    try {
        const deletedDish = await Dish.findByIdAndDelete(req.params.id);
        if (!deletedDish) return res.status(404).json({ message: 'Dish not found' });
        res.json({ message: 'Dish deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
