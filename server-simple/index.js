import http from "http";
import url from "url";
import fs from "fs";
import querystring from "querystring";
const server = http.createServer((req, res) => {
  // Transforme la chaine de caractère URL en objet JS
  const monUrl = url.parse(req.url);

  if (monUrl.pathname === "/") {
    fs.readFile("./public/index.html", (err, data) => {
      if (err) {
        console.log(err);
      }
      res.end(data.toString());
      return;
    });
  }
  if(monUrl.pathname === "/contact"){
    fs.readFile("./public/contact.html", (err, data) => {
        if (err) {
          console.log(err);
        }
        res.end(data.toString());
        return;
      });
  }

  fs.readFile("./public/404.html", (err, data) => {
    if (err) {
      console.log(err);
    }
    res.end(data.toString());
    return;
  });
});

server.listen(3001);