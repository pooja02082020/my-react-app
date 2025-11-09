import { useState } from "react"
import Header from "./components/Header"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"

function App() {
  const [page, setPage] = useState("products")
  const [cartItems, setCartItems] = useState([])
  const [checkoutItems, setCheckoutItems] = useState([])

  // 🛍 Add product
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id)
    if (existingItem) {
      const updated = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      setCartItems(updated)
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  // ➕ Increase quantity
  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  // ➖ Decrease quantity (remove one at a time)
  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 } // decrease quantity
            : item
        )
        .filter((item) => item.quantity > 0) // remove only if quantity reaches 0
    )
  }

  const goToCheckout = () => {
    setPage("checkout")
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header setPage={setPage} cartCount={cartItems.reduce((sum, i) => sum + i.quantity, 0)} />

      <main
        style={{
          flex: 1,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem",
        }}
      >
        {page === "products" && <ProductList addToCart={addToCart} />}
        {page === "cart" && (
          <Cart
            cartItems={cartItems}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeFromCart={removeFromCart}
            goToCheckout={() => {
              setCheckoutItems(cartItems)
              setPage("checkout")
            }}
          />
        )}
        {page === "checkout" && (
          <Checkout cartItems={checkoutItems} setPage={setPage} />
        )}
      </main>
    </div>
  )
}

export default App


