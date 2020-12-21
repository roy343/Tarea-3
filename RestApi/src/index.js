const express = require('express')

const app = express();

app.listen(5000);

app.get("/",function(req,res){
    res.send("express here")
})

console.log('Server on port', 5000);