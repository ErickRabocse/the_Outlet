import NewUsers from '../components/NewUsers'
import RegisteredUser from '../components/RegisteredUser'
import '../styles/login.css'

const Login = () => {
  return (
    <div className='container d-flex'>
      <div className='login access'>
        <RegisteredUser />
      </div>
      <div className='signup access'>
        <NewUsers />
      </div>

    </div>

  )
}
export default Login
