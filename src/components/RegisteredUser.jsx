import { useState } from 'react'

const RegisteredUser = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = function (e) {
    e.preventDefault()
    console.log({ user, password })
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#0B4F6C' }}>Login</h2>
      <div className='container-fluid d-flex flex-column' style={{ width: '300px' }}>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            value={user}
            onChange={(e) => { setUser(e.target.value) }}
          />
          <div id='emailHelp' className='form-text'>We'll never share your email with anyone else.</div>
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>Password</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </div>
        <div className='mb-3 form-check'>
          <input type='checkbox' className='form-check-input' id='exampleCheck1' />
          <label className='form-check-label' htmlFor='exampleCheck1'>Check me out</label>
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </div>

    </form>
  )
}
export default RegisteredUser
