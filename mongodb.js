// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectId

const {MongoClient, ObjectId}= require('mongodb')
// MongoClient will gice access to connect our function
// to the database.
const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
// const id = new ObjectId()
// console.log(id.id.length)
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionUrl, {'useNewUrlParser':true},(error, client)=>{
    if (error){
        return console.log('Unable to connect to the database!')
    }
    const db = client.db(databaseName)
//############################# READ ######################################
    // db.collection('users').findOne({ _id : new ObjectId('621faf780bc52ca1f17b0870')},(error, user)=>{
    //     // search with id
    //     if(error){
    //         return console.log('Unable to find the result')
    //     }
    //     console.log(user)
    // })
    // db.collection('users').find({age:19}).toArray((error, users)=>{
    //     console.log(users)
    // })
    // db.collection('users').find({age:19}).count((error, counts)=>{
    //     console.log(counts)
    // })
    // db.collection('tasks').findOne({_id:new ObjectId('622335fd3ab075490c4b4aa5')},(error, tasks)=>{
    //     if(error){
    //         return console.log('Unable to find task')
    //     }
    //     console.log(tasks)
    // })
    // db.collection('tasks').find({complated:false}).toArray((error, result)=>{
    //     console.log(result)
    // })
//####################### CREATE ####################################################
    // db.collection('users').insertOne({
    //     // _id:id,
    //     name:'kumar',
    //     age:12
    // },(error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result)
    // })
    // db.collection('users').insertMany([
    //     {
    //         name:'maya',
    //         age:22
    //     },{
    //         name:'priti',
    //         age:19
    //     }
    // ],(error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('tasks').insertMany([
    //     {
    //         description:'Clean the house',
    //         complated:true
    //     },{
    //         description:'Laugh',
    //         complated:false
    //     },{
    //         description:'I am crying',
    //         complated:false
    //     }
    // ],(error, result)=>{
    //     if(error){
    //         console.log('Unable to insert task')
    //     }
    //     console.log(result.ops)
    // })
//##################################################### UPDATE ################################
    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectId('6225a4d5a15599d02e170f94')},
    //     {
    //         // $set:{
    //         //     name:'abhinav'
    //         // }
    //         $inc:{
    //             age:2
    //             // increament in age previous age value was 12 now i did increament 2 
    //         }
    //     })
    //     updatePromise.then((result)=>{
    //         console.log(result)
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    // db.collection('tasks').updateMany({
    //     complated:false
    // },{
    //     $set:{
    //         complated:true
    //     }
    // }).then((result)=>{
    //     console.log(result.modifiedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    //############################ DELETE ###################################################
    // db.collection('users').deleteMany({
    //     age:12

    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    // db.collection('users').deleteOne({
    //     _id: new ObjectId('62285310b090665665d9763b')
    //     }).then((result)=>{
    //         console.log(result)
    //     }).catch((error)=>{
    //         console.log(error)
    //     })

})
