export default function Header({ setPage }) {
  return (
    <header style={{
      backgroundColor: "#1E3A8A",
      color: "white",
      padding: "1rem",
      display: "flex",
      justifyContent: "space-around"
    }}>
      <button onClick={() => setPage('products')}>Products</button>
      <button onClick={() => setPage('cart')}>Cart</button>
      <button onClick={() => setPage('checkout')}>Checkout</button>
    </header>
  )
}