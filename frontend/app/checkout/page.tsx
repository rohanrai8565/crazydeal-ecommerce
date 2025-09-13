'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PaymentButton from '../../components/PaymentButton';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const { cartItems, clearCart } = useCart();
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const amountParam = searchParams.get('amount');
    if (amountParam) {
      setAmount(parseFloat(amountParam));
    }
  }, [searchParams]);

  const handlePaymentSuccess = (paymentId: string) => {
    alert(`Payment successful! Payment ID: ${paymentId}`);
    clearCart();
    window.location.href = '/';
  };

  const handlePaymentError = (error: string) => {
    alert(`Payment failed: ${error}`);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ 
        fontSize: '32px', 
        fontWeight: 800, 
        color: '#1a1a1a',
        marginBottom: '32px',
        textAlign: 'center'
      }}>
        Checkout
      </h1>
      
      <div style={{
        backgroundColor: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '16px',
        padding: '32px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 700, 
          color: '#1a1a1a',
          marginBottom: '24px'
        }}>
          Order Summary
        </h2>
        
        {cartItems.map((item) => (
          <div key={item._id} style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '12px',
            fontSize: '16px',
            color: '#6b7280'
          }}>
            <span>{item.name} x{item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        
        <div style={{
          borderTop: '2px solid #e5e7eb',
          paddingTop: '16px',
          marginTop: '20px',
          marginBottom: '32px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '24px',
            fontWeight: 700,
            color: '#1a1a1a'
          }}>
            <span>Total:</span>
            <span>${amount.toFixed(2)}</span>
          </div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <PaymentButton
            amount={amount}
            productName="Cart Items"
            onSuccess={handlePaymentSuccess}
            onError={handlePaymentError}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
