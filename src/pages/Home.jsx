import Products from '../components/Products'
import SideBar from '../components/SideBar'
import '../styles/home.css'

const Home = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='side'>
          <SideBar />
        </div>
        <div className='content'>
          <Products />
        </div>
      </div>

    </>
  )
}
export default Home
