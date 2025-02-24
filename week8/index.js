// https://github.com/jsonwebtoken/jsonwebtoken.github.io?tab=readme-ov-file

var express = require("express")
var jwt = require("jsonwebtoken")
var app = express()
app.use(express.json())

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
                data: data
            })
        }
    })
})

app.post("/api/login", (req,res) =>{
    const user = { id: 3}
    const token = jwt.sign( {users: user.id},'my-secret-key')
    res.json({
        message: "Authenticated! Use this token in the 'Authorization' header ",
        token: token
    })
})

app.listen(8081,() =>{
    console.log("Server running on port 8081")
})