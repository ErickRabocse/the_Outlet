import { useContext } from 'react'
import { productsContext } from '../../context/ProductsContext'
import plant from '../../images/plant.jpeg'
import '../../styles/cart.css'

const CartElements = () => {
  const { cart } = useContext(productsContext)
  const placeholderImg = plant

  return (
    cart.map(product => {
      return (
        <div key={product.id} className='container d-flex my-4'>
          <div className='card' style={{ maxWidth: '700px', height: '100%' }}>
            <div className='row d-flex'>
              <div className='col-md-4 text-center'>
                <img
                  src={product?.image || product?.images || placeholderImg}
                  className='img-fluid rounded'
                  alt='...'
                  style={{ objectFit: 'contain', height: '100%' }}
                />
              </div>
              <div className='col-md-8'>
                <div className='card-body mx-4'>
                  <h5 className='card-title'>{product?.product_name}</h5>
                  <p className='card-text'>${product?.price}</p>
                  <div className='quantityContainer'>
                    <span>Quantity:
                      <button className='quantity'>-</button>
                      {0}
                      <button className='quantity'>+</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
  )
}
export default CartElements
