require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('622335fd3ab075490c4b4aa5').then((task)=>{
    console.log(task)
    return Task.countDocuments({complated:false})

}).then((result)=>{
    console.log(result)

}).catch((error)=>{
    console.log(error)
})

const deleteTaskAndCount  = async (id)=>{
    const task = await Task.deleteTaskAndCount(id)
    const count = await Task.countDocuments({complated:false})
    return count
}
deleteTaskAndCount('622335fd3ab075490c4b4aa5').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})