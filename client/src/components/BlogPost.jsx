import React from 'react'

const BlogPost = ({img, title, author, desc}) => {
  return (
    <div className="post">
        <div className="image">
          <img src={img}/>
        </div>
        <div className="text-container">
          <h2 className="title">{title}</h2>
          <p className="info">
            <a className="author">{author}</a>
            <time>18.19.2023</time>
          </p>
          <p className="desc">{desc}</p>
        </div>
      </div>
  )
}

export default BlogPost
