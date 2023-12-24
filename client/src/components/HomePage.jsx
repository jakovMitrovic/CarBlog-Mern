import React, { useEffect, useState } from 'react'
import BlogPost from './BlogPost'

const HomePage = () => {
  const [posts, setPosts] = useState([])


  useEffect(()=>{
    fetch('http://localhost:4000/blogposts').then(res=>{
      res.json().then(posts => {
        setPosts(posts)
        console.log(posts[0].createdAt)
      })
    })
  },[])





  return (
    <>
    {posts.map((post)=>(
      <BlogPost key={post._id} id={post._id} img={post.cover} title={post.title} author={post.author} desc={post.description} createdAt={post.createdAt} />
    ))}
          
  </>
  )
}

export default HomePage
