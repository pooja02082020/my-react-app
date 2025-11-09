export default function Header({ setPage, cartCount }) {
  return (
    <header
      style={{
        backgroundColor: "#152536ff", // deep navy tone
        color: "white",
        padding: "1rem 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2.5rem",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        {/* Logo or title */}
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "#FFD700",
            marginRight: "2rem",
            letterSpacing: "1px",
            cursor: "pointer",
          }}
          onClick={() => setPage("products")}
        >
          🛍️ Pooja's Collection
        </div>

        {/* Navigation buttons */}
        <button
          onClick={() => setPage("products")}
          style={navButtonStyle}
        >
          Products
        </button>

        <div style={{ position: "relative" }}>
          <button
            onClick={() => setPage("cart")}
            style={navButtonStyle}
          >
            Cart
          </button>
          {cartCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-10px",
                backgroundColor: "#EF4444",
                color: "white",
                borderRadius: "50%",
                padding: "3px 8px",
                fontSize: "0.8rem",
                fontWeight: "bold",
                boxShadow: "0 0 4px rgba(0,0,0,0.2)",
              }}
            >
              {cartCount}
            </span>
          )}
        </div>

        <button
          onClick={() => setPage("checkout")}
          style={navButtonStyle}
        >
          Checkout
        </button>
      </nav>
    </header>
  )
}

// Reusable button style
const navButtonStyle = {
  background: "transparent",
  border: "2px solid transparent",
  color: "white",
  fontSize: "1rem",
  padding: "0.5rem 1rem",
  borderRadius: "8px",
  transition: "all 0.3s ease",
  cursor: "pointer",
  fontWeight: "500",
  letterSpacing: "0.5px",
  outline: "none",
  boxShadow: "none",
}

Object.assign(navButtonStyle, {
  ":hover": {
    borderColor: "#FFD700",
    backgroundColor: "#1B263B",
  },
})