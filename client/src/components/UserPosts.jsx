import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './UserContext'
import { useParams } from 'react-router-dom'
import BlogPost from './BlogPost'
import Loading from './Loading'

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
    {posts.length === 0 && (<Loading />)}
    <div className='userPostsTitle'>
    <h1 >{user?.username}</h1>
    <h2>Posted: </h2>
    </div>
    {posts?.map((post)=>(
      <BlogPost key={post._id} id={post._id} img={post.cover} title={post.title} author={post.author} desc={post.description} />
    ))}
          
  </>
  )
}

export default UserProfile
