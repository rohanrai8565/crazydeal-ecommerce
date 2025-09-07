import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  images?: string[];
};

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' }
  ];
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`/api/product/${params.id}`);
        if (!res.ok) throw new Error('Failed to fetch product');
        const data = await res.json();
        setProduct(data);
      } catch (e: any) {
        setError(e?.message || 'Failed to load');
      }
    };
    load();
  }, [params.id]);

  if (error) return <div style={{ color: 'red' }}>{error}</div>;
  if (!product) return <div>Loading...</div>;

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


