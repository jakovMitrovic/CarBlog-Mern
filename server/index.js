const express  = require("express");
var cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User')


const app = express();

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://root:root@cluster0.huqbptd.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async(req, res)=>{
    const {username, password} = req.body;

    try {
        const user = await User.create({username, password})
        res.json(user)
    } catch (error) {
        res.status(400).json(error)
        
    }
    
})
app.listen(4000)