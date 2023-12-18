import React from 'react'

const LoginPage = () => {
  return (
    <form className='login' action=''>
      <h1>Login</h1>
      <input type='text' placeholder='username'/>
      <input type='password' placeholder='password'/>
      <button type='submit'>Login</button>
    </form>
  )
}

export default LoginPage
