const express = require('express');
const { protect } = require('../middleware/auth');
const Order = require('../models/Order');

const router = express.Router();

// POST /api/orders - create order
router.post('/', protect, async (req, res) => {
  try {
    const order = await Order.create({
      user: req.user._id,
      orderItems: req.body.orderItems || [],
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      taxPrice: req.body.taxPrice,
      shippingPrice: req.body.shippingPrice,
      totalPrice: req.body.totalPrice
    });
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: 'Order creation failed' });
  }
});

// GET /api/orders/my - current user's orders
router.get('/my', protect, async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).sort('-createdAt');
  res.json(orders);
});

// GET /api/orders/:id - get order by id
router.get('/:id', protect, async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user', 'name email');
  if (!order) return res.status(404).json({ message: 'Order not found' });
  if (order.user._id.toString() !== req.user._id.toString() && !req.user.isAdmin) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  res.json(order);
});

module.exports = router;



