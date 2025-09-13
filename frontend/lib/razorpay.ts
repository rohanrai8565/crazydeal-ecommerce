declare global {
  interface Window {
    Razorpay: any;
  }
}

export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: any) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  theme?: {
    color?: string;
  };
}

export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const createRazorpayOrder = async (amount: number): Promise<any> => {
  // Mock order creation for demo purposes since backend is not running
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 'order_' + Math.random().toString(36).substr(2, 9),
        amount: amount * 100, // Razorpay expects amount in paise
        currency: 'INR',
        status: 'created'
      });
    }, 500);
  });
};

export const verifyPayment = async (paymentData: any): Promise<any> => {
  // Mock payment verification for demo purposes since backend is not running
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        payment_id: paymentData.razorpay_payment_id,
        order_id: paymentData.razorpay_order_id,
        signature: paymentData.razorpay_signature,
        status: 'verified'
      });
    }, 300);
  });
};
