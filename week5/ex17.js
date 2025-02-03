var http=require('http')
var fs=require('fs')
var myUser={
"name":"Reese",
"job":"Coordinator",
"age":"30"
}
http.createServer(function(rew,res){
res.writeHead(200,{'Content-Type':'application/json'})
res.end(JSON.stringify(myUser))
}).listen(8081,'127.0.0.1')
