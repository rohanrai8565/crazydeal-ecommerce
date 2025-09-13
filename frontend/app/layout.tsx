import { CartProvider } from './context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

export const metadata = {
  title: 'CrazyDeal Store',
  description: 'Modern E-Commerce Platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ 
        margin: 0, 
        fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
        backgroundColor: '#fafafa',
        color: '#1a1a1a'
      }}>
        <CartProvider>
          <Header />
          <main style={{ padding: '24px', minHeight: 'calc(100vh - 200px)' }}>
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}



