import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image'],
    ['clean']
  ],
}
const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
]
const CreateBlogPost = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()


  const handleSubit = async (ev) => {
    setMessage("")
    const data = new FormData();
    data.set('title', title)
    data.set('description', description)
    data.set('content', content)
    data.set('file', file[0])
    ev.preventDefault();
    if(title === '' && description === '' && content === '' && file === ''){
      setMessage("Fill in every field")
      return
    }
    const res = await fetch('http://localhost:4000/blogpost', {
      method: 'POST',
      body: data,
      credentials: 'include'
    })
    navigate('/')
  }


  

  return (
    <>
      <h1 className='createBlogTitle'>Create a new blog post</h1>
      <form className='createForm' onSubmit={handleSubit}>
        <input type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
        <input type='summary' placeholder='Description' value={description} onChange={e => setDescription(e.target.value)} />
        <label className='fileInput'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>

          Add an Image

          <input type='file' onChange={e => setFile(e.target.files)} />
        </label>
        <ReactQuill className='contentInput' value={content} modules={modules} formats={formats} onChange={newValue => setContent(newValue)} />
        <br />
      <p className='error-message'>{message}</p>  
        <button type='submit'>Create Post</button>
      </form>
    </>
  )
}

export default CreateBlogPost
