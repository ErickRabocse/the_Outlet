import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductsProvider from './context/ProductsContext'
import ProductDetails from './components/ProductDetails'
import CartContent from './components/CartContent/CartContent'
function App () {
  return (
    <>
      <ProductsProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<CartContent />} />
            <Route path='/product/:id' element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
      </ProductsProvider>

    </>
  )
}

export default App
