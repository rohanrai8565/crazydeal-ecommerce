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
          images: ['https://via.placeholder.com/400x300/2563eb/ffffff?text=Gaming+Mouse']
        },
        {
          _id: '2',
          name: 'Wireless Gaming Keyboard',
          price: 49.99,
          images: ['https://via.placeholder.com/400x300/7c3aed/ffffff?text=Gaming+Keyboard']
        },
        {
          _id: '3',
          name: 'Gaming Headset',
          price: 39.99,
          images: ['https://via.placeholder.com/400x300/dc2626/ffffff?text=Gaming+Headset']
        },
        {
          _id: '4',
          name: 'Smartphone Pro Max',
          price: 899.99,
          images: ['https://via.placeholder.com/400x300/059669/ffffff?text=Smartphone+Pro']
        },
        {
          _id: '5',
          name: 'Gaming Laptop',
          price: 1299.99,
          images: ['https://via.placeholder.com/400x300/7c2d12/ffffff?text=Gaming+Laptop']
        },
        {
          _id: '6',
          name: 'Wireless Earbuds',
          price: 19.99,
          images: ['https://via.placeholder.com/400x300/be185d/ffffff?text=Wireless+Earbuds']
        },
        {
          _id: '7',
          name: 'Smart Watch',
          price: 199.99,
          images: ['https://via.placeholder.com/400x300/0891b2/ffffff?text=Smart+Watch']
        },
        {
          _id: '8',
          name: 'Bluetooth Speaker',
          price: 79.99,
          images: ['https://via.placeholder.com/400x300/ea580c/ffffff?text=Bluetooth+Speaker']
        },
        {
          _id: '9',
          name: 'Tablet Pro',
          price: 649.99,
          images: ['https://via.placeholder.com/400x300/16a34a/ffffff?text=Tablet+Pro']
        },
        {
          _id: '10',
          name: 'Webcam HD',
          price: 89.99,
          images: ['https://via.placeholder.com/400x300/c2410c/ffffff?text=Webcam+HD']
        },
        {
          _id: '11',
          name: 'Mechanical Keyboard RGB',
          price: 129.99,
          images: ['https://via.placeholder.com/400x300/9333ea/ffffff?text=RGB+Keyboard']
        },
        {
          _id: '12',
          name: 'Monitor 4K Ultra',
          price: 399.99,
          images: ['https://via.placeholder.com/400x300/1e40af/ffffff?text=4K+Monitor']
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
