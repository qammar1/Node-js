const http= require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('page1.html');

const server = http.createServer((req,res)=>{
res.writeHead(200,{'content-type':'text/html'});
res.end(fileContent);
})
server.listen(3000,'127.0.0.1',()=>{
    console.log('listening on port 3000')
})