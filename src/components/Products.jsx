/* eslint-disable camelcase */
import { useContext } from 'react'
import { productsContext } from '../context/ProductsContext'
import { Link } from 'react-router-dom'
import '../styles/products.css'
import Images from './Images'
import plant from '../images/plant.jpeg'

const Products = () => {
  const { filteredProducts } = useContext(productsContext)
  const placeholderImg = plant
  //   const handleImageError = (e) => {
  //     e.target.src = placeholderImg
  //   }
  return (
    <div className='container my-3'>
      <div className='row'>
        {
            // eslint-disable-next-line camelcase
            filteredProducts.map(({ id, image, images, product_name }) => (
              <div key={id} className='col-sm-3 mb-6 mb-sm-0'>
                <div className='card my-4'>
                  <div className='card-body'>
                    {/* <img
                      className='card-img-top card-img'
                      src={image || images || placeholderImg}
                      alt={product_name}
                      onError={handleImageError}
                    /> */}
                    <Images
                      className='card-img-top card-img'
                      alt={product_name}
                      src={image || images}
                      notFoundSrc={placeholderImg}
                    />
                    <div className='info'>
                      <p className='card-title'>{product_name}</p>
                      <Link to={`/product/${id}`} className='btn btn-primary'>Details</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  )
}
export default Products
