// console.log("practice session")

// this is the example of sync

const fs = require('fs');
fs.readFile("data.txt","utf-8",(err,data)=>{
    console.log(data);
})
console.log("for sync func");

// this is the example of async

const fs = require('fs');
let data = fs.readFileSync("data.txt","utf-8")
console.log(data);
console.log("for sync func");


