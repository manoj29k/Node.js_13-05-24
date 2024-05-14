import express from "express";
import { postRouter } from "./routes/posts-route.js";
import fs from 'fs'
const server = express();


server.use ("/api/posts", postRouter)





server.post("/", (requete, response) => {
  const data = requete.body;

  if(!data.title || !data.Date){
      return response.status(400).json({error: "Titre et date oubligatoire"})
  }
  const dataTodos = fs.readFileSync("./source/data/todos.json")
  const todosObject = js
})








server.listen(3005, function () {
  console.log("server lancé sur le port 3005");
});

