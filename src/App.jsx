import { useState } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

function App() {
  const [page, setPage] = useState('products') // controls which section shows

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f3f4f6" }}>
      <Header setPage={setPage} />

      <main style={{ padding: "1rem" }}>
        {page === 'products' && <ProductList />}
        {page === 'cart' && <Cart />}
        {page === 'checkout' && <Checkout />}
      </main>
    </div>
  )
}

export default App