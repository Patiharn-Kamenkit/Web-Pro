// var express = require('express')
// var app = express()
// var fs = require('fs') //Read user.json


// app.get('/getUser', function(req,res){
//     fs.readFile(__dirname + "/" + "user.json", 'utf8', function(err,data){
//         console.log(data)
//         res.end(data)
//     })

// })

// app.get('/getUser/:id', function(req,res){
//     fs.readFile(__dirname + "/" + "user.json", 'utf8', function(err,data){
//         const users = JSON.parse(data) //ใช้ array ได้
//         var user = users["user" + req.params.id]
//         console.log(user)
//         res.end(JSON.stringify(user)) // ตอนนี้เป็น object ต้อง convert เป็น string เพื่อส่งออกหน้าเว็บได้
//     })
// })
// var user ={
//     "user4": {
//         "name": "mohit",
//         "password": "password4",
//         "profession": "teacher",
//         "id" : "4"
//     }
// }
// app.post('/addUser', function(req,res){
//     fs.readFile(__dirname + "/" + "user.json", 'utf8', function(err,data){
//         data = JSON.parse(data)
//         data["user4"] = user["user4"]
//         console.log(data)
//         res.end(JSON.stringify(data))
//     })
// })

// app.delete('/deleteUser/:id', function(req,res){
//     fs.readFile(__dirname + "/" + "user.json", 'utf8', function(err,data){
//         data = JSON.parse(data)
//         delete data['user'+req.params.id]
//         console.log(data)
//         res.end(JSON.stringify(data))
//     })
// })

// var server = app.listen(8081, function(){
//     var host = server.address().address
//     var port = server.address().port
//     console.log("Application run at http://%s:%s", host, port)
// })

var express = require('express')
var app = express()
var {MongoClient} = require('mongodb')
// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'studentDB';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('students');
  

//   const findResult = await collection.find({}).toArray();
//   console.log('Found documents =>', findResult)


//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

app.get('/student', async function (req,res){
        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('students');
        
      
        const findResult = await collection.find({}).toArray();
        console.log('Found documents =>', findResult)
        res.json(findResult)
})

app.get('/showMajor/:majors', async function (req,res){
    // Use connect method to connect to the server
    var majors = req.params.majors
    var query = { major: { $regex: majors, $options: 'i'}}
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('students');
    
  
    const findResult = await collection.find(query).toArray();
    console.log('Found documents =>', findResult)
    res.json(findResult)
})

app.get('/findageless/:age', async function (req,res){
    // Use connect method to connect to the server
    var age = req.params.age
    var query = { age: { $lt: Number(age) }}
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('students');
    
  
    const findResult = await collection.find(query).toArray();
    console.log('Found documents =>', findResult)
    res.json(findResult)
})

app.get('/updateLastname/:old/:new', async function (req,res){
    // Use connect method to connect to the server
    var oldLastname = req.params.old
    var newLastname = req.params.new
    var query = { lastname: oldLastname}
    var newValue = {$set: {lastname: newLastname}}
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('students');
    
    const updateResult = await collection.updateMany(query,newValue);
    console.log('Found documents =>', updateResult)
    //res.json(updateResult)

    const findResult = await collection.find({ lastname: newLastname }).toArray();
    console.log('Updated documents:', findResult);
    res.json(findResult)
})
app.use(express.json());

app.get('/insertStudent', async function (req,res){
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('students');
    newstudent = req.body
    const insertResult = await collection.insertMany([newstudent]); 
    console.log('Found documents =>', insertResult)
    //res.json(insertResult)

    const findResult = await collection.find().toArray();
    console.log('Found documents =>', findResult)
    res.json(findResult)
})
    
var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Application run at http://%s:%s", host, port)
})