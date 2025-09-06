const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Hardcoded products with images
const hardcodedProducts = [
  {
    _id: '1',
    name: 'Gaming Pro Mouse',
    description: 'High-performance gaming mouse with RGB lighting and precision tracking',
    price: 2999,
    images: ['https://via.placeholder.com/500x400/2563eb/ffffff?text=Gaming+Pro+Mouse'],
    category: 'Gaming',
    brand: 'ProGaming',
    stock: 50
  },
  {
    _id: '2',
    name: 'Wireless Gaming Keyboard',
    description: 'Mechanical wireless keyboard with RGB backlighting',
    price: 4999,
    images: ['https://via.placeholder.com/500x400/7c3aed/ffffff?text=Gaming+Keyboard'],
    category: 'Gaming',
    brand: 'TechPro',
    stock: 30
  },
  {
    _id: '3',
    name: 'Gaming Headset',
    description: '7.1 Surround Sound gaming headset with noise cancellation',
    price: 3999,
    images: ['https://via.placeholder.com/500x400/dc2626/ffffff?text=Gaming+Headset'],
    category: 'Gaming',
    brand: 'AudioMax',
    stock: 25
  },
  {
    _id: '4',
    name: 'Smartphone Pro Max',
    description: 'Latest flagship smartphone with advanced camera system',
    price: 89999,
    images: ['https://via.placeholder.com/500x400/059669/ffffff?text=Smartphone+Pro'],
    category: 'Electronics',
    brand: 'TechBrand',
    stock: 15
  },
  {
    _id: '5',
    name: 'Laptop Gaming Beast',
    description: 'High-performance gaming laptop with RTX graphics',
    price: 129999,
    images: ['https://via.placeholder.com/500x400/7c2d12/ffffff?text=Gaming+Laptop'],
    category: 'Computers',
    brand: 'GameTech',
    stock: 10
  },
  {
    _id: '6',
    name: 'Wireless Earbuds',
    description: 'Premium wireless earbuds with active noise cancellation',
    price: 1999,
    images: ['https://via.placeholder.com/500x400/be185d/ffffff?text=Wireless+Earbuds'],
    category: 'Audio',
    brand: 'SoundPro',
    stock: 40
  }
];

// GET /api/products?keyword=&category=&sort=price|-price&page=1&limit=12
router.get('/', async (req, res) => {
  res.json({ products: hardcodedProducts, total: hardcodedProducts.length, page: 1, pages: 1 });
});

router.get('/:id', async (req, res) => {
  const product = hardcodedProducts.find(p => p._id === req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

module.exports = router;


