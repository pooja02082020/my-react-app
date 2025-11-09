export default function Cart({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  goToCheckout,
}) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckoutClick = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    const confirmCheckout = window.confirm("Are you sure you want to checkout?");
    if (confirmCheckout) goToCheckout();
  };

  const handleRemoveClick = (id) => {
    const confirmDelete = window.confirm(
      "🗑️ Do you want to delete this item from your cart completely?"
    );
    if (confirmDelete) removeFromCart(id);
  };

  return (
    <div style={{ width: "100%" }}>
      <h2
        style={{
          fontSize: "1.8rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        🛒 Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "white",
                padding: "1rem",
                borderRadius: "10px",
                marginBottom: "1rem",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <div>
                <strong>{item.name}</strong>
                <p style={{ margin: 0 }}>
                  ${item.price} × {item.quantity}
                </p>
              </div>

              {/* Quantity controls */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <button
                  onClick={() => {
                    if (item.quantity > 1) {
                      decreaseQuantity(item.id);
                    } else {
                      // If quantity is 1, confirm removal
                      const confirmDelete = window.confirm(
                        "This will remove the item from your cart. Continue?"
                      );
                      if (confirmDelete) removeFromCart(item.id);
                    }
                  }}
                  style={qtyBtn}
                >
                  –
                </button>

                <span
                  style={{
                    fontWeight: "bold",
                    minWidth: "20px",
                    textAlign: "center",
                  }}
                >
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                  style={qtyBtn}
                >
                  +
                </button>
              </div>

              {/* Remove button */}
              <button
                onClick={() => handleRemoveClick(item.id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <h3 style={{ marginTop: "1rem" }}>Total: ${total}</h3>
          <button
            onClick={handleCheckoutClick}
            style={{
              background: "#2563EB",
              color: "white",
              border: "none",
              padding: "0.7rem 1.5rem",
              borderRadius: "5px",
              marginTop: "1rem",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

// reusable style for + and - buttons
const qtyBtn = {
  background: "#2563EB",
  color: "white",
  border: "none",
  borderRadius: "50%",
  width: "32px",
  height: "32px",
  fontSize: "1.2rem",
  fontWeight: "bold",
  cursor: "pointer",
  lineHeight: "0",
};
