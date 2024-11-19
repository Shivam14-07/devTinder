const express = require("express");
const app = express();

app.use("/hello",(req,res)=>{
    res.send("hello from the hello route");
});

app.use("/",(req,res)=>{
    res.send("hello from the server");
});

app.listen(3000, ()=>{
    console.log("server is listing pon port 3030")
});

