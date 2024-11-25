// console.log(__filename)
// console.log(__dirname)
const os = require('os');
const expData = require('./expData');
 
// console.log(expData)

// console.log(expData.items)
// console.log(expData.singleperson())

//--- the os module
const user = os.userInfo();
console.log(user);
const time = os.uptime();
const min = time/360
// console.log(`The System Uptime is ${min} seconds`)
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
  }
  console.log(currentOS)