const express = require('express')
require('./src/db/mongoose')
// const {User} = require('./src/models/user')
// const Task = require('./src/models/task')
const app = express()
const port = process.env.PORT || 3000
const userRouter = require('./src/routers/user')
const taskRouter = require('./src/routers/task')

// const port = 3000

// app.use((req,res,next)=>{
//     if(req.method=='GET'){
//         res.send('GET/ resquest are disable')
//     }else{
//         next()
//     }
// })

// app.use((req,res,next)=>{
//     res.status(503).send('Site is currently down. check back soon')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log(`Server is on :${port}`)
})

const Task = require('./src/models/task')

const main = async ()=>{
    const task = await Task.findById("62459337869ea5e16154865e")
    console.log(task.owner)

}
main()


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


