export default function Header({ setPage, cartCount }) {
  return (
    <header>
      <nav>
        <div className="logo" onClick={() => setPage('products')}>
          🛍️ Pooja's Collection
        </div>
        <button className="btn" onClick={() => setPage('products')}>
          Products
        </button>
        <button className="btn" onClick={() => setPage('cart')}>
          Cart ({cartCount})
        </button>
        <button className="btn" onClick={() => setPage('checkout')}>
          Checkout
        </button>
      </nav>
    </header>
  )
}
