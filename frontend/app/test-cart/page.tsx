'use client';

import { useCart } from '../context/CartContext';

export default function TestCartPage() {
  const { cartItems, addToCart, getTotalItems } = useCart();

  const testProduct = {
    _id: 'test-1',
    name: 'Test Product',
    price: 29.99,
    images: ['https://via.placeholder.com/300']
  };

  const handleTestAdd = () => {
    console.log('Test add to cart clicked');
    addToCart(testProduct);
    console.log('Cart items after add:', cartItems);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Cart Test Page</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <p>Total items in cart: {getTotalItems()}</p>
        <p>Cart items: {JSON.stringify(cartItems, null, 2)}</p>
      </div>

      <button 
        onClick={handleTestAdd}
        style={{
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Test Add to Cart
      </button>

      <div style={{ marginTop: '20px' }}>
        <h3>Current Cart Items:</h3>
        {cartItems.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul>
            {cartItems.map(item => (
              <li key={item._id}>
                {item.name} - ${item.price} (Qty: {item.quantity})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
