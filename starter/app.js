const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1/tasks', tasks);

// Connect to MongoDB and Start Server
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (err) {
    console.error(err);
  }
};

start();
