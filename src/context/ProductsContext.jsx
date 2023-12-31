import { createContext, useEffect, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const productsContext = createContext()

// Wrap App.jsx en in the ProductsProvider
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://theoutlet.onrender.com/items')
      .then(res => res.json())
      .then(object => {
        setProducts(object)
        setLoading(false)
      })
  }, [])
  const data = {
    products,
    filteredProducts,
    setFilteredProducts,
    loading,
    setLoading
  }
  return (
    <productsContext.Provider value={data}>
      {children}
    </productsContext.Provider>
  )
}
export default ProductsProvider
