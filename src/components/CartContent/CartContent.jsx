import { useContext } from 'react'
import { productsContext } from '../../context/ProductsContext'

import CartElements from './CartElements'
import CartTotal from './CartTotal'
const CartContent = () => {
  const { cart } = useContext(productsContext)
  return cart.length > 0
    ? (
      <>
        <CartElements />
        <hr />
        <CartTotal />
      </>
      )
    : (
      <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '30px', fontWeight: 'bold' }}>Your cart is empty</p>
      )
}
export default CartContent
