var http=require('http')
var fs=require('fs')
http.createServer(function(req,res){
if(req.url==='/home'||req.url==='/'){
    res.writeHead(200,{'Content-Type':'text/html'})
    var myStream = fs.createReadStream(__dirname+'/'+'index.html','utf8')
    myStream.pipe(res)
    }

else if(req.url==='/facebook'||req.url==='/'){
    res.writeHead(200,{'Content-Type':'text/html'})
    var myStream = fs.createReadStream(__dirname+'/'+'facebook.html','utf8')
    myStream.pipe(res)
    }

else if(req.url==='/youtube'||req.url==='/'){
    res.writeHead(200,{'Content-Type':'text/html'})
    var myStream = fs.createReadStream(__dirname+'/'+'youtube.html','utf8')
    myStream.pipe(res)
    }
    
else{
    res.writeHead(404,{'Content-Type':'text/html'})
    var myStream = fs.createReadStream(__dirname+'/'+'notfound.html','utf8')
    myStream.pipe(res)
    }
    }).listen(8081,'127.0.0.1')