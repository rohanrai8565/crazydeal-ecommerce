'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '../app/context/CartContext';

const Header: React.FC = () => {
  const { cartItems } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    }
  }, []);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      setShowUserMenu(false);
      window.location.href = '/';
    }
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header style={{
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      padding: 'clamp(12px, 3vw, 16px) clamp(16px, 4vw, 24px)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px'
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontSize: '28px',
          fontWeight: 800,
          color: '#2563eb',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          🛍️ CrazyDeal
        </Link>

        {/* Navigation */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px'
        }}>
          <Link href="/products" style={{
            color: '#374151',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '16px',
            transition: 'color 0.2s'
          }}>
            Products
          </Link>
          
          {/* Cart Icon */}
          <Link href="/cart" style={{
            position: 'relative',
            color: '#374151',
            textDecoration: 'none',
            fontSize: '24px',
            transition: 'color 0.2s'
          }}>
            🛒
            {cartItemCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                backgroundColor: '#dc2626',
                color: 'white',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 600
              }}>
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* User Menu */}
          {isLoggedIn ? (
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                style={{
                  backgroundColor: '#f3f4f6',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  fontSize: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                👤
              </button>
              
              {showUserMenu && (
                <div style={{
                  position: 'absolute',
                  top: '50px',
                  right: 0,
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  minWidth: '160px',
                  zIndex: 10
                }}>
                  <Link href="/dashboard" style={{
                    display: 'block',
                    padding: '12px 16px',
                    color: '#374151',
                    textDecoration: 'none',
                    fontSize: '14px',
                    borderBottom: '1px solid #f3f4f6'
                  }}>
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#dc2626',
                      fontSize: '14px',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '12px' }}>
              <Link href="/login" style={{
                color: '#2563eb',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '16px'
              }}>
                Login
              </Link>
              <Link href="/signup" style={{
                backgroundColor: '#2563eb',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '16px'
              }}>
                Sign Up
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
