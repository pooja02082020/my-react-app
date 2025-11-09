export default function Checkout({ cartItems, setPage }) {
  // 🧮 Calculate total
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  // 🛒 If cart is empty
  if (cartItems.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "3rem",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <h2>🛍️ Checkout</h2>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Your cart is empty. Add items to checkout.
        </p>
        <button
          onClick={() => setPage("products")}
          style={{
            marginTop: "1rem",
            backgroundColor: "#2563EB",
            color: "white",
            border: "none",
            padding: "0.7rem 1.5rem",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "0.3s ease",
          }}
        >
          🛍️ Go to Products
        </button>
      </div>
    );
  }

  // ✅ When cart has items
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "3rem",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h2>🧾 Checkout Summary</h2>
      <p style={{ fontSize: "1.1rem", color: "#444" }}>
        Your items are ready to be checked out.
      </p>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "2rem" }}>
        {cartItems.map((item) => (
          <li
            key={item.id}
            style={{
              backgroundColor: "#fff",
              marginBottom: "1rem",
              padding: "1rem",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "500px",
              margin: "1rem auto",
            }}
          >
            <span style={{ fontWeight: "600" }}>{item.name}</span>
            <span>
              ${item.price} × {item.quantity || 1}
            </span>
          </li>
        ))}
      </ul>

      <h3 style={{ marginTop: "2rem", color: "#111" }}>
        💰 Total: ${total.toLocaleString()}
      </h3>

      <button
        onClick={() => alert("✅ Order confirmed! Thank you for shopping.")}
        style={{
          marginTop: "1.5rem",
          backgroundColor: "#16A34A",
          color: "white",
          border: "none",
          padding: "0.8rem 1.5rem",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        ✅ Confirm Checkout
      </button>
    </div>
  );
}
