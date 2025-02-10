var express = require('express')
var app = express()
app.use(express.json())

    app.post('/', function(req,res){
        res.send("Hello World")
    })
    //params ->url    query -> json
    app.post('/users/', function(req,res){
        data = { name: req.body.name }
        console.log(data)

        res.send(JSON.stringify(data))
    })
    app.listen(8081)


// ใช้กับ postman