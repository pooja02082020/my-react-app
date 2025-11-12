import { useSelector, useDispatch } from 'react-redux'
import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from '../redux/slices/cartSlice'

export default function useCart() {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return {
    cartItems,
    total,
    addToCart: (p) => dispatch(addToCart(p)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    increaseQuantity: (id) => dispatch(increaseQuantity(id)),
    decreaseQuantity: (id) => dispatch(decreaseQuantity(id)),
    clearCart: () => dispatch(clearCart()),
  }
}
