const path = require('node:path');

const notes = '/users/joe/notes.txt';

console.log(path.dirname(notes)); // /users/joe
path.basename(notes); // notes.txt
path.extname(notes); // .txt
// console.log("welcone home yaar")