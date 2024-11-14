const http = require('http');
const fs = require('fs');

const port = 4000;
const hostname = '127.0.0.1'

const home = fs.readFileSync('./home.html');
const contact = fs.readFileSync('./contact.html');
const about = fs.readFileSync('./about.html');

const server = http.createServer((req,res)=>{
  url = req.url;
    res.statusCode = 200;
res.setHeader('Content-Type','text/html');

if(url=='/'  || url=='/home'){

    res.end(home);
}
else if(url=='/about'){
    res.end(about);
}
else if(url=='/contact'){
    res.end(contact);
}
})

server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`)
})