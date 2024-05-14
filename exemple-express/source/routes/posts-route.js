import express from 'express'

export const postRouter = express.Router();                                                                             

postRouter.get("/", (req, res) => {
    res.end("hello")
})

postRouter.get("/:id", (requete ,response)=>{
    const id  = requete.params.id;
    const article = posts.find((post)=>post.id == id)
    return response.json(article)
})

// Exercice: 
// Ajouter une todo a la liste 
// Ajouter un handler POST qui recoit dans corps de la requete: title et date
// 1. Verifier si title et date est envoyé sinon retourner un erreur
// 2. Generer un id aleatoire
// 3. Ajouter la nouvelle tache dans le fichier todos.json
// 4. Retourner la nouvelle tache ajoutée dans la réponse



