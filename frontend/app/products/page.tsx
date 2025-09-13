"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";

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
        {filteredProducts.map((p) => (
          <Link
            key={p._id}
            href={`/product/${p._id}`}
            style={{
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              padding: "0",
              textDecoration: "none",
              color: "inherit",
              display: "block",
              overflow: "hidden",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              transition: "all 0.2s",
              cursor: "pointer"
            }}
          >
            {p.images?.[0] ? (
              <img
                src={p.images[0]}
                alt={p.name}
                style={{ 
                  width: "100%", 
                  height: "210px", 
                  objectFit: "cover" 
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const nextEl = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextEl) nextEl.style.display = 'flex';
                }}
              />
            ) : null}
            <div
              style={{
                height: "210px",
                background: "linear-gradient(135deg, #f3f4f6, #e5e7eb)",
                display: p.images?.[0] ? "none" : "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "48px"
              }}
            >
              📦
            </div>
            <div style={{ padding: "20px" }}>
              <div style={{ 
                fontWeight: 600, 
                fontSize: "18px",
                marginBottom: "8px",
                color: "#1a1a1a"
              }}>
                {p.name}
              </div>
              <div style={{ 
                fontSize: "24px", 
                fontWeight: 700,
                color: "#2563eb"
              }}>
                ${p.price.toFixed(2)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
