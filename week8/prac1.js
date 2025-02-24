// https://github.com/jsonwebtoken/jsonwebtoken.github.io?tab=readme-ov-file

var express = require("express")
var jwt = require("jsonwebtoken")
var app = express()
app.use(express.json())

var {MongoClient} = require('mongodb')
// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'JWT';

function ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    } else {
      res.sendStatus(403);
    }
}

//ใช้ร่วมกับ token ที่ส่งมาจาก req 

app.get("/api", (req,res) => {
    res.json({
        description: "My API. please authenticate"
    })
})

app.get("/api/protected", ensureToken,(req,res) => {
    jwt.verify(req.token, "my-secret-key", function(err,data){
        if (err){
            res.sendStatus(403)
        }
        else {
            res.json({
                description: "Protected information. Congrats!",
                data: req.user
            })
        }
    })
})

app.post("/api/login", async(req,res) =>{

    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection("jwt");


    const findResult = await collection.findOne({
        username: req.body.username
    })

    console.log(findResult)
    

    if(findResult.password !== req.body.password) return res.status(403).send({
        message: "Invalid Username or password",
        users: req.body
    })

    const token = jwt.sign( {users: req.body.username},'my-secret-key')
    res.json({
        message: "Authenticated! Use this token in the 'Authorization' header ",
        token: token
    })
})

app.listen(8081,() =>{
    console.log("Server running on port 8081")
})