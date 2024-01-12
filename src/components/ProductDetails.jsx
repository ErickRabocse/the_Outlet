/* eslint-disable camelcase */
import plant from '../images/plant.jpeg'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { productsContext } from '../context/ProductsContext'
import '../styles/products.css'

const ProductDetails = () => {
  const { cart, setCart } = useContext(productsContext)
  const placeholderImg = plant
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [buttonStyle, setBtnStyle] = useState(false)
  const toggleBtnClass = !buttonStyle ? 'btn btn-dark' : 'btn disabledBtn'
  // const [btnActivation, setBtnActivation] = useState(false)
  useEffect(() => {
    fetch(`https://theoutlet.onrender.com/items/${id}`)
      .then(res => res.json())
      .then(obj => {
        setProduct(obj)
        setLoading(false)
      })
  }, [id])
  const buyProduct = (product) => {
    setBtnStyle(true)
    // setCart([...cart, product])
    setCart(prevItems => {
      const itemFound = prevItems.find(el => el.id === product.id)
      if (itemFound) {
        alert('Item added to shopping cart, please update the quantity in the shopping cart.')
        return [...prevItems] // ...prevItems is the same as ...cart
      } else {
        return [...prevItems, product]
      }
    })
    console.log(cart)
    // setBtnActivation(true)
  }
  // NAVIGATING BACK HOME
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/')
  }

  return (
    <>{!loading &&
      <div className='container d-flex justify-content-center my-4'>
        <div className='card mb-3 p-4' style={{ maxWidth: '700px' }}>
          <div className='row g-0 detailsCard'>
            <div className='col-md-4'>
              <img
                src={product?.image || product?.images || placeholderImg}
                className='img-fluid rounded-start'
                alt='...'
                style={{ objectFit: 'contain', height: '100%' }}
              />
            </div>
            <div className='col-md-8'>
              <div className='card-body mx-4'>
                <h5 className='card-title'>{product?.product_name}</h5>
                <p className='card-text'>{product?.description}.</p>
                <button
                  className={toggleBtnClass}
                  onClick={() => buyProduct(product)}
                  style={{ width: '110px' }}
                  // disabled={btnActivation}
                >
                  Add to cart
                </button>
              </div>
            </div>
            <span className='close' onClick={goHome}>
              ❌
            </span>
          </div>
        </div>
      </div>}
    </>
  )
}
export default ProductDetails
