// server/routes/dishes.js
const express = require('express');
const router = express.Router();
const { getDishes, createDish, getDish, updateDish, deleteDish } = require('../controllers/dishes');

// @route   GET /api/dishes
// @desc    Get all dishes
// @access  Public
router.get('/', getDishes);

// @route   POST /api/dishes
// @desc    Create a dish
// @access  Public
router.post('/', createDish);

// @route   GET /api/dishes/:id
// @desc    Get a single dish
// @access  Public
router.get('/:id', getDish);

// @route   PUT /api/dishes/:id
// @desc    Update a dish
// @access  Public
router.put('/:id', updateDish);

// @route   DELETE /api/dishes/:id
// @desc    Delete a dish
// @access  Public
router.delete('/:id', deleteDish);

module.exports = router;
