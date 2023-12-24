import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const MyProfile = () => {
    const {userInfo} = useContext(UserContext)
  return (
    <div>
        <h1>
            {userInfo.username}
        </h1>
        <button className='editBtn'>Log out</button>
    </div>
  )
}

export default MyProfile
