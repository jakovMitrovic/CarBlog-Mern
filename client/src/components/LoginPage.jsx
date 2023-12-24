import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from './UserContext'


const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const {setUserInfo} = useContext(UserContext)
  const handleSubmit = async(e) => {
    e.preventDefault()

   
     const res = await fetch('http://localhost:4000/login', {
        method:"POST",
        body:JSON.stringify({username, password}),
        headers:{'Content-Type': 'application/json'},
        credentials:'include', 
        
      })
      
    if(res.ok){
      res.json().then(userInfo=>{
        setUserInfo(userInfo)
        navigate('/')
      })
    }else{
      alert("login failed")

    }
  
  }

  return (
    <>
    <form className='register' onSubmit={(event)=>handleSubmit(event)}>
        <h1>Login</h1>
      <input type='text' value={username} placeholder='username' onChange={(event)=>{setUsername(event.target.value)}}/>
      <input type='password' value={password} placeholder='password' onChange={(event)=>{setPassword(event.target.value)}}/>
      <button >Login</button>
    </form>
    <span className='message'>Don't have an account?<Link className='messageL' to={'/register'}>Register here!</Link></span>
    </>
  )
}

export default LoginPage
