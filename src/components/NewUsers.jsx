import '../styles/login.css'

const NewUsers = () => {
  return (
    <div className='login'>
      <div className='login-container' style={{ width: '300px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#0B4F6C' }}>Sign up</h2>

        <form
          onSubmit={() => { }/* HANDLE SUBMIT */}
          style={{ display: 'flex', flexDirection: 'column' }}
        >

          <label htmlFor='firstName' className='form-label'>Nombre</label>
          <input
            className='form-control input'
            type='text'
            name='firstName'
            placeholder='Tu Nombre'
            id='firstName'
          />

          <label htmlFor='lastName' className='form-label'>Apellido</label>
          <input
            className='form-control input'
            type='text'
            name='lastName'
            placeholder='Tu Apellido'
            id='lastName'
          />

          <label htmlFor='age' className='form-label'>Edad</label>
          <input
            className='form-control input'
            type='number'
            name='age'
            placeholder='Tu Edad'
            id='age'
          />

          <label htmlFor='gender' className='form-label'>Genero</label>
          <select name='gender' id='gender' className='form-control input'>
            <option value=''>Elige un genero</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>
          </select>

          <label htmlFor='email' className='form-label'>Email</label>
          <input
            className='form-control input'
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='email'
          />

          <label htmlFor='password' className='form-label'>Password</label>
          <input
            className='form-control input'
            type='password'
            name='password'
            id='password'
          />

          <button type='submit' className='btn btn-primary' style={{ width: '90px' }}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}
export default NewUsers
