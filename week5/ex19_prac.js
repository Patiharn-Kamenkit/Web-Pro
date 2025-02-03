var express = require('express');
var crypto = require('crypto');
var fs = require('fs');

function readjson(id) {
    const users = fs.readFileSync('./users.json', 'utf8');
    const data = JSON.parse(users);
    return data.users.find(user => user.id == id);
}

var routing = express();

routing.get('/profile/:id', function (req, res) {
    const id = req.params.id;
    let out = readjson(id);

    if (!out) {
        res.send("<h1>User not found</h1>")
    }
    const shasum = crypto.createHash('sha1');
    shasum.update(out.password);
    out.password = shasum.digest('hex');

    res.json(out);
});

routing.listen(8081)
