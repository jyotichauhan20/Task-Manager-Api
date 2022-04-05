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

app.listen(port,()=>{
    console.log(`Server is on :${port}`)
})

const Task = require('./src/models/task')
const User = require('./src/models/user')

const main = async ()=>{
    // const task = await Task.findById("624861f99d5e96ae2a0ca851")
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('6246b17b9e1253053d4ba3b5')
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks)

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


