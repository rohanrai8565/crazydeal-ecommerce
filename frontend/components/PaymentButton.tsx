'use client';

import React, { useState } from 'react';
import { loadRazorpayScript, createRazorpayOrder, verifyPayment, RazorpayOptions } from '../lib/razorpay';

interface PaymentButtonProps {
  amount: number;
  productName: string;
  onSuccess?: (paymentId: string) => void;
  onError?: (error: string) => void;
  className?: string;
  disabled?: boolean;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
  amount,
  productName,
  onSuccess,
  onError,
  className = '',
  disabled = false
}) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);

      // For demo purposes, simulate successful payment without Razorpay
      setTimeout(() => {
        const mockPaymentId = 'pay_' + Math.random().toString(36).substr(2, 9);
        onSuccess?.(mockPaymentId);
        setLoading(false);
      }, 1000);

    } catch (error) {
      onError?.(error instanceof Error ? error.message : 'Payment failed');
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={disabled || loading}
      style={{
        backgroundColor: loading ? '#d1d5db' : '#2563eb',
        color: 'white',
        fontWeight: 600,
        padding: '12px 24px',
        borderRadius: '8px',
        border: 'none',
        cursor: loading ? 'not-allowed' : 'pointer',
        transition: 'background-color 0.2s',
        width: '100%',
        fontSize: '16px'
      }}
      onMouseEnter={(e) => {
        if (!loading && !disabled) {
          e.currentTarget.style.backgroundColor = '#1d4ed8';
        }
      }}
      onMouseLeave={(e) => {
        if (!loading && !disabled) {
          e.currentTarget.style.backgroundColor = '#2563eb';
        }
      }}
    >
      {loading ? 'Processing...' : `Pay ₹${amount}`}
    </button>
  );
};

export default PaymentButton;
