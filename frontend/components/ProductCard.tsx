'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Product {
  _id: string;
  name: string;
  price: number;
  images?: string[];
  description?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: isHovered ? '0 10px 25px rgba(0,0,0,0.15)' : '0 1px 3px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'pointer'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ position: 'relative' }}>
          {product.images?.[0] && !imageError ? (
            <img
              src={product.images[0]}
              alt={product.name}
              loading="lazy"
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover'
              }}
              onError={() => setImageError(true)}
            />
          ) : (
            <div style={{
              height: '220px',
              background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px'
            }}>
              📦
            </div>
          )}
          
          {/* Quick Add Button */}
          {onAddToCart && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onAddToCart(product);
              }}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '18px',
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.3s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
              title="Add to Cart"
            >
              🛒
            </button>
          )}
        </div>
      </Link>

      <div style={{ padding: '20px' }}>
        <Link href={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#1a1a1a',
            marginBottom: '8px',
            lineHeight: '1.4',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>
            {product.name}
          </h3>
          
          {product.description && (
            <p style={{
              fontSize: '14px',
              color: '#6b7280',
              marginBottom: '12px',
              lineHeight: '1.5',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical'
            }}>
              {product.description}
            </p>
          )}
          
          <div style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#2563eb',
            marginBottom: '16px'
          }}>
            ${product.price.toFixed(2)}
          </div>
        </Link>

        {onAddToCart && (
          <button
            onClick={() => onAddToCart(product)}
            style={{
              width: '100%',
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '12px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1d4ed8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2563eb';
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
