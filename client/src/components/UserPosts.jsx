import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './UserContext'
import { useParams } from 'react-router-dom'
import BlogPost from './BlogPost'

const UserProfile = () => {
    const {userInfo} = useContext(UserContext)
    const {id} = useParams()
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState('')

    useEffect(()=>{
      fetch(`http://localhost:4000/user/posts/${id}`).then(res=>{res.json().then(result=>{
        setPosts(result.blogs)
        setUser(result.user)
      })})
      
  }, [userInfo])
  
  return (
    <>
    <div className='userPostsTitle'>
    <h2>Posts by: </h2>
    <h1 >{user?.username}</h1>
    </div>
    {posts?.map((post)=>(
      <BlogPost key={post._id} id={post._id} img={post.cover} title={post.title} author={post.author} desc={post.description} />
    ))}
          
  </>
  )
}

export default UserProfile
