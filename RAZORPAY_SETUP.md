# 💳 Razorpay Integration Setup Guide

This guide will help you set up Razorpay payment gateway for your CrazyDeal e-commerce project, both locally and on GitHub.

## 🔑 Getting Razorpay API Keys

1. **Create Razorpay Account**
   - Visit [Razorpay Dashboard](https://dashboard.razorpay.com/)
   - Sign up or log in to your account

2. **Get API Keys**
   - Go to Settings → API Keys
   - Generate new API keys
   - Copy both `Key ID` and `Key Secret`

## 🛠️ Local Development Setup

### Backend Configuration

1. **Create `.env` file in backend directory:**
```bash
cd backend
cp .env.example .env
```

2. **Update `.env` with your Razorpay credentials:**
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key

# Razorpay Configuration
RAZORPAY_KEY_ID=rzp_test_your_key_id_here
RAZORPAY_KEY_SECRET=your_key_secret_here
```

### Frontend Configuration

1. **Create `.env.local` file in frontend directory:**
```bash
cd frontend
cp .env.local.example .env.local
```

2. **Update `.env.local` with your configuration:**
```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_your_key_id_here
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## 🚀 GitHub Deployment Setup

### Setting Up GitHub Secrets

1. **Go to your GitHub repository**
2. **Navigate to Settings → Secrets and variables → Actions**
3. **Add the following secrets:**

| Secret Name | Value | Description |
|-------------|-------|-------------|
| `RAZORPAY_KEY_ID` | `rzp_test_xxxxx` | Your Razorpay Key ID |
| `RAZORPAY_KEY_SECRET` | `your_secret_key` | Your Razorpay Key Secret |
| `MONGO_URI` | `mongodb://...` | Your MongoDB connection string |
| `JWT_SECRET` | `your_jwt_secret` | JWT secret for authentication |
| `API_URL` | `https://your-backend.com` | Your deployed backend URL |

### GitHub Actions Workflows

The project includes two GitHub Actions workflows:

1. **Frontend Deployment** (`.github/workflows/deploy.yml`)
   - Deploys to GitHub Pages
   - Includes Razorpay environment variables

2. **Backend Deployment** (`.github/workflows/deploy-backend.yml`)
   - Template for backend deployment
   - Configures all necessary environment variables

## 🧪 Testing Payment Integration

### Test Credentials
Use these test credentials for Razorpay testing:

**Test Cards:**
- **Visa**: 4111 1111 1111 1111
- **Mastercard**: 5555 5555 5555 4444
- **Rupay**: 6076 6200 0000 0008

**Test Details:**
- **CVV**: Any 3 digits
- **Expiry**: Any future date
- **Name**: Any name

### Testing Flow

1. **Start both servers:**
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

2. **Test payment:**
   - Add items to cart
   - Proceed to checkout
   - Use test card details
   - Verify payment completion

## 🔧 Using the Payment Component

### Basic Usage

```tsx
import PaymentButton from '../components/PaymentButton';

function CheckoutPage() {
  const handlePaymentSuccess = (paymentId: string) => {
    console.log('Payment successful:', paymentId);
    // Handle successful payment
  };

  const handlePaymentError = (error: string) => {
    console.error('Payment failed:', error);
    // Handle payment error
  };

  return (
    <PaymentButton
      amount={1999}
      productName="Gaming Mouse Pro"
      onSuccess={handlePaymentSuccess}
      onError={handlePaymentError}
    />
  );
}
```

### Advanced Configuration

```tsx
<PaymentButton
  amount={2999}
  productName="Wireless Keyboard"
  onSuccess={handlePaymentSuccess}
  onError={handlePaymentError}
  className="w-full bg-green-600 hover:bg-green-700"
  disabled={cartEmpty}
/>
```

## 🔒 Security Best Practices

1. **Never expose Key Secret in frontend**
2. **Use environment variables for all sensitive data**
3. **Verify payments on backend before order confirmation**
4. **Use HTTPS in production**
5. **Implement proper error handling**

## 🐛 Common Issues & Solutions

### Issue: Payment button not working
**Solution:**
- Check if Razorpay script is loaded
- Verify API keys in environment variables
- Check browser console for errors

### Issue: Payment verification fails
**Solution:**
- Ensure Key Secret is correctly set in backend
- Verify signature generation logic
- Check network requests in browser dev tools

### Issue: GitHub deployment fails
**Solution:**
- Verify all secrets are set in GitHub repository
- Check GitHub Actions logs for specific errors
- Ensure environment variable names match exactly

## 📱 Mobile Considerations

- Razorpay checkout is mobile-optimized
- Test on various devices and browsers
- Ensure responsive design around payment button

## 🔄 Webhook Setup (Optional)

For production, set up webhooks to handle payment events:

1. **Go to Razorpay Dashboard → Webhooks**
2. **Add webhook URL**: `https://your-backend.com/api/payment/webhook`
3. **Select events**: `payment.captured`, `payment.failed`
4. **Add webhook secret to environment variables**

## 📞 Support

- **Razorpay Documentation**: [https://razorpay.com/docs/](https://razorpay.com/docs/)
- **Integration Guide**: [https://razorpay.com/docs/payments/payment-gateway/web-integration/](https://razorpay.com/docs/payments/payment-gateway/web-integration/)
- **Test Mode**: Always test in test mode before going live

---

✅ **Your Razorpay integration is now ready!**

Test the payment flow thoroughly before deploying to production.
