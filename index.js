const express = require('express')
require('./src/db/mongoose')
// const {User} = require('./src/models/user')
// const Task = require('./src/models/task')
const app = express()
const port = process.env.PORT || 3000
const userRouter = require('./src/routers/user')
const taskRouter = require('./src/routers/task')

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

const multer = require('multer')
const upload =  multer({
    dest:'images',
    limits:{
        fieldSize:1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(doc|docx)$/)){
            return cb(new Error('Please upload a word document!'))
        }
        cb(undefined, true)
    }
})

app.post('/upload',upload.single('upload'),(req,res)=>{
    res.send()
},(error, req, res, next)=>{
    res.status(400).send({error:error.message})
})

const bcrypt = require('bcryptjs')
const myAsyncFunction =  async()=>{
    const password = 'Red12345!'
    const hashedPassword = await bcrypt.hash(password,8) 
    //we can not reverse hashed password like decrypted password and encrypted
    // using bcryptjs module we can  for get that done(decrypte). 
    // console.log(password)
    // console.log(hashedPassword)

    const isMatch = await bcrypt.compare('Red12345!',hashedPassword)
    // console.log(isMatch)
}
myAsyncFunction()

const jwt = require('jsonwebtoken')
const myFunction = async ()=>{
    const token = jwt.sign({_id:"abc123@"},"thisismynewcourse",{expiresIn:"7 days"})
    // console.log(token)

    const data = jwt.verify(token , "thisismynewcourse")
    // console.log(data)
}
myFunction()

app.listen(port,()=>{
    console.log(`Server is on :${port}`)
})



