import express from "express";
import fs from 'fs'


const server = express();

server.get("/api/todos", (req, res)=>{
    fs.readFile("./source/data/todos.json", (err, data)=>{
        if(err){
            return res.json({error: "un probleme est survenue"})
        }
        res.json(JSON.parse(data.toString()))
    })
})

server.listen(3005, function(){
    console.log("server lancé sur le port 3005");
})
