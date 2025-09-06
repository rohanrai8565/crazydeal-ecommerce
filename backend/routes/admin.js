const express = require('express');
const { protect, admin } = require('../middleware/auth');
const Product = require('../models/Product');
const User = require('../models/User');

const router = express.Router();

// GET /api/admin/summary - basic admin dashboard metrics
router.get('/summary', protect, admin, async (req, res) => {
  const [productCount, userCount] = await Promise.all([
    Product.countDocuments({}),
    User.countDocuments({})
  ]);
  res.json({ productCount, userCount });
});

// POST /api/admin/products - create product
router.post('/products', protect, admin, async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: 'Product creation failed' });
  }
});

// PUT /api/admin/products/:id - update product
router.put('/products/:id', protect, admin, async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

// DELETE /api/admin/products/:id - delete product
router.delete('/products/:id', protect, admin, async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json({ message: 'Product removed' });
});

module.exports = router;



