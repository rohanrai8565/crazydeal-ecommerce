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
      className={`
        bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400
        text-white font-semibold py-2 px-4 rounded-lg
        transition-colors duration-200
        ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {loading ? 'Processing...' : `Pay ₹${amount}`}
    </button>
  );
};

export default PaymentButton;
