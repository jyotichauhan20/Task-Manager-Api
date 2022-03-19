require('../src/db/mongoose')
const {User} = require('../src/models/user')

User.findByIdAndUpdate("622311c9407f1bc3058272f1",{age:1}).then((user)=>{
    console.log(user)
    return User.countDocuments({age:1})

}).then((resolve)=>{
    console.log(resolve)
}).catch((error)=>{
    console.log(error)
})

const updateAgeAndCount = async(id, age)=>{
    const user = await User.findById(id, {age})
    const count = await User.countDocuments({age})
    const obj = {user:user, count:count}
    return obj
}
updateAgeAndCount("62230bf81eb5022d776027b0",2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})