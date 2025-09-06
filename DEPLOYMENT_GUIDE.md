# 🚀 FREE DEPLOYMENT GUIDE - CrazyDeal E-commerce

## 📋 **STEP-BY-STEP DEPLOYMENT**

### **1. 🗄️ MongoDB Atlas (FREE Database)**

1. **Go to**: https://www.mongodb.com/atlas
2. **Sign up** for free account
3. **Create Cluster**:
   - Choose **FREE** tier (M0)
   - Select region closest to you
   - Cluster name: `crazydeal-cluster`
4. **Create Database User**:
   - Username: `crazydeal-user`
   - Password: Generate strong password
5. **Whitelist IP Addresses**:
   - Add `0.0.0.0/0` (allow all IPs)
6. **Get Connection String**:
   - Click "Connect" → "Connect your application"
   - Copy connection string
   - Replace `<password>` with your password
   - Example: `mongodb+srv://crazydeal-user:YOUR_PASSWORD@crazydeal-cluster.xxxxx.mongodb.net/ecommerce?retryWrites=true&w=majority`

### **2. 🚂 Railway (Backend Deployment)**

1. **Go to**: https://railway.app
2. **Sign up** with GitHub
3. **New Project** → "Deploy from GitHub repo"
4. **Select your repository**: `E-COMMERCE`
5. **Configure**:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `node server.js`
6. **Add Environment Variables**:
   - `MONGO_URI`: Your MongoDB connection string
   - `JWT_SECRET`: `your_jwt_secret_key_here`
   - `NODE_ENV`: `production`
7. **Deploy** and get URL: `https://crazydeal-api.railway.app`

### **3. ⚡ Vercel (Frontend Deployment)**

1. **Go to**: https://vercel.com
2. **Sign up** with GitHub
3. **Import Project** → Select your repository
4. **Configure**:
   - Framework Preset: `Next.js`
   - Root Directory: `frontend`
5. **Add Environment Variables**:
   - `NEXT_PUBLIC_API_BASE_URL`: `https://crazydeal-api.railway.app/api`
6. **Deploy** and get URL: `https://crazydeal.vercel.app`

### **4. 🔗 Connect Everything**

1. **Update Railway backend** with MongoDB URI
2. **Update Vercel frontend** with Railway API URL
3. **Test your live website**!

## 🎯 **FINAL RESULT**

- **Frontend**: https://crazydeal.vercel.app
- **Backend**: https://crazydeal-api.railway.app
- **Database**: MongoDB Atlas (FREE)
- **Total Cost**: $0

## 📱 **Custom Domain (Optional)**

1. **Buy domain**: `crazydeal.com` (~$10/year)
2. **Vercel**: Add custom domain in project settings
3. **Railway**: Add custom domain in project settings
4. **Update DNS** records as instructed

## ✅ **Your website will be live at**: `https://crazydeal.vercel.app`
