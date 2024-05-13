import http from 'http'


const server = http.createServer((req, res)=>{
    console.log("recu");
    console.log(req);
    res.end("goodbye")
})

server.listen(3001)