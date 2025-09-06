'use client';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Login failed');
      localStorage.setItem('token', data.token);
      window.location.href = '/products';
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '60px auto',
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '16px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ 
        fontSize: '32px', 
        fontWeight: 800, 
        color: '#1a1a1a',
        textAlign: 'center',
        marginBottom: '32px'
      }}>
        Welcome Back
      </h1>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: '20px' }}>
        <input 
          type="email" 
          placeholder="Email address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          style={{
            padding: '16px',
            borderRadius: '12px',
            border: '2px solid #e5e7eb',
            fontSize: '16px',
            outline: 'none',
            transition: 'border-color 0.2s'
          }}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={{
            padding: '16px',
            borderRadius: '12px',
            border: '2px solid #e5e7eb',
            fontSize: '16px',
            outline: 'none',
            transition: 'border-color 0.2s'
          }}
        />
        <button 
          disabled={loading} 
          type="submit"
          style={{
            backgroundColor: loading ? '#9ca3af' : '#2563eb',
            color: 'white',
            padding: '16px',
            borderRadius: '12px',
            border: 'none',
            fontSize: '18px',
            fontWeight: 600,
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s'
          }}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
        {error && (
          <div style={{ 
            color: '#dc2626', 
            backgroundColor: '#fef2f2',
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid #fecaca',
            fontSize: '14px'
          }}>
            {error}
          </div>
        )}
      </form>
    </div>
  );
}


