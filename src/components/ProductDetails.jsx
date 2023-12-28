/* eslint-disable camelcase */
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import plant from '../images/plant.jpeg'

const ProductDetails = () => {
  const placeholderImg = plant
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(`https://theoutlet.onrender.com/items/${id}`)
      .then(res => res.json())
      .then(obj => {
        setProduct(obj)
        setLoading(false)
      })
  }, [id])

  return (
    <>{!loading &&
      <div className='container d-flex justify-content-center my-4'>
        <div className='card mb-3 p-4' style={{ maxWidth: '700px' }}>
          <div className='row g-0'>
            <div className='col-md-4'>
              <img
                src={product?.image || placeholderImg}
                className='img-fluid rounded-start'
                alt='...'
                style={{ objectFit: 'contain', height: '100%' }}
              />
            </div>
            <div className='col-md-8'>
              <div className='card-body mx-4'>
                <h5 className='card-title'>{product?.product_name}</h5>
                <p className='card-text'>{product?.description}.</p>
                <button className='btn btn-dark'>Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}
export default ProductDetails
