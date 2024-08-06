// server/app.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dishRoutes = require('./routes/dishes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/dishes', dishRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
