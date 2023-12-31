/* eslint-disable camelcase */
import { useContext } from 'react'
import { productsContext } from '../context/ProductsContext'
import { Link } from 'react-router-dom'
import '../styles/products.css'
import Images from './Images'
import plant from '../images/plant.jpeg'

const Products = () => {
  const { filteredProducts, loading } = useContext(productsContext)
  const placeholderImg = plant
  //   const handleImageError = (e) => {
  //     e.target.src = placeholderImg
  //   }
  return (
    <div className='container my-3'>
      <div className='row'>
        {
            // eslint-disable-next-line camelcase
            loading
              ? <p className='loading'>Loading...</p>
              : filteredProducts.map(({ id, image, images, product_name }) => (
                <div key={id} className='col-sm-3 mb-6 mb-sm-0'>
                  <div className='card my-4'>
                    <div className='card-body'>
                      {/* <img
                      className='card-img-top card-img'
                      src={image || images || placeholderImg}
                      alt={product_name}
                      onError={handleImageError}
                    /> */}
                      <div className='img_container position-relative'>
                        <Images
                          className='card-img-top card-img'
                          alt={product_name}
                          src={image || images}
                          notFoundSrc={placeholderImg}
                        />
                        <Link
                          to={`/product/${id}`}
                          className='btn btn-primary position-absolute'
                          style={{ bottom: '-15px', right: '0' }}
                        >
                          Details
                        </Link>
                      </div>
                      <div className='info'>
                        <p className='card-title'>{product_name}</p>
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
