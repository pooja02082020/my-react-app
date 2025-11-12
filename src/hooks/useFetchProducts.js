import { useState, useEffect } from "react"
import { products as staticProducts } from "../data/data.js"

export default function useFetchProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {

      setProducts(staticProducts)
      setLoading(false)
    } catch (err) {
      setError("Failed to load products")
      setLoading(false)
    }
  }, [])

  return { products, loading, error }
}
