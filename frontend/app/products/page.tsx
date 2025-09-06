"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type Product = {
  _id: string;
  name: string;
  price: number;
  images?: string[];
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/products", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data.products || []);
      } catch (e: any) {
        setError(e?.message || "Failed to load products");
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
        {products.map((p) => (
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
              <Image
                src={p.images[0]}
                alt={p.name}
                width={280}
                height={210}
                style={{ 
                  width: "100%", 
                  height: "210px", 
                  objectFit: "cover" 
                }}
              />
            ) : (
              <div
                style={{
                  height: "210px",
                  background: "linear-gradient(135deg, #f3f4f6, #e5e7eb)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "48px"
                }}
              >
                📦
              </div>
            )}
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
