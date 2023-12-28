import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductsProvider from './context/ProductsContext'
import ProductDetails from './components/ProductDetails'
function App () {
  return (
    <>
      <ProductsProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/product/:id' element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
      </ProductsProvider>

    </>
  )
}

export default App
