import { useState } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import useCart from './hooks/useCart'
import './index.css'

function App() {
  const [page, setPage] = useState('products')
  const { cartItems } = useCart()

  const goToCheckout = () => setPage('checkout')

  return (
    <div>
      <Header setPage={setPage} cartCount={cartItems.reduce((sum, i) => sum + i.quantity, 0)} />
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: 'auto' }}>
        {page === 'products' && <ProductList />}
        {page === 'cart' && <Cart goToCheckout={goToCheckout} />}
        {page === 'checkout' && <Checkout />}
      </main>
    </div>
  )
}

export default App
