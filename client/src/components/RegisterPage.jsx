import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const RegisterPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()

   
     const res = await fetch('http://localhost:4000/register', {
        method:"POST",
        body:JSON.stringify({username, password}),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      
    if(res.status === 200){
      setPassword('')
      setUsername('')
      navigate('/')
    }else{
      alert("registration failed")

    }
  
  }

  return (
    <form className='register' onSubmit={(event)=>handleSubmit(event)}>
        <h1>Register</h1>
      <input type='text' value={username} placeholder='username' onChange={(event)=>{setUsername(event.target.value)}}/>
      <input type='password' value={password} placeholder='password' onChange={(event)=>{setPassword(event.target.value)}}/>
      <button >Register</button>
    </form>
  )
}

export default RegisterPage
