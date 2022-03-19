const express = require('express')
require('./src/db/mongoose')
// const {User} = require('./src/models/user')
// const Task = require('./src/models/task')
const app = express()
const port = process.env.PORT || 3000
const userRouter = require('./src/routers/user')
const taskRouter = require('./src/routers/task')
// const port = 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// app.get('/users', async (req, res)=>{
//     try{
//         const user = await User.find({})
//         res.send(user)
//     }catch(e){
//         res.status(500).send(e)
//     }
// })

// app.get('/users/:id', async(req, res)=>{
//     const _id = req.params.id
//     try{
//         const user =await User.findById(_id)
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)

//     }catch(e){
//         res.status(500).send()
//     }
// })

// app.post('/users',async(req, res)=>{
//     const user = new User(req.body)
//     try {
//         await user.save()
//         res.status(201).send(user)
//     }catch(e){
//         res.status(400).send(e)

//     }
    
// })
// app.get('/tasks',async (req, res)=>{
//     try{
//         const task =await Task.find({})
//         res.send(task)
//     }catch(e){
//         res.status(500).send(e)
//     }
    
// })

// app.get('/tasks/:id',async(req, res)=>{
//     const _id = req.params.id
//     try{
//         const task =await Task.findById(_id)
//         if(!task){
//             return res.status(404).send()
//         }
//         res.send(task)
        
//     }catch(e){
//         res.status(500).send(e)
//     }
// })
    
// app.post('/tasks',(req, res)=>{
//     const task = new Task(req.body)
//     task.save().then(()=>{
//         res.status(201).send(task)

//     }).catch((error)=>{
//         res.status(400).send(error)
//     })
// })

// app.delete('/users/:id', async (req, res)=>{
//     try{
//         const user = await User.findByIdAndDelete(req.params.id)
//         if(!user){
//             res.status(404).send()
//         }
//         res.send(user)

//     }catch(e){
//         res.status(500).send(e)

//     }
// })

// app.post('/tasks',async(req, res)=>{
//     const task = new Task(req.body)
//     try{
//         await task.save()
//         res.status(201).send(task)
//     }catch(e){
//         res.status(400).send(e)
//     }

// })

// app.patch('/users/:id', async(req, res)=>{
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['name','age','email','password']
//     const isValidOperation  = updates.every((update)=>allowedUpdates.includes(update))
//     if(!isValidOperation){
//         return res.status(404).send({error:'Invalid operation'})
//     }
//     try {
//         const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)

//     }catch(e){
//         res.status(500).send(e)
//     }
// })

// app.patch('/tasks/:id', async(req, res)=>{
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['description','complated']
//     const isValidOperation = updates.every((update)=>allowedUpdates.includes(update))
//     if(!isValidOperation){
//         res.status(404).send({error:"Invalid update"})
//     }
//     try{
//         const task = await Task.findById(req.params.id,req.body,{new:true,runValidators:true})
//         if(!task){
//             res.status(404).send()
//         }
//         res.send(task)

//     }catch(e){
//         res.status(400).send(e)
        
//     }
// })

// app.delete('/tasks/:id', async(req,res)=>{
//     try{
//         const task = await Task.findByIdAndDelete(req.params.id)
//         if(!task){
//             res.status(404).send()
//         }
//         res.send(task)

//     }catch(e){
//         res.status(500).send(e)
//     }
// })

app.listen(port,()=>{
    console.log(`Server is on :${port}`)
})


const bcrypt = require('bcryptjs')
const myFunction =  async()=>{
    const password = 'Red12345!'
    const hashedPassword = await bcrypt.hash(password,8) 
    //we can not reverse hashed password like decrypted password and encrypted
    // using bcryptjs module we can  for get that done(decrypte). 
    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('Red12345!',hashedPassword)
    console.log(isMatch)

}
myFunction()

