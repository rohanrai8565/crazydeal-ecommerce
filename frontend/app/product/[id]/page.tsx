'use client';

import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  images?: string[];
};


export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/products/${params.id}`);
        if (!res.ok) throw new Error('Failed to fetch product');
        const data = await res.json();
        setProduct(data);
      } catch (e: any) {
        console.error("API Error:", e);
        // Fallback to local data if API fails
        const fallbackProducts: Record<string, Product> = {
          '1': {
            _id: '1',
            name: 'Gaming Pro Mouse',
            description: 'High-performance gaming mouse with RGB lighting and precision tracking',
            price: 29.99,
            images: ['https://via.placeholder.com/500x400/2563eb/ffffff?text=Gaming+Pro+Mouse']
          },
          '2': {
            _id: '2',
            name: 'Wireless Gaming Keyboard',
            description: 'Mechanical wireless keyboard with RGB backlighting',
            price: 49.99,
            images: ['https://via.placeholder.com/500x400/7c3aed/ffffff?text=Gaming+Keyboard']
          },
          '3': {
            _id: '3',
            name: 'Gaming Headset',
            description: '7.1 Surround Sound gaming headset with noise cancellation',
            price: 39.99,
            images: ['https://via.placeholder.com/500x400/dc2626/ffffff?text=Gaming+Headset']
          },
          '4': {
            _id: '4',
            name: 'Smartphone Pro Max',
            description: 'Latest flagship smartphone with advanced camera system',
            price: 899.99,
            images: ['https://via.placeholder.com/500x400/059669/ffffff?text=Smartphone+Pro']
          },
          '5': {
            _id: '5',
            name: 'Laptop Gaming Beast',
            description: 'High-performance gaming laptop with RTX graphics',
            price: 1299.99,
            images: ['https://via.placeholder.com/500x400/7c2d12/ffffff?text=Gaming+Laptop']
          },
          '6': {
            _id: '6',
            name: 'Wireless Earbuds',
            description: 'Premium wireless earbuds with active noise cancellation',
            price: 19.99,
            images: ['https://via.placeholder.com/500x400/be185d/ffffff?text=Wireless+Earbuds']
          }
        };
        
        const fallbackProduct = fallbackProducts[params.id];
        if (fallbackProduct) {
          setProduct(fallbackProduct);
          setError(null);
        } else {
          setError('Product not found');
        }
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [params.id]);

  if (error) return (
    <div style={{ 
      textAlign: 'center', 
      padding: '40px',
      color: '#dc2626',
      fontSize: '18px'
    }}>
      {error}
    </div>
  );
  if (loading) return (
    <div style={{ 
      textAlign: 'center', 
      padding: '40px',
      fontSize: '18px',
      color: '#6b7280'
    }}>
      Loading product...
    </div>
  );
  if (!product) return (
    <div style={{ 
      textAlign: 'center', 
      padding: '40px',
      fontSize: '18px',
      color: '#6b7280'
    }}>
      Product not found
    </div>
  );

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{ 
          flex: '1', 
          minWidth: '400px',
          backgroundColor: 'white',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          {product.images?.[0] ? (
            <img
              src={product.images[0]}
              alt={product.name}
              style={{ 
                width: '100%', 
                height: '400px', 
                objectFit: 'cover' 
              }}
            />
          ) : (
            <div style={{ 
              height: '400px', 
              background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '72px'
            }}>
              📦
            </div>
          )}
        </div>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h1 style={{ 
            fontSize: '32px', 
            fontWeight: 800, 
            color: '#1a1a1a',
            marginBottom: '16px'
          }}>
            {product.name}
          </h1>
          <p style={{ 
            fontSize: '18px', 
            color: '#6b7280',
            lineHeight: '1.6',
            marginBottom: '24px'
          }}>
            {product.description}
          </p>
          <div style={{ 
            fontSize: '36px', 
            fontWeight: 800,
            color: '#2563eb',
            marginBottom: '32px'
          }}>
            ${product.price.toFixed(2)}
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => {
                if (product) {
                  addToCart({
                    _id: product._id,
                    name: product.name,
                    price: product.price,
                    images: product.images
                  });
                  setAddedToCart(true);
                  setTimeout(() => setAddedToCart(false), 2000);
                }
              }}
              style={{ 
                backgroundColor: addedToCart ? '#059669' : '#2563eb',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '12px',
                border: 'none',
                fontSize: '18px',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                transition: 'all 0.2s'
              }}
            >
              {addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
            </button>
            <button 
              onClick={() => {
                if (product) {
                  addToCart({
                    _id: product._id,
                    name: product.name,
                    price: product.price,
                    images: product.images
                  });
                  window.location.href = '/cart';
                }
              }}
              style={{ 
                backgroundColor: 'transparent',
                color: '#2563eb',
                padding: '16px 32px',
                borderRadius: '12px',
                border: '2px solid #2563eb',
                fontSize: '18px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


