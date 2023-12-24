import React from 'react'
import { Link } from 'react-router-dom'



const BlogPost = ({id, img, title, author, desc, createdAt}) => {
  console.log(createdAt)
  return (
    
    <div className="post">
        <div className="image">
          <Link to={`/blogpost/${id}`}>
            <img src={'http://localhost:4000/' + img}  alt='pic'/>
          </Link>
        </div>
        <div className="text-container">
        <Link className="title" to={`/blogpost/${id}`}>
          <h1 className="title">{title}</h1>
        </Link>
          <p className="desc">{desc}</p>
          <div className="info">
            <Link to={`/user/${author._id}`} className="author">{author.username}</Link>
            <time>{createdAt?.split("T")[0]}</time>
          </div>
        </div>
      </div>
  )
}

export default BlogPost
