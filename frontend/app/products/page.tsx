"use client";
import { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar';
import CategoryFilter from '../../components/CategoryFilter';
import ProductCard from '../../components/ProductCard';
import { useCart } from '../context/CartContext';

type Product = {
  _id: string;
  name: string;
  price: number;
  images?: string[];
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      // Use optimized fallback data with faster loading placeholders
      const fallbackProducts = [
        {
          _id: '1',
          name: 'Gaming Pro Mouse',
          price: 29.99,
          images: ['data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%222563eb%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3EGaming Mouse%3C/text%3E%3C/svg%3E']
        },
        {
          _id: '2',
          name: 'Wireless Gaming Keyboard',
          price: 49.99,
          images: ['data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%227c3aed%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3EGaming Keyboard%3C/text%3E%3C/svg%3E']
        },
        {
          _id: '3',
          name: 'Gaming Headset',
          price: 39.99,
          images: ['data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22dc2626%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3EGaming Headset%3C/text%3E%3C/svg%3E']
        },
        {
          _id: '4',
          name: 'Smartphone Pro Max',
          price: 899.99,
          images: ['data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22059669%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3ESmartphone Pro%3C/text%3E%3C/svg%3E']
        },
        {
          _id: '5',
          name: 'Gaming Laptop',
          price: 1299.99,
          images: ['data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%227c2d12%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3EGaming Laptop%3C/text%3E%3C/svg%3E']
        },
        {
          _id: '6',
          name: 'Wireless Earbuds',
          price: 19.99,
          images: ['data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22be185d%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3EWireless Earbuds%3C/text%3E%3C/svg%3E']
        },
        {
          _id: '7',
          name: 'Smart Watch',
          price: 199.99,
          images: ['data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%220891b2%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3ESmart Watch%3C/text%3E%3C/svg%3E']
        },
        {
          _id: '8',
          name: 'Bluetooth Speaker',
          price: 79.99,
          images: ['data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22ea580c%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3EBluetooth Speaker%3C/text%3E%3C/svg%3E']
        },
        {
          _id: '9',
          name: 'Tablet Pro',
          price: 649.99,
          images: ['data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%2316a34a%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3ETablet Pro%3C/text%3E%3C/svg%3E']
        },
        {
          _id: '10',
          name: 'Webcam HD',
          price: 89.99,
          images: ['data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22c2410c%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3EWebcam HD%3C/text%3E%3C/svg%3E']
        },
        {
          _id: '11',
          name: 'Mechanical Keyboard RGB',
          price: 129.99,
          images: ['data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%229333ea%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3ERGB Keyboard%3C/text%3E%3C/svg%3E']
        },
        {
          _id: '12',
          name: 'Monitor 4K Ultra',
          price: 399.99,
          images: ['data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%221e40af%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3E4K Monitor%3C/text%3E%3C/svg%3E']
        }
      ];
      
      // Simulate faster loading
      setTimeout(() => {
        setProducts(fallbackProducts);
        setFilteredProducts(fallbackProducts);
        setError(null);
        setLoading(false);
      }, 300);
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
      <h1 style={{ 
        fontSize: 'clamp(24px, 5vw, 36px)', 
        fontWeight: 800, 
        color: '#1a1a1a',
        marginBottom: '24px',
        textAlign: 'center'
      }}>
        Our Products
      </h1>
      
      <div style={{ marginBottom: '32px' }}>
        <SearchBar 
          onSearch={(query) => {
            if (!query.trim()) {
              setFilteredProducts(products);
            } else {
              const filtered = products.filter(product => 
                product.name.toLowerCase().includes(query.toLowerCase())
              );
              setFilteredProducts(filtered);
            }
          }}
          placeholder="Search products..."
        />
      </div>
      {loading && (
        <div style={{ 
          textAlign: 'center', 
          padding: '40px',
          fontSize: '18px',
          color: '#6b7280'
        }}>
          Loading products...
        </div>
      )}
      {error && (
        <div style={{ 
          color: "#dc2626", 
          backgroundColor: "#fef2f2",
          padding: "12px 16px",
          borderRadius: "8px",
          marginBottom: "24px",
          border: "1px solid #fecaca"
        }}>
          {error}
        </div>
      )}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: 'clamp(16px, 3vw, 24px)',
          marginTop: '24px'
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onAddToCart={(product) => {
              console.log('Adding to cart:', product);
              addToCart(product);
              alert(`Added ${product.name} to cart!`);
            }}
          />
        ))}
      </div>
    </div>
  );
}
