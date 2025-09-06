const mongoose = require('mongoose');

const connectDB = async (uri) => {
  try {
    // Use fallback MongoDB URI if none provided
    const mongoUri = uri || 'mongodb://localhost:27017/ecommerce';
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error', err);
    // Don't exit process, just log error for demo purposes
    console.log('Running without database - using mock data');
  }
};

module.exports = connectDB;
