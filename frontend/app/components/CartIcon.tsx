'use client';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function CartIcon() {
  const { getTotalItems } = useCart();
  const itemCount = getTotalItems();

  return (
    <Link href="/cart" style={{
      position: 'relative',
      textDecoration: 'none',
      color: '#374151',
      padding: '8px 16px',
      borderRadius: '8px',
      transition: 'all 0.2s',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
      <span style={{ fontSize: '20px' }}>🛒</span>
      <span style={{ fontWeight: 500 }}>Cart</span>
      {itemCount > 0 && (
        <span style={{
          backgroundColor: '#dc2626',
          color: 'white',
          borderRadius: '50%',
          width: '20px',
          height: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          fontWeight: 'bold',
          position: 'absolute',
          top: '4px',
          right: '8px'
        }}>
          {itemCount}
        </span>
      )}
    </Link>
  );
}













