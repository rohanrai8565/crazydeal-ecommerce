# 🛍️ CrazyDeal E-Commerce Website

A modern, full-stack e-commerce platform built with Next.js and Express.js, featuring a complete shopping experience with payment integration.

## 🌟 Features

- ✅ **Modern UI/UX** - Clean, responsive design
- ✅ **Product Catalog** - Browse products with images
- ✅ **Shopping Cart** - Add/remove items, quantity management
- ✅ **Payment Integration** - Razorpay payment gateway
- ✅ **User Authentication** - Login/signup system
- ✅ **Admin Panel** - Product and order management
- ✅ **Real-time Updates** - Dynamic cart updates

## 🎮 Featured Products

- **Gaming Pro Mouse** - High-performance gaming mouse with RGB lighting
- **Wireless Gaming Keyboard** - Mechanical wireless keyboard
- **Gaming Headset** - 7.1 Surround Sound with noise cancellation
- **Smartphone Pro Max** - Latest flagship smartphone
- **Laptop Gaming Beast** - High-performance gaming laptop
- **Wireless Earbuds** - Premium wireless earbuds

## 🚀 Live Website

**🌐 Production URL**: https://rohanrai8565.github.io/crazydeal-ecommerce/

**🏠 Local Development**: http://localhost:3000

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **React Context** - State management
- **CSS-in-JS** - Styled components

### Backend
- **Express.js** - Node.js framework
- **MongoDB** - Database
- **JWT** - Authentication
- **Razorpay** - Payment processing

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### 1. Clone Repository
```bash
git clone https://github.com/rohanrai8565/crazydeal-ecommerce.git
cd crazydeal-ecommerce
```

### 2. Install Dependencies

**Frontend:**
```bash
cd frontend
npm install
```

**Backend:**
```bash
cd ../backend
npm install
```

### 3. Environment Setup

**Backend (.env):**
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

**Frontend (.env.local):**
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
```

### 4. Run Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

## 🌐 Deployment

### GitHub Pages (Current)
- ✅ **Automated deployment** via GitHub Actions
- ✅ **Free hosting** on GitHub Pages
- ✅ **Custom domain** support

### Other Deployment Options
- **Vercel** - Frontend deployment
- **Railway** - Backend deployment
- **Netlify** - Static site hosting
- **Render** - Full-stack hosting

## 📁 Project Structure

```
crazydeal-ecommerce/
├── frontend/                 # Next.js frontend
│   ├── app/                 # App router pages
│   │   ├── cart/           # Shopping cart page
│   │   ├── products/       # Products listing
│   │   ├── product/[id]/   # Product details
│   │   └── login/          # Authentication
│   ├── components/         # Reusable components
│   ├── context/           # React Context providers
│   └── lib/               # Utility functions
├── backend/                # Express.js backend
│   ├── routes/            # API routes
│   ├── models/            # Database models
│   ├── middleware/        # Custom middleware
│   └── config/           # Configuration files
└── .github/               # GitHub Actions workflows
```

## 🔧 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration

### Payments
- `POST /api/payment/create-order` - Create Razorpay order
- `POST /api/payment/verify-payment` - Verify payment

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order

## 💳 Payment Integration

### Razorpay Setup
1. **Create Razorpay account** at https://razorpay.com
2. **Get API keys** from dashboard
3. **Update environment variables**:
   ```env
   RAZORPAY_KEY_ID=your_key_id
   RAZORPAY_KEY_SECRET=your_key_secret
   ```

### Payment Flow
1. User adds items to cart
2. Proceeds to checkout
3. Razorpay payment form appears
4. Payment verification
5. Order confirmation

## 🎨 Customization

### Adding New Products
Edit `backend/routes/products.js`:
```javascript
const newProduct = {
  name: 'Product Name',
  description: 'Product description',
  price: 9999,
  images: ['https://example.com/image.jpg'],
  category: 'Category',
  brand: 'Brand Name'
};
```

### Styling
- **Colors**: Update CSS variables in components
- **Layout**: Modify `app/layout.tsx`
- **Components**: Edit files in `app/components/`

## 🐛 Troubleshooting

### Common Issues

**1. Images not loading:**
- Check image URLs in `backend/routes/products.js`
- Verify Next.js image configuration

**2. Payment not working:**
- Verify Razorpay API keys
- Check browser console for errors

**3. Database connection:**
- Ensure MongoDB is running
- Check connection string in `.env`

**4. Build errors:**
- Clear `node_modules` and reinstall
- Check Node.js version compatibility

## 📱 Mobile Responsiveness

- ✅ **Mobile-first design**
- ✅ **Responsive grid layouts**
- ✅ **Touch-friendly interactions**
- ✅ **Optimized images**

## 🔒 Security Features

- ✅ **JWT authentication**
- ✅ **Password hashing** (bcrypt)
- ✅ **CORS protection**
- ✅ **Input validation**
- ✅ **Secure payment processing**

## 🚀 Performance

- ✅ **Next.js optimization**
- ✅ **Image optimization**
- ✅ **Code splitting**
- ✅ **Static generation**
- ✅ **CDN delivery** (GitHub Pages)

## 📈 Future Enhancements

- [ ] **User profiles** and order history
- [ ] **Product reviews** and ratings
- [ ] **Search functionality**
- [ ] **Email notifications**
- [ ] **Inventory management**
- [ ] **Multi-language support**
- [ ] **Dark mode theme**

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch
3. **Commit** your changes
4. **Push** to the branch
5. **Open** a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Rohan Rai**
- **GitHub**: [@rohanrai8565](https://github.com/rohanrai8565)
- **Website**: https://rohanrai8565.github.io/crazydeal-ecommerce/

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Express.js** for the robust backend
- **Razorpay** for payment integration
- **GitHub** for free hosting and CI/CD

---

**⭐ Star this repository if you found it helpful!**

**🛍️ Visit the live website**: https://rohanrai8565.github.io/crazydeal-ecommerce/
