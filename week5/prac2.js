var http=require('http')
var fs=require('fs')
var express = require('express');


var app = express();

app.get('/showForm', function (req, res) {
    res.sendFile(__dirname + '/prac2.html')
});

app.get('/showdata', function(req,res){
    var data = {
        fname: req.query.fname,
        lname: req.query.lname,
        result: Number(req.query.input1) + Number(req.query.input2)
    }
    var datanew = { users: [] };
    const file = fs.readFileSync('./output.json', 'utf8');
    datanew = JSON.parse(file);
    datanew.users.push(data)
    fs.writeFileSync('./output.json',JSON.stringify(datanew))
    res.json(datanew)
    res.send()
});

app.listen(8081)