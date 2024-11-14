const name = 'Qammar';

const avg = (arr)=>{

const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
return sum/arr.length;
}


module.exports = {avg,name}