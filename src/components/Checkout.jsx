import useCart from '../hooks/useCart'

export default function Checkout() {
  const { cartItems, total, clearCart } = useCart()

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: 'center' }}>
        <p>No items to checkout.</p>
        <p>Please go to products page and add items to your cart.</p>
      </div>
    )
  }

  return (
    <div>
      <h2>💳 Checkout</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} – {item.quantity} × ${item.price}
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
      <button
        className="btn"
        style={{ background: 'green', marginTop: '1rem' }}
        onClick={() => {
          alert('✅ Order confirmed! Thank you for shopping.')
          clearCart()
        }}
      >
        Confirm Checkout
      </button>
    </div>
  )
}
