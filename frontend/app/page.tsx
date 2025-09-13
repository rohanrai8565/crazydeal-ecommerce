export default function HomePage() {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto',
      textAlign: 'center',
      padding: '60px 20px'
    }}>
      <h1 style={{ 
        fontSize: '48px', 
        fontWeight: 800, 
        color: '#1a1a1a',
        marginBottom: '16px',
        background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        Welcome to Our Store
      </h1>
      <p style={{ 
        fontSize: '20px', 
        color: '#6b7280',
        marginBottom: '40px',
        maxWidth: '600px',
        margin: '0 auto 40px'
      }}>
        Discover amazing products at unbeatable prices. Shop with confidence and enjoy fast, secure delivery.
      </p>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="/crazydeal-ecommerce/products/" style={{
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '16px 32px',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '18px',
          boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
          transition: 'all 0.2s'
        }}>
          Shop Now
        </a>
        <a href="/crazydeal-ecommerce/login/" style={{
          backgroundColor: 'transparent',
          color: '#2563eb',
          padding: '16px 32px',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '18px',
          border: '2px solid #2563eb',
          transition: 'all 0.2s'
        }}>
          Sign In
        </a>
      </div>
    </div>
  );
}



