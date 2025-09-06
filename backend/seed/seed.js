const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

const products = [
  {
    name: 'Gaming Pro Mouse',
    description: 'High-performance gaming mouse with RGB lighting and precision tracking',
    price: 2999,
    images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500'],
    category: 'Gaming',
    brand: 'ProGaming',
    stock: 50
  },
  {
    name: 'Wireless Gaming Keyboard',
    description: 'Mechanical wireless keyboard with RGB backlighting',
    price: 4999,
    images: ['https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500'],
    category: 'Gaming',
    brand: 'TechPro',
    stock: 30
  },
  {
    name: 'Gaming Headset',
    description: '7.1 Surround Sound gaming headset with noise cancellation',
    price: 3999,
    images: ['https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500'],
    category: 'Gaming',
    brand: 'AudioMax',
    stock: 25
  },
  {
    name: 'Smartphone Pro Max',
    description: 'Latest flagship smartphone with advanced camera system',
    price: 89999,
    images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500'],
    category: 'Electronics',
    brand: 'TechBrand',
    stock: 15
  },
  {
    name: 'Laptop Gaming Beast',
    description: 'High-performance gaming laptop with RTX graphics',
    price: 129999,
    images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500'],
    category: 'Computers',
    brand: 'GameTech',
    stock: 10
  },
  {
    name: 'Wireless Earbuds',
    description: 'Premium wireless earbuds with active noise cancellation',
    price: 1999,
    images: ['https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500'],
    category: 'Audio',
    brand: 'SoundPro',
    stock: 40
  }
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce');
    console.log('Connected to MongoDB');
    
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    await Product.insertMany(products);
    console.log('Products seeded successfully');
    
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
};

seedProducts();
