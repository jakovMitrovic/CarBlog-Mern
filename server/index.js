const express = require("express");
var cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User')
const BlogPost = require('./models/BlogPost')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const multer = require('multer')
const fs = require('fs')

const upload = multer({ dest: 'uploads' })
const salt = bcrypt.genSaltSync(10)
const app = express();
const secret = 'plkoij9u8'

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(cookieParser())
app.use('/uploads', express.static(__dirname + '/uploads'))

mongoose.connect('mongodb+srv://root:root@cluster0.huqbptd.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.create({ username, password: bcrypt.hashSync(password, salt) })
        res.json(user)
    } catch (error) {
        res.status(400).json(error)

    }

})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const userDoc = await User.findOne({ username })
    const pass = bcrypt.compareSync(password, userDoc.password)
    if (pass) {
        jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie("token", token).json({
                id: userDoc._id,
                username
            })
        })
    } else {
        res.status(400).json('Incorrect username or password')
    }

})

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    })

})

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok')
})



app.post('/blogpost', upload.single('file'), async (req, res) => {
    const { originalname, path } = req.file;
    const parts = originalname.split('.')
    const ext = parts[parts.length - 1]
    fs.renameSync(path, path + '.' + ext)
    const img = path + '.' + ext;

    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
        if (err) throw err;

        const { title, description, content } = req.body;
        const blogPostDoc = await BlogPost.create({
            title,
            description,
            content,
            cover: img,
            author: info.id
        })
        res.json(blogPostDoc);
    })



})


app.get('/blogposts', async (req, res) => {
    res.json(await BlogPost.find().populate('author').sort({ createdAt: -1 }))


})


app.get('/blogpost/:id', async (req, res) => {
    const { id } = req.params
    const blogPost = await BlogPost.findById(id).populate('author')
    res.json(blogPost)

})

app.put('/blogpost', upload.single('file'), async (req, res) => {
    let newPath = null;
    if (req.file) {
        const { originalname, path } = req.file;
        const parts = originalname.split('.')
        const ext = parts[parts.length - 1]
        newPath = path+'.'+ext;
        fs.renameSync(path, newPath)
        

    }
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
        if (err) throw err;
        const {id, title, description, content } = req.body;
        const blogPostDoc = await BlogPost.findById(id)
        const isAuthor = JSON.stringify(blogPostDoc.author) === JSON.stringify(info.id)
        if (!isAuthor){
            return res.status(400).json("You are not the author")
        }
        blogPostDoc.title = title;
        blogPostDoc.description = description;
        blogPostDoc.content = content;
        blogPostDoc.cover= newPath ? newPath : blogPostDoc.cover
       
        await blogPostDoc.save();
        res.json(blogPostDoc);
    })
})


app.delete('/blogpost/:id', async (req, res) => {
    const { id } = req.params
    await BlogPost.deleteOne({_id:id});
    res.json('deleted')
   
    

})


app.get('/user/posts/:id', async(req, res)=>{
    const {id} = req.params
    const user = await User.findById(id)
    const blogs = await BlogPost.find({author : { $in: id}}).sort({ createdAt: -1 })
    
    await res.json({blogs, user})

})


app.listen(4000)