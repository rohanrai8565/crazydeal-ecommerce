'use client';

import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#1f2937',
      color: 'white',
      marginTop: '80px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 20px 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Company Info */}
          <div>
            <div style={{
              fontSize: '24px',
              fontWeight: 800,
              color: '#3b82f6',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              🛍️ CrazyDeal
            </div>
            <p style={{
              color: '#d1d5db',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              Your one-stop destination for amazing deals on electronics, gaming gear, and mobile devices. Quality products at unbeatable prices.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#" style={{ fontSize: '24px', textDecoration: 'none' }}>📧</a>
              <a href="#" style={{ fontSize: '24px', textDecoration: 'none' }}>📱</a>
              <a href="#" style={{ fontSize: '24px', textDecoration: 'none' }}>🐦</a>
              <a href="#" style={{ fontSize: '24px', textDecoration: 'none' }}>📘</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 700,
              marginBottom: '16px',
              color: 'white'
            }}>
              Quick Links
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/products" style={{
                color: '#d1d5db',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'color 0.2s'
              }}>
                All Products
              </Link>
              <Link href="/cart" style={{
                color: '#d1d5db',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'color 0.2s'
              }}>
                Shopping Cart
              </Link>
              <Link href="/dashboard" style={{
                color: '#d1d5db',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'color 0.2s'
              }}>
                My Account
              </Link>
              <Link href="/login" style={{
                color: '#d1d5db',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'color 0.2s'
              }}>
                Login
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 700,
              marginBottom: '16px',
              color: 'white'
            }}>
              Categories
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ color: '#d1d5db', fontSize: '14px' }}>Gaming Accessories</span>
              <span style={{ color: '#d1d5db', fontSize: '14px' }}>Smartphones</span>
              <span style={{ color: '#d1d5db', fontSize: '14px' }}>Laptops</span>
              <span style={{ color: '#d1d5db', fontSize: '14px' }}>Audio Devices</span>
              <span style={{ color: '#d1d5db', fontSize: '14px' }}>Electronics</span>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 700,
              marginBottom: '16px',
              color: 'white'
            }}>
              Customer Service
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ color: '#d1d5db', fontSize: '14px' }}>Help Center</span>
              <span style={{ color: '#d1d5db', fontSize: '14px' }}>Shipping Info</span>
              <span style={{ color: '#d1d5db', fontSize: '14px' }}>Returns</span>
              <span style={{ color: '#d1d5db', fontSize: '14px' }}>Contact Us</span>
              <span style={{ color: '#d1d5db', fontSize: '14px' }}>Track Order</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #374151',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ color: '#9ca3af', fontSize: '14px' }}>
            © 2024 CrazyDeal. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ color: '#9ca3af', fontSize: '14px' }}>Privacy Policy</span>
            <span style={{ color: '#9ca3af', fontSize: '14px' }}>Terms of Service</span>
            <span style={{ color: '#9ca3af', fontSize: '14px' }}>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
