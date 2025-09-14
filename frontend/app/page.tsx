export default function HomePage() {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto',
      textAlign: 'center',
      padding: '40px 16px'
    }}>
      <h1 style={{ 
        fontSize: 'clamp(28px, 6vw, 48px)', 
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
        fontSize: 'clamp(16px, 4vw, 20px)', 
        color: '#6b7280',
        marginBottom: '32px',
        maxWidth: '600px',
        margin: '0 auto 32px',
        lineHeight: '1.6'
      }}>
        Discover amazing products at unbeatable prices. Shop with confidence and enjoy fast, secure delivery.
      </p>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="/products" style={{
          backgroundColor: '#2563eb',
          color: 'white',
          padding: 'clamp(12px, 3vw, 16px) clamp(20px, 5vw, 32px)',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: 'clamp(14px, 3.5vw, 18px)',
          boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
          transition: 'all 0.2s',
          minWidth: '120px',
          textAlign: 'center'
        }}>
          Shop Now
        </a>
        <a href="/login" style={{
          backgroundColor: 'transparent',
          color: '#2563eb',
          padding: 'clamp(12px, 3vw, 16px) clamp(20px, 5vw, 32px)',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: 'clamp(14px, 3.5vw, 18px)',
          border: '2px solid #2563eb',
          transition: 'all 0.2s',
          minWidth: '120px',
          textAlign: 'center'
        }}>
          Sign In
        </a>
      </div>
    </div>
  );
}



