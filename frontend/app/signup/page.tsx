'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Signup failed');
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
        Create Account
      </h1>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: '20px' }}>
        <input 
          type="text" 
          name="name"
          placeholder="Full Name" 
          value={formData.name} 
          onChange={handleChange} 
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
          type="email" 
          name="email"
          placeholder="Email address" 
          value={formData.email} 
          onChange={handleChange} 
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
          name="password"
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
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
          name="confirmPassword"
          placeholder="Confirm Password" 
          value={formData.confirmPassword} 
          onChange={handleChange} 
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
          {loading ? 'Creating Account...' : 'Create Account'}
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
        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <span style={{ color: '#6b7280' }}>Already have an account? </span>
          <Link href="/login" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}
