# 🛍️ CrazyDeal E-Commerce Website

A modern, full-stack e-commerce platform built with **Next.js** and **Express.js**, featuring a complete shopping experience with payment integration.

---

## 🌟 Features
- ✅ Modern UI/UX – Clean, responsive design  
- ✅ Product Catalog – Browse products with images  
- ✅ Shopping Cart – Add/remove items, quantity management  
- ✅ Payment Integration – Razorpay payment gateway  
- ✅ User Authentication – Login/signup system  
- ✅ Admin Panel – Product and order management  
- ✅ Real-time Updates – Dynamic cart updates  

---

## 🎮 Featured Products
- Gaming Pro Mouse – High-performance gaming mouse with RGB lighting  
- Wireless Gaming Keyboard – Mechanical wireless keyboard  
- Gaming Headset – 7.1 Surround Sound with noise cancellation  
- Smartphone Pro Max – Latest flagship smartphone  
- Laptop Gaming Beast – High-performance gaming laptop  
- Wireless Earbuds – Premium wireless earbuds  

---

## 🚀 Live Website
- 🌐 **Production URL**: [CrazyDeal E-Commerce](https://rohanrai8565.github.io/crazydeal-ecommerce/)  
- 🏠 **Local Development**: `http://localhost:3000`

---

## 🛠️ Tech Stack

**Frontend**
- Next.js 14  
- TypeScript  
- React Context (state management)  
- CSS-in-JS (styled components)  

**Backend**
- Express.js (Node.js framework)  
- MongoDB (database)  
- JWT (authentication)  
- Razorpay (payment processing)  

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)  
- npm or yarn  
- MongoDB (local or Atlas)  

### 1. Clone Repository
```bash
git clone https://github.com/rohanrai8565/crazydeal-ecommerce.git
cd crazydeal-ecommerce
2. Install Dependencies
Frontend:

bash
Copy code
cd frontend
npm install
Backend:

bash
Copy code
cd ../backend
npm install
3. Environment Setup
Backend (.env):

env
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
Frontend (.env.local):

env
Copy code
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
4. Run Development Servers
Backend (Terminal 1):

bash
Copy code
cd backend
npm run dev
Frontend (Terminal 2):

bash
Copy code
cd frontend
npm run dev
🌐 Deployment
GitHub Pages (Current)

✅ Automated deployment via GitHub Actions

✅ Free hosting

✅ Custom domain support

Other Options

Vercel – Frontend deployment

Railway – Backend deployment

Netlify – Static site hosting

Render – Full-stack hosting

📁 Project Structure
bash
Copy code
crazydeal-ecommerce/
├── frontend/                 # Next.js frontend
│   ├── app/                  # App router pages
│   │   ├── cart/             # Shopping cart page
│   │   ├── products/         # Products listing
│   │   ├── product/[id]/     # Product details
│   │   └── login/            # Authentication
│   ├── components/           # Reusable components
│   ├── context/              # React Context providers
│   └── lib/                  # Utility functions
├── backend/                  # Express.js backend
│   ├── routes/               # API routes
│   ├── models/               # Database models
│   ├── middleware/           # Custom middleware
│   └── config/               # Configuration files
└── .github/                  # GitHub Actions workflows
🔧 API Endpoints
Products

GET /api/products – Get all products

GET /api/products/:id – Get single product

Authentication

POST /api/auth/login – User login

POST /api/auth/signup – User registration

Payments

POST /api/payment/create-order – Create Razorpay order

POST /api/payment/verify-payment – Verify payment

Orders

GET /api/orders – Get user orders

POST /api/orders – Create new order

💳 Payment Integration
Razorpay Setup

Create an account at Razorpay

Get API keys from dashboard

Update environment variables:

env
Copy code
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
Payment Flow

User adds items to cart

Proceeds to checkout

Razorpay payment form appears

Payment verification

Order confirmation

🎨 Customization
Adding New Products (in backend/routes/products.js):

js
Copy code
const newProduct = {
  name: 'Product Name',
  description: 'Product description',
  price: 9999,
  images: ['https://example.com/image.jpg'],
  category: 'Category',
  brand: 'Brand Name'
};
Styling

Colors → Update CSS variables in components

Layout → Modify app/layout.tsx

Components → Edit files in app/components/

🐛 Troubleshooting
1. Images not loading

Check image URLs in backend/routes/products.js

Verify Next.js image configuration

2. Payment not working

Verify Razorpay API keys

Check browser console for errors

3. Database connection

Ensure MongoDB is running

Check connection string in .env

4. Build errors

Delete node_modules and reinstall

Check Node.js version

📱 Mobile Responsiveness
✅ Mobile-first design

✅ Responsive grid layouts

✅ Touch-friendly interactions

✅ Optimized images

🔒 Security Features
✅ JWT authentication

✅ Password hashing (bcrypt)

✅ CORS protection

✅ Input validation

✅ Secure payment processing

🚀 Performance
✅ Next.js optimization

✅ Image optimization

✅ Code splitting

✅ Static generation

✅ CDN delivery (GitHub Pages)

📈 Future Enhancements
User profiles and order history

Product reviews and ratings

Search functionality

Email notifications

Inventory management

Multi-language support

Dark mode theme

🤝 Contributing
Fork the repository

Create a feature branch

Commit your changes

Push to the branch

Open a Pull Request

📄 License
This project is licensed under the MIT License – see the LICENSE file for details.

👨‍💻 Developer
Rohan Rai

GitHub: @rohanrai8565

Website: CrazyDeal Live

🙏 Acknowledgments
Next.js team

Express.js

Razorpay

GitHub (hosting + CI/CD)

⭐ Star this repository if you found it helpful!
🛍️ Visit the live website: CrazyDeal E-Commerce








