'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Order {
  _id: string;
  items: Array<{
    name: string;
    price: number;
    quantity: number;
  }>;
  total: number;
  status: string;
  createdAt: string;
}

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          window.location.href = '/login';
          return;
        }

        // Mock user data for demo
        setUser({
          name: 'John Doe',
          email: 'john@example.com',
          joinedAt: '2024-01-15'
        });

        // Mock orders data
        const mockOrders: Order[] = [
          {
            _id: '1',
            items: [
              { name: 'Gaming Pro Mouse', price: 29.99, quantity: 1 },
              { name: 'Gaming Headset', price: 39.99, quantity: 1 }
            ],
            total: 69.98,
            status: 'Delivered',
            createdAt: '2024-01-20'
          },
          {
            _id: '2',
            items: [
              { name: 'Wireless Earbuds', price: 19.99, quantity: 2 }
            ],
            total: 39.98,
            status: 'Shipped',
            createdAt: '2024-01-18'
          },
          {
            _id: '3',
            items: [
              { name: 'Smartphone Pro Max', price: 899.99, quantity: 1 }
            ],
            total: 899.99,
            status: 'Processing',
            createdAt: '2024-01-16'
          }
        ];
        setOrders(mockOrders);
      } catch (err: any) {
        setError('Failed to load user data');
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return '#059669';
      case 'Shipped': return '#2563eb';
      case 'Processing': return '#d97706';
      default: return '#6b7280';
    }
  };

  if (loading) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '60px',
        fontSize: '18px',
        color: '#6b7280'
      }}>
        Loading dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '60px',
        color: '#dc2626',
        fontSize: '18px'
      }}>
        {error}
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '40px',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <h1 style={{ 
            fontSize: '32px', 
            fontWeight: 800, 
            color: '#1a1a1a',
            marginBottom: '8px'
          }}>
            Welcome back, {user?.name}!
          </h1>
          <p style={{ color: '#6b7280', fontSize: '16px' }}>
            Member since {new Date(user?.joinedAt).toLocaleDateString()}
          </p>
        </div>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: '#dc2626',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>

      {/* Quick Actions */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        <Link href="/products" style={{
          backgroundColor: 'white',
          border: '2px solid #e5e7eb',
          borderRadius: '12px',
          padding: '24px',
          textDecoration: 'none',
          color: 'inherit',
          textAlign: 'center',
          transition: 'all 0.2s',
          display: 'block'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '12px' }}>🛍️</div>
          <div style={{ fontWeight: 600, fontSize: '18px' }}>Shop Products</div>
        </Link>
        
        <Link href="/cart" style={{
          backgroundColor: 'white',
          border: '2px solid #e5e7eb',
          borderRadius: '12px',
          padding: '24px',
          textDecoration: 'none',
          color: 'inherit',
          textAlign: 'center',
          transition: 'all 0.2s',
          display: 'block'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '12px' }}>🛒</div>
          <div style={{ fontWeight: 600, fontSize: '18px' }}>View Cart</div>
        </Link>
      </div>

      {/* Order History */}
      <div>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 700, 
          color: '#1a1a1a',
          marginBottom: '24px'
        }}>
          Order History ({orders.length} orders)
        </h2>
        
        {orders.length === 0 ? (
          <div style={{
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            padding: '40px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📦</div>
            <p style={{ color: '#6b7280', fontSize: '18px' }}>No orders yet</p>
            <Link href="/products" style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              display: 'inline-block',
              marginTop: '16px'
            }}>
              Start Shopping
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '16px' }}>
            {orders.map((order) => (
              <div key={order._id} style={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '24px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '16px',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}>
                  <div>
                    <div style={{ 
                      fontSize: '18px', 
                      fontWeight: 600, 
                      color: '#1a1a1a',
                      marginBottom: '4px'
                    }}>
                      Order #{order._id}
                    </div>
                    <div style={{ color: '#6b7280', fontSize: '14px' }}>
                      {new Date(order.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <div style={{
                    backgroundColor: getStatusColor(order.status),
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: 600
                  }}>
                    {order.status}
                  </div>
                </div>
                
                <div style={{ marginBottom: '16px' }}>
                  {order.items.map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                      color: '#6b7280'
                    }}>
                      <span>{item.name} x{item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <div style={{
                  borderTop: '1px solid #e5e7eb',
                  paddingTop: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#1a1a1a'
                  }}>
                    Total: ${order.total.toFixed(2)}
                  </div>
                  <button style={{
                    backgroundColor: 'transparent',
                    color: '#2563eb',
                    border: '1px solid #2563eb',
                    borderRadius: '6px',
                    padding: '8px 16px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
