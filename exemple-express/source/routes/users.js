import express from 'express'
import fs from 'fs'


export const users = express.Users();


users.get("/api/todos", (req, res)=>{
    fs.readFile("./source/data/todos.json", (err, data)=>{
        if(err){
            return res.json({error: "un probleme est survenue"})
        }
        res.json(JSON.parse(data.toString()))
    })
})

users.get("/", (req, res) => {
  const dataURL = req.query;
  if (!dataURL.id) {
    return res.status(400).json({ err: "id oubligatoire" });
  }

  fs.readFile("./source/data/todos.json", (err, contenu) => {
    if (err) {
      return res
        .status(500)
        .json({ err: "un problème est survenue sur le server" });
    }

    const dataString = contenu.toString();
    const data = JSON.parse(dataString);

    const todoData = data.todos.find((todo) => {
      return todo.id == dataURL.id;
    });
    if (!todoData) {
      return res.status(404).json({ err: "Tache non trouvée" });
    }
    return res.json(todoData);
  });
});


users.delete("/", (req, rep) => {
    const dataURL = req.query;                  
  
    if (!dataURL.id) {
      return rep.status(500).json({ error: "ID obligatoire" });
    }
  
    const contenu = fs.readFileSync("./source/data/todos.json");
    const contenuString = contenu.toString();
    const data = JSON.parse(contenuString);
    data.todos = data.todos.filter((todo) => todo.id != dataURL.id);
    fs.writeFileSync("./source/data/todos.json", JSON.stringify(data));
  
    return rep.json({message:"Tache suprimmée"})
  });