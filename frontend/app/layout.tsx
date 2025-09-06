import { CartProvider } from './context/CartContext';
import CartIcon from './components/CartIcon';

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
          <header style={{ 
            padding: '16px 24px', 
            borderBottom: '1px solid #e5e7eb', 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <a href="/" style={{ 
              fontWeight: 800, 
              textDecoration: 'none', 
              color: '#2563eb',
              fontSize: '24px'
            }}>🛍️ CrazyDeal</a>
            <nav style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
              <a href="/products" style={{ 
                textDecoration: 'none', 
                color: '#374151',
                fontWeight: 500,
                padding: '8px 16px',
                borderRadius: '8px',
                transition: 'all 0.2s'
              }}>Products</a>
              <CartIcon />
              <a href="/login" style={{ 
                textDecoration: 'none', 
                color: '#2563eb',
                fontWeight: 500,
                padding: '8px 16px',
                borderRadius: '8px',
                border: '1px solid #2563eb',
                transition: 'all 0.2s'
              }}>Login</a>
            </nav>
          </header>
          <main style={{ padding: '24px', minHeight: 'calc(100vh - 80px)' }}>
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}



