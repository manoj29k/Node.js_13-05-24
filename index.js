import { add } from "./math.js";
import { affichePersonne } from "./personne.js";
import path from "path";
import fs from "fs";
import readline from "readline";

console.log(add(4, 5));
affichePersonne({ nom: "na", prenom: "no" });
// console.log(path);

// fs.readFile("./user.txt",(err, contenu)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(contenu.toString());
//     }
// })

const inter = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// inter.question("what's your project name?", (fileName)=> {
//    fs.writeFile("./" + fileName, '', (err)=>{
//     if(err){
//         console.log("file creation abadonned");
//     }else{
//         console.log("file creation succesful");
//     }
//     inter.close();
//    })

// })

inter.question("what's your project name?", (fileName) => {
  fs.cp(
    "./template", 
    "./" + fileName, 
    { recursive: true }, 
    (err) => {
    if (err) {
      console.log("creation abadonned");
    } else {
      console.log("creation succesful");
    }
    inter.close();
  });
  
});
