import { useContext } from 'react'
import { productsContext } from '../../context/ProductsContext'
import '../../styles/cart.css'

const CartTotal = () => {
  const { cart } = useContext(productsContext)
  const total = cart.reduce((acc, el) => acc + el.price, 0)
  return (
    <div className='cartTotal'>Your total is <span>${total}</span> </div>
  )
}
export default CartTotal
