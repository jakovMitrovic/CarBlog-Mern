import React, { useState , useEffect, useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
 import { UserContext } from './UserContext';

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
const EditPost = () => {
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [content, setContent] = useState('')
const [file, setFile] = useState('')
const navigate = useNavigate()

  const {id} = useParams()
  const {userInfo} = useContext(UserContext)
  const [postDetails, setPostDetails] = useState('')
  const [isUser, setIsUser] = useState(false)

    useEffect(()=>{
        fetch(`http://localhost:4000/blogpost/${id}`).then(res=>{
            res.json().then(details=>{
                setPostDetails(details)
                setTitle(details.title)
                setDescription(details.description)
                setContent(details.content)
                setFile(details.file)
            })
            
        })
    }, [userInfo])
    


  const handleSubit = async (ev) => {
    ev.preventDefault();
    const data = new FormData();
    data.set('title', title)
    data.set('description', description)
    data.set('content', content)
    data.set('id', id)
    if(file?.[0]){
      data.set('file', file[0])
    }
    console.log(file)
    const res = await fetch('http://localhost:4000/blogpost', {
      method: 'PUT',
      body: data,
      credentials: 'include'
    })
    navigate(-1)
  }
  return (
    <>
      <h1 className='createBlogTitle'>Edit Post</h1>
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
        <button type='submit'>Save</button>
      </form>
    </>
  )
}



export default EditPost
