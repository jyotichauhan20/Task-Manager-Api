const express = require('express')
const Task = require('../models/task')
const auth = require('../middleware/auth')
const router = new express.Router()

router.get('/tasks' ,auth, async (req, res)=>{
    const match = {}
    let  pageData = req.query;

    if (req.query.completed){
        match.completed = req.query.completed === 'true'
    }
    if (!pageData.page) {
        pageData.page = 1;
    }
    try{
        const task = await Task.find(match).skip((parseInt(pageData.page) -1 ) * parseInt(pageData.limit)).limit(parseInt(pageData.limit)).sort({createdAt:-1})
        res.send(task)
        
    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/tasks/:id' ,auth, async(req, res)=>{
    const _id = req.params.id
    try{
        const task = await Task.findOne({_id, owner:req.user._id})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
        
    }catch(e){
        res.status(500).send(e)
    }
})

router.post('/tasks',auth,async(req, res)=>{
    const task = new Task({
        ...req.body,
        owner:req.user._id
    })
    try{
        await task.save()
        res.status(201).send(task)
    }catch(e){
        res.status(400).send(e)
    }
})

router.patch('/tasks/:id' ,auth,  async(req, res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description','completed']
    const isValidOperation = updates.every((update)=>allowedUpdates.includes(update))
    if(!isValidOperation){
        res.status(404).send({error:"Invalid update"})
    }
    try{
        const task = await Task.findOne({_id:req.params.id, owner:req.user,_id})        
        if(!task){
            res.status(404).send()
        }
        updates.forEach((update)=>task[update]=req.body[update])
        await task.save()
        res.send(task)

    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id',auth, async(req,res)=>{
    try{
        const task = await Task.findOneAndDelete({_id:req.params.id,owner:req.user._id})
        if(!task){
            res.status(404).send()
        }
        res.send(task)

    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router