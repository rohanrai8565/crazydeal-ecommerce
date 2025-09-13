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
    const load = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/products`, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        const productList = data.products || [];
        setProducts(productList);
        setFilteredProducts(productList);
      } catch (e: any) {
        console.error("API Error:", e);
        // Fallback to local data if API fails
        const fallbackProducts = [
          {
            _id: '1',
            name: 'Gaming Pro Mouse',
            price: 29.99,
            images: ['https://via.placeholder.com/500x400/2563eb/ffffff?text=Gaming+Pro+Mouse']
          },
          {
            _id: '2',
            name: 'Wireless Gaming Keyboard',
            price: 49.99,
            images: ['https://via.placeholder.com/500x400/7c3aed/ffffff?text=Gaming+Keyboard']
          },
          {
            _id: '3',
            name: 'Gaming Headset',
            price: 39.99,
            images: ['https://via.placeholder.com/500x400/dc2626/ffffff?text=Gaming+Headset']
          },
          {
            _id: '4',
            name: 'Smartphone Pro Max',
            price: 899.99,
            images: ['https://via.placeholder.com/500x400/059669/ffffff?text=Smartphone+Pro']
          },
          {
            _id: '5',
            name: 'Laptop Gaming Beast',
            price: 1299.99,
            images: ['https://via.placeholder.com/500x400/7c2d12/ffffff?text=Gaming+Laptop']
          },
          {
            _id: '6',
            name: 'Wireless Earbuds',
            price: 19.99,
            images: ['https://via.placeholder.com/500x400/be185d/ffffff?text=Wireless+Earbuds']
          }
        ];
        setProducts(fallbackProducts);
        setFilteredProducts(fallbackProducts);
        setError(null); // Clear error since we have fallback data
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ 
        fontSize: '36px', 
        fontWeight: 800, 
        color: '#1a1a1a',
        marginBottom: '32px',
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
              const handleAddToCart = (product: Product) => {
                console.log('Adding to cart:', product);
                addToCart(product);
                alert(`Added ${product.name} to cart!`);
              };
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
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}
