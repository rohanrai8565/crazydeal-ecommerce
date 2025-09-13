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

      // Load Razorpay script
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error('Failed to load Razorpay SDK');
      }

      // Create order
      const orderData = await createRazorpayOrder(amount);
      if (!orderData.success) {
        throw new Error('Failed to create payment order');
      }

      // Configure Razorpay options
      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'CrazyDeal E-commerce',
        description: `Payment for ${productName}`,
        order_id: orderData.orderId,
        handler: async (response: any) => {
          try {
            // Verify payment
            const verificationData = {
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
            };

            const verificationResult = await verifyPayment(verificationData);
            
            if (verificationResult.success) {
              onSuccess?.(response.razorpay_payment_id);
            } else {
              throw new Error('Payment verification failed');
            }
          } catch (error) {
            onError?.(error instanceof Error ? error.message : 'Payment verification failed');
          }
        },
        prefill: {
          name: '',
          email: '',
          contact: '',
        },
        theme: {
          color: '#3B82F6',
        },
      };

      // Open Razorpay checkout
      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (error) {
      onError?.(error instanceof Error ? error.message : 'Payment failed');
    } finally {
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
