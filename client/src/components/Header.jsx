import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'

const Header = () => {
  const { userInfo, setUserInfo } = useContext(UserContext)
  const username = userInfo?.username;
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    fetch('http://localhost:4000/profile',
      { credentials: 'include' }).then(response => {
        response.json().then(userInfo => {
          setUserInfo(userInfo)
        })
      })
  }, [])

  const logout = () => {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST'
    })
    setUserInfo(null)
  }

  const menu = () =>{
    setIsActive(!isActive)
    setTimeout(()=>{
      setIsActive(false)
    }, "10000")
  }

  return (
    <header>
      <Link className="logo" to="/">Cars & Coffee</Link>
      
      <nav>
        {username && (
          <>
            <Link to='/create'>Create new post</Link>
            <button className='nav-btn' onClick={() =>menu()}>{username}</button>
            {isActive && (
              <div className='nav-menu'>
                <a onClick={logout} className='usernameLink' href='/'>Log out</a>
                <Link to={`/user/${userInfo.id}`}>My Posts</Link>
              </div>
            )}
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>


          </>
        )}
      </nav>
    </header>
  )
}

export default Header
