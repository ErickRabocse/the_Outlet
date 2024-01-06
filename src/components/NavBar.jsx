import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'
import { useContext, useEffect, useState } from 'react'
import { productsContext } from '../context/ProductsContext'

const NavBar = () => {
  const [search, setSearch] = useState('')
  const { products, setFilteredProducts } = useContext(productsContext)
  useEffect(() => {
    const filteredItems = products.filter((el) => (
      el?.product_name.toLowerCase().includes(search.toLowerCase().trim())
    ))
    setFilteredProducts(filteredItems)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, products])

  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container-fluid nav-content'>
        <img src='tag.png' alt='' style={{ height: '35px', padding: '5px, 0', transform: 'rotate(45deg)' }} />
        <NavLink className='navbar-brand' to='/'>The Outlet</NavLink>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink className='nav-link' aria-current='page' to='/'>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/login'>Login</NavLink>
            </li>
          </ul>
          <form role='search'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
              value={search}
              onChange={(e) => { setSearch(e.target.value) }}
            />
          </form>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
