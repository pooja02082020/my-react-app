import useCart from '../hooks/useCart'

export default function Cart({ goToCheckout }) {
  const { cartItems, total, increaseQuantity, decreaseQuantity, removeFromCart } = useCart()

  const handleCheckoutClick = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!')
      return
    }
    const confirmCheckout = window.confirm('Are you sure you want to checkout?')
    if (confirmCheckout) goToCheckout()
  }

  return (
    <div>
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <strong>{item.name}</strong>
                <p>
                  ${item.price} × {item.quantity}
                </p>
              </div>
              <div>
                <button className="qty-btn" onClick={() => decreaseQuantity(item.id)}>
                  –
                </button>
                <span style={{ margin: '0 10px', fontWeight: 'bold' }}>{item.quantity}</span>
                <button className="qty-btn" onClick={() => increaseQuantity(item.id)}>
                  +
                </button>
              </div>
              <button
                style={{
                  background: 'red',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <h3>Total: ${total}</h3>
          <button onClick={handleCheckoutClick} className="btn" style={{ background: '#2563EB' }}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  )
}
