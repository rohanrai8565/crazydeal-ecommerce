'use client';
import { useCart } from '../context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto',
        textAlign: 'center',
        padding: '60px 20px'
      }}>
        <h1 style={{ 
          fontSize: '36px', 
          fontWeight: 800, 
          color: '#1a1a1a',
          marginBottom: '16px'
        }}>
          Your Cart is Empty
        </h1>
        <p style={{ 
          fontSize: '18px', 
          color: '#6b7280',
          marginBottom: '32px'
        }}>
          Looks like you haven't added any items to your cart yet.
        </p>
        <Link href="/products" style={{
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '16px 32px',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '18px',
          boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
          transition: 'all 0.2s',
          display: 'inline-block'
        }}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ 
        fontSize: '36px', 
        fontWeight: 800, 
        color: '#1a1a1a',
        marginBottom: '32px'
      }}>
        Shopping Cart ({cartItems.length} items)
      </h1>
      
      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '600px' }}>
          {cartItems.map((item) => (
            <div key={item._id} style={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '16px',
              padding: '24px',
              marginBottom: '16px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              display: 'flex',
              gap: '20px',
              alignItems: 'center'
            }}>
              {item.images?.[0] && (
                <img
                  src={item.images[0]}
                  alt={item.name}
                  style={{
                    width: '120px',
                    height: '120px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              )}
              <div style={{ flex: '1' }}>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 600, 
                  color: '#1a1a1a',
                  marginBottom: '8px'
                }}>
                  {item.name}
                </h3>
                <p style={{ 
                  fontSize: '24px', 
                  fontWeight: 700,
                  color: '#2563eb',
                  marginBottom: '16px'
                }}>
                  ${item.price.toFixed(2)}
                </p>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    style={{
                      backgroundColor: '#f3f4f6',
                      border: 'none',
                      borderRadius: '8px',
                      width: '32px',
                      height: '32px',
                      cursor: 'pointer',
                      fontSize: '18px',
                      fontWeight: 'bold'
                    }}
                  >
                    -
                  </button>
                  <span style={{ 
                    fontSize: '18px', 
                    fontWeight: 600,
                    minWidth: '40px',
                    textAlign: 'center'
                  }}>
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    style={{
                      backgroundColor: '#f3f4f6',
                      border: 'none',
                      borderRadius: '8px',
                      width: '32px',
                      height: '32px',
                      cursor: 'pointer',
                      fontSize: '18px',
                      fontWeight: 'bold'
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    style={{
                      backgroundColor: '#dc2626',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: 600,
                      marginLeft: 'auto'
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ 
          width: '300px',
          backgroundColor: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '16px',
          padding: '24px',
          height: 'fit-content',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 700, 
            color: '#1a1a1a',
            marginBottom: '20px'
          }}>
            Order Summary
          </h2>
          
          <div style={{ marginBottom: '20px' }}>
            {cartItems.map((item) => (
              <div key={item._id} style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '8px',
                fontSize: '16px',
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
            marginBottom: '20px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '20px',
              fontWeight: 700,
              color: '#1a1a1a'
            }}>
              <span>Total:</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
          </div>
          
          <button 
            onClick={() => {
              // Integrate with Razorpay payment
              window.location.href = `/checkout?amount=${getTotalPrice()}`;
            }}
            style={{
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            padding: '16px',
            fontSize: '18px',
            fontWeight: 600,
            cursor: 'pointer',
            width: '100%',
            marginBottom: '12px',
            boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
            transition: 'all 0.2s'
          }}>
            Proceed to Checkout
          </button>
          
          <button 
            onClick={clearCart}
            style={{
              backgroundColor: 'transparent',
              color: '#dc2626',
              border: '1px solid #dc2626',
              borderRadius: '12px',
              padding: '12px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              width: '100%',
              transition: 'all 0.2s'
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}
