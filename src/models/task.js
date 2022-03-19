const mongoose = require('mongoose')

const Task = mongoose.model('Task',{
    description:{
        type:String,
        required:true,
        trim:true
    },
    complated:{
        type:Boolean,
        default:false
    }
})
module.exports = Task