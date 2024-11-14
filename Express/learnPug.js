const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

//EXPRESS RELATED STUFF
app.use('/static',express.static('static'));

//MIDDLE WARE TO GET URL RESPONSE
app.use(express.urlencoded());
// PUG RELATED STUFF
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

//END-POINTS
app.get('/',(req,res)=>{
    const params = {'title':'Learning Pug','content':"this will be the content"}
res.status(200).render('learnPug.pug',params)
})

//START SERVER
app.listen(port,()=>{
console.log('Application is running at port 3000')
})