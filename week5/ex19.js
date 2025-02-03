var express=require('express')
var routing=express()
routing.get('/profile/:name',function(req,res){
    res.send("<h1>Welcome "+req.params.name+"</h1>")
})
routing.listen(8081)