import { NextResponse } from 'next/server';

const products = [
  {
    _id: 'p1',
    name: 'Wireless Headphones',
    description: 'Premium wireless over-ear headphones with active noise cancellation and 30-hour battery life.',
    price: 199.99,
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&crop=center']
  },
  {
    _id: 'p2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking with heart rate monitoring, GPS, and water resistance up to 50m.',
    price: 249.99,
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop&crop=center']
  },
  {
    _id: 'p3',
    name: 'Gaming Mouse Pro',
    description: 'High-precision gaming mouse with customizable RGB lighting and programmable buttons.',
    price: 79.99,
    images: ['https://images.unsplash.com/photo-1527864550417-7fd46fc8932d?w=400&h=300&fit=crop&crop=center']
  },
  {
    _id: 'p4',
    name: 'Mechanical Keyboard',
    description: 'Cherry MX switches with RGB backlighting and aluminum frame for durability.',
    price: 129.99,
    images: ['https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop&crop=center']
  },
  {
    _id: 'p5',
    name: 'Wireless Speaker',
    description: 'Portable Bluetooth speaker with 360-degree sound and 12-hour battery life.',
    price: 89.99,
    images: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop&crop=center']
  },
  {
    _id: 'p6',
    name: 'USB-C Hub',
    description: '7-in-1 USB-C hub with HDMI, USB ports, and SD card reader for laptops.',
    price: 49.99,
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center']
  }
];

export async function GET() {
  return NextResponse.json({ products, total: products.length, page: 1, pages: 1 });
}



