import '../styles/login.css'
import { useForm } from 'react-hook-form'

const NewUsers = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data)
  return (
    <div className='login'>
      <div className='login-container' style={{ width: '300px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#0B4F6C' }}>Sign up</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: 'flex', flexDirection: 'column' }}
        >

          <label htmlFor='firstName' className='form-label'>Name</label>
          <input
            className='form-control input'
            type='text'
            name='firstName'
            placeholder='Your name'
            id='firstName'
            {...register('firstName', { required: true })}
          />
          {errors.firstName?.type === 'required' && <p role='alert' className='alert'>First name is required</p>}

          <label htmlFor='lastName' className='form-label'>Last name</label>
          <input
            className='form-control input'
            type='text'
            name='lastName'
            placeholder='Your last name'
            id='lastName'
            {...register('lastName', { required: true })}
          />
          {errors.lastName?.type === 'required' && <p role='alert' className='alert'>Last name is required</p>}

          <label htmlFor='age' className='form-label'>Age</label>
          <input
            className='form-control input'
            type='number'
            name='age'
            placeholder='Your age'
            id='age'
            {...register('age', { required: true })}
          />
          {errors.age?.type === 'required' && <p role='alert' className='alert'>Please select your age</p>}

          <label htmlFor='gender' className='form-label'>Gender</label>
          <select name='gender' id='gender' className='form-control input' {...register('gender', { required: true })}>
            <option value=''>Select a gender</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>
          </select>

          <label htmlFor='email' className='form-label'>Email</label>
          <input
            className='form-control input'
            type='text'
            name='email'
            placeholder='username@mail.com'
            id='email'
            {...register('email', { required: true })}
          />
          {errors.email?.type === 'required' && <p role='alert' className='alert'>Age is required</p>}

          <label htmlFor='password' className='form-label'>Password</label>
          <input
            className='form-control input'
            type='password'
            name='password'
            id='password'
            {...register('password', { required: true })}
          />
          {errors.password?.type === 'required' && <p role='alert' className='alert'>You must create a password</p>}

          <button type='submit' className='btn btn-primary' style={{ width: '90px' }}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}
export default NewUsers
