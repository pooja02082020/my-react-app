import useFetchProducts from '../hooks/useFetchProducts'
import useCart from '../hooks/useCart'

export default function ProductList() {
  const { products, loading, error } = useFetchProducts()
  const { addToCart } = useCart()

  if (loading) return <p>Loading products...</p>
  if (error) return <p style={{ color: 'red' }}>{error}</p>

  return (
    <div>
      <h2>🛍 Products</h2>
      <div className="products-container">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>$ {p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}


